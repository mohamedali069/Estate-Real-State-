import React from 'react'

const Title = ({text1,text2,test3}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>{text1} <span
              className='underline underline-offset-4 decoration-1 under font-light'>{text2}</span></h1>
       <p className='text-gray-500 max-w-80 text-center mb-8'>{test3}</p>
    </div>
  )
}

export default Title
