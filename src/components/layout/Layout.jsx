import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Chat from '../chat/chat'

function Layout({children}) {
  return (
    <div>
        <Navbar/>
        <Chat/>
        <div className="content">
         
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout