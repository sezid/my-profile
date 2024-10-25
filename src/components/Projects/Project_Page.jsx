import React from 'react'
import { projects,assets } from '../../assets/images'


const Project_Page = () => {
  return (
    <div className='flex flex-col items-center justify-center py-[30px] font-poppins gap-3'> 
        <h1 className='text-black text-4xl mb-5 font-semibold'>Projects</h1>
        {projects.map((item) => (
        <div className='flex flex-col w-1/2 h-[200px] bg-slate-300 rounded-[20px] p-[25px] gap-2'>
            <h1 className='text-2xl font-medium'>{item.name}</h1>
            <p className='font-light'>{item.summary}</p>
            <div className='flex justify-end gap-1 mt-3'>
                <a href={item.github}><img className='w-[30px] cursor-pointer' src={assets.github} alt="" /></a>
                <a href={item.link}><img className='w-[30px] cursor-pointer' src={assets.web} alt="" /></a>
            </div>
        </div>
          ))}
        
    </div>
  )
}

export default Project_Page