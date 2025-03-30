import React from 'react'
import { useParams } from 'react-router-dom'
export function User(props) {
    
    // Hooks are simply functions that let you “hook into” React state and lifecycle features from function components.
    const {userid} = useParams()        // useParams is a hook that returns an object of key-value pairs of the dynamic data

    return (
        <>

            <div className='bg-gray-600 p-4 text-3xl text-white text-center'>User : {userid}</div>
        </>
    )
}
