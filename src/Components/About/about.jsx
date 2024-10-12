import React from 'react'
import './About.css'
import theam_patern from '../../assets/theam_patern.png'
import profile_pic1 from '../../assets/profile_pic1.png'

const about = () => {
  return (
    <div id='about' className="about">
         <div className="about-title">
            <h1>About Me</h1>
            <img src={theam_patern} alt="" />
         </div>
         <div className="about-section">
            <div className="about-left">
                <img src={profile_pic1} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a dedicated and enthusiastic Java Full Stack Developer, ready to embark on my professional journey in the world of software development. Having recently completed my course from CDAC Bangalore, I am equipped with a strong foundation in both front-end and back-end technologies.</p>
                    <p>My passion for development is reflected in the projects I’ve worked on during my studies, where I applied technologies like Java, Spring Boot, ReactJS, and MySQL. I bring enthusiasm, a commitment to learning, and a drive to contribute to impactful projects that help businesses grow and succeed.</p>
                </div>
                <div className="about-skils">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React Js</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Java</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>Spring Boot</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>SQL</p><hr style={{width:"60%"}} /></div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default about