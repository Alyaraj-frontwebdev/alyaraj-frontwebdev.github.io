import React from 'react'
import project_img from '../assets/Screenshot 2024-11-28 at 8.00.53 PM.png'
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

function Project2() {
    return (
        <div className='projectContainer'>
            <motion.h1 className='project_heading' variants={variant} initial="initial" whileInView="final">Project 2</motion.h1>
            <motion.div className="project" variants={variant} initial="initial" whileInView="final">
                <motion.div className="video" variants={variant} >
                    <motion.img src={project_img} width='500px' height='500px' />
                </motion.div>
                <motion.div className="text" variants={variant} >
                    <motion.h1 variants={variant} >An Awesome Tic-Tac-Toe Game</motion.h1>
                    <motion.div className='kbd'>
                    <motion.kbd variants={variant}>HTML</motion.kbd>
                    <motion.kbd variants={variant}>CSS</motion.kbd>
                    <motion.kbd variants={variant}>JavaScript</motion.kbd>
                    </motion.div>
                    <motion.p variants={variant} >
                        Created an awesome tic-tac-toe game that is fun to play!
                    </motion.p>
                    <motion.a href='https://github.com/Alyaraj-frontwebdev/Tic-Tac-Toe' target='_blank' variants={variant} ><FaExternalLinkAlt /> Code Link</motion.a>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Project2