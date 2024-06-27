import {HeroSection} from '@/components/herosection/HeroSection';
import {CategorySection} from '@/components/categorysection/CategorySection';
import {MedicineSection} from '@/components/medicine/MedicineSection';
import {NewLaunchSection} from '@/components/medicine/NewLaunchSection/NewLaunchSection';
import {Searchbar} from '@/components/Searchbar/Searchbar';

export default function Home() {
    return (
        <main>
            <Searchbar/>
            <HeroSection/>
            <CategorySection/>
            <NewLaunchSection/>
            <MedicineSection/>
        </main>
    );
}
