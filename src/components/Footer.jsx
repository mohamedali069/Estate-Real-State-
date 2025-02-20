import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-gray-900 pt-10 px-4 md:px-20 lg:px-20 w-full
    overflow-hidden' id='Footer'> 
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark} alt="logo" />
                <p className='text-gray-400 mt-4'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text.
                </p>
            </div>
            <div className='w-full md:w-1/5'>
                <h3 className='text-white text-lg font-bold mb-4'>Company</h3>

                <ul className='flex flex-col gap-2 text-gray-400'>
                    <li><a href="#Header" className='cursor-pointer hover:text-white'>Home</a></li>
                    <li><a href="#About" className='cursor-pointer hover:text-white'>About US</a></li>
                    <li><a href="#Contact" className='cursor-pointer hover:text-white'>Contact Us </a></li>
                    <li><a href="#" className='cursor-pointer hover:text-white' >Privacy policy</a></li>
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
               <h3 className='text-white text-lg font-bold mt-8 md:mt-0 mb-4'>Subscribe to our newsletter</h3>
               <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles, and resources, 
                   sent to your inbox weekly.
               </p>
                <div className="flex gap-2">
                    <input className='p-2 border rounded bg-gray-700 text-gray-400
                     border-gray-700 focus:outline-none w-full md:w-auto' type="email" 
                     placeholder='Enter Your Email' name='email' required/>
                     <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
                </div>
            </div>
        </div>
        <div className="border-t border-gray-700 text-center py-4 mt-10 text-gray-500">
        Copyright 2024 © GreatStack. All Right Reserved.

        </div>
      
    </div>
  )
}

export default Footer
