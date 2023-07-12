import React, { useState } from "react";
import styles from "./Form.module.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { v4 as uuid } from "uuid";

const Form = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [edit, setEdit] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const [show, setshow] = useState(false);

  function handleSubmit() {
    let studentData = {
      id: uuid(),
      name: name,
      email: email,
    };

    if (edit) {
      data.forEach((i) => {
        if (i.id === activeId) {
          i.name = name;
          i.email = email;
        }
      });
      const myData = [...data];
      setData(myData);
      setEdit(false);
      setName("");
      setEmail("");
    } else {
      if (name.length !== 0 && email.length !== 0) {
        setData([...data, studentData]);
        setshow(true);
        setEmail("");
        setName("");
      } else {
        alert("Please fill the above Details")
      }
    }
  }

  const handleDelete = (id) => {
    let newData = data.filter((i) => i.id !== id);
    setData(newData);
  };

  const handleEdit = (id) => {
    let newData = data.find((i) => i.id === id);
    setName(newData.name);
    setEmail(newData.email);
    setEdit(true);
    setActiveId(id);
  };

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

          <Button
            onClick={handleSubmit}
            sx={{ marginTop: "2rem" }}
            variant="contained"
          >
            {edit ? "Update" : "Submit"}
          </Button>
        </div>

        {show ? (
          <div className={styles.result}>
            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>E-mail</td>

                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td style={{padding:"0.5rem 0"}}>
                        <Button 
                          variant="contained"
                          onClick={() => handleEdit(item.id)}
                        >
                          Edit
                        </Button>
                        <Button sx={{marginLeft:"1rem", backgroundColor:"rosybrown", ":hover":{bgcolor:"red"}}}
                          variant="contained"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Form;
