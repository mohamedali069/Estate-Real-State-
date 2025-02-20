import React from 'react'
import Title from './Title'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testmonials = () => {
  return (
    <motion.div 
    initial={{opacity:0, x:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    viewport={{once:true}}
    
    
    id='Testimonails'>
        <Title text1={'Customer'} text2={'Testimonails'} test3={'Real Stories from Those Who Found Home with Us'}/>
        <div className="flex flex-wrap justify-center gap-8">
            {
                testimonialsData.map((testimonial,index)=>(
                    <div key={index} className='max-w-[340px] border border-gray-300 shadow-lg px-8 rounded py-12
                    text-center mb-8'>
                        <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonial.image} alt={testimonial.alt} />
                        <h2 className='text-xl text-gray-700 font-medium'>
                            {testimonial.name}
                        </h2>
                        <p className='text-gray-500 mb-4 text-sm'>
                            {testimonial.title}
                        </p>
                        <div className='flex justify-center gap-1 text-red-500 mb-4'>
                            {Array.from({length: testimonial.rating}, (item,index) =>(
                                <img key={index} src={assets.star_icon} alt='icon' />
                            ))}
                        </div>
                        <p className='text-gray-600'>
                            {testimonial.text}
                        </p>

                    </div>
                ))
            }
        </div>
      
    </motion.div>
  )
}

export default Testmonials
