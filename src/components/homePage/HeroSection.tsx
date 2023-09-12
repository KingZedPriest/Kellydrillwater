"use client"
import { useEffect } from "react";
// @ts-ignore
import Typed from 'typed.js';
// Import needed components
import Image from "next/image";
// Images
import heroImage from "../../../public/heroImage.png";
export default function HeroSection() {
  useEffect(() => {
    const options = {
      strings: ['Trusted', 'Efficient', 'Advanced', 'Experienced', 'And Responsible'],
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
    <main className="flex py-20 flex-col-reverse items-center gap-10 md:flex-row md:justify-between">
      <div className="lg:w-1/2">
        <h1 className="leading text-2xl font-[800] text-black sm:text-3xl md:text-4xl lg:text-5xl">
          Your <span className="typed-text"></span> Drilling Partner{" "}
          <span className="text-headersColor">Kelly Drill.</span>
        </h1>
        <p className="mt-10 text-black">
          Experts in Water Drilling and Exploration. At Kelly Drill, we
          specialize in water drilling and exploration, bringing years of
          expertise to each project. With a focus on sustainability and
          innovation, we&apos;re your trusted partners for clean water solutions
        </p>
        <button className="bg-headersColor border-headersColor hover:text-headersColor mt-10 font-semibold rounded-3xl border-2 px-4 py-3 text-white duration-500 hover:bg-white">
          Start Your Project
        </button>
      </div>
      <div className="h-full lg:w-1/2">
        <Image src={heroImage} alt="Kellydrill Drilling Machine" className="w-full hover:translate-x-4 duration-500"/>
      </div>
    </main>
  );
}
