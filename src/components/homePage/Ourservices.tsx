import Image from "next/image";
import Link from "next/link";

//Import Needed Images
import serviceImg from "../../../public/kellyImg3.jpg";

//Import Needed Icons
import { GiDigDug, GiMandrillHead, GiWaterRecycling, GiWaterSplash, GiWaterTower } from "react-icons/gi";
import { PiHandshakeFill } from "react-icons/pi";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaArrowUpFromWaterPump } from "react-icons/fa6";
import { ArrowRight2 } from "iconsax-react";

const Ourservices = () => {
    return ( 
        <main className="md:px-18 bg-white px-6 py-32 sm:px-12 lg:px-24 text-xs md:text-sm xl:text-base">
            <div className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row md:justify-between md:items-baseline">
                    <Image src={serviceImg} alt="Kelly Drill Water" className="h-80 w-80 sm:h-[24rem] sm:w-[24rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] xl:w-[36rem] xl:h-[36rem] 2xl:w-[40rem] 2xl:h-[40rem]"/>
                <div className="flex flex-col gap-y-3 items-end text-right">
                    <h3 className="font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-linkColor max-w-[16ch]">Our Professional Services</h3>
                    <div className="w-12 sm:w-14 md:w-16 xl:w-20 2xl:w-24 h-1 sm:h-1.5 lg:h-2 bg-[#ffcc33] rounded-sm mt-2"></div>  
                    <p className="text-black/70 max-w-[70ch]">Harnessing Decades of Water Well Drilling Expertise and State-of-the-Art Technology to Deliver Customized, Comprehensive Solutions for all Your Groundwater Resource Needs.</p>
                </div>
            </div>
            <div className="flex flex-wrap gap-10 mt-20">
                <div className="bg-white shadow-md h-64 w-[22%] min-w-[17rem] md:min-w-[20rem] rounded-xl text-black/70 border border-black/5 flex flex-col items-center justify-center gap-y-3 p-4 text-center">
                    <GiWaterSplash size={40} className="text-linkColor"/>
                    <p className="text-linkColor font-bold text-base md:text-lg xl:text-xl">New Boreholes</p>
                    <p>Providing expertise and equipment for the establishment of fresh boreholes or wells as the case maybe...</p>
                    <Link href="/services" className="group flex gap-x-1 items-center text-[#ffcc33] font-semibold mt-4 text-[0.65rem] md:text-xs xl:text-sm">
                        <p className="group-hover:text-black duration-300">VIEW DETAILS</p>
                        <ArrowRight2 size="18" variant="Bold" className="group-hover:translate-x-1 duration-300"/>
                    </Link>
                </div>
                <div className="bg-white shadow-md h-64 w-[22%] min-w-[17rem] md:min-w-[20rem] rounded-xl text-black/70 border border-black/5 flex flex-col items-center justify-center gap-y-3 p-4 text-center">
                    <FaArrowUpFromWaterPump size={40} className="text-linkColor"/>
                    <p className="text-linkColor font-bold text-base md:text-lg xl:text-xl">Rehabilitation of Boreholes</p>
                    <p>Restoring functionality to obstructed or deteriorated boreholes through expert intervention and maintenance....</p>
                    <Link href="/services" className="group flex gap-x-1 items-center text-[#ffcc33] font-semibold mt-4 text-[0.65rem] md:text-xs xl:text-sm">
                        <p className="group-hover:text-black duration-300">VIEW DETAILS</p>
                        <ArrowRight2 size="18" variant="Bold" className="group-hover:translate-x-1 duration-300"/>
                    </Link>
                </div>
                <div className="bg-white shadow-md h-64 w-[22%] min-w-[17rem] md:min-w-[20rem] rounded-xl text-black/70 border border-black/5 flex flex-col items-center justify-center gap-y-3 p-4 text-center">
                    <GiDigDug size={40} className="text-linkColor"/>
                    <p className="text-linkColor font-bold text-base md:text-lg xl:text-xl">Drilling Machine Rentals</p>
                    <p>Offering the leasing of robust water drilling machinery for diverse project needs, from heavy duty machines to tools, we are here...</p>
                    <Link href="/services" className="group flex gap-x-1 items-center text-[#ffcc33] font-semibold mt-4 text-[0.65rem] md:text-xs xl:text-sm">
                        <p className="group-hover:text-black duration-300">VIEW DETAILS</p>
                        <ArrowRight2 size="18" variant="Bold" className="group-hover:translate-x-1 duration-300"/>
                    </Link>
                </div>
                <div className="bg-white shadow-md h-64 w-[22%] min-w-[17rem] md:min-w-[20rem] rounded-xl text-black/70 border border-black/5 flex flex-col items-center justify-center gap-y-3 p-4 text-center">
                    <GiMandrillHead size={40} className="text-linkColor"/>
                    <p className="text-linkColor font-bold text-base md:text-lg xl:text-xl">Procurement of Machines</p>
                    <p>Facilitating the acquisition process of specialized water drilling equipment through efficient procurement channels...</p>
                    <Link href="/services" className="group flex gap-x-1 items-center text-[#ffcc33] font-semibold mt-4 text-[0.65rem] md:text-xs xl:text-sm">
                        <p className="group-hover:text-black duration-300">VIEW DETAILS</p>
                        <ArrowRight2 size="18" variant="Bold" className="group-hover:translate-x-1 duration-300"/>
                    </Link>
                </div>
                <div className="bg-white shadow-md h-64 w-[22%] min-w-[17rem] md:min-w-[20rem] rounded-xl text-black/70 border border-black/5 flex flex-col items-center justify-center gap-y-3 p-4 text-center">
                    <PiHandshakeFill size={40} className="text-linkColor"/>
                    <p className="text-linkColor font-bold text-base md:text-lg xl:text-xl">Consultation Services</p>
                    <p>Delivering professional guidance and strategic advice tailored to water drilling and related endeavors...</p>
                    <Link href="/services" className="group flex gap-x-1 items-center text-[#ffcc33] font-semibold mt-4 text-[0.65rem] md:text-xs xl:text-sm">
                        <p className="group-hover:text-black duration-300">VIEW DETAILS</p>
                        <ArrowRight2 size="18" variant="Bold" className="group-hover:translate-x-1 duration-300"/>
                    </Link>
                </div>
                <div className="bg-white shadow-md h-64 w-[22%] min-w-[17rem] md:min-w-[20rem] rounded-xl text-black/70 border border-black/5 flex flex-col items-center justify-center gap-y-3 p-4 text-center">
                    <FaGlobeAfrica size={40} className="text-linkColor"/>
                    <p className="text-linkColor font-bold text-base md:text-lg xl:text-xl">Hydrogeophysical Surveying</p>
                    <p>Conducting comprehensive assessments of subsurface water resources through advanced geophysical survey techniques...</p>
                    <Link href="/services" className="group flex gap-x-1 items-center text-[#ffcc33] font-semibold mt-4 text-[0.65rem] md:text-xs xl:text-sm">
                        <p className="group-hover:text-black duration-300">VIEW DETAILS</p>
                        <ArrowRight2 size="18" variant="Bold" className="group-hover:translate-x-1 duration-300"/>
                    </Link>
                </div>
                <div className="bg-white shadow-md h-64 w-[22%] min-w-[17rem] md:min-w-[20rem] rounded-xl text-black/70 border border-black/5 flex flex-col items-center justify-center gap-y-3 p-4 text-center">
                    <GiWaterTower size={40} className="text-linkColor"/>
                    <p className="text-linkColor font-bold text-base md:text-lg xl:text-xl">Construction of Water Tank Stand </p>
                    <p>Engineering and constructing sturdy frameworks for supporting elevated water storage tanks...</p>
                    <Link href="/services" className="group flex gap-x-1 items-center text-[#ffcc33] font-semibold mt-4 text-[0.65rem] md:text-xs xl:text-sm">
                        <p className="group-hover:text-black duration-300">VIEW DETAILS</p>
                        <ArrowRight2 size="18" variant="Bold" className="group-hover:translate-x-1 duration-300"/>
                    </Link>
                </div>
                <div className="bg-white shadow-md h-64 w-[22%] min-w-[17rem] md:min-w-[20rem] rounded-xl text-black/70 border border-black/5 flex flex-col items-center justify-center gap-y-3 p-4 text-center">
                    <GiWaterRecycling size={40} className="text-linkColor"/>
                    <p className="text-linkColor font-bold text-base md:text-lg xl:text-xl">Construction of Treatment Plant</p>
                    <p>Designing and constructing facilities for the purification and treatment of water to meet quality standards...</p>
                    <Link href="/services" className="group flex gap-x-1 items-center text-[#ffcc33] font-semibold mt-4 text-[0.65rem] md:text-xs xl:text-sm">
                        <p className="group-hover:text-black duration-300">VIEW DETAILS</p>
                        <ArrowRight2 size="18" variant="Bold" className="group-hover:translate-x-1 duration-300"/>
                    </Link>
                </div>
            </div>
            <div className="mt-24 flex justify-center hover:-translate-y-1.5 duration-300">
               <Link className="px-8 py-3 text-center border-2 border-linkColor text-linkColor font-semibold" href="/services">ALL SERVICES</Link> 
            </div>
        </main>
     );
}
 
export default Ourservices;