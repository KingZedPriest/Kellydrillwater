"use client"

import { useState, useEffect } from "react";
// @ts-ignore
import CountryRegion from "countryregionjs";
import { Location } from "iconsax-react";

const countryRegion = new CountryRegion();




const Quote = () => {

    const states: string[] = ["anambra", "enugu", "ebonyi", "delta", "abia", "imo"]

    const [userState, setState] = useState<string>("anambra")
    const [stateNumber, setStateNumber] = useState<number>(5)
    const [localGovernment, setLocalGovernment] = useState()

    //For the 
    useEffect(() => {
        switch (userState) {
            case "anambra":
                setStateNumber(5)
                break;
            case "enugu":
                setStateNumber(15)
                break;
            case "ebonyi":
                setStateNumber(12)
                break;
            case "delta":
                setStateNumber(11)
                break;
            case "abia":
                setStateNumber(1)
                break;
            case "imo":
                setStateNumber(17)
                break;
            default:
                break;
        }
    }, [userState])

    useEffect(() => {
        const fetchData = async () => {
            const subStates = await countryRegion.getLGAs(159, stateNumber);
            setLocalGovernment(subStates);
        };  
        fetchData();
    }, [stateNumber]);

    const selectState = (newState: string) => {
        setState(newState)
    }

    return (
        <main className="px-6 py-32 sm:px-12 md:px-18 lg:px-24">
            <div className="flex flex-col gap-y-3 items-center text-center">
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-linkColor max-w-[16ch]">Quote</h3>
                <div className="w-12 sm:w-14 md:w-16 xl:w-20 2xl:w-24 h-1 sm:h-1.5 lg:h-2 bg-[#ffcc33] rounded-sm mt-2"></div>
                <p className="text-black/70 max-w-[70ch]">Get Your Personalized Water Drilling Estimate.</p>
            </div>
            <div className="bg-whiteColor p-4 mt-10 sm:w-[80%] md:w-[70%] lg:w-[60] xl:w-[50%] mx-auto rounded-md shadow-sm">

                <p className="text-black/70 font-medium flex items-center gap-x-0.5 my-4"><span><Location size="20" color="#ffcc33" variant="Bold" /></span>Select the location of the project</p>
                <div className="flex gap-3 flex-wrap">
                    {states.map((state, index) => (
                        <div key={index} onClick={(e: any) => selectState(state)} className={`${userState === state ? "bg-white border-headersColor border-2 text-headersColor" : "bg-headersColor text-white"} p-3 rounded-md w-fit capitalize cursor-pointer`}>{state}</div>
                    ))}
                </div>
                <div className="my-4">

                </div>
            </div>
        </main>
    );
}

export default Quote;
