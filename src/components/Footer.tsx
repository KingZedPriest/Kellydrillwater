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
export default function Footer(){
    return(
        <main className="py-10 px-6 sm:px-12 lg:px-24 md:px-18 bg-secAccentColor text-white">
            <div className="text-white flex flex-col space-y-8 lg:space-y-0 lg:flex-row justify-between">
            <div className="flex flex-col">
                <h4 className="font-bold">Locations</h4>
                <p className="mt-2">Anambra</p>
                <p className="mt-2">Enugu</p>
                <p className="mt-2">Ebonyi</p>
                <p className="mt-2">Abia</p>
                <p className="mt-2">Imo</p>
            </div>
            <div className="flex flex-col">
            <h4 className="font-bold">About Us</h4>
            <Link className="mt-2 hover:bg-headersColor duration-500 hover:px-2 rounded-md py-2" href="/">Our Drillers</Link>
            <Link className="mt-2 hover:bg-headersColor duration-500 hover:px-2 rounded-md py-2" href="/">Why Us?</Link>
            <Link className="mt-2 hover:bg-headersColor duration-500 hover:px-2 rounded-md py-2" href="/">Services</Link>
            <Link className="mt-2 hover:bg-headersColor duration-500 hover:px-2 rounded-md py-2" href="/">Project Tools</Link>
            <Link className="mt-2 hover:bg-headersColor duration-500 hover:px-2 rounded-md py-2" href="/">Partner With Us</Link>
            </div>
            <div className="flex flex-col">
            <h4 className="font-bold">Contact Us</h4>
            <p className="mt-2">Email: contactus@Kellydrillwater.com</p>
            <p className="mt-2">Call: +234 81 6024 4412</p>
            <Link className="mt-2 hover:bg-headersColor duration-500 hover:px-2 rounded-md py-2" href="/">FAQ</Link>         
            </div>
            <div className="flex flex-col">
            <h4 className="font-bold">Newsletter</h4>
                <p className="mt-2 capitalize">Join our community and be the first to know of any update.</p>
                <div className="mt-8 flex flex-row items-center">
                    <input className="w-56 sm:w-60 py-3 px-4 focus:outline-headersColor text-black caret-headersColor placeholder:text-sm rounded-md" type="email" name="email" id="email" placeholder="Enter Your Email..." />
                    <button className="font-semibold md:w-40 bg-headersColor border-r-4 border-headersColor px-2 py-3 rounded-md hover:bg-white hover:text-containerColor duration-500" ><Link href="/">Subscribe</Link></button>
                </div>
            </div>
        </div>
        <div className="mt-16 flex flex-row justify-between border-y border-white py-4">
            <div className="flex flex-row items-center">
                <div className="border-r border-white pr-4">
                    <div className="p-4 bg-white">
                        <Image src={logo} alt="Kellydrill Logo" className="w-10"/>  
                    </div>
                </div>
               <div className="ml-4">
               <p className="headingFont text-white text-xs md:text-sm lg:text-base">Best Drilling Company In Nigeria.</p>
               </div>
            </div>
            <div className="flex flex-row space-x-2 md:space-x-8 my-auto">
            <Link href="https://web.facebook.com/profile.php?id=100076353184277" target="_blank" rel="noopener noreferrer"><BsFacebook className="cursor-pointer" size={20}/></Link>
            <Link href=""><AiFillInstagram className="cursor-pointer" size={20}/></Link>
            <Link href=""><BsTwitter className="cursor-pointer" size={20}/></Link>
            <Link href=""><AiFillLinkedin className="cursor-pointer" size={20}/></Link>
            </div>
            
        </div>
        </main>
    )
}


