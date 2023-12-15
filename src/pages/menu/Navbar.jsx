import React from 'react'
import NavLinks from './Navbar/NavLinks'

const Menubar = ({filterItem, menuList}) => {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group" >
                    

                <ul className="md:flex hidden uppercase items-center ">
          
          <NavLinks />
        </ul>
                </div>
            </nav>
        </>
    )
}

export default Menubar
