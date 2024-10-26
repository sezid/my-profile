import React from 'react'
import { assets } from '../../assets/images'

const Contact = () => {


  return (
    <div className="flex flex-col items-center mt-40">
        <div className='flex flex-col bg-white w-1/2 items-center justify-center rounded-[15px] gap-3 p-10'>
            <img className='w-1/4 rounded-full' src={assets.headshot} alt="" />
            <div className='flex flex-col items-center text-xl'>
                <h1>Syed Saleh Mohammad Sajid</h1>
                <h3>BSc in Computer Science, BRAC University</h3>
            </div>
            <div className='flex flex-col items-center text-sm'>
                <h3>salehsajid86@gmail.com</h3>
                <h3>+880-1775289400</h3>
            </div>

            <div className='flex items-center gap-2'>
                <a href="https://github.com/sezid"><img className='w-[30px]' src={assets.github} alt="" /></a>
                <a href="https://www.facebook.com/itssezid"><img className='w-[30px]' src={assets.facebook} alt="" /></a>
                <a href="https://www.linkedin.com/in/sezid"><img className='w-[30px]' src={assets.linkedin} alt="" /></a>
            </div>


        </div>
        
        
    </div>
  )
}

export default Contact
