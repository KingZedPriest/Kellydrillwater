"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//Images
import newBorehole from "../../../public/newBorehole.jpg";
import boreholeRepair from "../../../public/boreholeRepair.jpg";
import boreholeService from "../../../public/boreholeService.jpg";
import tank from "../../../public/tank.jpg";
import training from "../../../public/machine1.jpg";
import rentMachine from "../../../public/rentMachine.jpg";
import pumpInstallation from "../../../public/pumpInstallation.jpg";
import hydrogeophysical from "../../../public/hydrogeophysical.jpg";

//Icons
import { ArrowRight } from "iconsax-react";

//Services Data
const services = [
    { src: newBorehole, alt: "New Borehole", preview: "newBorehole", title: "Borehole Drilling", body: "Drill reliable boreholes for clean and sustainable water access. Our team ensures precision and long-lasting solutions for your needs." },
    { src: boreholeRepair, alt: "Bore Hole Repairs", preview: "boreholeRepair", title: "Borehole Revival", body: "Unblock old or damaged boreholes and restore optimal water flow. We specialize in cleaning and repairing systems to bring them back to life." },
    { src: boreholeService, alt: "Service Boreholes", preview: "boreholeService", title: "Consultations & Services", body: "Receive expert advice for site surveys, water system design, and efficient implementation. We guide you every step of the way." },
    { src: tank, alt: "Tank", preview: "tank", title: "Tank Stand Building", body: "Construct durable and efficient tank stands tailored to your storage needs. Our structures are built to last and maximize water use." },
    { src: training, alt: "Training", preview: "training", title: "Professional Training", body: "Gain essential skills in borehole maintenance, equipment handling, and water system management through hands-on training sessions." },
    { src: rentMachine, alt: "Rent Machines", preview: "rentMachines", title: "Machine Rentals", body: "Rent high-quality tools and machines for drilling, pumping, and borehole maintenance. Perfect for both small and large-scale projects." },
    { src: hydrogeophysical, alt: "Hydro Geophysical", preview: "hydroGeophysical", title: "Hydrogeophysical Survey", body: "Get professional guidance on hydrogeophysical surveys and pump installations. We ensure precise assessments and seamless execution at every stage." },
    { src: pumpInstallation, alt: "Pump Installation", preview: "pumpInstallation", title: "Pump Installation", body: "Ensure reliable pump installation with expert support. We provide precision, efficiency, and guidance every step of the way." }
]

const ServiceList = () => {

    //State and functions
    const [preview, setPreview] = useState<string>("");
    const setPreviewFunc = (newPreview: string) => {
        setPreview(newPreview)
    }

    return (
        <main className="mt-20 px-5 sm:px-10 md:px-20 xl:px-32 py-6">
            <div className="flex md:flex-row flex-col md:justify-between md:items-end gap-y-5 pb-10 border-b border-black/60">
                <div className="flex flex-col gap-y-1">
                    <p className="tracking-widest">CERTIFIED SERVICES</p>
                    <div className="font-bold text-lg text-linkColor sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">
                        <h3>Our Unique &</h3>
                        <h3>Exceptional Services</h3>
                    </div>
                </div>
                <Link href="" className="justify-end bg-[#ffcc33] hover:bg-linkColor px-3 md:px-5 lg:px-8 xl:px-10 py-3 md:py-4 rounded-md text-center hover:text-whiteColor duration-300">Get a Quote</Link>
            </div>
            <div className="gap-10 md:gap-5 xl:gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-10">
                {services.map((service) => (
                    <div key={service.preview}>
                        <div className="relative rounded-xl cursor-pointer overflow-hidden group">
                            <Image src={service.src} alt={service.alt} className="group-hover:grayscale-0 group-hover:scale-110 border border-black/50 rounded-xl h-[20rem] md:h-[24rem] xl:h-[32rem] transition-transform duration-300 ease-in-out grayscale" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 ease-in-out">
                                <div className="absolute inset-0 flex justify-center items-center">
                                    <span onClick={() => setPreviewFunc(service.preview)} className="flex justify-center items-center bg-[#ffcc33] opacity-0 group-hover:opacity-100 rounded-[50%] w-10 md:w-12 xl:w-14 h-10 md:h-12 xl:h-14 transition-opacity duration-300 ease-in-out hover:scale-110">
                                        View
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-5 hover:border-[#ffcc33] mt-10 pb-5 border-b border-black/60 duration-300">
                            <div className="flex justify-between hover:text-[#ffcc33] duration-300 cursor-pointer">
                                <p className="font-semibold text-sm md:text-base xl:text-lg">{service.title}</p>
                                <ArrowRight size="20" />
                            </div>
                            <p className="text-[10px] xl:text-sm md:text-xs">{service.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default ServiceList;