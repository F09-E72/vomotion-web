'use client'

import * as React from 'react';
import { useState, useEffect } from 'react';
import type { FlashCard } from '../types';
import Router from 'next/navigation';

const FlashCardDecks = () => {

    type Deck  = { Id: number }

    const [decks, setDecks] = useState<Deck[]>([{Id: 1}, {Id: 2}])

    return <>
        
    
    </>;
}
 
export default FlashCardDecks;