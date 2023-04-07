import React from 'react'
import socketIO from 'socket.io-client';
import ChangePage from './Component/ChangePage';
import Home from './Component/Home';
import {Route,Routes} from "react-router-dom"
import HomePage from './Home';
import RoomPage from './Home/RoomPage';
let socket = socketIO.connect('http://localhost:4000')
function App() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home socket={socket}/>}/>
            <Route path='/chat' element={<ChangePage socket={socket}/>}/>
            <Route path='/homepage' element={<HomePage/>} />
            <Route path='/room/:roomId' element={<RoomPage/>} />
        </Routes>
      
    </div>
  )
}

export default App
