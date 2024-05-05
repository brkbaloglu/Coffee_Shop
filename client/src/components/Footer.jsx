import React from "react";
import {Link} from 'react-scroll'
import { FaArrowRight } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="grid grid-cols-3">
        <div>
          <p className="font-bold text-4xl text-center">COFFEE</p>
        </div>
        <div className="border-x-2 border-black flex items-center justify-center flex-col">
          <ul>
            <li><Link to="" smooth={true} className="flex items-center cursor-pointer hover:translate-x-4 duration-300"><FaArrowRight className="mx-2" />Payment Options</Link></li>
            <li><Link to="" smooth={true} className="flex items-center cursor-pointer hover:translate-x-4 duration-300"><FaArrowRight className="mx-2" />Management</Link></li>
            <li><Link to="" smooth={true} className="flex items-center cursor-pointer hover:translate-x-4 duration-300"><FaArrowRight className="mx-2" />Business Partners</Link></li>
            <li><Link to="" smooth={true} className="flex items-center cursor-pointer hover:translate-x-4 duration-300"><FaArrowRight className="mx-2" />Protection of Personal Data</Link></li>
          </ul>
        </div>
        <div className="flex items-center justify-center flex-col">
          <ul>
            <li><Link to="home" smooth={true} className="flex items-center cursor-pointer hover:translate-x-4 duration-300"><FaArrowRight className="mx-2" />Home</Link></li>
            <li><Link to="about" smooth={true} className="flex items-center cursor-pointer hover:translate-x-4 duration-300"><FaArrowRight className="mx-2" />About</Link></li>
            <li><Link to="menu" smooth={true} className="flex items-center cursor-pointer hover:translate-x-4 duration-300"><FaArrowRight className="mx-2" />Menu</Link></li>
            <li><Link to="reviews" smooth={true} className="flex items-center cursor-pointer hover:translate-x-4 duration-300"><FaArrowRight className="mx-2" />Reviews</Link></li>
            <li><Link to="contact" smooth={true} className="flex items-center cursor-pointer hover:translate-x-4 duration-300"><FaArrowRight className="mx-2" />Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="my-4">
        <p className="px-10 py-2 bg-black text-white">&copy; Copyright 2024 | All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
