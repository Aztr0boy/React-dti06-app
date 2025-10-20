import img1 from "../ImgB/img1.png";
import Logo1 from "../ImgB/Logo1.png";
import Logo2 from "../ImgB/Logo2.png";
import Logo3 from "../ImgB/Logo3.png";
import Logo4 from "../ImgB/Logo4.png";
import Logo5 from "../ImgB/Logo5.png";

import { FaBehance, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";

export default function MyPageB() {
  return (
    <div>
      <div>
        <h1
          style={{ fontFamily: "IBM Plex Mono" }}
          className="w-full h-lvh flex flex-col bg-black p-0 whitespace-nowrap"
        >
          {/* ส่วนที่1: Navbar */}
          <div className="w-full flex justify-center bg-black  ">
            <div className="flex justify-between items-center text-lg text-[#9C9C9C] bg-[#1B1B1B] px-10 py-7 rounded-b-xl  max-w-[1550px] w-full ">
              {/* ลิงก์ */}
              <div className="flex gap-25 ml-20 pr-40">
                <a
                  href="#"
                  className="hover:text-[#FFFFFF] transition-colors duration-300"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="hover:text-[#FFFFFF] transition-colors duration-300"
                >
                  Case Studies
                </a>
                <a
                  href="#"
                  className="hover:text-[#FFFFFF] transition-colors duration-300"
                >
                  Testimonials
                </a>
                <a
                  href="#"
                  className="hover:text-[#FFFFFF] transition-colors duration-300"
                >
                  Recent work
                </a>
                <a
                  href="#"
                  className="hover:text-[#FFFFFF] transition-colors duration-300"
                >
                  Get In Touch
                </a>
              </div>

              {/* ไอคอน Social */}
              <div className="flex gap-8 mr-30 text-3xl">
                <a
                  href="#"
                  className="hover:text-[#ffffff] transition-colors"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  className="hover:text-[#ffffff] transition-colors"
                >
                  <FaBehance />
                </a>
                <a
                  href="#"
                  className="hover:text-[#ffffff] transition-colors"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* ส่วนที่2 */}
          <div className="flex items-center justify-between text-white mt-50 text-6xl max-w-7xl mx-auto ">
            <div className="space-y-6 text-left">
              <p style={{ fontFamily: "Raleway" }} className="font-bold">
                Aztr0
              </p>
              <div className="text-[#9C9C9C] text-lg space-y-1">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Nesciunt rem odit labore unde nemo omnis sequi hic sit</p>
                <p>laudantium repellendus recusandae vitae ea laborum, ipsa</p>
                <p>nisi eos autem.</p>
              </div>

              <p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 border border-[#62BA1B] bg-[#3F8E00] text-xl px-12 py-6 rounded-sm font-bold 
             transition duration-300 ease-in-out
             hover:shadow-[0_0_20px_rgba(63,142,0,0.7)] hover:brightness-110"
                  style={{ boxShadow: "0 10px 30px rgba(63, 142, 0, 0.5)" }}
                >
                  Let’s get started <MdArrowForwardIos />
                </a>
              </p>
              <p className="text-[#FFFFFF] text-lg mt-30">Worked with</p>
              <p className="flex gap-10 mt-4">
                <img src={Logo1} alt="Logo1" className="w-150 h-18 " />
                <img src={Logo2} alt="Logo2" className="w-150 h-18 " />
                <img src={Logo3} alt="Logo3" className="w-150 h-18 " />
                <img src={Logo4} alt="Logo4" className="w-150 h-18 " />
                <img src={Logo5} alt="Logo5" className="w-150 h-18 " />
              </p>
            </div>

            <div className="flex justify-end w-[400px] h-[400px] shrink-0">
              <img
                src={img1}
                alt="img1"
                className="w-full h-full object-cover rounded-full -mt-40 mr-40"
              />
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
}