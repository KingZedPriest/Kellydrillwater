//Components
import CustomHeroSection from "@/components/CustomHeroSection";

//Images
import serviceImg from "../../../public/kellyImg.jpg";

export default function Service(){
    return(
        <CustomHeroSection imgSrc={serviceImg} pageName="Our Services" currentPage="our services" />
    )
}