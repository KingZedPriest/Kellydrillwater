import Image, { StaticImageData } from "next/image";



type CustomHeroSectionProps = {
    pageName: string;
    currentPage: string;
    imgSrc: StaticImageData;
}


const CustomHeroSection = ({ pageName, currentPage, imgSrc }: CustomHeroSectionProps) => {
    return (
        <main className="relative w-full h-[35rem] sm:h-[37rem] md:h-[39rem] lg:h-[41rem] xl:h-[43rem] 2xl:h-[45rem] border-b border-primary/20">
            <Image src={imgSrc} alt="Logo" className="h-full w-full object-cover object-center opacity-20" />
            <section className="absolute h-full w-full top-0 left-0 bg-bgDark/80 text-textDark flex items-center justify-center">
                <div className="flex flex-col gap-y-10 text-right">
                    <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-semibold ">{pageName}</h1>
                    <p className="text-sm md:text-base xl:text-lg text-right uppercase"><span className="text-textDark/30">Home </span>| {currentPage}</p>
                </div>
            </section>
        </main>
    );
}

export default CustomHeroSection;