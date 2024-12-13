
const values = [
    { heading: "Our Mission", body: "To provide sustainable, innovative, and efficient water solutions, ensuring access to clean and drinkable water for communities, businesses, and industries while prioritizing environmental stewardship and customer satisfaction." },
    { heading: "Our Vision", body: "To be a global leader in water drilling and management, transforming lives by delivering clean, drinkable water to every corner of the world, one well at a time." },
    { heading: "Our Purpose", body: "At Kellydrill, we believe that access to clean water is a fundamental human right. Our purpose is to bridge the gap between communities and reliable water sources by leveraging advanced technology and expertise to create a future where everyone has access to safe and drinkable water." }
]


const SecondSection = () => {
    return (
        <main className="mt-20 px-5 sm:px-10 md:px-20 xl:px-32 py-6">
            <div className="text-right flex flex-col items-end gap-y-1">
                <p className="tracking-widest">CLEAN WATER FOR ALL</p>
                <div className="font-bold text-lg text-linkColor sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">
                    <h3>Our Mission,</h3>
                    <h3>Vision, and Purpose</h3>
                </div>
            </div>
            <div className="gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 text-textColor">
                {values.map((value, index) => (
                    <div key={`value ${index}`} className="shadow-[1px_1px_4.8px_0px_rgba(0,_0,_0,_0.2)] px-3 md:px-4 py-6 md:py-8 rounded-[4px]">
                        <p className="font-extrabold text-xs sm:text-sm md:text-base xl:text-lg">{value.heading}</p>
                        <p className="mt-6 md:mt-10 max-w-[40ch] font-medium">{value.body}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default SecondSection;