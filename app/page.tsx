import {Navbar} from "@/components/Navbar";
import {HeroSection} from "@/components/herosection/HeroSection";
import {CategorySection} from "@/components/categorysection/CategorySection";
import {MedicineSection} from "@/components/medicinesection/MedicineSection";

export default function Home() {
    return (
        <main>
            <Navbar/>
            <HeroSection/>
            <CategorySection/>
            <MedicineSection/>
        </main>
    );
}
