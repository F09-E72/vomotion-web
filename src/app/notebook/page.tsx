'use client'

import { useState } from 'react'
import styles from "./styles.module.css"

const NoteBookEditor = () => {

    const [insertText, setInsertText] = useState<string>("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

    return (
        <>
        <h1>Notebook</h1>
        
        <div className={styles.textContainer}>

        <textarea onChange={(e) => {setInsertText(e.target.value)}} value={insertText} className={styles.textarea}>
        </textarea>

        <div className={styles.textResult}>
            <p>
                {insertText.toLocaleUpperCase()}
            </p>
        </div>

        </div>
        
        </>
    )
}

export default NoteBookEditor