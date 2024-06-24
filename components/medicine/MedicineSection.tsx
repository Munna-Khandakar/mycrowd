import {Grip} from 'lucide-react';
import {Medicine} from '@/types/Medicine';
import {MedicineCard} from '@/components/medicine/MedicineCard';
import Napa from './napa-extend.jpeg';

// const MEDICINES: Medicine[] = [
//     {
//         id: '1',
//         name: 'Napa',
//         price: 100,
//         img: Napa,
//     },
//     {
//         id: '2',
//         name: 'Oradin',
//         price: 200,
//         img: Napa,
//     },
//     {
//         id: '3',
//         name: 'Panadol',
//         price: 300,
//         img: Napa,
//     },
//     {
//         id: '4',
//         name: 'Antacid',
//         price: 400,
//         img: Napa,
//     },
//     {
//         id: '5',
//         name: 'Zimax 500mg',
//         price: 500,
//         img: Napa,
//     }
//
// ];

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