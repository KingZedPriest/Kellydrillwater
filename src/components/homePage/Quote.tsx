"use client";

import { useState, useEffect, SetStateAction } from "react";

// Icons
import { EmojiHappy, Location, LocationAdd } from "iconsax-react";


const states = [
    { name: "anambra" },
    { name: "enugu" },
    { name: "ebonyi" },
    { name: "delta" },
    { name: "abia" },
    { name: "imo" },
];

const maxLength = 100;

const Quote = () => {

    const [userState, setUserState] = useState<string>("anambra");
    const [description, setDescription] = useState('');

    //New State Handler
    const handleStateSelection = (newState: SetStateAction<string>) => {
        setUserState(newState);
    };

    //Description handler
    const handleDescriptionChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setDescription(event.target.value);
    };

    return (
        <main id="quote" className="px-6 sm:px-12 md:px-18 lg:px-24 py-32 border border-black/10">
            <div className="flex flex-col items-center gap-y-3 text-center">
                <h3 className="max-w-[16ch] font-bold text-lg text-linkColor sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">Quote</h3>
                <div className="bg-[#ffcc33] mt-2 rounded-sm w-12 sm:w-14 md:w-16 xl:w-20 2xl:w-24 h-1 sm:h-1.5 lg:h-2"></div>
                <p className="max-w-[70ch] text-black/70">Get Your Personalized Water Drilling Estimate.</p>
            </div>
            <div className="bg-whiteColor shadow-md mx-auto mt-10 rounded-md sm:w-[90%] md:w-[70%] xl:w-[60%]">
                <form className="p-4 md:p-6 xl:p-8">
                    <p className="flex items-center gap-x-0.5 my-4 font-medium text-black/70">
                        <Location size="18" color="#20698b" variant="Bold" />
                        Select the state
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {states.map((state) => (
                            <div key={state.name} onClick={() => handleStateSelection(state.name)}
                                className={`${userState === state.name ? "bg-white border-headersColor border-2 text-headersColor" : "bg-headersColor text-white"} p-2 md:p-3 rounded-md w-fit capitalize cursor-pointer`}>
                                {state.name}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-y-1 mt-5">
                        <label className="cursor-pointer" htmlFor="email">Email</label>
                        <input required type="email" name="email" id="email" className="px-5 py-3 border rounded-md focus:ring-1 focus:ring-headersColor focus:outline-none caret-headersColor" placeholder="Johndoe@gmail.com" />
                    </div>
                    <div className="flex flex-col gap-y-1 mt-5">
                        <label className="cursor-pointer" htmlFor="street">Street Name</label>
                        <input type="text" name="street" id="street" className="px-5 py-3 border rounded-md focus:ring-1 focus:ring-headersColor focus:outline-none caret-headersColor" placeholder="Ukwuoji Awka, Anambra State." />
                    </div>
                    <div className="flex flex-col gap-y-1 mt-5">
                        <label className="cursor-pointer" htmlFor="description">Project Description</label>
                        <textarea id="description"
                            className="border-gray-300 p-4 border focus:border-transparent rounded-md focus:ring-1 focus:ring-headersColor w-full h-24 focus:outline-none resize-none"
                            maxLength={maxLength}
                            placeholder="Drilling of a new borehole"
                            value={description}
                            onChange={handleDescriptionChange}
                        />
                        <div className="mt-2 text-[10px] text-gray-700 xl:text-sm md:text-xs">
                            {maxLength - description.length} characters remaining
                        </div>
                    </div>
                    <button type="submit" className="border-headersColor bg-headersColor hover:bg-white mt-10 px-4 py-3 border-r-4 rounded-md w-full font-medium text-white hover:text-containerColor duration-300">
                        Submit
                    </button>
                </form>
                <div className="flex justify-center items-center gap-x-1 bg-white px-4 py-8 w-full text-center">
                    <EmojiHappy size="24" variant="Bold" color="#3da959" />
                    <p>Get a Response in 24 hours.</p>
                </div>
            </div>
        </main>
    );
};

export default Quote;
