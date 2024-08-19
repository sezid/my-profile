import React from 'react'
import './Profile.css'
import { assets } from '../../assets/images'

const Profile = () => {
  return (
    <div className='profile'>
        <div className="profile-box">
            {/* <img src={assets.plus} alt="" /> */}
            <div className="profile-info">
                <h1>Syed Saleh Mohammad Sajid</h1>
                <h4>Phone: 01775289400</h4>
                    <div className='contact'>
                        <img src={assets.github} alt="" />
                        <img src={assets.email} alt="" />
                        <img src={assets.linkedin} alt="" /> {/*plan to add icons to make it dynamic*/}
                    </div>
                    <div className="location">
                        <img src={assets.location} alt="" />
                        <h4>Dhaka, Bangladesh</h4>
                    </div>
            </div>
            <div className="profile-info-sum">
                <h2>Summary</h2>
                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
            </div>
            
        </div>
      
    </div>
  )
}

export default Profile
