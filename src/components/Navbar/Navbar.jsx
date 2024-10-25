import React from 'react';
import { useState } from 'react';
// import './Navbar.css';
import { assets } from '../../assets/images'
import { Link } from 'react-router-dom';

function Navbar() {

  const viewCV = () => {
    setVisible(false);
    window.open('/cv.pdf', '_blank');
  };

  const [visible,setVisible]=useState(false);

  

  return (
    <div className='flex items-center justify-evenly gap-10 pt-5 sm:justify-evenly items-center bg-slate-100 pb-5 font-poppins'>
        <div className='flex gap-1'>
          <Link to="/">
          <img className='w-5 md:w-8' src="/programming.svg" alt="" /></Link>
          <h1 className='text-xs md:text-xl'>Syed Saleh Mohammad Sajid</h1>
          
        </div>
    
        {/* <div className='search-bar'>
            <input type="text" placeholder='Search' />
        </div> */}
        

        <div className="hidden md:flex flex-row gap-4 list-none">
            <li className='cursor-pointer hover:bg-gray-600 p-2 rounded-[20px] hover:text-white'><Link to="/project_page" smooth={true} duration={500}>Projects</Link></li>
            <li className='cursor-pointer hover:bg-gray-600 p-2 rounded-[20px] hover:text-white'><Link to="/contact" smooth={true} duration={500}>Contact</Link></li>
            <li onClick={viewCV} className='cursor-pointer hover:bg-gray-600 p-2 rounded-[20px] hover:text-white'>Resume</li>
        </div>

        <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer md:hidden' alt="" />
        {/* for side menu */}
        <div className={`absolute top-0 right-0 bottom-0 bg-white transition-all z-10 ${visible ? 'w-full' : 'w-0'} overflow-hidden`}>
          <div className="flex flex-col text-gray-600">
            <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3">
              <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
              <p>Back</p>
            </div>
            <Link onClick={()=>setVisible(false)} className='py-6 pl-6 border' to='/'>Home</Link>
            <Link onClick={()=>setVisible(false)} className='py-6 pl-6 border' to='/contact'>Contact</Link>
            <Link onClick={()=>setVisible(false)} className='py-6 pl-6 border' to='/project_page'>Projects</Link>
            <Link onClick={viewCV} className='py-6 pl-6 border' to=''>Resume</Link>



          </div>
        </div>
        
        
    </div>

  )
}

export default Navbar
