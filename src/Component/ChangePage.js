import React, { useEffect, useRef, useState } from 'react'
import ChatBar from './ChatBar'
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

function ChangePage({ socket }) {
    const [message,setMessage] = useState([]);
    const [typingStatus,setTypingStatus] = useState("");
    const lastMessageRef = useRef(null)
   

    useEffect(()=>{
        socket.on("messageresponse",(data)=>setMessage([...message,data]))
    },[socket,message])

    useEffect(()=>{
      lastMessageRef.current?.scrollIntoView({ behavior:"smooth" });
    },[message])

    useEffect(() => {
      socket.on('typingResponse', (data) => setTypingStatus(data));
    }, [socket]);
  return (
    <div>
        <div className="chat">
      <ChatBar socket={socket} />
      <div className="chat__main">
        <ChatBody message={message} lastMessageRef={lastMessageRef} typingStatus={typingStatus} />
        <ChatFooter socket={socket} />
      </div>
    </div>
      
    </div>
  )
}

export default ChangePage
