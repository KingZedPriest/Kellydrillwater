//Components
import CustomHeroSection from "@/components/CustomHeroSection";
import ScrollReveal from "@/components/RevelOnScroll";
import FirstSection from "@/components/AboutUs/FirstSection";
import SecondSection from "@/components/AboutUs/SecondSection";
import Testimonial from "@/components/Testimonial";

//Images
import aboutImg from "../../../public/kellyImg5.jpg";


export default function About() {
    return (
        <main>
            <CustomHeroSection imgSrc={aboutImg} pageName="About us" currentPage="about us" />
            <ScrollReveal>
                <FirstSection />
            </ScrollReveal>
            <ScrollReveal>
                <SecondSection />
            </ScrollReveal>
            <ScrollReveal>
                <Testimonial />
            </ScrollReveal>
        </main>
    )
}