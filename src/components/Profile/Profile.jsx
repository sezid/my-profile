import React from 'react'
import './Profile.css'
import { assets, profile } from '../../assets/images'

const Profile = () => {
  return (
    <div className='profile'>
        <div className="profile-box">
            {/* <img src={assets.plus} alt="" /> */}
            <div className="profile-info">
                <h1>Syed Saleh Mohammad Sajid</h1>
                <p>Phone: +8801775289400</p>
                    <div className='contact'>
                        <img src={assets.github} alt="" />
                        
                        <a href="mailto:your-email@example.com?subject=Hello&body=Hi%20there,%20I%20wanted%20to%20reach%20out%20to%20you.">
                            <img src={assets.email} alt="" />
                        </a>
                        <img src={assets.linkedin} alt="" /> {/*plan to add icons to make it dynamic*/}
                    </div>
                    <div className="location">
                        <img src={assets.location} alt="" />
                        <p>Dhaka, Bangladesh</p>
                    </div>
            </div>
            <div className="profile-info-sum">
                <h2>Summary</h2>
                <p>As a Computer Science student, I'm deeply passionate about Data Science and Artificial Intelligence (AI). I'm excited about using data to solve real-world problems and make a positive impact. My strong technical skills in programming and algorithms, combined with my enthusiasm for innovation, drive my interest in these fields.<br/><br/>I thrive in dynamic environments and enjoy collaborating with diverse teams to tackle challenges. Adaptability and flexibility are key to my approach, allowing me to quickly learn and adapt to new technologies and methodologies.<br/><br/>My goal is to contribute to advancements in AI and Data Science that benefit society. I'm committed to delivering high-quality work with integrity and attention to detail, and I'm eager to continue growing and making meaningful contributions in these exciting fields.</p>
            </div>
            
        </div>
      
    </div>
  )
}

export default Profile
