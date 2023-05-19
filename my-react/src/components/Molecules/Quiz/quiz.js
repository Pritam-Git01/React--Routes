import React, { useState } from "react";
import styles from "./quiz.module.css";
import { questions } from "../../../const";
import Timer from "../../Atoms/Timer/timer";

export default function Quiz() {
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [message, setMessage] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 2);
    }

    if (score >= 12) {
      setMessage("Congratulations! You Passed the Test");
    } else {
      setMessage("Hard Luck, Play Again");
    }
  };

  const handleCheckboxClick = (Id) => {
    setSelectedAnswer(Id);
  };

  const questionChange = () => {
    if (activeQuestion + 1 < questions.length) {
      setActiveQuestion(activeQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setScore(0);
    setActiveQuestion(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  return (
    <div className={styles.container}>
      {showResult ? (
        <div className={styles.result}>
          <h2>Your Result</h2>
          <p>
            You Scored {score} out of 20 - ({(score / questions.length) * 50}%)
          </p>
          <p>{message}</p>
          <button onClick={handleReset} className={styles.restart}>
            Restart
          </button>
        </div>
      ) : (
        <div className={styles.question}>
          <h2>
            Question {activeQuestion + 1} out of {questions.length}
          </h2>
          <h4>{questions[activeQuestion].text}</h4>
          <ul className={styles.list}>
            {questions[activeQuestion].choices.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => handleClick(option.isCorrect)}
                >
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedAnswer === option.id}
                      onClick={() => handleCheckboxClick(option.id)}
                    />
                    {option.text}
                  </label>
                </li>
              );
            })}
          </ul>

          <div>
            <Timer times={120} showFinalResult={setShowResult} />
          </div>

          <div className={styles.btn}>
            <button className={styles.nextBtn} onClick={questionChange}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
