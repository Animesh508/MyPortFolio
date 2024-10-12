import React from 'react'
import './Footer.css'
import logo2 from '../../assets/logo2.png'
import user_icon from '../../assets/user_icon.svg'

const footer = () => {
  return (
    <div className='Footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo2} alt="" />
                <p>A passionate Java Full Stack Developer with hands-on skills in both front-end and back-end technologies, eager to contribute and grow in a dynamic environment.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">
                    Subscribe
                </div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footre-bootem-left">© 2024 Animesh Patil. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term Of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default footer