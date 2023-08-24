import React, { useState } from 'react';
import { Box, Input } from '@chakra-ui/react';


interface HighlightProps {
    text: string,
    color: string
}

const HighlightExact = ({ text, color }: HighlightProps): JSX.Element => {

  const [highlightWord, setHighlightWord] = useState<string[]>([]);

  const words = text.split(' ');
  const highlightedText = words.map((word) => {
    if (highlightWord.includes(word)) {
      return <Box as="span" rounded={'15'} px={'1.5'} py={'1'} m={'0.5'} my={'1'} bg={color}>{word} </Box>;
    } else {
      return <Box as='span' onClick={() => setHighlightWord([...highlightWord, word])}>{word + ' '}</Box>;
    }
  });

  return (
    <>
      <Box>{highlightedText}</Box>
    </>
  );
};

export default HighlightExact;