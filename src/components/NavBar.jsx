import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'

const NavBar = () => {
  const [showMobileMenu,SetShowMobileMenu] = useState(false);

  useEffect(() =>{
    if(showMobileMenu){
        document.body.style.overflow = 'hidden'
    }else{
        document.body.style.overflow = 'auto'
    }
    return () => {
        document.body.style.overflow = 'auto'
    }
  },[showMobileMenu])

  return (
    <div className='w-full absolute top-0 left-0 z-10'>
        <div className='container mx-auto flex items-center justify-between px-6 p-4
         md:px-20 lg:px-32 bg-transparent'>
          <img src={assets.logo} alt="logo" />
          <ul className='hidden  md:flex items-center gap-6 text-white'>
            <li><a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a></li>
            <li><a href="#About" className='cursor-pointer hover:text-gray-400'>About</a></li>
            <li><a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a></li>
            <li><a href="#Testimonail" className='cursor-pointer hover:text-gray-400'>Testimonails</a></li>
          </ul>
          <button className='bg-white rounded-full px-8 py-2 hidden md:block' >Sign up</button>

          <img onClick={() => SetShowMobileMenu(true)} className='w-7 cursor-pointer md:hidden' src={assets.menu_icon} alt="icon" />

        </div>
        {/*----- mobile menu*/}

        <div className={`bg-white md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0' } top-0 left-0 bottom-0
         overflow-hidden transition-all`}>
           <div  className='flex justify-end p-6 cursor-pointer'>
           <img onClick={() => SetShowMobileMenu(false)} className='w-6' src={assets.cross_icon} alt="icon" />
            </div> 
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium text-black'>
            <li><a onClick={() => SetShowMobileMenu(false)} href="#Header" className= 'px-4 py-2 rounded-full inline-block cursor-pointer hover:text-gray-400'>Home</a></li>
            <li><a onClick={() => SetShowMobileMenu(false)} href="#About" className=' px-4 py-2 rounded-full inline-block cursor-pointer hover:text-gray-400'>About</a></li>
            <li><a onClick={() => SetShowMobileMenu(false)} href="#Projects" className=' px-4 py-2 rounded-full inline-block cursor-pointer hover:text-gray-400'>Projects</a></li>
            <li><a onClick={() => SetShowMobileMenu(false)} href="#Testimonails" className=' px-4 py-2 rounded-full inline-block cursor-pointer hover:text-gray-400'>Testimonails</a></li>
          </ul>

        </div>


    </div>
  )
}

export default NavBar
