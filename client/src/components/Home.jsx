import React from 'react'
import {Link} from 'react-scroll'
function Home() {
  return (
    <div className='' id='home'>
      <div className=''>
        <img className='h-screen w-full relative' src="https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg" alt="" />
        <div className='absolute bottom-60 left-20 text-white'>
          <h2 className='text-4xl font-bold'>Welcome to our coffee shop</h2>
          <h5 className='my-4'>Lorem ipsum dolor sit amet consectetur.</h5>
          <Link smooth={true} to="menu" className='hover:bg-white hover:text-black font-semibold px-4 py-2 rounded-xl cursor-pointer bg-transparent text-white border-2 border-white'>Our Menu</Link>
        </div>
      </div>
      
    </div>
  )
}

export default Home