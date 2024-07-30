"use client";

import { useState, useEffect, SetStateAction } from "react";
// @ts-ignore
import CountryRegion from "countryregionjs";
import { EmojiHappy, Location, LocationAdd } from "iconsax-react";

// Initialize the country region package
const countryRegion = new CountryRegion();

const states = [
    { name: "anambra", number: 5 },
    { name: "enugu", number: 15 },
    { name: "ebonyi", number: 12 },
    { name: "delta", number: 11 },
    { name: "abia", number: 1 },
    { name: "imo", number: 17 },
];

const maxLength = 100;

const Quote = () => {
    
    const [userState, setUserState] = useState("anambra");
    const [stateNumber, setStateNumber] = useState(5);
    const [localGovernment, setLocalGovernment] = useState<any>([]);
    const [selectedLocalGovernment, setSelectedLocalGovernment] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const state = states.find(s => s.name === userState);
        if (state) {
            setStateNumber(state.number);
        }
    }, [userState]);

    useEffect(() => {
        const fetchData = async () => {
            const subStates = await countryRegion.getLGAs(159, stateNumber);
            setLocalGovernment(subStates);
        };
        fetchData();
    }, [stateNumber]);

    const handleStateSelection = (newState: SetStateAction<string>) => {
        setUserState(newState);
    };

    const handleLocalGovernmentChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedLocalGovernment(event.target.value);
    };

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
            <div className="bg-whiteColor mt-10 sm:w-[90%] md:w-[70%] xl:w-[60%] mx-auto rounded-md shadow-md">
                <form className="p-4 md:p-6 xl:p-8">
                    <p className="text-black/70 font-medium flex items-center gap-x-0.5 my-4">
                        <Location size="18" color="#20698b" variant="Bold" />
                        Select the state
                    </p>
                    <div className="flex gap-3 flex-wrap">
                        {states.map((state) => (
                            <div key={state.name} onClick={() => handleStateSelection(state.name)}
                                className={`${userState === state.name ? "bg-white border-headersColor border-2 text-headersColor" : "bg-headersColor text-white"} p-2 md:p-3 rounded-md w-fit capitalize cursor-pointer`}>
                                {state.name}
                            </div>
                        ))}
                    </div>
                    <div className="mt-10">
                        <p className="text-black/70 font-medium my-2 flex items-center gap-x-0.5">
                            <LocationAdd size="18" color="#20698b" variant="Bold" />
                            Select the nearest location
                        </p>
                        <select id="local-government" value={selectedLocalGovernment} onChange={handleLocalGovernmentChange}
                            className="cursor-pointer w-full px-4 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-headersColor focus:border-transparent">
                            <option value="" disabled>
                                Select an option
                            </option>
                            {localGovernment.map((lg: any) => (
                                <option key={lg.id} value={lg.name}>
                                    {lg.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col mt-10">
                        <textarea id="description"
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
                    <button type="submit" className="mt-10 w-full text-white font-medium bg-headersColor border-r-4 border-headersColor px-4 py-3 rounded-md hover:bg-white hover:text-containerColor duration-300">
                        Submit
                    </button>
                </form>
                <div className="bg-white w-full py-8 px-4 flex items-center justify-center text-center gap-x-1">
                    <EmojiHappy size="40" variant="Bold" color="#3da959" />
                    <p>We will respond to your inquiry within 24 hours.</p>
                </div>
            </div>
        </main>
    );
};

export default Quote;
