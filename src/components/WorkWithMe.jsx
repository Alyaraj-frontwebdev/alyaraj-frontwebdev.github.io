import React, { useState } from 'react'
import './WorkWithMe.css'
import {motion} from 'framer-motion'
import { IoMailOutline } from "react-icons/io5";

const variants = {
    initial:{
        x:-100,
        opacity:0,
        y:50,
    },
    final:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren: 0.1
        }
    }
}


function WorkWithMe() {
    
    const [state, setState] = useState(
        {
            message: ''
        }
    )

    const onChange = (e) =>{
        setState({
            message: e.target.value
    })
 
    }

  return (
    <div className='wwmContainer'>
        <motion.div className="wwm" variants={variants} initial="initial" whileInView="final">
            <motion.div className="headContainer" variants={variants}>
                <motion.span><IoMailOutline /></motion.span>
                <motion.h1 variants={variants}>Let's work together!</motion.h1>
            </motion.div>
            <motion.div className="formContainer" variants={variants}>
                <motion.form variants={variants}>
                    <motion.input type="text" placeholder='First Name'  variants={variants} />
                    <motion.input type="text" placeholder='Last Name' variants={variants} />
                    <motion.input type="email" placeholder='Email' variants={variants} />
                    <motion.textarea name="" id="txt" placeholder='Write your message...' variants={variants} onChange={onChange}></motion.textarea>
                    <motion.a href={`mailto:alyapriyanshu@gmail.com?subject=Want to work with you&body=${state.message}`} variants={variants} >Submit</motion.a>
                </motion.form>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default WorkWithMe