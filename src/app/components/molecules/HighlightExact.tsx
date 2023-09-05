import React, { useState } from 'react';
import { Box, Input } from '@chakra-ui/react';


interface HighlightProps {
    text: string,
    color: string,
    highlightQueries: string[],
    setHighlightQueries: React.Dispatch<React.SetStateAction<string[]>>
}

const HighlightExact = ({ text, color, highlightQueries, setHighlightQueries}: HighlightProps): JSX.Element => {

  const handleSetHighlightQueries = (word: string) => {
    if (highlightQueries.includes(word)) {
      setHighlightQueries(highlightQueries.filter((item) => item != word));
    } else {
      setHighlightQueries([...highlightQueries, word]);
    }
  };

  const words = text.split(' ');
  const highlightedText = words.map((word, index) => {
    if (highlightQueries.includes(word)) {
      return <Box as="span" key={index} rounded={'15'} px={'1.5'} py={'1'} m={'0.5'} my={'1'} bg={color}>{word} </Box>;
    } else {
      return <Box as='span' key={index} onClick={() => handleSetHighlightQueries(word)}>{word + ' '}</Box>;
    }
  });

  return (
    <>
      <Box>{highlightedText}</Box>
    </>
  );
};

export default HighlightExact;