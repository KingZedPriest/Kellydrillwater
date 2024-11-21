import Image, { StaticImageData } from "next/image";



type CustomHeroSectionProps = {
    pageName: string;
    currentPage: string;
    imgSrc: StaticImageData;
}


const CustomHeroSection = ({ pageName, currentPage, imgSrc }: CustomHeroSectionProps) => {
    return (
        <main className="relative border-accentColor/20 border-b w-full h-[35rem] sm:h-[37rem] md:h-[39rem] lg:h-[41rem] xl:h-[43rem] 2xl:h-[45rem]">
            <Image src={imgSrc} alt="Logo" className="md:object-top opacity-20 w-full h-full object-center object-cover" />
            <section className="top-0 left-0 absolute flex justify-center items-center bg-black/80 w-full h-full">
                <div className="text-right flex flex-col gap-y-10">
                    <h1 className="font-semibold text-3xl text-white md:text-4xl 2xl:text-5xl">{pageName}</h1>
                    <p className="text-right text-sm text-white/70 md:text-base xl:text-lg uppercase"><span className="text-white/30">Home </span>| {currentPage}</p>
                </div>
            </section>
        </main>
    );
}

export default CustomHeroSection;