"use client";

import { FormEvent, useState } from "react";
import { toast } from "sonner";

// Icons
import { EmojiHappy, Location } from "iconsax-react";
import { makeApiRequest } from "@/lib/apiUtils";

//Types and constants for the forms
type InitialFormProps = {
    email: string;
    address: string;
    description: string;
};

const initialState: InitialFormProps = {
    email: "",
    address: "",
    description: ""
};

const states = [{ name: "anambra" }, { name: "enugu" }, { name: "ebonyi" }, { name: "delta" }, { name: "abia" }, { name: "imo" },];
const maxLength = 100;

const Quote = () => {

    const [formValues, setFormValues] = useState<InitialFormProps>(initialState);
    const [userState, setUserState] = useState<string>("anambra")
    const [loading, setLoading] = useState<boolean>(false)

    //Function for the Form Value Change
    const handleChange = (event: any) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value });
    };

    //Function for the State Change
    const handleStateChange = (newState: string) => {
        setUserState(newState)
    }

    //Function for the Form Reset
    const handleFormReset = () => {
        setFormValues(initialState);
        setLoading(false);
    };

    // OnSubmit function
    const onSubmit = async (e: FormEvent) => {

        e.preventDefault()
        setLoading(true)
        toast.message("Submitting your quote request...")

        const formData = { ...formValues, state: userState, subject: "Quote Request", emailType: "quote" };

        await makeApiRequest("/send-email", "post", formData, {
            onSuccess: () => {
                toast.success("Quote requested! We'll get back to you soon.");
                handleFormReset();
            },
            onError: (error: any) => {
                console.log(`Quote form submission error ${error}`)
                toast.error("Quote request not sent. Please try again later.");
                handleFormReset();
            },
        });
    };


    return (
        <main id="quote" className="px-6 sm:px-12 md:px-18 lg:px-24 py-32 border border-black/10">
            <div className="flex flex-col items-center gap-y-3 text-center">
                <h3 className="max-w-[16ch] font-bold text-lg text-linkColor sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">Quote</h3>
                <div className="bg-[#ffcc33] mt-2 rounded-sm w-12 sm:w-14 md:w-16 xl:w-20 2xl:w-24 h-1 sm:h-1.5 lg:h-2"></div>
                <p className="max-w-[70ch] text-black/70">Get Your Personalized Water Drilling Estimate.</p>
            </div>
            <div className="bg-whiteColor shadow-md mx-auto mt-10 rounded-md sm:w-[90%] md:w-[70%] xl:w-[60%]">
                <form className="p-4 md:p-6 xl:p-8" onSubmit={onSubmit}>
                    <p className="flex items-center gap-x-0.5 my-4 font-medium text-black/70">
                        <Location size="18" color="#20698b" variant="Bold" />
                        Select the state
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {states.map((state) => (
                            <div key={state.name} onClick={() => handleStateChange(state.name)}
                                className={`${userState === state.name ? "bg-white border-headersColor border-2 text-headersColor" : "bg-headersColor text-white"} p-2 md:p-3 rounded-md w-fit capitalize cursor-pointer`}>
                                {state.name}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-y-1 mt-5">
                        <label className="font-medium text-black/70 cursor-pointer" htmlFor="email">Email</label>
                        <input required value={formValues.email} onChange={handleChange} type="email" name="email" id="email" className="px-5 py-3 border rounded-md focus:ring-1 focus:ring-headersColor focus:outline-none caret-headersColor" placeholder="Johndoe@gmail.com" />
                    </div>
                    <div className="flex flex-col gap-y-1 mt-5">
                        <label className="font-medium text-black/70 cursor-pointer" htmlFor="address">State Address</label>
                        <input required type="text" value={formValues.address} onChange={handleChange} name="address" id="address" className="px-5 py-3 border rounded-md focus:ring-1 focus:ring-headersColor focus:outline-none caret-headersColor" placeholder="Ukwuoji Awka, Anambra State." />
                    </div>
                    <div className="flex flex-col gap-y-1 mt-5">
                        <label className="font-medium text-black/70 cursor-pointer" htmlFor="description">Project Description</label>
                        <textarea id="description" name="description" required
                            className="border-gray-300 p-4 border focus:border-transparent rounded-md focus:ring-1 focus:ring-headersColor w-full h-24 focus:outline-none resize-none"
                            maxLength={maxLength}
                            placeholder="Drilling of a new borehole"
                            value={formValues.description}
                            onChange={handleChange} />
                        <div className="text-[10px] text-gray-700 xl:text-sm md:text-xs">
                            {maxLength - formValues.description.length} characters remaining
                        </div>
                    </div>
                    <button disabled={loading} type="submit" className={`${loading ? "bg-gray-600 border-red-600 cursor-not-allowed" : "border-headersColor bg-headersColor hover:bg-white  hover:text-containerColor"} text-white mt-5 px-4 py-3 border-r-4 rounded-md w-full font-medium duration-300`}>
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
