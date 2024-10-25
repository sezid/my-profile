import { useState } from 'react'
import React from 'react'
import { assets,projects } from '../../assets/images'

const Projects = () => {

    const [currentIndex, setCurrentIndex] = useState(0);  

    const handleNextImage = () => { 
        if (currentIndex<projects.length-1) {
        setCurrentIndex((prevIndex) => (prevIndex + 1));

        }
        else{
            setCurrentIndex(0);
        }
      };  
    




  return (
    <div className="flex flex-row gap-7 bg-slate-100 py-10 items-center justify-center h-[500px]">
        <div class="relative w-1/3 h-[250px] overflow-hidden">  
            <img src={projects[currentIndex].image} alt='' className="object-cover w-full h-full"/>  
        </div>
        <div className='flex flex-col w-1/2 text-lg items-left pt-5 gap-3'>
                <h1 className='text-4xl font-poppins'>Projects</h1>
                <h2 className='font-poppins text-2xl'>{projects[currentIndex].name}</h2>
                <p className='font-poppins'>{projects[currentIndex].summary}</p>
            <div className='flex justify-end'>
                <img className='w-[35px] p-2 hover:bg-white hover:border-2 rounded-[5px]' src={assets.arrow} onClick={handleNextImage}/>
            </div>
            
        </div>
    </div>
  )
}

export default Projects
