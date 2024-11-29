import React from 'react'
import './Hero.css'
import { ReactTyped } from "react-typed";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import resume from '../assets/My Resume.pdf'

import { motion } from 'framer-motion'

const textVarients = {
  initial: {
    x: -100,
    opacity: 0
  },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  }
}

function Hero() {
  return (

    <div className="row" id='heroRow'>
      <div className="col-10 mx-auto">
        <div className='hero'>
          <motion.div className="textContainer" variants={textVarients} initial="initial" whileInView="final">
            <motion.h1 variants={textVarients}>
              Hello, I am
            </motion.h1>
            <motion.h1 variants={textVarients}>Alyaraj Srivastava,</motion.h1>
            <motion.h1 variants={textVarients}>{'a' + ' '}
              <ReactTyped
                strings={['Front-end Web Developer', 'YouTuber', 'College Student']}
                typeSpeed={50}
                backSpeed={60}
                style={{ color: 'yellow' }}
                loop
              />
            </motion.h1>
            <motion.div className="linksContainer" variants={textVarients}>
              <motion.div className="button" variants={textVarients}>
                <motion.a href='#work' className='email_btn' variants={textVarients}>Email me</motion.a>
                <motion.a href={resume} className='resume_btn' target='_blank' variants={textVarients}>Resume</motion.a>
              </motion.div>
              <motion.div className="links" variants={textVarients}>
                <motion.a href="https://github.com/Alyaraj-frontwebdev" title='GitHub' target='_blank' variants={textVarients}><FaGithub /></motion.a>
                <motion.a href="https://www.linkedin.com/in/alyaraj-srivastava-727692238/" title='Linkedin' target='_blank' variants={textVarients}><FaLinkedin /></motion.a>
                <motion.a href="https://x.com/alyaraj_s" title='X' target='_blank' variants={textVarients}><FaXTwitter /></motion.a>
                <motion.a href="https://www.youtube.com/@CodeMedia00" title='YouTube' target='_blank' variants={textVarients}><FaYoutube /></motion.a>
              </motion.div>
            </motion.div><br />
          </motion.div>

          <div className="imgContainer">
          
          </div>
        </div>
      </div>
    </div>

  )
}

export default Hero