import React from 'react'
import { useParams } from 'react-router-dom'
export function User(props) {
    
    const {userid} = useParams()

    return (
        <>

            <div className='bg-gray-600 p-4 text-3xl text-white text-center'>User : {userid}</div>
        </>
    )
}
