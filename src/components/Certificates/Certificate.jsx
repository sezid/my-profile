import React from 'react'
import './Certificate.css'
import { assets } from '../../assets/images'
import { Element } from 'react-scroll'

const Certificate = () => {

  return (
    <Element name="c">

    <div className="certificates">
        <h1>Certificates</h1>
        <div className="certificate-list">
            <div className="certificate-1">
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
            {/* <div className="certificate-2">
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
            <div className="certificate-2">
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
                
            </div> */}
        </div>
    </div>
    </Element>
  )
}

export default Certificate
