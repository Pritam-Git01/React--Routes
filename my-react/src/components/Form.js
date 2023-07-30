import React from "react";
import styles from "./Form.module.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { v4 as uuid } from "uuid";
import { useState, useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  data: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "submit":
      return {
        ...state,
        data: [
          ...state.data,
          { id: action.payload, name: state.name, email: state.email },
        ],
      };

    case "delete":
      return { ...state, data: [...action.payload] };

    default:
      return state;
  }
};

const Form = () => {
  const [response, dispatch] = useReducer(reducer, initialState);
  const [update, setUpdate] = useState(false);
  console.log(response.data);

  const handleSubmit = () => {
    if(update){
      let updateData = response.data.forEach(element => {
        
        
      });
    }
    dispatch({ type: "submit", payload: uuid() });
    dispatch({ type: "name", payload: "" });
    dispatch({ type: "email", payload: "" });
    setUpdate(false);
  };
  const handleDelete = (id) => {
    let newData = [...response.data].filter((i) => i.id !== id);
    console.log(newData);
    dispatch({ type: "delete", payload: newData });
  };
  const handleEdit = (id) => {
    let editData = response.data.find((item) => item.id === id);
    console.log(editData);
    dispatch({ type: "name", payload: editData.name });
    dispatch({ type: "email", payload: editData.email });
    setUpdate(true);
  };
  return (
    <div className={styles.wraper}>
      <div className={styles.container}>
        <h1>Student Form</h1>

        <div className={styles.inputs}>
          <TextField
            sx={{ width: "15vw", marginTop: "1rem" }}
            onChange={(e) =>
              dispatch({ type: "name", payload: e.target.value })
            }
            label="Name"
            variant="standard"
            type="text"
            value={response.name}
          />
          <TextField
            sx={{ width: "15vw", marginTop: "1rem" }}
            onChange={(e) =>
              dispatch({ type: "email", payload: e.target.value })
            }
            label="E-mail"
            variant="standard"
            type="text"
            value={response.email}
          />

          <Button
            onClick={handleSubmit}
            sx={{ marginTop: "2rem" }}
            variant="contained"
          >
            {update ? "Update" : "Submit"}
          </Button>
        </div>

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
              {response.data.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td style={{ padding: "0.5rem 0" }}>
                      <Button
                        variant="contained"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => handleDelete(item.id)}
                        sx={{
                          marginLeft: "1rem",
                          backgroundColor: "rosybrown",
                          ":hover": { bgcolor: "red" },
                        }}
                        variant="contained"
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

        <></>
      </div>
    </div>
  );
};

export default Form;
