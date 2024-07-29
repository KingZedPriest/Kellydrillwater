
//Import Needed Images
import galleryImg from "../../../public/kellyImg2.jpg";

//Import Needed Videos


const OurGallery = () => {
    return (
        <main className="md:px-18 bg-whiteColor px-6 py-32 sm:px-12 lg:px-24 text-xs md:text-sm xl:text-base">
            <div className="flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row lg:justify-between">
                <div className="flex flex-col gap-y-3">
                    <h3 className="font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-linkColor max-w-[16ch]">Our Gallery</h3>
                    <div className="w-12 sm:w-14 md:w-16 xl:w-20 2xl:w-24 h-1 sm:h-1.5 lg:h-2 bg-[#ffcc33] rounded-sm mt-2"></div>
                    <p className="text-black/70 max-w-[30ch]">Showcasing the Results of Our Skilled Water Well Drilling and Management Expertise Through a Curated Gallery of Completed Projects.</p>
                </div>
                <div className="flex flex-col gap-y-5 overflow-x-auto special">
                    <div className="flex gap-x-5">
                        <div className="h-60 w-80 mb-4 min-h-[15rem] min-w-[20rem]">
                            {/* <Video src={galleryVideo} accentColor="#3da959" className="h-full rounded-xl"/> */}
                        </div>
                        <div className="bg-red-900 h-[32rem] min-h-[32rem] min-w-[20rem] w-80 mb-4">

                        </div>
                        <div className="bg-red-900 h-72 min-h-[18rem] min-w-[20rem] w-80 mb-4">
                            {/* <Video src={galleryVideo2} accentColor="#3da959"  className="h-full rounded-xl" /> */}
                        </div>
                    </div>
                    <div className="flex gap-x-5">
                        <div className="bg-red-900 h-96 min-h-[24rem] min-w-[20rem] w-80 mb-4 -mt-[18rem]">

                        </div>
                        <div className="bg-red-900 h-60 w-80 mb-4 min-h-[15rem] min-w-[20rem] -mt-[1rem]">
                            {/* <Video src={galleryVideo1} accentColor="#3da959"  className="h-full rounded-xl"/> */}
                        </div>
                        <div className="bg-red-900 h-[32rem] min-h-[32rem] min-w-[20rem] w-80 mb-4 -mt-[15rem]">

                        </div>
                    </div>
                    <p className="2xl:hidden text-xs font-semibold text-linkColor">Kindly Scroll Right To Reveal More Images</p>
                </div>
            </div>
        </main>
    );
}

export default OurGallery;