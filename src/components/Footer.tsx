// Import needed Icons
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
//Needed Images
import logo from "../../public/mainLogo.png";
//Deafult Mechanism
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
    return (
        <main className="bg-secAccentColor px-6 sm:px-12 md:px-18 lg:px-24 py-10 text-white">
            <div className="flex lg:flex-row flex-col justify-between space-y-8 lg:space-y-0 text-white">
                <div className="flex flex-col">
                    <h4 className="font-bold">Locations</h4>
                    <p className="mt-2">Anambra</p>
                    <p className="mt-2">Enugu</p>
                    <p className="mt-2">Ebonyi</p>
                    <p className="mt-2">Delta</p>
                    <p className="mt-2">Abia</p>
                    <p className="mt-2">Imo</p>
                </div>
                <div className="flex flex-col">
                    <h4 className="font-bold">About Us</h4>
                    <Link className="hover:bg-headersColor mt-2 hover:px-2 py-2 rounded-md duration-500" href="/faq">FAQ</Link>
                    <Link className="hover:bg-headersColor mt-2 hover:px-2 py-2 rounded-md duration-500" href="/about">Why Us?</Link>
                    <Link className="hover:bg-headersColor mt-2 hover:px-2 py-2 rounded-md duration-500" href="/services">Services</Link>
                    <Link className="hover:bg-headersColor mt-2 hover:px-2 py-2 rounded-md duration-500" href="/partnership">Partner With Us</Link>
                </div>
                <div className="flex flex-col">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="mt-2">Email: contactus@Kellydrillwater.com</p>
                    <p className="mt-2">Call: +234 81 6024 4412</p>
                </div>
                <div className="flex flex-col">
                    <h4 className="font-bold">Newsletter</h4>
                    <p className="mt-2 capitalize">Join our community and be the first to know of any update.</p>
                    <div className="flex flex-row items-center gap-x-1 mt-8">
                        <input className="px-4 py-3 rounded-md w-56 sm:w-60 text-black placeholder:text-sm caret-headersColor focus:outline-headersColor" type="email" name="email" id="email" placeholder="Enter Your Email..." />
                        <button className="border-headersColor bg-headersColor hover:bg-white px-2 py-3 border-r-4 rounded-md md:w-40 font-semibold hover:text-containerColor duration-500" >Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between border-white border-y mt-16 py-4">
                <div className="flex flex-row items-center">
                    <div className="border-white pr-4 border-r">
                        <div className="bg-white p-4">
                            <Image src={logo} alt="Kellydrill Logo" className="w-20 md:w-10" />
                        </div>
                    </div>
                    <div className="ml-4">
                        <p className="text-white text-xs md:text-sm lg:text-base headingFont">Best Drilling Company In Nigeria.</p>
                    </div>
                </div>
                <div className="flex flex-row space-x-2 md:space-x-8 my-auto">
                    <Link href="https://web.facebook.com/profile.php?id=100076353184277" target="_blank"><BsFacebook className="cursor-pointer" size={20} /></Link>
                    <Link href="https://www.instagram.com/kellydrill_water?igsh=MTV4bWt2dzN4NXNlZQ==" target="_blank"><AiFillInstagram className="cursor-pointer" size={20} /></Link>
                    <Link href="https://x.com/Kellydrilwater?t=1eAzaDO4H7o2Fu4-fRn2dg&s=09" target="_blank"><BsTwitter className="cursor-pointer" size={20} /></Link>
                    <Link href="https://www.linkedin.com/in/kellydrilwater-3a8923297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><AiFillLinkedin className="cursor-pointer" size={20} /></Link>
                </div>

            </div>
        </main>
    )
}


