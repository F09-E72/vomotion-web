'use client'

import { useState, useEffect } from 'react'
import styles from "./styles.module.css"
import { Textarea, Button, Text, Highlight} from '@chakra-ui/react'
import HighlightExact from '@/app/components/molecules/HighlightExact'

const NoteBookEditor = () => {

    const [insertText, setInsertText] = useState<string>("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
    const [showTranslated, setShowTranslated] = useState(false)
    const [highlightQueries, setHighlightQueries] = useState(["LOREM"])

    const setHighlights = (word: string) => {
        if(highlightQueries.includes(word)) {
            setHighlightQueries(highlightQueries.filter(item => item != word))
        } 
        else {
            setHighlightQueries([...highlightQueries, word])

        }
    }

    useEffect(() => {
        console.log(highlightQueries)
    })


    return (
        <>
        <h1>Notebook</h1>
        
        <div className={styles.container}>
        <h2 className={styles.toolTip}>Share your favourite text and translate it</h2>
        <div className={styles.textContainer} >

        

        <Textarea onChange={(e) => {setInsertText(e.target.value)}} value={insertText} className={styles.textarea}/>

        {showTranslated && <div   className={styles.textResult}>
                {/* <Text> {insertText.toLocaleUpperCase().split(" ").map(word => {

                        return <span className={styles.clickableText} onClick={() => setHighlights(word)} > <Highlight query={highlightQueries} styles={{ px: '2', py: '1', rounded: 'full', bg: 'blue.300' }}>{`${word} `}</Highlight> </span>
                })} </Text> */}
        <HighlightExact text={insertText} color='blue.300'/>

        </div>}
        
        </div>

        <Button className={styles.translateBtn} bg={"blue.400"} rounded={"full"} onClick={() => setShowTranslated(true)}> Translate! </Button>

        </div>
        
        </>
    )
}

export default NoteBookEditor