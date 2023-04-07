import React, { useEffect, useState } from 'react'

function ChatBar( {socket} ) {
  const [users, setUsers] = useState([]);

  console.log(socket)

  useEffect(() => {
    if(users !== null){
    socket.on('newUserResponse', (data) => setUsers(data));
    }
  }, [socket, users]);
  return (
    <div>
        <div className="chat__sidebar">
            <h2>Open Chat</h2>
        <div>
            <h4 className="chat__header">ACTIVE USERS</h4>
            <div className="chat__users">
                {users.map((user) => (
            <p key={user.socketID}>{user.userName}</p>
          ))}
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default ChatBar
