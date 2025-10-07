import React from 'react'
import img1 from '../ImgH/img1.png'
import img2 from '../ImgH/img2.png'
import img3 from '../ImgH/img3.png'
import img4 from '../ImgH/img4.png'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div className='w-full h-1vh bg-[#91ffB2]'
                style={{ fontFamily: 'Roboto Mono' }}>
                {/*               ส่วนบน                        */}
                <div className='w-8/12 mx-auto flex py-20 justify-between'>
                    {/*         1       */}
                    <div className='flex flex-col'>
                        <div>
                            <h1 className='text-5xl font-bold text-[#333333]'>
                                My Web Design by
                            </h1>
                            <h1 className='text-5xl font-bold text-[#333333]'>
                                React + Tailwind CSS
                            </h1>
                        </div>
                        <div className='mt-10'>
                            <span className='text-[#333333]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam voluptatem accusamus, <br /> 
                                nemo eveniet explicabo assumenda distinctio, <br />
                                ex sed corrupti nam tempora id deleniti dolores alias unde dolore officiis ratione. <br />
                            </span>
                        </div>
                        <div className=' mt-5'>
                            <a href="#" className='bg-[#333333] text-white rounded-4xl py-4 px-8 hover:bg-[#153267]'
                                >
                                Follow ME Pls
                            </a>
                        </div>
                        < div className='mt-10 flex'>
                            <Link Link to ='/MypageA'><img src={img1} alt='img1' className='w-80 h-min mr-10' /></Link>
                            < Link to ='/MypageB'>< img src={img2} alt='img2' className='w-85 ml-9  ' /></Link>
                        </div>
                    </div>
                    {/*         2       */}
                    <div className='flex gap-15'>
                        <Link to ='/MypageC'> <img src={img3} alt='img3' className='w-70 h-min ml-20 ' /></Link>
                        <Link to ='/MypageD'> 
                            <img src={img4} alt='img4' className='w-40 h-min ml-15' />
                        </Link>
                    </div>
                    {/*         3       */}
                </div>
                {/*               ส่วนล่าง                       */}
                <div className='flex flex-col justify-center items-center text-lg'>
                    <span>(รูปเเละเนื้อหาทั้งหมดใช้เพื่อการศึกษาเท่านั้น)</span>
                    <span> Created BY Azt0 </span>
                    <span>Copyright © 2025 Schwarz </span>
                </div>
            </div>
        </>
    )
}
