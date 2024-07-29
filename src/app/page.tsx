//Import Needed Components
import ScrollReveal from "@/components/RevelOnScroll";
import HeroSection from '@/components/homePage/HeroSection';
import SecondSection from '@/components/homePage/SecondSection';
import ThirdSection from "@/components/homePage/machineExplanation";
import FourthSection from "@/components/homePage/Ourservices";
import FifthSection from "@/components/homePage/OurGallery";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ScrollReveal>
        <SecondSection />
      </ScrollReveal>
      <ScrollReveal>
        <ThirdSection />
      </ScrollReveal>
      <ScrollReveal>
        <FourthSection />
      </ScrollReveal>
      <ScrollReveal>
        <FifthSection />
      </ScrollReveal>
    </main>
  )
}
