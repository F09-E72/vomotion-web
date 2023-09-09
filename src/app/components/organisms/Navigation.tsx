import * as React from 'react';
import { useState, useEffect } from 'react';
import Drawer from "./Drawer"
import { Box } from '@chakra-ui/react';

const Navigation = () => {
    const links = [
        {
            to: "/flashCards/decks/3",
            label: "View Flashcards"
        },

        {
            to: "/notebook/new",
            label: "Notebooks"
        },


    ]
    return ( <>
    <Box className='shadow-md fixed top-0 p-1 w-screen bg-white z-50'>
        <Drawer links={links}/>
    </Box>
    
    </> );
}
 
export default Navigation;