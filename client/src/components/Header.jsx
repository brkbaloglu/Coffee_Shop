import React from 'react'
import {Link} from 'react-scroll'

function Header() {
  return (
    <div className='flex items-center justify-around sticky top-0 h-[80px] z-10 bg-white'>
      <div>
        <p className='font-bold text-2xl'>COFFEE</p>
      </div>
      <div>
        <ul className='flex items-center justify-between'>
          <li className='mx-1 cursor-pointer font-semibold hover:bg-black hover:text-white px-4 py-2 rounded-xl'><Link smooth={true} to="home">Home</Link></li>
          <li className='mx-1 cursor-pointer font-semibold hover:bg-black hover:text-white px-4 py-2 rounded-xl'><Link smooth={true} to="about">About</Link></li>
          <li className='mx-1 cursor-pointer font-semibold hover:bg-black hover:text-white px-4 py-2 rounded-xl'><Link smooth={true} to="menu">Menu</Link></li>
          <li className='mx-1 cursor-pointer font-semibold hover:bg-black hover:text-white px-4 py-2 rounded-xl'><Link smooth={true} to="reviews">Reviews</Link></li>
          <li className='mx-1 cursor-pointer font-semibold hover:bg-black hover:text-white px-4 py-2 rounded-xl'><Link smooth={true} to="contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header