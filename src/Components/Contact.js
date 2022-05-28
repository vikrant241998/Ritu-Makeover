import React, { useState } from "react";
import {db} from './firebase'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';



export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")


const handleSubmit = (e) =>{
    e.preventDefault();

    db.collection('contacts').add({
      name: name,
      email: email,
      mobile: mobile,
      subject: subject,
      message: message,
    })
    .then(()=>{
      alert("Message has been submited, Thank You ☺")
    })
    .catch((error)=>{
      alert(error.message);
    });
    setName('')
    setEmail('')
    setMobile('')
    setSubject('')
    setMessage('')

};

  return (
    <>    

      <div className="map-wrapper">
        <div className="map-location">
          <h1 className="cont-top"> 🤙 Contact Us For Makeup Query </h1>
          <h2>Ritu Makeover</h2>
          <h2>Professional Makeup Artist</h2>
          <h2>Certified By Lakme Academy Powered By Aptech</h2>
          {/* <img src="../images/cont_img_01.jpg" alt="logo" /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448183.7390767287!2d76.81307223784442!3d28.646677258361485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1653567333618!5m2!1sen!2sin"
            frameBorder="0"
          ></iframe>
        </div>
      </div>

      <div className="contact-Box">
        <div className="row">
          <div className="contact-cols">
            <div>
              <img src="../images/home.png" alt="logo" />
              <span>
                <h5> Address</h5>
                <p>Jahangir Puri, New Delhi 110033</p>
              </span>
            </div>

            <div>
              <img src="../images/contact.png" alt="logo" />
              <span>
                <h5>Contact US</h5>
                <p>+91 9599733765</p>
              </span>
            </div>

            <div>
              <img src="../images/email.png" alt="logo" />
              <span>
                <h5>Email us your query</h5>
                <p>ritumakeover@gmail.com</p>
              </span>
            </div> 
          
          
          </div>

          <div className="contact-cols">
          <form className='form' onSubmit={handleSubmit}>


              <input type="text" id="name" placeholder="Enter Your Name" required value={name} onChange={(e)=> setName(e.target.value)} />

              <input type="text" id="mobile" placeholder="Enter Your Contact Number" required value={mobile} onChange={(e)=> setMobile(e.target.value)} />
              
              <input type="email" id="email" placeholder="Enter Your Email Address" required value={email} onChange={(e)=> setEmail(e.target.value)} />
              
              <input type="text" id="subject" placeholder="Enter Your Subject" required value={subject} onChange={(e)=> setSubject(e.target.value)}/>

              <textarea rows="8" id="message" placeholder="Type Message Here..." value={message} onChange={(e)=> setMessage(e.target.value)}/>

              <div className="btn-box">
                <button id="contact-btn" type="submit"> Send Message </button>
                
              </div>
            </form>
          </div>
        </div>

        <div className="contact-icons">          
            <ul>
            <li>
              <a href="https://www.facebook.com/"> <FaFacebookF /> </a>
            </li>
            <li>
              <a href="https://www.instagram.com/"> <FaInstagram /> </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/"> <FaLinkedinIn /> </a>
            </li>
            <li>
              <a href="https://www.twitter.com/"> <FaTwitter /> </a>
            </li>
            </ul>           
            </div>
      </div>
    </>
  );
}
