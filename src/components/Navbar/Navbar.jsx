import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>

        <div className='navbar-logo'>
        <img src="/programming.svg" alt="" />
        <h1>My Profile</h1>
        </div>  

        {/* <div className='search-bar'>
            <input type="text" placeholder='Search' />
        </div> */}
        

        <div className="profile-list">
            <li className='project'>Projects</li>
            <li className='certificates'>Certificates</li>
            <li className='resume'>Resume</li>
        </div>


    </div>
  )
}

export default Navbar
