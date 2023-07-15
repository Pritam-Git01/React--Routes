import React, { useState } from "react";
import axios from "axios";
import styles from "./SearchBar.module.css";
import { BiSearch } from "react-icons/bi";

import { IoMdMic } from "react-icons/io";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:4001/user");
    setUsers(data);
  };

  const handleChange = (value) => {
    setQuery(value);
   
    fetchData();
  };

  const filteredUsers = users.filter((item) =>
    item.name.toLowerCase().includes(query)
  );

  return (
    <>
      <div className={styles.wraper}>
        <span className={styles.icon}>
          <BiSearch />
        </span>
        <input type="serach" placeholder="Search" value={query} onChange={(e) => handleChange(e.target.value)} />
        <span className={styles.mic}>
          <IoMdMic />
        </span>
        </div>
     
        <div className={styles.resultList}>
          {filteredUsers.map((item) => (
            <div onClick={() => setQuery(item.name)} key={item.id}>
              {item.name}
            </div>
          ))}
        </div>
     
      
    </>
  );
};

export default SearchBar;
