"use client";

import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Textarea, Button, Text, Highlight } from "@chakra-ui/react";
import HighlightExact from "@/app/components/molecules/HighlightExact";
import { Deck, FlashCard } from "@/app/types";
import { splitIntoSentences, localGet, localSet } from "@/app/utils/utils";

interface Props {
  params: {
    id: string,
    slug: string
  }
}

const NoteBookEditor = ({params}: Props) => {

  const [insertText, setInsertText] = useState<string>(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  );
  const [showTranslated, setShowTranslated] = useState(false);
  const [translatedText, setTranslatedText] = useState('')
  const [highlightQueries, setHighlightQueries] = useState(["LOREM"]);


    useEffect(() => {
        setTranslatedText(insertText.toLocaleUpperCase())
    }, [insertText])

  const translateWord = (word: string): string => {
    return word.toLocaleUpperCase();
  }
  const saveToFlashCards = () => {



    const sentencesOriginal = splitIntoSentences(insertText)
    const sentencesTranslated = splitIntoSentences(translatedText)
    const allFlashCards: FlashCard[] = []

    highlightQueries.forEach((query, index) => {
        const flashCards = buildFlashCards(query, index, sentencesOriginal, sentencesTranslated)
        allFlashCards.push(...flashCards)
    })

    
    
    localSet<FlashCard[]>("flashCards", allFlashCards)
  }

  const buildFlashCards = (word: string, tempIndex: number, sentencesOriginal: string[], sentencesTranslated: string[]): FlashCard[] => {
    const flashCards: FlashCard[] = []
    const exampleSentesOriginal: string[] = []
    const exampleSentesTranslated: string[] = []

    sentencesTranslated.forEach((sentenceTranslated, index) => {

        const originalSentence = sentencesOriginal[index]
        
        if(sentenceTranslated.includes(word)) {

          exampleSentesOriginal.push(originalSentence)

          exampleSentesTranslated.push(sentenceTranslated)

        } 

    })

    flashCards.push({
            Id: tempIndex,
            FrontWord: word,
            FrontSentences: exampleSentesOriginal,
            BackWord: translateWord(word),
            BackSentences: exampleSentesTranslated,
            Severity: 10
    })

    return flashCards
  }


  return (
    <>
      <h1>Notebook</h1>

      <div className={styles.container}>
        {!showTranslated ? <h2 className={styles.toolTip}>
          Share your favourite text and translate it
        </h2> : <h2>Highlight unknown words and save them to flashcards</h2>}
        <div className={styles.textContainer}>
          {!showTranslated && <Textarea
            data-lpignore
            onChange={(e) => {
              setInsertText(e.target.value);
            }}
            value={insertText}
            className={styles.textarea}
          />}

          {showTranslated && (
            <div className={styles.textResult}>
              <HighlightExact text={translatedText} highlightQueries={highlightQueries} setHighlightQueries={setHighlightQueries} color="blue.300" />
            </div>
          )}
        </div>

        {!showTranslated ? <Button
          className={styles.translateBtn}
          bg={"blue.400"}
          rounded={"full"}
          onClick={() => setShowTranslated(true)}
        >
          {" "}
          Translate!{" "}
        </Button> : <Button onClick={saveToFlashCards} className={styles.translateBtn} bg="blue.400">Save To FlashCards!</Button>}
      </div>
    </>
  );
};

export default NoteBookEditor;
