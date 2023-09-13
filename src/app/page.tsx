import Image from 'next/image'
import HeroSection from '@/components/homePage/HeroSection';
import SecondSection from "@/components/homePage/machinePage";
import ThirdSection from "@/components/homePage/machineExplanation";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <SecondSection />
      <ThirdSection />
    </main>
  )
}
