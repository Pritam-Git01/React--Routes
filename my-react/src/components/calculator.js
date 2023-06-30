import React from "react";

import { useState } from "react";
import styles from "./calculator.module.css"

export default function Calculator() {
  const [data, setData] = useState();
  const [input1, setInput] = useState();
  const [input2, setInputs] = useState();

  const handleAdd = (e) => {
    let add = Number(input1) + Number(input2);
    setData(add);
  };
  const handleSub = () => {
    let sub = Number(input1) - Number(input2);
    setData(sub);
  };
  const handleCross = () => {
    let cross = Number(input1) * Number(input2);
    setData(cross);
  };
  const handleDivide = () => {
    let divide = Number(input1) / Number(input2);
    divide = divide.toFixed(2);
    setData(divide);
  };

  return (
    <div className={styles.calc}>
        
      <div className={styles.inputs}>
      <input
        type="number"
        defaultValue={input1}
        onChange={(e) => setInput(e.target.value)}
      />
      <input
        type="number"
        defaultValue={input2}
        onChange={(e) => setInputs(e.target.value)}
      />
      </div>
<div className={styles.buttons_num}>
      <button className={styles.btn} onClick={handleAdd}>+</button>
      <button className={styles.btn} onClick={handleSub}>-</button>
      <button  className={styles.btn} onClick={handleCross}>*</button>
      <button className={styles.btn} onClick={handleDivide}>/</button>
     
      </div>
      <div className={styles.data}><h1> Your Result : {data}</h1></div>
      <div className={styles.clear}>
        <button className={styles.del} onClick={() => setData("")}>Clear</button>
      </div>
    </div>
  );
}
