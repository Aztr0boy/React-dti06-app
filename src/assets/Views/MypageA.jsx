import React from 'react'
import Hello from '../ImgA/Hello.png'
import Profile from '../ImgA/Profile.png'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


export default function MypageA() {
  return (
    <>
      <div style={{fontFamily : 'Monomaniac One'}} className='w-full min-h-screen flex flex-col item-center bg-black'>
        {/* ส่วนที่ 1 เมนู*/}
        <div className='w-10/12 mx-auto flex mt-15 items-center'>
          <div className='flex-1 flex gap-10 text-2xl'>
            <a href='#' className='text-white'> Portfolio </a> 
            <a href='#' className='text-white'> About </a>
            <a href='#' className='text-white'> Get In tpuch </a> 
          </div>  
          <div className='flex-1 flex items-center'>
            <img src={Hello} alt='hello' className='w-25 h-auto' />
          </div>
          <div className='flex1 text-white flex gap-5 justify-end text-2xl '>
            <FaGithub />
            <FaInstagram />
            <FaSquareXTwitter />
            <FaLinkedin />
          </div>
        </div>
        {/* ส่วนที่ 2 ข้อความ*/}
            <div className='flex flex-col mt-30 text-white items-center'>
              <h1 className='text-4xl'>Somrak Sudyodjing</h1>
              <h1 className='text-3xl text-[#91FFB2]'>Freelance Web Developer</h1>
              <h1 className='text-2xl mb-6'>Based In Thailand</h1>
            </div>
        {/* ส่วนทีี่ 3 รูป*/}    
        <div className='flex justify-center'>
            <div className='relative w-65 h-65 rounded-full border-4 border-[#01d5a2] flex items-center justify-center'>
              < img 
                  src= {Profile}
                  alt='Profle'
                  className='w-60 h-60 object-cover rounded-full'/>
            </div>
        </div>
      </div>
    </>
  )
}
