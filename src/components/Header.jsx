import React from 'react'
import NavBar from './NavBar'
import { motion } from "framer-motion"


const Header = () => {
  return (
    <div id='Header' className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full
     overflow-hidden' style={{backgroundImage:"url('/header_img.png')"}}>
        <NavBar/>
        <motion.div 

        initial={{opacity:0, y:100}}
        transition={{duration:1.5}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        className='container mx-auto text-center py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h2 className='text-5xl sm:text-6xl md:text-7xl inline-block
            max-w-3xl pt-20 font-semibold'>Explore homes that fit your dreams</h2>
            <div className='space-x-6 mt-16 '>
                <a className='border border-white rounded px-8 py-3' href="#Projects">Projects</a>
                <a className='bg-blue-500 rounded px-8 py-3' href="#Contact">Contact Us</a>
            </div>
        </motion.div>

      
    </div>
  )
}

export default Header
