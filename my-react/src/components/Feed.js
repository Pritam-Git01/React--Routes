import React, { useEffect, useState } from "react";
import styles from "./Feed.module.css";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import {v4 as uuid} from "uuid";

import { CiImageOn } from "react-icons/ci";
import { AiOutlineFileGif } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { VscSmiley } from "react-icons/vsc";
import { MdOutlineMoreTime } from "react-icons/md";
import { GrLocation } from "react-icons/gr";


const Feed = () => {
  const [data, setData] = useState([]);
  const[post,setPost]= useState([])
  const[input,setInput] = useState("");
  const[show,setShow] = useState(true);







  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:4004/users");

    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handlePost = async () => {
    axios.post("http://localhost:4004/users",{id:uuid(), first_name:"Pritam", last_name:"Yadav", images:"https://cdn.primedia.co.za/primedia-broadcasting/image/upload/v1573809631/ytnx6wv0heilfkob93hi.jpg",caption:input});
    const {data} = await axios.get("http://localhost:4004/users")
    data.reverse();
    console.log(data);
    setInput("")
    setPost(data);
    setShow(false);

  }

//   useEffect(() => {
//     const fetchPost = async () => {
       

//     }
//     fetchPost()
//   },[])
  return (
    <>
      <div className={styles.outer}>
        <div className={styles.upper}>
          <Avatar
            src={""}
            sx={{ height: "45px", width: "45px" }}
          />
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className={styles.input}
            placeholder="What is happening?!"
          />
          
        </div>
        <div className={styles.post}>
          <div className={styles.allIcons}>
            <CiImageOn  />
            <AiOutlineFileGif />
            <BiPoll />
            <VscSmiley />
            <MdOutlineMoreTime />
            <GrLocation />
          </div>
          <button onClick={handlePost} className={styles.tweetBtn}>
            Tweet
          </button>
        </div>
      </div>

      {show ? <div className={styles.wraper}>
        {data.map((user) => {
          return (
            <>
              <div key={user.id} className={styles.f_container}>
                <Avatar
                  sx={{ width: 42, height: 42 }}
                  src={user.images}
                  alt="post"
                />
                <h3 styles={{ paddingLeft: "0.8rem" }}>
                  {user.first_name}
                </h3>
                <p styles={{ color: "rgb(93, 91, 91)" }}>
                  @{user.last_name}
                </p>
              </div>

              <div className={styles.s_container}>
                <p className={styles.text}>{user.caption}</p>
                <img src={user.images} alt="post" />
              </div>
            </>
          );
        })}
      </div> :       
      <div className={styles.wraper}>
        {post.map((user) => {
          return (
            <>
              <div key={user.id} className={styles.f_container}>
                <Avatar
                  sx={{ width: 42, height: 42 }}
                  src={user.images}
                  alt="post"
                />
                <h3 styles={{ paddingLeft: "0.8rem" }}>
                  {user.first_name}
                </h3>
                <p styles={{ color: "rgb(93, 91, 91)" }}>
                  @{user.last_name}
                </p>
              </div>

              <div className={styles.s_container}>
                <p className={styles.text}>{user.caption}</p>
                <img src={user.images} alt="post" />
              </div>
            </>
          );
        })}
      </div>}

    </>
  );
};

export default Feed;
