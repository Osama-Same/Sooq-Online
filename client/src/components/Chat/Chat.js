import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Chat.css";
const Chat = () => {
  let { idUser } = useParams();
  const [chat, setChat] = useState([]);
  useEffect(()=>{
    
  })
  return <div></div>;
};

export default Chat;
