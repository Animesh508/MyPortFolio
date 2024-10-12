import React from 'react'
import './MyContact.css'
import theam_patren from '../../assets/theam_patern.png'
import mail from '../../assets/mail.svg'
import phone from '../../assets/phone.svg'
import location from '../../assets/location.svg'

const mycontact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "0e0c4980-f870-4d34-8e7e-b476a58d9140");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            alert(res.message)
          
        }
      };


  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theam_patren} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                    <img src={mail} alt="" />
                    <p>animeshpatil43@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={phone}alt="" />
                        <p> +91 9284107030</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location} alt="" />
                        <p>Bengaluru, India</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your Name' name='name' />

                <label htmlFor="">your Email</label>
                <input type="email" placeholder='Enter your Email' name='email' />

                <label htmlFor="">Write your Message here</label>
                <textarea name="" rows="8" placeholder='Enter Your Message'></textarea>

                <button type='submit' className='Contact-Submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default mycontact