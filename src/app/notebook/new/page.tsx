'use client'
import * as React from 'react';
import { useState, useEffect } from 'react';
import NotebookGrid from '@/app/components/organisms/NotebookGrid';
import { NotebookProp } from '@/app/components/organisms/NotebookGrid';
import styles from './styles.module.css'


const NoteBookCreation = () => {

    const [testData, setTestData] = useState<NotebookProp[]>([{
        Id: 1,
        Title: "NoteBook1"
    }])

    const addNotebook = (noteBook: NotebookProp) => {

        setTestData([...testData, noteBook])
    }

    return (<>
    <section className={styles.container}>
        <NotebookGrid addNotebook={addNotebook} data={testData} />
    </section>
    </>);
}
 
export default NoteBookCreation;