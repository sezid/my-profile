import React, {useState} from 'react'
import './Projects.css'
import { assets } from '../../assets/images'

const Projects = () => {

  return (
    <div className="projects">
        <h1>Projects</h1>
        <div className="project-list">
            <div className="project-1">
                <img src={assets.project_1} alt="" />
                <h2>Khidaaa</h2>
                <p>A food delivery website just like any</p>
                <div className="source">
                    
                <a href="https://github.com/sezid/khidaaa" target="_blank" rel="noopener noreferrer">
                    <img src={assets.github} alt="GitHub" />
                </a>
                       
                    
                <a href="https://khidaaa.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img src={assets.web} alt="Web" />
                </a>
                    
                </div>
            </div>
            <div className="project-2">
                <img src={assets.plus} alt="" />
                <h2>MamaJaben</h2>
                <p>A ride sharing app just like any</p>
                <div className="source">
                    
                    <a href="https://github.com/sezid/khidaaa" target="_blank" rel="noopener noreferrer">
                        <img src={assets.github} alt="GitHub" />
                    </a>


                    <a href="https://khidaaa.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img src={assets.web} alt="Web" />
                    </a>
                    
                </div>
            </div>
            <div className="project-2">
                <img src={assets.plus} alt="" />
                <h2>Project 3</h2>
                <p>Dummy</p>
                <div className="source">
                    
                    <a href="https://github.com/sezid/khidaaa" target="_blank" rel="noopener noreferrer">
                        <img src={assets.github} alt="GitHub" />
                    </a>


                    <a href="https://khidaaa.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img src={assets.web} alt="Web" />
                    </a>
                    
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Projects
