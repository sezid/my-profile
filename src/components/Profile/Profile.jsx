import React from 'react'
import './Profile.css'
import { assets, profile } from '../../assets/images'

const Profile = () => {
  return (
    <div className='profile'>
        <div className="profile-box">
            {/* <img src={assets.plus} alt="" /> */}
            <div className="profile-info">
                <img className="headshot" src={assets.headshot} alt="" />
                <h1>Syed Saleh Mohammad Sajid</h1>
                <h3>BSc in Computer Science<br/>BRAC University</h3>
                <h4>CGPA: 3.52</h4>
                <p>Phone: +8801775289400</p>
                <p>Email: salehsajid86@gmail.com</p>
                    <div className='contact'>
                        <a href="https://github.com/sezid">
                        <img src={assets.github} alt="" />
                        </a>
                        <a href="https://www.facebook.com/itssezid">
                        <img src={assets.facebook} alt="" />
                        </a>
                        {/*add any other links here*/}
                        <a href="https://www.linkedin.com/in/sezid/">
                        <img src={assets.linkedin} alt="" /> 
                        </a>
                    </div>
                    <div className="location">
                        <img src={assets.location} alt="" />
                        <p>Dhaka, Bangladesh</p>
                    </div>
                    <p className='note'>Click the icons to know more</p>
            </div>
            <div className="profile-info-sum">
                <h2>Summary</h2>
                <p>As a recent Computer Science graduate, I am deeply passionate about leveraging both data science and AI, as well as software development, to solve real-world problems and make a meaningful impact. My strong technical skills in programming, algorithms, and software engineering, combined with my enthusiasm for innovation, fuel my drive to contribute in these fields. <br/><br/>I thrive in dynamic, fast-paced environments and enjoy collaborating with diverse teams to tackle complex challenges. My adaptability allows me to quickly learn and integrate new technologies and methodologies into my work. Whether it's building software solutions or using data-driven approaches, I am committed to developing high-quality, impactful projects that benefit society. <br/><br/>I am eager to continue growing in these areas and making meaningful contributions that improve lives and advance technology for the greater good.</p>
            </div>
            
        </div>
      
    </div>
  )
}

export default Profile
