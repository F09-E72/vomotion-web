'use client'

import { useState } from 'react'
import styles from "./styles.module.css"
import { Textarea, Button, Text} from '@chakra-ui/react'

const NoteBookEditor = () => {

    const [insertText, setInsertText] = useState<string>("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
    const [showTranslated, setShowTranslated] = useState(false)

    return (
        <>
        <h1>Notebook</h1>
        
        <div className={styles.container}>
        <h2 className={styles.toolTip}>Share your favourite text and translate it</h2>
        <div className={styles.textContainer} >

        <Textarea onChange={(e) => {setInsertText(e.target.value)}} value={insertText} className={styles.textarea}/>

        {showTranslated && <div   className={styles.textResult}>
                <Text> {insertText.toLocaleUpperCase()} </Text>
        </div>}
        
        </div>

        <Button className={styles.translateBtn} bg={"red.300"} rounded={"full"} onClick={() => setShowTranslated(true)}> Translate! </Button>

        </div>
        
        </>
    )
}

export default NoteBookEditor