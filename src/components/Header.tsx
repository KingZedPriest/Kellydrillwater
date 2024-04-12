"use client";
import { useState } from "react";
//Import Icons
import { FaWhatsapp } from "react-icons/fa";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { GiCrossedBones } from "react-icons/gi";
import { Menu, Whatsapp } from "iconsax-react";
//Links Mechanism
import Link from "next/link";
//Import Images and the Image component
import logo from "../../public/mainLogo.png";
import Image from "next/image";

export default function Header() {
  // For the Hamburger Menu
  const [visible, setVisible] = useState<boolean>(false);
  const setVisibility = () => {
    setVisible(!visible);
  };
  return (
    <main className="relative">
      <div className="md:px-18 flex items-center justify-between px-6 py-10 sm:px-12 lg:px-24">
        <Link href="/">
          <Image
            src={logo}
            alt="Kelly Drill Company Logo"
            className="w-10 cursor-pointer duration-500 hover:grayscale"
          />
        </Link>
        <div className="hidden gap-5 md:flex">
          <Link
            className="hover:bg-secAccentColor rounded-lg px-3 py-2 font-semibold duration-500 hover:text-white"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:bg-secAccentColor rounded-lg px-3 py-2 font-semibold duration-500 hover:text-white"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="hover:bg-secAccentColor rounded-lg px-3 py-2 font-semibold duration-500 hover:text-white"
            href="/about"
          >
            About Us
          </Link>
          <Link
            className="hover:bg-secAccentColor rounded-lg px-3 py-2 font-semibold duration-500 hover:text-white"
            href="/contact"
          >
            Contact Us
          </Link>
        </div>
        <div className="hidden items-center gap-5 md:flex">
          <Link
            className="text-green-600 duration-500 hover:-translate-y-2"
            href="https://api.whatsapp.com/send?phone=%2B2348160244412&data=ARB3st80c0EmKqQPQM23W3wsTdIKITer1B8PXqpvBR2WKihPl7t3B_N03p0WwQ-l6mnWTAJDnKGM0Vo6wM9re9f82KivFkwu23AO-VwDsjoAHFUTIFh5jsTtukDd0nPhYoL-oxRwnwvhmxkDoKaxbIwmEA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR1U0dhQUKjqpldb4yxJHYyBLiUJSq1SgDUVnDI5kIxAg9ZEeMWyF1IpCYk"
            target="_blank" rel="noopener noreferrer">
            <Whatsapp size="40" variant="Broken"/>
          </Link>
          <Link
            className="bg-headersColor hover:bg-secAccentColor rounded-3xl px-8 py-3 font-semibold text-white duration-500 hover:-translate-y-2"
            href="tel:+2348160244412"
          >
            Call Now
          </Link>
        </div>
        <div className="md:hidden">
          <Menu className="cursor-pointer" onClick={setVisibility} size={35} variant="Broken"/>
        </div>
      </div>
      {/* Collapsed Nav bar */}
      <div
        className={`${
          visible ? "menu" : "hidden"
        } bg-containerColor fixed right-0 top-0 z-10 h-screen w-80 md:hidden`}
      >
        <div className="bg-whiteColor ml-6 mt-10 flex w-12 items-center justify-center rounded-[50%] p-2">
          <GiCrossedBones
            size={24}
            className="cursor-pointer"
            onClick={setVisibility}
          />
        </div>
        <div className="mt-10 flex flex-col gap-5 px-4">
          <Link
            className=" hover:bg-secAccentColor rounded-lg ml-3 hover:px-3 py-2 font-semibold text-white duration-500 hover:border-r-4 hover:border-white"
            href="/"
          >
            Home
          </Link>
          <Link
            className=" hover:bg-secAccentColor hover: rounded-lg ml-3 hover:px-3 py-2 font-semibold text-white duration-500 hover:border-r-4 hover:border-white"
            href="/services"
          >
            Services
          </Link>
          <Link
            className=" hover:bg-secAccentColor rounded-lg ml-3 hover:px-3 py-2 font-semibold text-white duration-500 hover:border-r-4 hover:border-white"
            href="/about"
          >
            About Us
          </Link>
          <Link
            className=" hover:bg-secAccentColor rounded-lg ml-3 hover:px-3 py-2 font-semibold text-white duration-500 hover:border-r-4 hover:border-white"
            href="/contact"
          >
            Contact Us
          </Link>
          <hr />
          <div className="mt-2 flex items-center gap-5">
            <Link
              className=" text-white duration-500 hover:-translate-y-2"
              href="https://api.whatsapp.com/send?phone=%2B2348160244412&data=ARB3st80c0EmKqQPQM23W3wsTdIKITer1B8PXqpvBR2WKihPl7t3B_N03p0WwQ-l6mnWTAJDnKGM0Vo6wM9re9f82KivFkwu23AO-VwDsjoAHFUTIFh5jsTtukDd0nPhYoL-oxRwnwvhmxkDoKaxbIwmEA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR1U0dhQUKjqpldb4yxJHYyBLiUJSq1SgDUVnDI5kIxAg9ZEeMWyF1IpCYk"
            >
              <Whatsapp size="40" variant="Broken"/>
            </Link>
            <Link
              className=" rounded-3xl border-2 border-white px-8 py-2 font-semibold text-white duration-500 hover:-translate-y-2"
              href="tel:+2348160244412"
            >
              Call Now
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
