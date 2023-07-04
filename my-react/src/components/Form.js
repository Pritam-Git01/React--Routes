import React, { useState } from "react";
import styles from "./Form.module.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import {v4 as uuid} from "uuid";

const Form = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sId, setsId] = useState("");
  const [show,setshow] = useState(false)

  function handleSubmit() {
    const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
   
    let studentData = {
        id: uuid(),
      name: name,
      phone: phone,
      email: email,
      sId: sId,
    };
   
    if(phone.trim().length && name.trim().length && email.trim().length && sId.trim().length !== 0){
        if(phoneRegex.test(phone) && emailRegex.test(email)){
            setData([...data, studentData]);
            setshow(true);
            setPhone("")
            setName("")
            setsId("")
            setEmail("")
        } 
     else {
        alert("Please, Fill the Correct Details")
    }
}
else {
    alert("Please, Fill the Above Details")
}

    

    console.log("student data has been updated", data);
  }
  return (
    <div className={styles.wraper}>
      <div className={styles.container}>
        <h1>Student Form</h1>

        <div className={styles.inputs}>
          <TextField
            sx={{ width: "15vw", marginTop: "1rem" }}
            onChange={(e) => setName(e.target.value)}
            label="Name"
            variant="standard"
            type="text"
            value={name}
          />
          <TextField
            sx={{ width: "15vw", marginTop: "1rem" }}
            onChange={(e) => setEmail(e.target.value)}
            label="E-mail"
            variant="standard"
            type="text"
            value={email}
          />
          <TextField
            sx={{ width: "15vw", marginTop: "1rem" }}
            onChange={(e) => setPhone(e.target.value)}
            label="Phone"
            variant="standard"
            type="number"
            value={phone}
          />
          <TextField
            sx={{ width: "15vw", marginTop: "1rem" }}
            onChange={(e) => setsId(e.target.value)}
            label="Student-Id"
            variant="standard"
            type="text"
            value={sId}
          />
          <Button
            onClick={handleSubmit}
            sx={{ marginTop: "2rem" }}
            variant="contained"
          >
            Submit
          </Button>
        </div>

     {show ?   <div className={styles.result}>
            <table>
                <thead>
                    <tr>
                        <td>Student Id</td>
                        <td>Name</td>
                        <td>E-mail</td>
                        <td>Phone</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                        return (
                            <tr key={item.id}> 
                            <td>{item.sId}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
          </div> : <></>}
       
      </div>
    </div>
  );
};

export default Form;
