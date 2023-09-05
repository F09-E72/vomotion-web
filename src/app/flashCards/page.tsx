"use client";
import React, { useState, useEffect } from "react";
import { localGet } from "../utils/utils";
import { FlashCardProperties } from "../types";
import { Button } from "@chakra-ui/react";

interface Props {}

const FlashCards = ({}: Props) => {
  const flashCards = localGet<FlashCardProperties[]>("flashCards");
  const [activeFlashCard, setActiveFlashCard] = useState(1);

    const handleNextCard = () => {
        if(!flashCards) return

        if(activeFlashCard >= flashCards.length - 1) {
            setActiveFlashCard(1)
        } else {
            setActiveFlashCard(activeFlashCard + 1)
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
                    <div>{flashcard.FrontWord}</div>
                    <hr />
                    <div>{flashcard.FrontSentence}</div>
                  </div>
                )
              );
            })}
          </div>
          <Button rounded={2} onClick={handleNextCard} shadow={1}>Next</Button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default FlashCards;
