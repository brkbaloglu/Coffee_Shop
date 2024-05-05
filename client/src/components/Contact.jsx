import React from 'react'

function Contact() {
  return (
    <div id='contact'>
      <h2 className='font-bold text-4xl text-center'>Contact Us</h2>
      <form action="" className='flex items-center justify-center flex-col'>
        <input className='w-[400px] border-2 border-black px-4 py-2 placeholder:text-black my-2 rounded-xl' type="text" name="" placeholder='Enter your name' id="" />
        <input className='w-[400px] border-2 border-black px-4 py-2 placeholder:text-black my-2 rounded-xl' type="email" name="" placeholder='Enter your email' id="" />
        <textarea className='w-[400px] border-2 border-black px-4 py-2 placeholder:text-black my-2 rounded-xl resize-none' name="" placeholder='Enter your message' id="" cols="30" rows="10"></textarea>
        <button className='px-4 py-2 border-2 border-black rounded-xl hover:bg-black hover:text-white' type="submit" >Submit</button>
      </form>
    </div>
  )
}

export default Contact