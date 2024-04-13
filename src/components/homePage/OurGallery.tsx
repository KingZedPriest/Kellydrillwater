const OurGallery = () => {
    return ( 
        <main className="md:px-18 bg-whiteColor px-6 py-32 sm:px-12 lg:px-24 text-xs md:text-sm xl:text-base">
            <div className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row md:justify-between">
                <div className="flex flex-col gap-y-3">
                    <h3 className="font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-linkColor max-w-[16ch]">Our Gallery</h3>
                    <div className="w-12 sm:w-14 md:w-16 xl:w-20 2xl:w-24 h-1 sm:h-1.5 lg:h-2 bg-[#ffcc33] rounded-sm mt-2"></div>  
                    <p className="text-black/70 max-w-[30ch]">Showcasing the Results of Our Skilled Water Well Drilling and Management Expertise Through a Curated Gallery of Completed Projects.</p>
                </div>
            </div>
        </main>
     );
}
 
export default OurGallery;