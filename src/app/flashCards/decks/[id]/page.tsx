"use client";
import React, { useState, useEffect } from "react";
import { localGet } from "../../../utils/utils";
import { FlashCard } from "../../../types";
import { Button } from "@chakra-ui/react";

interface Props {}

const FlashCards = ({}: Props) => {
  const [activeFlashCard, setActiveFlashCard] = useState(1);
  const [flashCards, setFlashCards] = useState<FlashCard[]>([])
  const [showBack, setShowBack] = useState(false)

  useEffect(() => {

    const fetchedCards = localGet<FlashCard[]>("flashCards");
    if(fetchedCards)
      setFlashCards(fetchedCards)

  }, [])

  const handleNextCardOrShowBack = () => {
      if(!flashCards) return

      if(showBack) {
        setShowBack(false)
        if(activeFlashCard >= flashCards.length - 1) {
            setActiveFlashCard(1)
        } else {
            setActiveFlashCard(activeFlashCard + 1)
        }
      } else {
        setShowBack(true)
      }
  }

  return (
    <>
      <div className="bg-slate-200 w-screen h-screen">
        {flashCards ? (
            <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="w-full h-full flex items-center justify-center">
            {flashCards.map((flashcard) => {
              return (
                flashcard.Id === activeFlashCard && (

                  <div className="rounded-2 shadow-lg bg-slate-100 w-[80%] h-[80%] m-4">
                  {showBack ?  <>
                    <div className="m-2">{flashcard.BackWord}</div>
                    <hr />
                    <div>{...flashcard.BackSentences?.map(sentence => <div className="m-4">{sentence}</div>)}</div> 
                    </> : <>
                    <div className="m-2">{flashcard.FrontWord}</div>
                    <hr />
                    <div>{...flashcard.FrontSentences?.map(sentence => <div className="m-4">{sentence}</div>)}</div>
                    </>}
                  </div>
                )
              );
            })}
          </div>
          <Button onClick={() => {handleNextCardOrShowBack()}}>{showBack ? "Next ->": "Show!"}</Button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default FlashCards;
