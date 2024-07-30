"use client"

import { useState, useEffect, SetStateAction } from "react";
// @ts-ignore
import CountryRegion from "countryregionjs";
import { EmojiHappy, Location, LocationAdd } from "iconsax-react";

//Initialize the country region package
const countryRegion = new CountryRegion();




const Quote = () => {

    const states: string[] = ["anambra", "enugu", "ebonyi", "delta", "abia", "imo"]
    const maxLength = 200;

    const [userState, setState] = useState<string>("anambra")
    const [stateNumber, setStateNumber] = useState<number>(5)
    const [localGovernment, setLocalGovernment] = useState<any>()
    const [selectedLocalGovernment, setSelectedLocalGovernment] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    //For the switch state number case
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


    //For fetching a users sub-state
    useEffect(() => {
        const fetchData = async () => {
            const subStates = await countryRegion.getLGAs(159, stateNumber);
            setLocalGovernment(subStates);
        };
        fetchData();
    }, [stateNumber]);

    //Change user state function
    const selectState = (newState: string) => {
        setState(newState)
    }

    //Handle user sub-state selection
    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedLocalGovernment(event.target.value);
    };

    //Handle the user description
    const handleDescriptionChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setDescription(event.target.value);
    };

    return (
        <main id="quote" className="px-6 py-32 sm:px-12 md:px-18 lg:px-24 border border-black/10">
            <div className="flex flex-col gap-y-3 items-center text-center">
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-linkColor max-w-[16ch]">Quote</h3>
                <div className="w-12 sm:w-14 md:w-16 xl:w-20 2xl:w-24 h-1 sm:h-1.5 lg:h-2 bg-[#ffcc33] rounded-sm mt-2"></div>
                <p className="text-black/70 max-w-[70ch]">Get Your Personalized Water Drilling Estimate.</p>
            </div>
            <div className="bg-whiteColor mt-10 sm:w-[90%] md:w-[70%] xl:w-[60%] mx-auto rounded-md shadow-sm">
                <form className="p-4 md:p-6 xl:p-8">
                    <p className="text-black/70 font-medium flex items-center gap-x-0.5 my-4"><span><Location size="18" color="#20698b" variant="Bold" /></span>Select the state</p>
                    <div className="flex gap-3 flex-wrap">
                        {states.map((state, index) => (
                            <div key={index} onClick={(e: any) => selectState(state)} className={`${userState === state ? "bg-white border-headersColor border-2 text-headersColor" : "bg-headersColor text-white"} p-2 md:p-3 rounded-md w-fit capitalize cursor-pointer`}>{state}</div>
                        ))}
                    </div>
                    <div className="mt-10">
                        <p className="text-black/70 font-medium my-2 flex items-center gap-x-0.5"><span><LocationAdd size="18" color="#20698b" variant="Bold" /></span>Select the nearest location</p>
                        <select id="local-government" value={selectedLocalGovernment} onChange={handleChange} className="cursor-pointer w-full px-4 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-headersColor focus:border-transparent">
                            <option value="" disabled>
                                Select an option
                            </option>
                            {localGovernment && localGovernment.map((lg: any) => (
                                <option key={lg.id} value={lg.name}>
                                    {lg.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col mt-10">
                        <textarea
                            id="description"
                            className="p-4 h-24 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-headersColor focus:border-transparent resize-none"
                            maxLength={maxLength}
                            placeholder="Briefly Describe the Project"
                            value={description}
                            onChange={handleDescriptionChange}
                        />
                        <div className="mt-2 text-[10px] md:text-xs xl:text-sm text-gray-700">
                            {maxLength - description.length} characters remaining
                        </div>
                    </div>
                    <button type="submit" className="mt-10 w-full text-white font-medium bg-headersColor border-r-4 border-headersColor px-4 py-3 rounded-md hover:bg-white hover:text-containerColor duration-300" >Submit</button>
                </form>
                <div className="bg-white w-full py-8 px-4 flex items-center justify-center text-center gap-x-1">
                    <EmojiHappy size="40" variant="Bold" color="#3da959" />
                    <p>We will respond to your inquiry within 24 hours.</p>
                </div>
            </div>
        </main>
    );
}

export default Quote;
