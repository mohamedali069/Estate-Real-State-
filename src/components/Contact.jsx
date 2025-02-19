import React from 'react'
import Title from './Title'

const Contact = () => {


    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "9d60bd88-4319-48d7-b89b-cd4548993fa7");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };




  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
      <Title text1={'Contact'} text2={'With Us'} test3={'Ready to Make a Move? Let’s Build Your Future Together'} />
      <form onClick={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
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
