"use client";

import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Textarea, Button, Text, Highlight } from "@chakra-ui/react";
import HighlightExact from "@/app/components/molecules/HighlightExact";
import { FlashCardProperties } from "@/app/types";
import { splitIntoSentences, localGet, localSet } from "@/app/utils/utils";

const NoteBookEditor = () => {

  const [insertText, setInsertText] = useState<string>(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  );
  const [showTranslated, setShowTranslated] = useState(false);
  const [translatedText, setTranslatedText] = useState('')
  const [highlightQueries, setHighlightQueries] = useState(["LOREM"]);


    useEffect(() => {
        setTranslatedText(insertText.toLocaleUpperCase())
    }, [insertText])

  const saveToFlashCards = () => {

    const sentences = splitIntoSentences(translatedText)
    const allFlashCards: FlashCardProperties[] = []
    highlightQueries.forEach(query => {
        const flashCards = buildFlashCards(query, sentences)
        allFlashCards.push(...flashCards)
    })

    localSet<FlashCardProperties[]>("flashCards", allFlashCards)
  }

  const buildFlashCards = (word: string, sentences: string[]): FlashCardProperties[] => {
    const flashCards: FlashCardProperties[] = []
    sentences.forEach(sentence => {
        if(sentence.includes(word)) flashCards.push({
            FrontWord: word,
            FrontSentence: sentence,
            BackWord: word,
            BackSentence: sentence,
            Severity: 10
        })
    })

    return flashCards

  }

  const setHighlights = (word: string) => {
    if (highlightQueries.includes(word)) {
      setHighlightQueries(highlightQueries.filter((item) => item != word));
    } else {
      setHighlightQueries([...highlightQueries, word]);
    }
  };

  useEffect(() => {
    console.log(highlightQueries);
  });

  return (
    <>
      <h1>Notebook</h1>

      <div className={styles.container}>
        {!showTranslated ? <h2 className={styles.toolTip}>
          Share your favourite text and translate it
        </h2> : <h2>Highlight unknown words and save them to flashcards</h2>}
        <div className={styles.textContainer}>
          {!showTranslated && <Textarea
            onChange={(e) => {
              setInsertText(e.target.value);
            }}
            value={insertText}
            className={styles.textarea}
          />}

          {showTranslated && (
            <div className={styles.textResult}>
              <HighlightExact text={translatedText} color="blue.300" />
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
