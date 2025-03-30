import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'   // Outlet is used to render the child routes of the parent route
// It allows you to define a layout (like a header, footer, or sidebar) that stays consistent across multiple pages, 
// while dynamically rendering the content of the child routes in the outlet

    
function Layout(){
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout