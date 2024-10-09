"use client";

import { useState, useEffect } from "react";

export default function tempo() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    return ()=> clearInterval(timer)
  },[time]);

  return (
        <div>
            <h1>{time}</h1>
            <button onClick={()=>setTime(0)}>reiniciar</button>
        </div>
    );
}
