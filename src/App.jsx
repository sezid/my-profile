import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Profile from './components/Profile/Profile'

function App() {

  return (
    <>
    <Navbar />
    <Profile/>
    <Projects />
    
    </>
  )
}

export default App
