//Components
import CustomHeroSection from "@/components/CustomHeroSection";

//Images
import aboutImg from "../../../public/kellyImg5.jpg";


export default function About(){
    return(
        <CustomHeroSection imgSrc={aboutImg} pageName="About us" currentPage="about us" />
    )
}