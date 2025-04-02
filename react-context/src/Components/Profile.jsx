import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
export function Profile() {
    
    const {user} = useContext(UserContext)

    if(!user) return <div className='mx-2 my-3 text-xl '>Please Login</div>

    return <div className='mx-2 my-3 text-xl '>Welcome back, {user.username}</div>

}