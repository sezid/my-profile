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
                <h4>BSc in Computer Science<br/>BRAC University</h4>
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
                <p>I'm deeply passionate about Data Science and Artificial Intelligence (AI). I'm excited about using data to solve real-world problems and make a positive impact. My strong technical skills in programming and algorithms, combined with my enthusiasm for innovation, drive my interest in these fields.<br/><br/>I thrive in dynamic environments and enjoy collaborating with diverse teams to tackle challenges. Adaptability and flexibility are key to my approach, allowing me to quickly learn and adapt to new technologies and methodologies.<br/><br/>My goal is to contribute to advancements in AI and Data Science that benefit society. I'm committed to delivering high-quality work with integrity and attention to detail, and I'm eager to continue growing and making meaningful contributions in these exciting fields.</p>
            </div>
            
        </div>
      
    </div>
  )
}

export default Profile
