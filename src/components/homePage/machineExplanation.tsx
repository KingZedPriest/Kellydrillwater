import Image from "next/image"
import Link from "next/link";

//Import Needed Images
import machine from "../../../public/machine.jpg";
import machine1 from "../../../public/pipesAndTubes.jpg";
import machine2 from "../../../public/machine1.jpg";

//Import Needed Icons
import { ArrowRight2 } from "iconsax-react";


export default function Machines(){
    return(
        <main className="md:px-18 bg-white px-6 py-32 sm:px-12 lg:px-24 text-xs md:text-sm xl:text-base overflow-hidden ">
            <div className="flex flex-col gap-y-3 text-center">
                <p className="text-black/70 font-semibold">High-quality & Innovative</p>
                <h1 className="font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-linkColor">Our Heavy Machinery</h1>
                <div className="mx-auto w-12 sm:w-14 md:w-16 xl:w-20 2xl:w-24 h-1 sm:h-1.5 lg:h-2 bg-[#ffcc33] rounded-sm mt-2"></div>   
                <p className="text-black/50 font-medium max-w-[70ch] mx-auto">Harnessing the Power and Precision of Industry-Leading Drilling Equipment and Specialized Heavy Machinery to Deliver Unparalleled Water Well Solutions.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-[6.5rem] 2xl:gap-x-[8rem] gap-y-10 mt-14">
                <div className="w-[18rem] border border-black/5 h-[23rem] rounded-xl card relative group">
                    <Image src={machine2} alt="Drilling machine" className="h-full rounded-xl"/>
                    <div className="absolute bottom-0 left-0 w-full h-[45%] bg-white text-black/70 rounded-b-xl group-hover:bg-linkColor group-hover:text-white duration-300 p-4">
                        <Link href="/about" className="group-hover:flex gap-x-1 items-center text-[#ffcc33] hidden">
                            <p className="text-xs">View Details</p>
                            <ArrowRight2 size="18" variant="Bold"/>
                        </Link>
                        <p className="capitalize text-linkColor text-lg font-bold group-hover:text-white mt-2">water well driller</p>
                        <p className="mt-2 text-xs">The water well drilling rig is a specialized heavy-duty machine used by water well drillers to bore holes deep into the ground and extract groundwater. </p>
                    </div>
                </div>
                <div className="w-[18rem] border border-black/5 h-[23rem] rounded-xl card relative group">
                    <Image src={machine1} alt="Drilling machine" className="h-full rounded-xl"/>
                    <div className="absolute bottom-0 left-0 w-full h-[45%] bg-white text-black/70 rounded-b-xl group-hover:bg-linkColor group-hover:text-white duration-300 p-4">
                        <Link href="/about" className="group-hover:flex gap-x-1 items-center text-[#ffcc33] hidden">
                            <p className="text-xs">View Details</p>
                            <ArrowRight2 size="18" variant="Bold"/>
                        </Link>
                        <p className="capitalize text-linkColor text-lg font-bold group-hover:text-white mt-2">PVC pipes</p>
                        <p className="mt-2 text-xs">They are used to facilitate efficient water extraction and installation processes during water drilling due to their cost-effectiveness, corrosion resistance, durability, and smooth interior.</p>
                    </div>
                </div>
                <div className="w-[18rem] border border-black/5 h-[23rem] rounded-xl card relative group">
                    <Image src={machine} alt="Drilling machine" className="h-full rounded-xl"/>
                    <div className="absolute bottom-0 left-0 w-full h-[45%] bg-white text-black/70 rounded-b-xl group-hover:bg-linkColor group-hover:text-white duration-300 p-4">
                        <Link href="/about" className="group-hover:flex gap-x-1 items-center text-[#ffcc33] hidden">
                            <p className="text-xs">View Details</p>
                            <ArrowRight2 size="18" variant="Bold"/>
                        </Link>
                        <p className="capitalize text-linkColor text-lg font-bold group-hover:text-white mt-2">pipe wrenches</p>
                        <p className="mt-2 text-xs">Specialized tools used for gripping and turning pipes or pipe fittings.They provide the leverage and grip needed to tighten, loosen, or manipulate pipes and fittings during drilling. </p>
                    </div>
                </div>
            </div>
            <div className="mt-24 flex justify-center hover:-translate-y-1.5 duration-300">
               <Link className="px-4 py-3 text-center border-2 border-linkColor text-linkColor font-semibold" href="/about">ALL PRODUCTS</Link> 
            </div>
        </main>       
    )
}