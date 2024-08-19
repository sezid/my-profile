import React from 'react'
import './Projects.css'
import { assets } from '../../assets/images'

const Projects = () => {
  return (
    <div className="projects">
        <h1>Projects</h1>
        <div className="project-list">
            <div className="project-1">
                <img src={assets.plus} alt="" />
                <h2>Project 1</h2>
                <p>Dummy</p>
                <div className="source">
                <img  src={assets.github} alt="" />
                <p>Check</p>
                </div>
            </div>
            <div className="project-2">
                <img src={assets.plus} alt="" />
                <h2>Project 1</h2>
                <p>Dummy</p>
                <div className="source">
                <img src={assets.github} alt="" />
                <p>Check</p>
                </div>
            </div>
            <div className="project-2">
                <img src={assets.plus} alt="" />
                <h2>Project 3</h2>
                <p>Dummy</p>
                <div className="source">
                <img  src={assets.github} alt="" />
                <p>Check</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Projects
