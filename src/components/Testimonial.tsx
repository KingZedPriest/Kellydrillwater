"use client"

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

//Icons
import { MedalStar, QuoteDown } from "iconsax-react";

type Testimonial = {
    id: number;
    name: string;
    role: string;
    content: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Barrister Ugochukwu",
        role: "Ceo Suachamber",
        content: "Your work is very OK but the only area you need to work on is how you agitate for money. Some people are not comfortable with such agitation.",
        rating: 4,
    },
    {
        id: 2,
        name: "S. Udechukwu",
        role: "Former General Supervisor",
        content: "The job you did last year for us (Nchawaa Services Ltd, Ukpommili) is very ok. The drilled borehole has been serving well. The water quality is good. We have been benefiting a lot since our company installed the aquifer water. We will recommend your drilling company to others in need of your services. Wishing you the best.",
        rating: 5,
    },
    {
        id: 3,
        name: "Ufoaroh Ikenna Ken",
        role: "Ceo of Kenora Gym Complex",
        content: "Your service is good, my engineer confirmed it. Keep doing a good job!",
        rating: 5
    },
    {
        id: 4,
        name: "David Chukwuemeka",
        role: "Supervisor Purity Homes",
        content: "The water you drilled for us for over three years, is still functional even till this day, keep being the best water driller.",
        rating: 5,
    },
    {
        id: 5,
        name: "Ifeanyi I.",
        role: "CEO Infura Services",
        content: "The only drilling company I can recommend to anyone, anywhere. Always delivering quality pipe-borne water.",
        rating: 5,
    }
]

const Testimonial = () => {
    const controls = useAnimation();
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const animate = async () => {
            const carouselWidth = carouselRef.current?.scrollWidth || 0;
            const viewportWidth = window.innerWidth;

            await controls.start({
                x: [-viewportWidth, -carouselWidth],
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 60,
                        ease: "linear",
                    },
                },
            });
        };

        animate();
    }, [controls]);

    useEffect(() => {
        const handleResize = () => {
            if (carouselRef.current) {
                const carouselWidth = carouselRef.current.scrollWidth;
                const viewportWidth = window.innerWidth;
                controls.set({ x: -viewportWidth });
                controls.start({
                    x: -carouselWidth,
                    transition: {
                        duration: 60,
                        ease: "linear",
                    },
                });
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [controls]);

    return (
        <main className="bg-[#ffcc33] mt-20 px-5 sm:px-10 md:px-20 xl:px-32 py-[5rem] sm:py-[6rem] md:py-[7rem] lg:py-[8rem] xl:py-[9rem] 2xl:py-[10rem] overflow-hidden">
            <div className="flex flex-col gap-y-1">
                <p className="tracking-widest">TESTIMONIALS</p>
                <div className="font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">
                    <h3>Read Satisfied</h3>
                    <h3>Clients Reviews</h3>
                </div>
            </div>
            <motion.section  ref={carouselRef} className="flex gap-x-10 mt-20" animate={controls} style={{ width: "max-content", x: 0 }}>
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                    <div key={`Testimonial-${testimonial.id}-${index}`} className="flex-shrink-0 bg-[#FFFFF0] hover:bg-[#00000F] p-4 md:p-6 xl:p-8 rounded-2xl w-[16rem] sm:w-[18rem] md:w-[20rem] lg:w-[22rem] xl:w-[24rem] 2xl:w-[26rem] duration-300 group">
                        <div className="group-hover:bg-[#FFFFF0] flex justify-center items-center bg-linkColor mx-auto -mt-10 md:-mt-14 xl:-mt-16 rounded-[50%] w-12 md:w-16 xl:w-20 h-12 md:h-16 xl:h-20 duration-300">
                            <QuoteDown className="group-hover:text-[#00000F] h-14 md:h-20 xl:h-24 text-white duration-300" variant="Outline" />
                        </div>
                        <div className="flex flex-col items-center gap-y-7 text-center">
                            <div className='group-hover:text-white mt-4 text-linkColor duration-300'>
                                <p className="font-semibold text-base md:text-lg xl:text-xl">{testimonial.name}</p>
                                <p className='text-[10px] xl:text-sm md:text-xs'>{testimonial.role}</p>
                            </div>
                            <p className="group-hover:text-white duration-300">{testimonial.content}</p>
                            <div className="flex gap-x-1">
                                {Array.from({ length: testimonial.rating }, (_, i) => (
                                    <MedalStar key={i} className="h-5 lg:h-7 text-[#FBBE21]" variant="Bold" />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </motion.section>
        </main>
    );
}

export default Testimonial;