import React, { useState } from 'react'
import { useEffect } from 'react'
export function Github(props) {
    
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/ChayanS01")
        .then(Response => Response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, [])
    return (
        <>
            <div className='text-3xl text-white bg-gray-600 p-4 text-center'>Github Followers: {data.following}</div>
            <img src={data.avatar_url} alt="git profile picture"  width={300}/>

        </>
    )
}
