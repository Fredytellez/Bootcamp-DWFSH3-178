"use client"

import { useState, useEffect } from "react"

export default function count () {
    
    const [count, setCount] = useState(0)

    useEffect( ()=> {
        document.title = `Count ${count}`;
    }, [count]) 

    
    return (
    
        <div>
            <h1>Cuenta: {count}</h1>
            <button onClick={()=>setCount(count - 1)}>menos</button>
            <button onClick={()=>setCount(count + 1)}>mas</button>
        </div>
    )
}