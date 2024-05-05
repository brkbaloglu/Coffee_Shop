import React from 'react'
import { CiCoffeeCup } from "react-icons/ci";
import { GiCakeSlice, GiSandwich } from "react-icons/gi";
import { LuCroissant } from "react-icons/lu";
import { FaCookieBite } from "react-icons/fa";

function About() {
  return (
    <div id='about'>
      <div className='grid grid-cols-5'>
        <div className='border-2 px-20 py-4 my-10 rounded-xl border-black mx-10 flex items-center justify-center flex-col'>
          <CiCoffeeCup />
          <p>Coffee</p>
        </div>
        <div className='border-2 px-20 py-4 my-10 rounded-xl border-black mx-10 flex items-center justify-center flex-col'>
          <GiCakeSlice />
          <p>Cake</p>
        </div>
        <div className='border-2 px-20 py-4 my-10 rounded-xl border-black mx-10 flex items-center justify-center flex-col'>
          <GiSandwich/>
          <p>Sandwich</p>
        </div>
        <div className='border-2 px-20 py-4 my-10 rounded-xl border-black mx-10 flex items-center justify-center flex-col'>
          <LuCroissant />
          <p>Croissant</p>
        </div>
        <div className='border-2 px-20 py-4 my-10 rounded-xl border-black mx-10 flex items-center justify-center flex-col'>
          <FaCookieBite />
          <p>Cookie</p>
        </div>
      </div>
    </div>
  )
}

export default About