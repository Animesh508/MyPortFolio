import React from 'react'
import './My_work.css'
import theam_patern from '../../assets/theam_patern.png'
import mywork_data from '../../assets/mywork_data'

const my_work = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theam_patern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index)=>{
          return <img key={index} src={work.w_img} alt="" />
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
      </div>
    </div>
  )
}

export default my_work