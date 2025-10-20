import React from "react";
import nig1 from "../ImgC/nig1.png";
import nig2 from "../ImgC/nig2.png";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function MyPageC() {
  return (
    <>
      <div className='"w-full min-h-screen bg-[#000C58] flex flex-col '>
        <div className="w-full mx-auto bg-[#060135] flex py-8 justify-between items-center">
          <Link to="/">
            <h1
              className="text-white ml-25 text-4xl hover:text-[#7A99E9] transition duration-400"
              style={{ fontFamily: "Bebas Neue" }}
            >
              Tanawan Songdechagriwut
            </h1>
          </Link>

          <div className="text-white flex mr-25 gap-10">
            <h1 className="hover:text-[#FFFFFF] hover:drop-shadow-[0_0_10px_#E9BD8C] transition duration-300 cursor-pointer">
              Work
            </h1>
            <h1 className="hover:text-[#FFFFFF] hover:drop-shadow-[0_0_10px_#E9BD8C] transition duration-300 cursor-pointer">
              About
            </h1>
            <h1 className="hover:text-[#FFFFFF] hover:drop-shadow-[0_0_10px_#E9BD8C] transition duration-300 cursor-pointer">
              Contact
            </h1>
          </div>
        </div>

        <div className="flex  ml-60 mt-25">
          <div>
            <h1
              className="text-white text-8xl"
              style={{ fontFamily: "Bebas Neue" }}
            >
              HI, I AM <br />
              Tanawan Songdechagriwut
            </h1>
            <h2
              className="text-[#C7C7C7] text-xl leading-loose"
              style={{ fontFamily: "Prompt" }}
            >
              นักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์จากประเทศไทย <br />
              ที่มีความหลงใหลในการสร้าง
              เว็บไซต์ที่เข้าถึงได้และเป็นมิตรกับผู้ใช้
            </h2>

            <div className="flex mt-10 items-center gap-10  ">
              <button
                className="group flex justify-start items-center bg-[#7A99E9] px-7 py-5 rounded-4xl text-black font-extrabold text-xl gap-9 hover:text-[#7A99E9] hover:bg-[#222222] transition duration-400"
                style={{ fontFamily: "Prompt" }}
              >
                CONTACT ME
                <span className="w-3 h-3 bg-black rounded-full transition duration-400 group-hover:bg-[#7A99E9]"></span>
              </button>

              <div className="flex gap-6 text-[#7A99E9] ">
                <div className="w-17 h-17 bg-[#222222] flex items-center justify-center rounded-full hover:text-[#222222] hover:bg-[#7A99E9] transition duration-400">
                  <FaLinkedinIn size={30} />
                </div>

                <div className="w-17 h-17 bg-[#222222] flex items-center justify-center rounded-full hover:text-[#222222] hover:bg-[#7A99E9] transition duration-400">
                  <FaGithub size={30} />
                </div>
              </div>
            </div>
          </div>

          <div className="ml-70">
            <img src={nig1} alt="" />
          </div>
        </div>

        <div className="ml-10 mr-10 h-[2px] bg-[#2A2F80] opacity-100 mt-30"></div>

        <div className="flex  ml-60 mt-30 gap-132">
          <div>
            <h1
              className="text-white text-8xl"
              style={{ fontFamily: "Bebas Neue" }}
            >
              ABOUT ME
            </h1>
          </div>

          <div
            className="flex flex-col gap-10"
            style={{ fontFamily: "Prompt" }}
          >
            <h1 className="text-white text-3xl leading-relaxed">
              ผมเป็นนักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์ที่ทำงาน <br />
              อยู่ในกรุงเทพฯ กำลังมองหาโอกาสที่น่าตื่นเต้น <br /> ในการ
              ทำงานมีพื้นฐานการศึกษาด้าน <br />
              วิศวกรรมซอฟต์แวร์
            </h1>
            <h2 className="text-[#C7C7C7] text-xl leading-loose">
              ชอบให้ความสำคัญกับการเข้าถึง (accessibility) เมื่อพัฒนาเว็บไซต์{" "}
              <br /> มีความกระตือรือร้นและอยากรู้
              อยากเห็นเกี่ยวกับการแก้ปัญหาต่างๆ
              <br /> ปัจจุบันกำลังศึกษาเรียนรู้เกี่ยวกับ React.js และการออกแบบ{" "}
              <br /> เว็บไซต์เล็กน้อยเมื่อไม่ได้เขียนโปรแกรม
              ดิฉัน/ผมชอบเล่นฟุตบอล ถ่ายภาพ และเล่นเกม <br /> Call of Duty,Valorant, leuge of legends
              กำลังเรียนรู้เพิ่มเติมเพื่อพัฒนาทักษะอยู่เสมอ
            </h2>

            <div className="flex items-center gap-10 ">
              <button
                className="group flex justify-start items-center bg-[#7A99E9] px-7 py-5 rounded-4xl text-black font-extrabold text-xl gap-9 hover:text-[#7A99E9] hover:bg-[#222222] transition duration-400"
                style={{ fontFamily: "Prompt" }}
              >
                Download Resume
                <span className="w-3 h-3 bg-black rounded-full transition duration-400 group-hover:bg-[#7A99E9]"></span>
              </button>

              <div className="flex gap-6 text-[#7A99E9] ">
                <div className="w-17 h-17 bg-[#222222] flex items-center justify-center rounded-full hover:text-[#222222] hover:bg-[#7A99E9] transition duration-400">
                  <FaLinkedinIn size={30} />
                </div>

                <div className="w-17 h-17 bg-[#222222] flex items-center justify-center rounded-full hover:text-[#222222] hover:bg-[#7A99E9] transition duration-400">
                  <FaGithub size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex justify-center items-center mt-10 ">
          <img src={nig2} alt="" className="w-[1650px] " />
        </div>

        <div className="ml-10 mr-10 h-[2px] bg-[#2A2F80] opacity-100 mt-30"></div>

        <div className="flex ml-60 mt-30 gap-83">
          <h1
            className="text-white text-8xl "
            style={{ fontFamily: "Bebas Neue" }}
          >
            My Capabilities
          </h1>
          <div
            className="flex-col text-xl text-[#C7C7C7] leading-loose"
            style={{ fontFamily: "Manrope" }}
          >
            ผมมองหาโอกาสในการเพิ่มทักษะใหม่ๆ อยู่เสมอ ทั้งการพัฒนาฟรอนท์เอนด์
            แบล็กเอนต์ การ <br /> ออกแบบ UX/UI ฐานข้อมูล
            <div className="flex mt-5 gap-6 ">
              <h1 className="flex border-1 border-[#484848] px-10 py-3 rounded-4xl text-[#C7C7C7] ">
                HTML
              </h1>
              <h1 className="flex border-1 border-[#484848] px-10 py-3 rounded-4xl text-[#C7C7C7] ">
                CSS
              </h1>
              <h1 className="flex border-1 border-[#484848] px-10 py-3 rounded-4xl text-[#C7C7C7] ">
                JAVASCRIPT
              </h1>
              <h1 className="flex border-1 border-[#484848] px-10 py-3 rounded-4xl text-[#C7C7C7] ">
                FLUTTER
              </h1>
            </div>
            <div className="flex mt-5 gap-6">
              <h1 className="flex border-1 border-[#484848] px-10 py-3 rounded-4xl text-[#C7C7C7] ">
                DART
              </h1>
              <h1 className="flex border-1 border-[#484848] px-10 py-3 rounded-4xl text-[#C7C7C7] ">
                IoT
              </h1>
              <h1 className="flex border-1 border-[#484848] px-10 py-3 rounded-4xl text-[#C7C7C7] ">
                REACT
              </h1>
              <h1 className="flex border-1 border-[#484848] px-10 py-3 rounded-4xl text-[#C7C7C7] ">
                DATABASE
              </h1>
            </div>
          </div>
        </div>

        <div className="ml-10 mr-10 h-[2px] bg-[#2A2F80] opacity-100 mt-30"></div>

        <div
          className="flex ml-60 mt-30 gap-90"
          style={{ fontFamily: "Manrope" }}
        >
          <h1
            className="text-white text-8xl "
            style={{ fontFamily: "Bebas Neue" }}
          >
            My Experience
          </h1>
          <div className=" flex-col justify-between ">
            <div className="flex gap-90">
              <h1 className="text-2xl text-white">Freelance Developer</h1>
              <h2 className="text-lg text-[#C7C7C7]">Nov 2023 — Present</h2>
            </div>
            <div className="mt-5 text-lg text-[#C7C7C7] leading-loose ">
              <h1>
                พัฒนาและปรับปรุงส่วนติดต่อผู้ใช้สำหรับเว็บแอปพลิเคชันโดยใช้
                React.js ทำงานร่วมกับทีม <br />
                ออกแบบ UX/UI
                เพื่อสร้างประสบการณ์ผู้ใช้ที่น่าประทับใจปรับปรุงความเร็วในการโหลด{" "}
                <br />
                เว็บไซต์ด้วยเทคนิคการเพิ่มประสิทธิภาพต่างๆร่วมพัฒนาและดูแลไลบรารีคอมโพเนนต์ภายใน
                <br />
                องค์กร
              </h1>
            </div>
            <div className="flex gap-101 mt-10">
              <h1 className="text-2xl text-white">Front-End Intern</h1>
              <h2 className="text-lg text-[#C7C7C7]">Sep 2023 — Nov 2023</h2>
            </div>
            <div className="mt-5 text-lg text-[#C7C7C7] leading-loose ">
              <h1>
                พัฒนาเว็บไซต์ลูกค้าโดยใช้ HTML, CSS และ JavaScript <br />
                ช่วยปรับปรุงการเข้าถึง (Accessibility)
                ของเว็บไซต์ให้สอดคล้องกับมาตรฐาน WCAG <br />
                ทำงานร่วมกับทีมแบ็คเอนด์เพื่อเชื่อมต่อ API
              </h1>
            </div>
          </div>
        </div>

        <div className="ml-10 mr-10 h-[2px] bg-[#2A2F80] opacity-100 mt-30"></div>

        <div className="flex ml-60 mt-30 gap-95">
          <div className="flex-col">
            <h1
              className="text-white text-8xl "
              style={{ fontFamily: "Bebas Neue" }}
            >
              LET'S CONNECT
            </h1>
            <h2
              className="text-xl text-[#C7C7C7] mt-10 leading-loose"
              style={{ fontFamily: "Manrope" }}
            >
              Say hello at{" "}
              <span className="text-white">s6752410024@sau.ac.th</span> <br />{" "}
              For more info, here my <span className="text-white">resume</span>
            </h2>
            <div className="flex gap-7 mt-10 text-3xl text-[#7A99E9] ">
              <FaLinkedinIn className="hover:text-[#222222] transition duration-400" />
              <FaGithub className="hover:text-[#222222] transition duration-400" />
              <FaXTwitter className="hover:text-[#222222] transition duration-400" />
              <FaInstagram className="hover:text-[#222222] transition duration-400" />
            </div>
          </div>
          <div className="flex-col" style={{ fontFamily: "Manrope" }}>
            <h1 className="text-[#C7C7C7] text-xl">Name</h1>
            <input
              type="text"
              className="w-full bg-[#060135] py-5 px-6 mt-5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#7A99E9]"
            />

            <h1 className="text-[#C7C7C7] text-xl mt-10">Email</h1>
            <input
              type="text"
              className="w-full bg-[#060135] py-5 px-6 mt-5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#7A99E9]"
            />
            <h1 className="text-[#C7C7C7] text-xl mt-10">Subject</h1>
            <input
              type="text"
              className="w-full bg-[#060135] py-5 px-6 mt-5 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#7A99E9]"
            />
            <h1 className="text-[#C7C7C7] text-xl mt-10">Message</h1>
            <textarea
              className="w-full bg-[#060135] py-4 px-6 mt-5 rounded-lg text-white text-left align-top focus:outline-none focus:ring-2 focus:ring-[#7A99E9] resize-none h-50"

            />
            <button className="mt-15 bg-[#7A99E9] text-[#222222] text-xl px-50 py-4 rounded-4xl font-bold hover:bg-[#222222] hover:text-[#7A99E9] transition duration-300">
              SUBMIT
            </button>
          </div>
        </div>

        <div className="ml-10 mr-10 h-[2px] bg-[#2A2F80] opacity-100 mt-15"></div>

        <div
          className="flex justify-center items-center text-[#C7C7C7] text-xl mt-15 mb-15"
          style={{ fontFamily: "Prompt" }}
        >
          <h1>© 2025 Created by SAU-Dev-Team</h1>
        </div>
      </div>
    </>
  );
}