import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Components/LAyout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import { User } from './Components/User/User.jsx'
import { Github, githubInfoLoader } from './Components/Github/Github.jsx'


// Way of defining routes using react-router-dom 
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "/Contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])


// Another way of defining routes using react-router-dom
// this is much easier to read and understand
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='About' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>    /* this is how dynamic data is being fetched */
      <Route loader={githubInfoLoader} path='/Github' element={<Github/>}/>   /* loader is defined here which is necessary 
      </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>    /* this is how we are using the router works like a wrapper 
                                        it only needs a router inside it that's it */
  </StrictMode>,
)
