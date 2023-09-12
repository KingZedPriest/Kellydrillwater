import Image from 'next/image'
import HeroSection from '@/components/homePage/HeroSection';
import SecondSection from "@/components/homePage/machinePage";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SecondSection />
    </main>
  )
}
