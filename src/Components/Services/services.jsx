import React from 'react'
import './Services.css'
import theam_patern from '../../assets/theam_patern.png'
import service_data from '../../assets/service_data'

function services() {
  return (
    <div id='service' className='services'>
        <div className="service-title">
            <h1>My Services</h1>
            <img src= {theam_patern}alt="" />
        </div>
        <div className="services-container">
            {service_data.map((service, index)=>{
                return <div key={index} className="services-format">
                    <h3>{services.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className='services-readmore'>
                        Read more
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default services