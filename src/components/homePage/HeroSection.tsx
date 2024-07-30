"use client"
import { useEffect } from "react";
// @ts-ignore
import Typed from 'typed.js';
// Import needed components
import Image from "next/image";
// Images
import heroImage from "../../../public/heroImage.png";
import MD from "../../../public/MD-modified.png";
export default function HeroSection() {
  useEffect(() => {
    const options = {
      strings: ['Trusted', 'Efficient', 'Advanced', 'Experienced', 'Responsible'],
      smartBackspace: true,
      typeSpeed: 160,
      backSpeed: 200,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };

    const typed = new Typed('.typed-text', options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <main className="py-20 flex flex-col-reverse items-center gap-10 lg:flex-row lg:justify-between px-6 sm:px-12 lg:px-24 md:px-18 text-sm md:text-base">
      <div className="lg:w-1/2">
        <h1 className="leading text-2xl font-[800] text-black sm:text-3xl md:text-4xl lg:text-3xl xl:text-5xl">
          Your <span className="typed-text"></span> Drilling Company,{" "}
          <span className="text-headersColor">Kelly Drill.</span>
        </h1>
        <p className="mt-10 text-black">
          Experts in Water Drilling and Exploration. At Kelly Drill, we
          specialize in water drilling and exploration, bringing years of
          expertise to each project. With a focus on sustainability and
          innovation, we&apos;re your trusted partners for clean water solutions
        </p>
        <button className="bg-headersColor border-headersColor hover:text-headersColor mt-10 font-semibold rounded-md border-2 px-4 py-3 text-white duration-500 hover:bg-white">
          Start Your Project
        </button>
        <div className="mt-10 flex items-center gap-5 relative">
        <Image src={MD} alt="Caleb Chukwuebuka, Managing Director" className="w-12"/>
        <div className="w-12 h-12 rounded-[50%] bg-headersColor flex items-center justify-center p-2 absolute left-10 -z-[1]">
         <h1 className="text-white text-xl ml-2">20+</h1> 
        </div>
        <p className="text-textColor w-40 text-sm absolute left-[5.5rem] font-semibold">Water Drillers who work on our projects.</p>
      </div>
      </div>
      <div className="h-full lg:w-1/2">
        <Image src={heroImage} alt="Kellydrill Drilling Machine" className="w-full hover:translate-x-4 duration-500"/>
      </div>
    </main>
  );
}
