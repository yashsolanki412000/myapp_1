import React,{useState} from 'react'

function ChatFooter({socket}) {
    const [message,setMessage] = useState("");

    const handelTyping = () =>{
      socket.emit("typing",`${localStorage.getItem("userName")} is typing`)
    }

    const handleSendMessage = (e) => {
        e.preventDefault();
        if(message.trim() && localStorage.getItem("userName")){
            socket.emit("message",{
                text:message,
                name:localStorage.getItem("userName"),
                id:`${socket.id}${Math.random()}`,
                socketID:socket.id
            })
        }
        setMessage('');
    }
  return (
    <div>
         <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handelTyping}
        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
      
    </div>
  )
}

export default ChatFooter
