import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function HomePage() {
    const [roomcode,setRoomCode] = useState("")
    const navigate = useNavigate()
    const handelSubmit = (e) => {
        e.preventDefault()
        navigate(`/room/${roomcode}`)
    }
  return (
    <div className='home-page'>
           <form onSubmit={handelSubmit} className='form'>
            <div>
                <label>Enter Room Code</label>
                <input value={roomcode} type="text" onChange={(e)=>setRoomCode(e.target.value)} required placeholder='Enter Room Code' />
                <button type='submit'>Enter Room</button>
            </div>
            
            </form> 
    </div>
  )
}

export default HomePage
