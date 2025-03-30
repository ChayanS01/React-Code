import {useLoaderData} from 'react-router-dom'
export function Github(props) {
    
    const data = useLoaderData()        // Loader helps to optimize the process of fetching the data and makes it even more faster
                                        // it works like when the cursor comes upon the github navbar the data is already available to the component before clicking it
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/ChayanS01")
    //     .then(Response => Response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
    return (
        <>
            <div className='text-3xl text-white bg-gray-600 p-4 text-center'>Github Followers: {data.following}</div>
            <img src={data.avatar_url} alt="git profile picture"  width={300}/>

        </>
    )
}
export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/ChayanS01') 
    return response.json()
}
