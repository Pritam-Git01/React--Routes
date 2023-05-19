import React, { useRef } from "react";
import { useState, useEffect } from "react";

function Timer({ times, showFinalResult }) {
  const [countDown, setCountDown] = useState(times);
  const counts = useRef();

  useEffect(() => {
    counts.current = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);
     return () => clearInterval(counts.current);
  }, []);


  useEffect(() => {
    if (countDown <= 0) {
      showFinalResult(true);
    return () => clearInterval(counts.current);
    }
  });



  function formatTime() {
    const minutes = Math.floor(countDown / 60);
    const seconds = Math.floor(countDown % 60);
    return `${minutes} : ${seconds}`;
  }

  return (
    <>
      <h2>Time Left : {formatTime()}</h2>
    </>
  );
}

export default Timer;
