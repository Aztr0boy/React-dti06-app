import React from 'react'
import { Link } from 'react-router-dom'
import bg1 from "../ImgD/bg1.png"
import bg2 from "../ImgD/bg2.png"
import bg3 from "../ImgD/bg3.png"
import brand from "../ImgD/brand.png"
import bg from "../ImgD/bg.png"
import offer from "../ImgD/offer.png"
import bun1 from "../ImgD/bun1.png"
import bun2 from "../ImgD/bun2.png"
import bun3 from "../ImgD/bun3.png"
import bun4 from "../ImgD/bun4.png"
import bun5 from "../ImgD/bun5.png"
import bun6 from "../ImgD/bun6.png"
import dessert1 from "../ImgD/dessert1.png"
import dessert2 from "../ImgD/dessert2.png"
import dessert3 from "../ImgD/dessert3.png"
import dessert4 from "../ImgD/dessert4.png"
import dessert5 from "../ImgD/dessert5.png"
import dessert6 from "../ImgD/dessert6.png"
import dessert01 from "../ImgD/dessert01.png"
import dessert02 from "../ImgD/dessert02.png"
import dessert03 from "../ImgD/dessert03.png"
import dessert001 from "../ImgD/dessert001.png"
import dessert002 from "../ImgD/dessert002.png"

import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

