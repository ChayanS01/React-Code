import { useState, useContext } from 'react'
import React from 'react'
import UserContext from '../context/UserContext'
export function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('') 

    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!username || !password) return alert('Please fill the fields');
         setUser({username, password})
    }
    return (
        <>
            <div>
                <h2>Login</h2>
                <input type="text" value={username} 
                onChange={(e)=> setUsername(e.target.value)} placeholder='username' />
                <input type="text" value={password} 
                onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
                <button onClick={handleSubmit}>Submit</button>
            </div>

        </>
    )
}
