import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Landing = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate();
    return (
        <div>
            <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
            {/* <Link to={`/room/?name=${name}`} onClick={() => {
                //join logic here and navigate to /room
            }}
            >Join</Link> */}
            <button onClick={() => {
                //join logic here and navigate to /room 
                navigate(`/room/?name=${name}`);
            }}>Join</button>
        </div>
    )
}