"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

//Import Needed Images
import img from "../../../public/kellyImg2.jpg";
import img1 from "../../../public/kellyImg.jpg";
import img2 from "../../../public/kellyImg3.jpg";
import img3 from "../../../public/kellyImg4.jpg";
import img4 from "../../../public/kellyImg5.jpg";
import img5 from "../../../public/machine.jpg";
import img6 from "../../../public/machine1.jpg";


const OurGallery = () => {

    //Needed States
    const [currentNumber, setCurrentNumber] = useState<number>(0);
    const [animate, setAnimate] = useState<boolean>(false);
    const images = [img, img1, img2, img3, img4, img5, img6];
    const totalNumber = images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true);
            setTimeout(() => {
                setCurrentNumber((prevIndex) => (prevIndex + 1) % totalNumber);
                setAnimate(false);
            }, 600);
        }, 30000); // Change image every 30 seconds

        return () => clearInterval(interval);
    }, [totalNumber])


    return (
        <main className="md:px-18 bg-whiteColor px-6 py-32 sm:px-12 lg:px-24">
            <div className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row md:justify-between">
                <div className="w-full md:w-[20%] flex flex-col gap-y-3">
                    <h3 className="font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-linkColor max-w-[16ch]">Our Gallery</h3>
                    <div className="w-12 sm:w-14 md:w-16 xl:w-20 2xl:w-24 h-1 sm:h-1.5 lg:h-2 bg-[#ffcc33] rounded-sm mt-2"></div>
                    <p className="text-black/70 max-w-[30ch]">Showcasing the Results of Our Skilled Water Well Drilling and Management Expertise Through a Curated Gallery of Completed Projects.</p>
                </div>
                <div className="w-full md:w-[78%] relative h-[50rem] rounded-2xl">
                    <Image src={images[currentNumber]} alt="Faq Image" className={`w-full h-full object-cover rounded-2xl object-top ${animate ? "scale-110 translate-x-10 translate-y-10 opacity-0 duration-500" : "duration-300 scale-100 translate-x-0 translate-y-0 opacity-100"}`} />
                    <section className="absolute h-full w-full top-0 left-0 bg-black/70 flex items-end justify-center gap-x-2 rounded-2xl">
                        {images.map((image, index) => (
                            <div key={index} className={`my-4 w-3 h-3 rounded-[50%] bg-[#ffcc33] ${currentNumber === index ? "bg-white duration-300" : ""}`}></div>
                        ))}
                    </section>
                </div>
            </div>
        </main>
    );
}

export default OurGallery;