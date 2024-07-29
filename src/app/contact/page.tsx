//Import Needed Components
import CustomHeroSection from "@/components/CustomHeroSection";
import ScrollReveal from "@/components/RevelOnScroll";
import ContactForm from "@/components/ContactUs/ContactForm";

//Import Needed Images
import contactUsImg from "../../../public/googleMap.jpg"


const page = () => {
    return (
        <main>
            <CustomHeroSection imgSrc={contactUsImg} pageName="Contact Us" currentPage="contact us" />
            <ScrollReveal>
                <ContactForm />
            </ScrollReveal>
        </main>
    );
}

export default page;