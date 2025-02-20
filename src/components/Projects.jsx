import React, { useEffect, useState } from 'react'
import Title from './Title'
import { assets, projectsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Projects = () => {
    const [currentIndex,setCurrentIndex] = useState (0);
    const [cardsToShow,setCardsToShow] =useState(1);


    useEffect(() => {
        const updateCardsToShow =() => {
            if(window.innerWidth >= 1024){
                setCardsToShow(projectsData.length);
            }else{
                setCardsToShow(1)
            }
        };
        updateCardsToShow();

        window.addEventListener('resize', updateCardsToShow);
        return ()=> window.removeEventListener('resize',updateCardsToShow);
    },[])




    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1 ) % projectsData.length)
    }

    const prevProject = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length -1 : prevIndex - 1)
    }



  return (
    <motion.div
    initial={{opacity:0, x:-200}}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    viewport={{once:true}}
    
    
    id='Projects' className='container w-full mx-auto my-20  py-4 pt-20 px-6 md:px-20 lg:px-32  overflow-hidden'>
      <Title text1={'Projects'} text2={'Completed'} test3={'Crafting Spaces, Building Legacies—Explore Our Portfolio'} />
      {/*slider buttons */}
      <div className='flex items-center justify-end'>
        <button onClick={prevProject}
        className='p-3 cursor-pointer bg-gray-200 rounded mr-2' aria-label='Previous Project'>
            <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button onClick={nextProject}
        className='p-3 cursor-pointer bg-gray-200 rounded mr-2' aria-label='Next Project'>
            <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>
      {/*------project slider container */}
      <div className='overflow-hidden mt-4'>
        <div className='flex gap-8 transition-transform duration-500 ease-in-out'
        style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`}}>
            {
                projectsData.map((project,index) => (
                    <div key={index} className='relative w-full flex-shrink-0 sm:w-1/4'>
                        <img className='w-full h-auto mb-14' src={project.image} alt={project.title} />
                        <div className='absolute left-0 right-0 bottom-5 flex justify-center '>
                            <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-sm'>
                               <h2 className='text-xl font-semibold to-gray-800'>
                                  {project.title}
                                </h2>
                                <p className='text-gray-500 text-sm'>
                                    {project.price} | {project.location}
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    
                ))
            }
        </div>

      </div>


    </motion.div>
  )
}

export default Projects
