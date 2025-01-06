"use client"

import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";

//Import Needed Utils
import { makeApiRequest } from "@/lib/apiUtils";

const ContactForm = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [email, setEmail] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    
    const reset = () => {
        setEmail("")
        setName("")
        setMessage("")
        setLoading(false)
    }

    // OnSubmit function
    const onSubmit = (e: FormEvent) => {

        e.preventDefault()
        setLoading(true)
        toast.message("Submitting your contact request...")

        const formData = { email: email.toLowerCase(), subject: "Notification", emailType: "notification", name, message };

        makeApiRequest("/send-email", "post", formData, {
            onSuccess: () => {
                toast.success("Message sent! We'll get back to you soon.");
                reset();
            },
            onError: (error: any) => {
                console.log(`Contact form submission error ${error}`)
                toast.error("Message not sent. Please try again later.");
                reset();
            },
        });
    };

    return (
        <main className="flex lg:flex-row flex-col lg:justify-between lg:items-center gap-y-10 mt-20 px-5 sm:px-10 md:px-20 xl:px-32 py-6">
            <section className="flex flex-col gap-y-5 lg:w-[45%] xl:w-[48%]">
                <div className="flex items-baseline gap-x-0.5">
                    <h1 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">Contact Us</h1>
                    <div className="bg-[#ffcc33] w-2 md:w-3 h-2 md:h-3"></div>
                </div>
                <div className="flex gap-x-5 mt-4">
                    <div className="bg-[#ffcc33] w-1.5 min-h-full"></div>
                    <div className="py-8">
                        <div className="flex flex-col gap-y-1">
                            <p className="text-black/50">Address</p>
                            <p className="mt-2">Ukwuoji Awka, Anambra State.</p>
                            <p>Nigeria.</p>
                        </div>
                        <div className="flex flex-col gap-y-1 mt-8">
                            <p className="text-black/50">Contacts</p>
                            <p className="mt-2">Contact@kellydrillwater.com</p>
                            <p>+234 816 024 4412</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="lg:w-[45%] xl:w-[48%]">
                <form onSubmit={onSubmit} className="flex flex-col gap-y-5 mx-auto p-4 sm:p-6 md:p-8 xl:p-10 border rounded-md w-full lg:w-[90%] xl:w-[80%]">
                    <div className="flex flex-col gap-y-1">
                        <label className="cursor-pointer" htmlFor="name">Name</label>
                        <input required value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} type="text" name="name" id="name" className="focus:border-headersColor px-5 py-3 border rounded-md caret-headersColor focus:outline-none" placeholder="John Doe" />
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <label className="cursor-pointer" htmlFor="email">Email</label>
                        <input required value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}  type="email" name="email" id="email" className="focus:border-headersColor px-5 py-3 border rounded-md caret-headersColor focus:outline-none" placeholder="Johndoe@gmail.com" />
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <label className="cursor-pointer" htmlFor="message">Your Message</label>
                        <textarea onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}  value={message} name="message" id="message" className="focus:border-headersColor px-5 py-3 border rounded-md h-32 caret-headersColor focus:outline-none resize-none" placeholder="Your Message"></textarea>
                    </div>
                    <input disabled={loading} required type="submit" value={`${loading ? "Submitting" : "Submit"}`} name="submit" id="submit" className="border-2 border-headersColor bg-headersColor hover:bg-white mt-10 py-3 md:py-4 rounded-md font-medium text-white hover:text-headersColor cursor-pointer"/>
                </form>
            </div>
        </main>
    );
}

export default ContactForm;