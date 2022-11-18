import React from "react";
import { useState, useEffect } from "react";

import "./App.css";
// import { getPadTime } from "./components/getPadTime";

function App() {
  const [timeLeft, setTimeLeft] = useState(2 * 60);
  const [isCounting, setisCounting] = useState(false);

  // получаем минуты и секунды

  const getPadTime = (time) => time.toString().padStart(2, "0");

  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const seconds = getPadTime(timeLeft - minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting &&
        setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
    }, 1000);
    if (timeLeft === 0) setisCounting(false);

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft, isCounting]);


  // Кнопи старт стоп ресет
  const handleStart = () => {
    if (timeLeft === 0) setTimeLeft(2 * 60);
    setisCounting(true);
  };
  const handleStop = () => {
    setisCounting(false);
  };
  const handleReset = () => {
    setisCounting(false);
    setTimeLeft(2 * 60);
  };

  return (
    <div className="App">
      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div className="button">
        {isCounting ? (
          <button onClick={handleStop}>Stop</button>
        ) : (
          <button onClick={handleStart}>Start</button>
        )}

        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
