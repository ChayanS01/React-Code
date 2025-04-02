import './App.css'
import { Login } from './Components/Login'
import { Profile } from './Components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1 className='bg-black text-white p-4 text-3xl'>Context-API Login</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
