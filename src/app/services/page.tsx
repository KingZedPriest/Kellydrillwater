//Components
import CustomHeroSection from "@/components/CustomHeroSection";
import ScrollReveal from "@/components/RevelOnScroll";
import ServiceList from "@/components/Services/ServiceList";
import Testimonial from "@/components/Testimonial";

//Images
import serviceImg from "../../../public/kellyImg.jpg";

export default function Service() {
    return (
        <main>
            <CustomHeroSection imgSrc={serviceImg} pageName="Our Services" currentPage="our services" />
            <ScrollReveal>
                <ServiceList />
            </ScrollReveal>
            <ScrollReveal>
                <Testimonial />
            </ScrollReveal>
        </main>
    )
}