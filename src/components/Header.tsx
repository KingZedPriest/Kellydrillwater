"use client"
import { useState } from "react";
//Import Icons
import { FaWhatsapp } from "react-icons/fa";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { GiCrossedBones } from "react-icons/gi";
//Links Mechanism
import Link from "next/link";
//Import Images and the Image component
import logo from "../../public/mainLogo.png";
import Image from "next/image";
export default function Header() {
  // For the Hamburger Menu
  const [visible, setVisible] = useState<boolean>(false);
  const setVisibility = () => {
    setVisible(!visible)
  }
  return (
    <main className="relative">
      <div className="flex items-center justify-between px-6 sm:px-12 lg:px-24 md:px-18 py-10">
        <Link href="/"><Image src={logo} alt="Kelly Drill Company Logo" className="w-10 cursor-pointer"/></Link> 
        <div className="hidden md:flex gap-5">
          <Link className="font-semibold hover:bg-secAccentColor hover:text-white duration-500 rounded-lg px-3 py-2" href="/">Home</Link>
           <Link className="font-semibold hover:bg-secAccentColor hover:text-white duration-500 rounded-lg px-3 py-2" href="/services">Services</Link>
           <Link className="font-semibold hover:bg-secAccentColor hover:text-white duration-500 rounded-lg px-3 py-2" href="/about">About Us</Link> 
           <Link className="font-semibold hover:bg-secAccentColor hover:text-white duration-500 rounded-lg px-3 py-2" href="/contact">Contact Us</Link>
        </div>
        <div className="hidden md:flex items-center gap-5">
            <Link className="text-green-600 duration-500 hover:-translate-y-2" href=""><FaWhatsapp size={30}/></Link>
            <Link className="px-8 py-2 rounded-2xl font-semibold bg-accentColor hover:bg-secAccentColor duration-500 text-white hover:-translate-y-2" href="">Call Now</Link>
        </div>
        <div className="md:hidden">
      <BsFillMenuButtonWideFill size={24} className="cursor-pointer" onClick={setVisibility}/>
    </div>
      </div>        
    {/* Collapsed Nav bar */}
    
  <div className={`${visible ? "menu" : "hidden"} md:hidden absolute h-screen w-80 top-0 right-0 bg-containerColor z-10`}>
    <div className="bg-white p-2 rounded-[50%] w-12 flex items-center justify-center mt-10 ml-6">
      <GiCrossedBones size={24} className="cursor-pointer" onClick={setVisibility}/>
    </div>
    <div className="flex flex-col gap-5 px-4 mt-10">
    <Link className="font-semibold hover:border-r-4 hover:border-white hover:bg-secAccentColor text-white duration-500 rounded-lg px-3 py-2" href="/">Home</Link>
    <Link className="font-semibold hover:border-r-4 hover:border-white hover:bg-secAccentColor text-white duration-500 rounded-lg px-3 py-2" href="/services">Services</Link>
           <Link className="font-semibold hover:border-r-4 hover:border-white hover:bg-secAccentColor text-white duration-500 rounded-lg px-3 py-2" href="/about">About Us</Link> 
           <Link className="font-semibold hover:border-r-4 hover:border-white hover:bg-secAccentColor text-white duration-500 rounded-lg px-3 py-2" href="/contact">Contact Us</Link>
           <hr/>
           <div className="flex items-center gap-5 mt-2">
           <Link className="text-white duration-500 hover:-translate-y-2" href=""><FaWhatsapp size={30}/></Link>
            <Link className="px-8 py-2 rounded-2xl font-semibold border-2 border-white duration-500 text-white hover:-translate-y-2" href="">Call Now</Link>
           </div>
    </div>
  </div>
  </main>
  )  
}
