import {Grip} from 'lucide-react';
import {Medicine} from '@/types/Medicine';
import {MedicineCard} from '@/components/medicine/MedicineCard';
import Napa from './napa-extend.jpeg';

export const MedicineSection = () => {
    return (
        <section className="container mx-auto">
            <div className="flex gap-2 items-center mt-4 mb-2 md:mt-10 md:mb-4">
                <Grip/>
                <h2 className="text-lg md:text-2xl font-bold text-slate-800">Medicine</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {/*{*/}
                {/*    MEDICINES.map((medicine) => (*/}
                {/*        <MedicineCard key={medicine.id} {...medicine}/>*/}
                {/*    ))*/}
                {/*}*/}
            </div>
        </section>
    );
};