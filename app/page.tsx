import { Navbar } from "@/components/Navbar";
import {HeroSection} from "@/components/herosection/HeroSection";
import {CategorySection} from "@/components/categorysection/CategorySection";

export default function Home() {
  return (
    <main>
      <Navbar />
        <HeroSection/>
        <CategorySection/>
    </main>
  );
}
