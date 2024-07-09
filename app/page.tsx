import {CategorySection} from '@/components/categorysection/CategorySection';
import {MedicineSection} from '@/components/medicine/MedicineSection';
import {NewLaunchSection} from '@/components/medicine/NewLaunchSection/NewLaunchSection';
import {Searchbar} from '@/components/Searchbar/Searchbar';
import {OrderWithPrescription} from '@/components/OrderWithPrescription/OrderWithPrescription';
import {Promo} from '@/components/promo/Promo';

export default function Home() {
    return (
        <main className="flex flex-col gap-6 md:gap-16">
            <Searchbar/>
            <CategorySection/>
            <Promo/>
            <OrderWithPrescription/>
            <NewLaunchSection/>
            <MedicineSection/>
        </main>
    );
}
