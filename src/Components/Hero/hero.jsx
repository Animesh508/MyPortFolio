import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const hero = () => {
  return (
    <div id='home' className="hero">
        <img src={profile} alt="" />
        <h1><span>I am Animesh Patil,</span> Java Full Stack Developer based in India</h1>
        <p>A passionate Java full-stack developer fresher, ready to tackle both front-end and back-end challenges, crafting seamless digital solutions.</p>
        <div className="hero-Action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offSet={50} href = '#contact'>Connect with me </AnchorLink></div>
            <div className="hero-reaume">My Resume</div>
        </div>

    </div>
  )
}

export default hero