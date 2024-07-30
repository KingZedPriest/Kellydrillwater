// @ts-ignore
import CountryRegion from "countryregionjs";

const countryRegion = new CountryRegion();




const Quote = async () => {

    const states = await countryRegion.getStates(159)

    return (
         <main className="px-6 py-32 sm:px-12 md:px-18 lg:px-24">
            <div className="flex flex-col gap-y-3 items-center text-center">
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-linkColor max-w-[16ch]">Quote</h3>
                <div className="w-12 sm:w-14 md:w-16 xl:w-20 2xl:w-24 h-1 sm:h-1.5 lg:h-2 bg-[#ffcc33] rounded-sm mt-2"></div>
                <p className="text-black/70 max-w-[70ch]">Get Your Personalized Water Drilling Estimate.</p>
            </div>
        </main>
    );
}

export default Quote;