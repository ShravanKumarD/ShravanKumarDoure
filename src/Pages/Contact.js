import React from 'react';
import Header from '../components/Header';
import img from "./../assets/shravab.jpg";


export default function Contact() {
  return (
    <>
      <Header />
      <div className="contact-container">
        <div className="user-info">
          <div className="image-container">
            <img src={img} className='user-img' alt='user' />
          </div>
          <p><i className='fa fa-mobile-alt' /> +91 8008248021</p>
          <p>
            <i className='fa fa-envelope' />
            <a href='mailto:shravankumardoure@gmail.com' style={{ textDecoration: "none" }}>
              shravankumardoure@gmail.com
            </a>
          </p>
          <p><i className='fa fa-map-marker' /> Hyderabad</p>
          <p>
            <i className='fa fa-file-pdf' />
            <a href='https://drive.google.com/file/d/1japeZu1vZGJxf7MOaLxvl1a0RpsbB382/view?usp=sharing' download rel='noopener noreferrer' style={{ textDecoration: "none" }}>
              Resume
            </a>
          </p>

          <p>Driven by a passion for building efficient and scalable applications, I'm excited to leverage my expertise in full-stack development and AWS to contribute to innovative projects. 
            As I continue honing my skills and expanding my horizons, 
            I'm eager to take on new challenges and collaborate with teams that share my enthusiasm for creating impactful,
             user-focused solutions.</p>
             <p className='empty'></p>
             <p className='empty'></p>
             <p className='empty'></p>
        </div>
      </div>
    </>
  );
}
