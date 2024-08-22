import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Profile from './components/Profile/Profile'
import Certificate from './components/Certificates/Certificate'

function App() {

  return (
    <>
    <Navbar />
    <Profile/>
    <Projects/>
    <Certificate/>
    </>
  )
}

export default App