export default function MyPageD() {
  return (
    <>
      <div className="w-full h-[1250px]  bg-cover bg-center flex flex-col " style={{ backgroundImage: `url(${bg1})` }}>
        <div className="flex ml-25 mt-10">
          <Link to="/"><img src={brand} alt="" className='w-[120px] ' /></Link>
          <div className='flex items-center gap-10 text-white ml-50 text-2xl font-semibold' style={{ fontFamily: "Poppins" }}>
            <button className='text-[#E9BD8C]'>Home</button>
            <button className='hover:text-[#E9BD8C]  transition duration-400'>Blog</button>
            <button className='hover:text-[#E9BD8C]  transition duration-400'>Contact Us</button>
            <button className='hover:text-[#E9BD8C]  transition duration-400'>Service</button>
          </div>
        </div>
        <div className='flex-col ml-30 mt-60 '>
          <p className='text-[#E9BD8C] text-3xl font-medium' style={{ fontFamily: "Inter" }}>Delicious Cafe</p>
          <h1 className='text-white text-8xl leading-tight' style={{ fontFamily: "Sansita Swashed" }}>
            Sweet Treats,<br />
            Perfect Eats
          </h1>
          <div className='flex mt-40 gap-10' style={{ fontFamily: "Inter" }}>
            <button className='text-white text-xl font-semibold bg-[#933C24] px-12 py-5 flex items-center justify-centertext-white rounded-lg hover:bg-[#E9BD8C] hover:text-[#933C24] transition duration-400' >
              Shop Now
            </button>
            <button className='text-[#E9BD8C] flex justify-center items-center text-xl font-semibold hover:text-[#933C24] transition duration-400'>Learn More</button>
          </div>
        </div>
      </div>

      <div className='mt-50'>
        <p className='flex justify-center items-center text-7xl font-semibold' style={{ fontFamily: "Sansita Swashed" }}>Top Products</p>
        <div className='ml-18 mt-30 flex'>
          <div >
            <div className="w-140 h-165 rounded-xl"
              style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
              <img src={bun1} alt="" className="w-80 h-80 ml-37 mt-20 flex items-center justify-center " />
              <div className='text-white font-semibold text-3xl ml-9 mt-20 flex gap-75 ' style={{ fontFamily: "Inter" }}>
                <p className='mt-2'>40 Baht</p> <span className='font-normal border-2 p-1 rounded-4xl px-5'>i</span>
              </div>
              <div className='text-white font-semibold text-3xl ml-9 mt-15 flex gap-55 ' style={{ fontFamily: "Inter" }}>
                <h1>
                  Whold Grain <br />
                  Bread
                </h1>
                <button className='bg-[#933C24] px-4 py-2 flex items-center justify-center rounded-lg hover:bg-[#E9BD8C] hover:text-[#933C24] transition duration-400'>
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className='ml-10'>
            <div className="w-140 h-165 rounded-xl"
              style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
              <img src={bun2} alt="" className="w-100 h-80 ml-20 mt-20 flex items-center justify-center " />
              <div className='text-white font-semibold text-3xl ml-9 mt-20 flex gap-75 ' style={{ fontFamily: "Inter" }}>
                <p className='mt-2'>40 Baht</p> <span className='font-normal border-2 p-1 rounded-4xl px-5'>i</span>
              </div>
              <div className='text-white font-semibold text-3xl ml-9 mt-15 flex gap-55 ' style={{ fontFamily: "Inter" }}>
                <h1>
                  Whold Grain <br />
                  Bread
                </h1>
                <button className='bg-[#933C24] px-4 py-2 flex items-center justify-center rounded-lg hover:bg-[#E9BD8C] hover:text-[#933C24] transition duration-400'>
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className='ml-10'>
            <div className="w-140 h-165 rounded-xl"
              style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
              <img src={bun3} alt="" className="w-100 h-80 ml-25 mt-20 flex items-center justify-center " />
              <div className='text-white font-semibold text-3xl ml-9 mt-20 flex gap-75 ' style={{ fontFamily: "Inter" }}>
                <p className='mt-2'>40 Baht</p> <span className='font-normal border-2 p-1 rounded-4xl px-5'>i</span>
              </div>
              <div className='text-white font-semibold text-3xl ml-9 mt-15 flex gap-55 ' style={{ fontFamily: "Inter" }}>
                <h1>
                  Whold Grain <br />
                  Bread
                </h1>
                <button className='bg-[#933C24] px-4 py-2 flex items-center justify-center rounded-lg hover:bg-[#E9BD8C] hover:text-[#933C24] transition duration-400'>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex'>
        <div className='ml-18'>
          <div className="w-140 h-165 rounded-xl mt-20"
            style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
            <img src={bun6} alt="" className="w-70 h-80 ml-30 pt-10 flex items-center justify-center " />
            <div className='text-white font-semibold text-3xl ml-9 mt-20 flex gap-75 ' style={{ fontFamily: "Inter" }}>
              <p className='mt-2'>40 Baht</p> <span className='font-normal border-2 p-1 rounded-4xl px-5'>i</span>
            </div>
            <div className='text-white font-semibold text-3xl ml-9 mt-15 flex gap-55 ' style={{ fontFamily: "Inter" }}>
              <h1>
                Whold Grain <br />
                Bread
              </h1>
              <button className='bg-[#933C24] px-4 py-2 flex items-center justify-center rounded-lg hover:bg-[#E9BD8C] hover:text-[#933C24] transition duration-400'>
                Add
              </button>
            </div>
          </div>
        </div>
        <div className='ml-10'>
          <div className="w-140 h-165 rounded-xl mt-20"
            style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
            <img src={bun5} alt="" className="w-70 h-80 ml-37 pt-15 flex items-center justify-center " />
            <div className='text-white font-semibold text-3xl ml-9 mt-20 flex gap-75 ' style={{ fontFamily: "Inter" }}>
              <p className='mt-2'>40 Baht</p> <span className='font-normal border-2 p-1 rounded-4xl px-5'>i</span>
            </div>
            <div className='text-white font-semibold text-3xl ml-9 mt-15 flex gap-55 ' style={{ fontFamily: "Inter" }}>
              <h1>
                Whold Grain <br />
                Bread
              </h1>
              <button className='bg-[#933C24] px-4 py-2 flex items-center justify-center rounded-lg hover:bg-[#E9BD8C] hover:text-[#933C24] transition duration-400'>
                Add
              </button>
            </div>
          </div>
        </div>
        <div className='ml-10'>
          <div className="w-140 h-165 rounded-xl"
            style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
            <img src={bun4} alt="" className="w-80 h-80 ml-35 mt-20 flex items-center justify-center " />
            <div className='text-white font-semibold text-3xl ml-9 mt-20 flex gap-75 ' style={{ fontFamily: "Inter" }}>
              <p className='mt-2'>40 Baht</p> <span className='font-normal border-2 p-1 rounded-4xl px-5'>i</span>
            </div>
            <div className='text-white font-semibold text-3xl ml-9 mt-15 flex gap-55 ' style={{ fontFamily: "Inter" }}>
              <h1>
                Whold Grain <br />
                Bread
              </h1>
              <button className='bg-[#933C24] px-4 py-2 flex items-center justify-center rounded-lg hover:bg-[#E9BD8C] hover:text-[#933C24] transition duration-400'>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-50 w-full h-[700px] bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: `url(${offer})` }}>
        <h2 className="text-[#933C24] text-6xl font-semibold mb-10 tracking-widest leading-19" style={{ fontFamily: "Sansita Swashed" }}>
          20% Off Your <br />
          <span className='ml-5 '>First Order</span>
        </h2>
        <p className="text-[#5D5D5D] text-center text-2xl mt-5" style={{ fontFamily: "Inter" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
          Voluptatibus sed tempore distinctio, <br />
          minima nihil incidunt amet soluta cupiditate magnam?
        </p>
        <button className="font-semibold text-2xl mt-23 bg-[#933C24] text-white px-8 py-4 rounded-xl hover:bg-[#E9BD8C] hover:text-[#933C24] transition duration-400">
          Learn More
        </button>
      </div>

      <div className='mt-50'>
        <p className='flex justify-center items-center text-7xl font-semibold' style={{ fontFamily: "Sansita Swashed" }}>Top Products</p>
      </div>
      <div className='mt-30 text-[#5D5D5D] flex justify-center items-center text-3xl font-semibold gap-20' style={{ fontFamily: "Poppins" }}>
        <div className="relative inline-block">
          <span>Cake</span>
          <div className="absolute left-1/2 translate-x-[-50%] w-20 h-2 bg-[#8B3E2F] rounded-full"></div>
        </div>
        <h1 className='hover:text-[#933C24] transition duration-400'>
          Muffins
        </h1>
        <h1 className='hover:text-[#933C24] transition duration-400'>
          Croissant
        </h1>
        <h1 className='hover:text-[#933C24] transition duration-400'>
          Bread
        </h1>
        <h1 className='hover:text-[#933C24] transition duration-400'>
          Tart
        </h1>
        <h1 className='hover:text-[#933C24] transition duration-400'>
          Favorite
        </h1>
      </div>

      <div className="ml-10 mr-10 h-[2px] bg-[#D9D9D9] opacity-50 mt-5"></div>

      <div className='mt-50 gap-10 flex ml-22 '>
        <img src={dessert1} alt="" className='w-[550px] ' />
        <img src={dessert2} alt="" className='w-[550px] ' />
        <img src={dessert3} alt="" className='w-[550px] ' />
      </div>
      <div className='mt-10 gap-10 flex ml-22 '>
        <img src={dessert4} alt="" className='w-[550px] ' />
        <img src={dessert5} alt="" className='w-[550px] ' />
        <img src={dessert6} alt="" className='w-[550px] ' />
      </div>

      <div className="mt-50 w-full h-[700px] bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: `url(${bg2})` }}>
        <h2 className="text-white text-7xl font-semibold mb-10 tracking-widest leading-19" style={{ fontFamily: "Sansita Swashed" }}>
          About us
        </h2>
        <p className="text-[#B9B9B9] text-center text-2xl mt-5" style={{ fontFamily: "Inter" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
          Voluptatibus sed tempore distinctio, <br />
          minima nihil incidunt amet soluta cupiditate magnam?
        </p>
        <button className="font-semibold text-2xl mt-23 bg-[#933C24] text-white px-8 py-4 rounded-xl hover:bg-[#E9BD8C] hover:text-[#933C24] transition duration-400">
          Read More
        </button>
      </div>

      <div className='mt-40'>
        <p className='flex justify-center items-center text-7xl font-semibold' style={{ fontFamily: "Sansita Swashed" }}>Top Products</p>
      </div>
      <div className='flex justify-center items-center mt-40 gap-10'>
        <div className='flex-col '>
          <img src={dessert01} alt="" className='w-[500px]' />
          <div className='flex text-4xl justify-between mt-10 font-semibold' style={{ fontFamily: "Inter" }}>
            <p>Puff Pastry </p> <span>8 Baht</span>
          </div>
        </div>
        <div className='flex-col '>
          <img src={dessert02} alt="" className='w-[500px]' />
          <div className='flex text-4xl justify-between mt-10 font-semibold' style={{ fontFamily: "Inter" }}>
            <p>Doughnuts </p> <span>8 Baht</span>
          </div>
        </div>
        <div className='flex-col '>
          <img src={dessert03} alt="" className='w-[500px]' />
          <div className='flex text-4xl justify-between mt-10 font-semibold' style={{ fontFamily: "Inter" }}>
            <p>Brownies </p> <span>8 Baht</span>
          </div>
        </div>
      </div>

      <div className="mt-50 w-full h-[1000px] bg-cover bg-center flex-col " style={{ backgroundImage: `url(${bg3})` }}>
        <div className='ml-30 flex justify-between'>
          <img src={brand} alt="" className='w-[150px] pt-20' />
          <div className='flex justify-center items-center mt-12 pr-80 text-[#E9BD8D] gap-15' style={{ fontFamily: "Inter" }}>
            <button className='text-2xl font-semibold hover:text-[#933C24] transition duration-400'>Follow us</button>
            <div className='flex gap-20 text-5xl'>
              <span className='hover:text-[#933C24] transition duration-400'> <FaFacebook /> </span>
              <span className='hover:text-[#933C24] transition duration-400'> <FaPinterest /> </span>
              <span className='hover:text-[#933C24] transition duration-400'> <IoLogoWhatsapp /> </span>
              <span className='hover:text-[#933C24] transition duration-400'> <AiFillInstagram /> </span>
            </div>
          </div>
        </div>

        <div className="ml-35 mr-35 h-[2px] bg-[#E9BD8D] opacity-100 mt-8"></div>

        <div className='flex mt-25 ' >
          <div className='flex ml-35 text-white'>
            <div className='flex flex-col '>
              <span className='text-[#E9BD8D] text-5xl font-semibold mb-5' style={{ fontFamily: "Inter" }}>About Us</span>
              <span className='font-semibold text-3xl leading-loose'> (02) 807-4500 </span>
              <span className=' text-3xl leading-loose' style={{ fontFamily: "Poppins" }}>info@sau.ac.th  <br />
                19/1 Phetkasem Road <br />
                Nongkham Bangkok <br />
                10160</span>
            </div>
          </div>
          <div className='flex ml-45 text-white'>
            <div className='flex flex-col '>
              <span className='text-[#E9BD8D] text-5xl font-semibold mb-5' style={{ fontFamily: "Inter" }}>Explore</span>
              <span className=' text-3xl leading-loose font-semibold' style={{ fontFamily: "Poppins" }}>Home  <br />
                Blog <br />
                Contact Us <br />
                Services</span>
            </div>
          </div>
          <div className='flex ml-90 text-white'>
            <div className='flex flex-col '>
              <span className='text-[#E9BD8D] text-5xl font-semibold mb-5' style={{ fontFamily: "Inter" }}>Recent News</span>
              <div className='flex mt-2 ' style={{ fontFamily: "Poppins" }}>
                <img src={dessert001} alt="" className='w-[130px]' />
                <div className='flex flex-col ml-10 text-xl leading-relaxed'>
                  <span className='text-[#E9BD8C] font-semibold'>June 14,2025</span>
                  <span className='text-2xl'>Puff pastry bliss.</span>
                </div>
              </div>
              <div className='flex mt-10 ' style={{ fontFamily: "Poppins" }}>
                <img src={dessert002} alt="" className='w-[130px]' />
                <div className='flex flex-col ml-10 text-xl leading-relaxed'>
                  <span className='text-[#E9BD8C] font-semibold'>June 14,2025</span>
                  <span className='text-2xl'>Puff pastry bliss.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <span className='flex justify-center items-center text-[#737373] text-3xl font-semibold mt-30' style={{ fontFamily: "Inter" }}>© 2025 Bake House. All rights reserved</span>

      </div>
    </>
  )
}