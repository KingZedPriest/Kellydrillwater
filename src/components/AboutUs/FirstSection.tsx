import Image from "next/image";
import Link from "next/link";

//Images
import about from "../../../public/about.jpg";
import about1 from "../../../public/about1.jpg";
import about2 from "../../../public/about2.jpg";

//Icons
import { CallReceived } from "iconsax-react";

const FirstSection = () => {
    return (
        <main className="mt-20 px-5 sm:px-10 md:px-20 xl:px-32 py-6">
            <div className="flex lg:flex-row flex-col lg:justify-between lg:items-end gap-y-5">
                <div className="flex flex-col gap-y-1">
                    <p className="tracking-widest">24/7 HASSLE-FREE</p>
                    <div className="font-bold text-lg text-linkColor sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">
                        <h3>Kellydrill: Your Trusted</h3>
                        <h3>Drilling Partner</h3>
                    </div>
                </div>
                <p className="md:border-gray-500 md:pl-2 md:border-l max-w-[50ch]">Precision Drilling, Optimized Performance, Delivering Results, Exceeding Expectations, Committed to Safety and Dedicated to Success.</p>
            </div>
            <section className="flex lg:flex-row flex-col lg:justify-between gap-y-10 mt-10">
                <div className="relative lg:w-[45%] xl:w-[48%] columns-1 sm:columns-2">
                    <Image className="border border-black/60 rounded-2xl w-full" src={about1} alt="Kelly Drill Images" />
                    <Image className="mt-5 sm:mt-0 border border-black/60 rounded-2xl w-full" src={about} alt="Kelly Drill Images" />
                    <Image className="mt-5 border border-black/60 rounded-2xl w-full aspect-square" src={about2} alt="Kelly Drill Images" />
                    <div className="top-[4.25rem] sm:top-1/2 left-0 sm:left-1/2 absolute flex flex-col gap-y-5 bg-[#ffcc33] p-2 md:p-4 xl:p-6 rounded-2xl text-center -translate-y-1/2 sm:-translate-x-1/2">
                        <div>
                            <p className="font-bold text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl">100+</p>
                            <p>Projects Done</p>
                        </div>
                        <div className="border-t border-black"></div>
                        <div>
                            <p className="font-bold text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl">14+</p>
                            <p>Drillers</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-10 lg:mt-10 lg:w-[45%] xl:w-[48%]">
                    <p>At Kellydrill, our journey began with a simple yet profound curiosity: <i className="text-linkColor">How does water emerge from the depths of the earth? </i> This passion ignited over a decade ago and has since grown into a mission to provide reliable, sustainable water solutions to communities and industries alike. From residential neighborhoods to sprawling commercial estates and industrial facilities, we’ve dedicated ourselves to ensuring access to clean and dependable water sources.</p>
                    <p>Headquartered at No. 16 Ukwuorji Junction, Awka, Anambra State, with a branch located at Nkwelle Ezunanka, behind Goldland Hotel, Kellydrill has become a trusted name in water drilling and management. Our team of experienced drilling experts and hydrologists employs cutting-edge technology to locate and harness underground water with precision. As a duly registered company (RC: 3778486), we take pride in delivering high-quality water infrastructure, tailored to meet the unique needs of our diverse clientele.</p>
                    <div className="flex gap-x-5 lg:mt-10 p-2 md:p-3 xl:p-4 border border-black/60 rounded-2xl w-fit">
                        <Link href="tel:+2348160244412"><CallReceived size={32} className="text-linkColor" variant="Bold"/></Link>
                        <div>
                            <p className="font-bold text-base md:text-lg xl:text-xl">+234 81 6024 4412</p>
                            <p className="mt-1 text-[10px] xl:text-sm md:text-xs">Call For Booking</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default FirstSection;