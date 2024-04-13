import HeroSection from '@/components/homePage/HeroSection';
import SecondSection from '@/components/homePage/SecondSection';
import ThirdSection from "@/components/homePage/machineExplanation";
import FourthSection from "@/components/homePage/Ourservices";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </main>
  )
}
