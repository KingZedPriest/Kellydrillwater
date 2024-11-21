import Image from "next/image";
import Link from "next/link";

//Images
import newBorehole from "../../../public/newBorehole.jpg";

const ServiceList = () => {
    return (
        <main className="mt-20 px-5 sm:px-10 md:px-20 xl:px-32 py-6">
            <div className="flex md:flex-row flex-col md:justify-between md:items-end gap-y-5 pb-10 border-b border-black/60">
                <div className="flex flex-col gap-y-1">
                    <p className="tracking-widest">CERTIFIED SERVICES</p>
                    <div className="font-bold text-lg text-linkColor sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">
                        <h3>Our Unique &</h3>
                        <h3>Exceptional Services</h3>
                    </div>
                </div>
                <Link href="" className="justify-end bg-[#ffcc33] hover:bg-linkColor px-3 md:px-5 lg:px-8 xl:px-10 py-3 md:py-4 rounded-md text-center hover:text-whiteColor duration-300">Get a Quote</Link>
            </div>
            <div className="gap-4 grid grid-cols-2 xl:grid-cols-4 md:grid-col-3 mt-10">
                <div className="relative rounded-md w-fit h-fit duration-300 cursor-pointer group">
                    <Image src={newBorehole} alt="New Borehole" className="relative border border-black/30 rounded-md" />
                    <div className="group-hover:bg-black/50 group-hover:flex top-0 left-0 absolute justify-center items-center hidden rounded-md w-full h-full duration-300">
                        <div className="flex justify-center items-center bg-[#ffcc33] rounded-[50%] w-20 h-20">
                            VIEW
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ServiceList;