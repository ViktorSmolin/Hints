// How to work with intervals in hooks React

import React from "react";
import { useState, useEffect, useRef } from "react";

export default function App() {
    const initalState = 10;
    const [count, setCount] = useState(initalState);
    const counterRef = useRef(initalState);
  
    useEffect(() => {
      counterRef.current = count;
    })
  
    useEffect(() => {
      setInterval(() => {
        setCount(counterRef.current + 1);
      }, 1000);
    }, []);
  
    return (
      <div className="App">
        <h1>The current count is:</h1>
        <h2>{count}</h2>
      </div>
    );
  }


export default function App() {
  const initalState = 0;
  const [count, setCount] = useState(initalState);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(interval)
  }, [count]);

  return (
    <div className="App">
      <h1>The current count is:</h1>
      <h2>{count}</h2>
    </div>
  );
}