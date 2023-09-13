'use client'

import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '../components/atoms/Button';


interface TextMessage {
    content: string,
    senderId: number,
    date: Date
}



const Chat = () => {
    const [messages, setMessages] = useState<TextMessage[]>([])
    const [messagesSorted, setMessagesSorted]  = useState<TextMessage[]>([])
    const [currentMessage, setCurrentMessage] = useState<string>("")

    const createGptMessage = (message: string) => {
        return {content: "My reply to: " + message, senderId: 2, date: new Date(Date.now())}
    }

    const sendMessage = (e: any) => {
        e.preventDefault()
        const message = {content: currentMessage, senderId: 1, date: new Date(Date.now())}
        const gptMessage = createGptMessage(currentMessage)

        setMessages(messages.concat([message, gptMessage]))
        setCurrentMessage("")
    }

    useEffect(() => {
        setMessagesSorted(messages.sort((a, b) => a.date.getMilliseconds() - b.date.getMilliseconds()))
    }, [messages])


    return (<>
        <div className='w-screen absolute  flex h-screen items-center justify-end flex-col'>
            <div className='w-full'>
            {messagesSorted.map(message => <div className={`${message.senderId == 1 ? "right-0 bg-blue-400": "left-0 bg-green-400"} w-full p-4 text-xl shadow-sm`}> 
            {message.content}
            </div>)}         
            </div>
            <form onSubmit={sendMessage} className='w-full flex min-h-[15%] bg-white'>
                <input className='grow ' value={currentMessage} onChange={(e) => {setCurrentMessage(e.target.value)}}/> 
                <Button className='px-6 text-center'> send </Button>
            </form>
        </div>
    
    </>);
}
 
export default Chat;