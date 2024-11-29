import React, { useState } from 'react'
import './About.css'
import image from '../assets/portfolio_img.png'
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from 'framer-motion'
import { FaHtml5, FaReact } from 'react-icons/fa6';

function About() {

    const [toggleTab, setToggleTab] = useState(1);

    const handleTab = (index) => {
        setToggleTab(index);

    }

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
    
    const contentVarients = {
        first: {
            x:-200,
            opacity:0
        },
        last: {
            x:0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1
              }
        }
    }

    return (
        <>
            <div className='about_container'>
                <motion.div className='about_wrapper'  variants={textVarients} initial='initial' whileInView='final'>
                    <motion.div className='img_container' variants={textVarients} initial='initial' whileInView='final'>
                        <img src={image} />
                    </motion.div>
                    <div className='text_container'>
                        <motion.h1 variants={contentVarients} initial='first' whileInView='last'>About me</motion.h1>
                        <motion.p variants={contentVarients} initial='first' whileInView='last'>Hello! I’m a passionate Front-End Web Developer with a strong foundation in HTML, CSS, JavaScript, ReactJS, and Framer Motion. I love crafting visually appealing and highly interactive user interfaces that provide seamless user experiences.

                            One of my notable projects includes developing a website for a cybersecurity platform called MobiArmour, where I utilized my skills in HTML, CSS, and React to create a dynamic and functional web presence. This project not only strengthened my technical expertise but also enhanced my understanding of delivering tailored solutions to meet specific user needs.

                            I thrive in an ever-evolving tech landscape, and I’m always eager to learn about new tools, frameworks, and methodologies to refine my craft. My enthusiasm for technology drives me to stay updated with the latest trends and continually improve my skill set.

                            When I’m not coding, you’ll often find me exploring innovative design ideas, reading up on emerging tech trends, or brainstorming creative solutions to complex challenges. If you’re looking for someone who’s dedicated to delivering modern, responsive, and impactful web designs, I’d love to connect and collaborate!</motion.p>
                        <motion.div variants={contentVarients} initial='first' whileInView='last'>
                            <div className='tab_header'>
                                <a className={toggleTab === 1 ? 'tab_title active' : 'tab_title'} onClick={() => handleTab(1)}> My Skills </a>
                                <a className={toggleTab === 2 ? 'tab_title active' : 'tab_title'} onClick={() => handleTab(2)}>My Achievments </a>
                            </div>
                            <div className={toggleTab === 1 ? 'content active_content' : 'content'}>
                                <div className='row-1'>
                                    <div className="skill">
                                        <FaHtml5 style={{fontSize: '4rem', color:'red'}}/>
                                        <p>HTML</p>
                                    </div>
                                    <div className="skill">
                                        <FaCss3Alt style={{fontSize: '4rem', color: 'blue'}}/>
                                        <p>CSS</p>
                                    </div>
                                    <div className="skill">
                                        <FaJsSquare style={{fontSize: '4rem', color: 'yellow'}}/>
                                        <p>JavaScript</p>
                                    </div>
                                </div>
                                <div className="row-2">
                                    <div className="skill">
                                        <FaReact style={{fontSize: '4rem', color: 'lightblue'}}/>
                                        <p>ReactJS</p>
                                    </div>
                                    <div className="skill">
                                        <RiTailwindCssFill style={{fontSize: '4rem', color:'aqua'}}/>
                                        <p>
                                            TailwindCSS
                                        </p>
                                    </div>
                                    <div className="skill">
                                        <FaBootstrap style={{fontSize: '4rem', color: 'blueviolet'}}/>
                                        <p>Bootstrap</p>
                                    </div>
                                </div>
                            </div>
                            <div className={toggleTab === 2 ? 'content active_content' : 'content'}>
                                <div className='achievement'>
                                <p>
                                    Secured rank 315 out of 2525 participants in HPE
                                    CodeWars 2021 India Edition conducted by Hewlett
                                    Packard Enterprise (HPE) held on April 10, 2021.
                                </p>
                                <a style={{display: 'flex', alignItems: 'center'}} href='https://drive.google.com/file/d/1c9bpiPrjyeuBvMa234FXw48ww_7ZwgFj/view'><FaExternalLinkAlt/> View Achievement</a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </motion.div>
            </div>
        </>
    )
}

export default About