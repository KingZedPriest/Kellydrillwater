"use client"
import { useState } from "react";
import { GiReturnArrow } from "react-icons/gi";
export default function MachinePage() {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)
    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    }
  return (
    <div className="md:px-18 bg-whiteColor px-6 py-32 sm:px-12 lg:px-24">
      <div className="text-center">
        <h1 className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
          <span className="text-headersColor">Heavy Machines </span> for your
          Projects.
        </h1>
        <p className="mt-6 text-sm text-textColor md:text-base">
          Empower Your Projects with Our Robust Heavy Machinery Solutions,
          Providing You with the Strength and Reliability Needed to Accomplish
          Your Goals,
        </p>       
      </div>
      <div className="mt-20 flex gap-10 items-center">
        <div className="bg-white p-2 cursor-pointer rounded-[50%] shadow-md flex items-center md:hidden">
         <GiReturnArrow size={20} onClick={toggleExpansion}/>
        </div>
        <div className={`${isExpanded ? "overflow-x-auto": "overflow-x-hidden"} flex gap-10 md:mx-auto items-center md:justify-center overflowContainer`}>
        <div className="min-w-[10rem] h-40 bg-white rounded-2xl mb-4 shadow-md">

        </div>
        <div className="min-w-[10rem] h-40 bg-white rounded-2xl mb-4 shadow-md">

        </div>
        <div className="min-w-[10rem] h-40 bg-white rounded-2xl mb-4 shadow-md">

        </div>
        <div className="min-w-[10rem] h-40 bg-white rounded-2xl mb-4 shadow-md">

        </div>
        <div className="min-w-[10rem] h-40 bg-white rounded-2xl mb-4 shadow-md">

        </div>
    </div>
      </div>
      <p className="mt-20 text-sm text-textColor md:text-base text-center">
          Experience Unprecedented Efficiency and Raw Power Like Never Before,
          Thanks to Our State-of-the-Art Heavy Machinery Solutions.
        </p>
    </div>
  );
}
