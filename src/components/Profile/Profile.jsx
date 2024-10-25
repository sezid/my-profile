import React from 'react'
import { assets} from '../../assets/images'

const Profile = () => {
  return (
    <div className='flex justify-center mt-20 items-center'>
        
            <div className="flex items-center gap-7 mb-40 md:w-[900px] md:justify-center md:mt-20">
                <img className="rounded-[10px] sm:w-52 md:w-1/4" src={assets.headshot} alt="" />
                <div className="w-[2px] h-[220px] bg-gray-300 mx-2"></div>  
                <div className="w-1/2 font-poppins text-[23px]">
                    <p>As a recent Computer Science graduate, I am deeply passionate about leveraging both data science and AI, as well as software development, to solve real-world problems and make a meaningful impact.</p>
                </div>
            </div>
      
    </div>
  )
}

export default Profile
