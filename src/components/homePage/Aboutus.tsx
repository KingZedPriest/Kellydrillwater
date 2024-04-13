import Image from "next/image";

//Import Needed Images
import aboutUs from "../../../public/aboutUs.png";
import Link from "next/link";


const Aboutus = () => {
    return ( 
        <main className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:justify-between px-6 sm:px-12 lg:px-24 md:px-18 text-xs md:text-sm xl:text-base">
            <div className="lg:w-1/2 flex flex-col gap-y-10">
                <p className="font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-secAccentColor">About <span className="text-headersColor">KellyDrill</span> Water</p>
                <p className="text-black/70">Kellydrill is a leading water drilling and management company with over 10 years of industry experience. Established in 2013, our organization has progressively become a trusted provider of sustainable water solutions for a wide range of clients, including residential communities, commercial estates, and industrial facilities. <br /><br /> <br />Headquartered at No. 16 Ukwuorji Junction, Awka in Anambra State, Kellydrill is a duly registered company under the registration number RC: 3778486. Our team of experienced drilling experts and hydrologists utilize the latest technology and techniques to accurately identify underground water sources and deliver high-quality, reliable water infrastructure.</p>
                <Link href="/about" className="mt-4 bg-secAccentColor text-center text-white rounded-xl w-44 py-3 border border-secAccentColor hover:bg-white hover:text-secAccentColor duration-300">Read More</Link>
            </div>
            <div className="lg:w-1/2">
                <Image src={aboutUs} alt="Kelly Drill Water Services" priority/>
            </div>
        </main>
     );
}
 
export default Aboutus;