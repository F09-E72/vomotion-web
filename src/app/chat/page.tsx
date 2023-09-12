'use client'

import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '../components/atoms/Button';


interface TextMessage {
    content: string,
    senderId: number,
    date: Date
}

const testMessages = [
    {
        content: "Hello",
        senderId: 1,
        date: new Date("2023-09-11T08:00:00"),
    },
    {
        content: "Hi there!",
        senderId: 2,
        date: new Date("2023-09-11T08:05:00"),
    },
    {
        content: "How are you?",
        senderId: 1,
        date: new Date("2023-09-11T08:10:00"),
    },
    {
        content: "I'm good, thanks!",
        senderId: 2,
        date: new Date("2023-09-11T08:15:00"),
    },
    {
        content: "That's great to hear!",
        senderId: 1,
        date: new Date("2023-09-11T08:20:00"),
    },
];


const Chat = () => {
    const [messages, setMessages]  = useState<TextMessage[]>(testMessages.sort((a, b) => a.date.getMilliseconds() - b.date.getMilliseconds()))

    return (<>
        <div className='w-screen absolute  flex h-screen items-center justify-end flex-col'>
            <div className='w-full'>
            {messages.map(message => <div className={`${message.senderId == 1 ? "right-0 bg-blue-400": "left-0 bg-green-400"} w-full p-4 text-xl shadow-sm`}> 
            {message.content}
            </div>)}         
            </div>
            <form className='w-full flex min-h-[15%] bg-white'>
                <input className='grow '/> 
                <Button className='px-6 text-center'> send </Button>
            </form>
        </div>
    
    </>);
}
 
export default Chat;