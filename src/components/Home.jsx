import React from 'react'
import Projects from './Projects/Projects'
import Profile from './Profile/Profile'
import News from './Certificates/News'



const Home = () => {
  return (
    <div>
        <Profile/>
        <p className='flex w-1/2 mt-10 mb-14'></p>
        <Projects/>
        <News/>
    </div>
  )
}

export default Home
