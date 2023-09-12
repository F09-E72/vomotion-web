import * as React from 'react';
import { useState, useEffect } from 'react';


interface ButtonProps {
    onClick?: (...args: any[]) => any
    type?: "submit" | "button" | "reset"
    colorScheme?: "main" | "secondary" 
    children: any
    className?: string
}

const Button = ({onClick = () => {}, type = "submit", children, className, colorScheme = "main"}: ButtonProps) => {
    return (<>
    <button onClick={onClick} type={type} className={`rounded  p-2 text-lg shadow-sm ${colorScheme == "main" ? "bg-blue-200 text-black": "text-blue-400 shadow-blue-400"} ${className}`}>{children}</button>
    </>);
}
 
export default Button;