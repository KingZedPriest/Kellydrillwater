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
    }

    // OnSubmit function
    const onSubmit = (e: FormEvent) => {

        e.preventDefault()
        toast.message("Submitting your contact request...")

        const formData = { email: email.toLowerCase(), subject: "Notification", emailType: "notification", name, message };

        makeApiRequest("/send-email", "post", formData, {
            onSuccess: () => {
                toast.success("Message sent! We'll get back to you soon.");
                reset();
            },
            onError: (error: any) => {
                toast.error("Message not sent. Please try again later.");
                reset();
            },
        });
    };

    return (
        <main className="py-6 px-5 sm:px-10 md:px-20 xl:px-32 mt-20 flex flex-col gap-y-10 lg:flex-row lg:justify-between lg:items-center">
            <section className="lg:w-[45%] xl:w-[48%] flex flex-col gap-y-5">
                <div className="flex gap-x-0.5 items-baseline">
                    <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">Contact Us</h1>
                    <div className="size-2 md:size-3 bg-yellow-400 dark:bg-yellow-600"></div>
                </div>
                <div className="flex gap-x-5 mt-4">
                    <div className="w-1.5 bg-yellow-400 dark:bg-yellow-600 min-h-full"></div>
                    <div className="py-8">
                        <div className="flex flex-col gap-y-1">
                            <p className="opacity-70">Address</p>
                            <p className="mt-2">Einsteinstraat 26,</p>
                            <p>3281 NJ Numansdorp,</p>
                            <p>Netherlands</p>
                        </div>
                        <div className="flex flex-col gap-y-1 mt-8">
                            <p className="opacity-70">Contacts</p>
                            <p className="mt-2">Contact@melvintradebv.com</p>
                            <p>+3197006520618</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="lg:w-[45%] xl:w-[48%]">
                <form onSubmit={onSubmit} className="w-full lg:w-[90%] xl:w-[80%] mx-auto border border-accentLight dark:border-accentDark flex flex-col gap-y-5 p-4 sm:p-6 md:p-8 xl:p-10">
                    <div className="flex flex-col gap-y-1">
                        <label className="cursor-pointer" htmlFor="name">Name</label>
                        <input required value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} type="text" name="name" id="name" className="px-5 py-3 focus:outline-none border focus:border-primary dark:focus:border-secondary caret-primary" placeholder="John Doe" />
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <label className="cursor-pointer" htmlFor="email">Email</label>
                        <input required value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}  type="email" name="email" id="email" className="px-5 py-3 focus:outline-none border focus:border-primary dark:focus:border-secondary caret-primary" placeholder="Johndoe@gmail.com" />
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <label className="cursor-pointer" htmlFor="message">Our Message</label>
                        <textarea onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}  value={message} name="message" id="message" className="px-5 py-3 h-32 focus:outline-none border focus:border-primary dark:focus:border-secondary resize-none caret-primary" placeholder="Your Message"></textarea>
                    </div>
                    <input required type="submit" value={`${loading ? "Submitting" : "Submit"}`} name="submit" id="submit" className="mt-10 bg-bgDark dark:bg-bgLight text-textDark dark:text-textLight py-3 md:py-4 font-medium cursor-pointer"/>
                </form>
            </div>
        </main>
    );
}

export default ContactForm;