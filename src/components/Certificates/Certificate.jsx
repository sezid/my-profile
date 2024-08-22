import React from 'react'
import './Certificate.css'
import { assets } from '../../assets/images'
import { Element } from 'react-scroll'

const Certificate = () => {


    const viewCert1 = () => {
        window.open('/cert-1.pdf', '_blank');
      };
    
      const viewCert2 = () => {
        window.open('/cert-2.pdf', '_blank');
      };  
    

  return (
    <Element name="c">

    <div className="certificates">
        <h1>Certificates</h1>
        <div className="certificate-list">
            <div className="certificate-1">
                <img src={assets.cert_1} alt="" />
                <h2>Flutter Workshop</h2>
                <div className="c_source">
                    <img onClick={viewCert1} src={assets.cert} alt="Cert" />
                
                    
                </div>
            </div>
            <div className="certificate-2">
                <img src={assets.cert_2} alt="" />
                <h2>Marathon</h2>
                <div className="c_source">

                        <img onClick={viewCert2}  src={assets.cert} alt="Cert" />

                </div>
            </div>
            {/*<div className="certificate-2">
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
