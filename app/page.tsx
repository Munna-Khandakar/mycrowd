import {HeroSection} from '@/components/herosection/HeroSection';
import {CategorySection} from '@/components/categorysection/CategorySection';
import {MedicineSection} from '@/components/medicine/MedicineSection';
import {NewLaunchSection} from '@/components/medicine/NewLaunchSection/NewLaunchSection';

export default function Home() {
    return (
        <main>
            <HeroSection/>
            <CategorySection/>
            <NewLaunchSection/>
            <MedicineSection/>
        </main>
    );
}
