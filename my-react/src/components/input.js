import React, { useState,useEffect } from 'react'
import TextField from "@mui/material/TextField";
import styles from "./input.module.css"

function Input() {
    const [number,setNumber] = useState();


    useEffect(() => {
        setNumber(number)
    },[number])
  return (
    <div className={styles.wraper}>
        <div className={styles.container}>
           
        <TextField
            sx={{ width: "15vw", marginTop: "1rem" }}
            onChange={(e) => setNumber(e.target.value)}
            label="Type a number"
            variant="standard"
            type="number"
            value={number}
          />
          <div className={styles.result} style={{paddingTop: "1.4rem", maxWidth: "15vw"}} >
          <table >
            
            <tr>
                <td>{number}</td>
            </tr>
            
          </table>
          </div>
      </div>
    </div>
  )
}

export default Input;