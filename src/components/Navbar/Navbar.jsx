import React from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';

function Navbar() {

  const viewCV = () => {
    window.open('/cv.pdf', '_blank');
  };


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
            <li className='project'><Link to="p" smooth={true} duration={500}>Projects</Link></li>
            <li className='certf'><Link to="c" smooth={true} duration={500}>Certificates</Link></li>
            <li onClick={viewCV} className='resume'>Resume</li>
        </div>


    </div>
  )
}

export default Navbar
