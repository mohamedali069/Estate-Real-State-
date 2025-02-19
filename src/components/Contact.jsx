import React from 'react'
import Title from './Title'

const Contact = () => {
  return (
    <div className=''>
      <Title text1={'Contact'} text2={'With Us'} test3={'Ready to Make a Move? Let’s Build Your Future Together'} />
      <form className='max-w-2xl mx-auto text-gray-600 pt-8'>
        <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>
                Your Name
                <input className='w-full px-4 py-3 border rounded border-gray-300 mt-2' type="text" 
                placeholder='Your Name' name='name' required/>
            </div>
            <div className='w-full md:w-1/2 text-left md:pl-4'>
                Your Email
                <input className='w-full px-4 py-3 border rounded border-gray-300 mt-2' type="email" 
                placeholder='Your Email' name='email' required/>
            </div>
        </div>
        <div className='my-6 text-left'>
                Message
                <textarea className='w-full px-4 py-3 h-48 border rounded border-gray-300 mt-2 resize-none' 
                placeholder='Your Messege' name='messege' required/>
          </div>
          <button className='px-12 py-2 mb-10 bg-blue-600 hover:bg-blue-500 text-white rounded cursor-pointer'>Send Message</button>


      </form>
    </div>
  )
}

export default Contact
