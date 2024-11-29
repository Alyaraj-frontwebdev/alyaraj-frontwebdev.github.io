import React from 'react'
import video from '../assets/MobiArmour.mp4'
import "./Projects.css"
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from 'framer-motion';

const variant = {
    initial: {
        x: -100,
        opacity: 0
    },
    final: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1.5,
            staggerChildren: 0.1
        }
    }
}

function Projects() {
    return (
        <div className='projectContainer'>
            <motion.h1 className='project_heading' variants={variant} initial="initial" whileInView="final">Project 1</motion.h1>
            <motion.div className="project" variants={variant} initial="initial" whileInView="final">
                <motion.div className="video" variants={variant} >
                    <motion.video autoPlay muted playsInline={true} loop width="500px" height="500px" variants={variant} >
                        <source src={video}></source>
                    </motion.video>
                </motion.div>
                <motion.div className="text" variants={variant} >
                    <motion.h1 variants={variant} >Website for Cybersecurity App 'MobiArmour'</motion.h1>
                    <motion.div className='kbd'>
                    <motion.kbd variants={variant}>CSS</motion.kbd>
                    <motion.kbd variants={variant}>ReactJS</motion.kbd>
                    <motion.kbd variants={variant}>Bootstrap</motion.kbd>
                    </motion.div>
                    <motion.p variants={variant} >
                        Created a robust website for 'MobiArmour', a cybersecurity app, ensuring user-friendly interface and top-notch security features.
                    </motion.p>
                    <motion.a href='https://armour.mobi/' target='_blank' variants={variant} ><FaExternalLinkAlt /> View Project</motion.a>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Projects