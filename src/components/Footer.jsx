import React from 'react'
import './Footer.css'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className='footerContainer'>
      <div className='footerWrapper'>
        <div className='footerLogo'>
          <h1><a href='/'><span style={{ color: 'yellow' }}>Portfolio</span>.</a></h1>
        </div>
        <div className='impLinks'>
          <div className='linkss'>
            <h3>Quick Links</h3>
            <div className='qlink'>
              <a href="#project">Projects</a>
              <a href="#work">Contant me</a>
              <a href="#about">About</a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div className="container">
          <div className="last-footer">
            <p> © 2024, Created by Alyaraj Srivastava
            </p>
          </div>
        </div>
        <div className="socialLinksIcons">
          <a href='https://github.com/Alyaraj-frontwebdev' target='_blank'><span><FaGithub /></span></a>
          <a href='https://www.linkedin.com/in/alyaraj-srivastava-727692238/' target='_blank'><span><FaLinkedin /></span></a>
          <a href='https://x.com/alyaraj_s' target='_blank'><span><FaXTwitter /></span></a>
          <a href='https://www.youtube.com/@CodeMedia00' target='_blank'><span><FaYoutube /></span></a>
        </div>
      </div>
    </div>
  )
}

export default Footer