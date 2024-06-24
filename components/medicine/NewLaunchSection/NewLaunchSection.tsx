'use client';
import {SectionLabel} from '@/components/SectionLabel';
import {Medicine} from '@/types/Medicine';
import {MedicineCard} from '@/components/medicine/MedicineCard';
import Softovc from './../softovac.webp';

const SECTION_LABEL = 'New Launches';

const MEDICINE: Medicine[] = [
    {
        id: '1',
        image: Softovc,
        name: 'Softovac Liquifibre Mango Flavour Sugar Free Bottle Of 225ml Liquid',
        price: 140
    },
    {
        id: '2',
        image: Softovc,
        name: 'Softovac Liquifibre Mango Flavour Sugar Free Bottle Of 225ml Liquid',
        price: 140
    },
];

export const NewLaunchSection = () => {
    return (
        <section className="container mx-auto">
            <SectionLabel label={SECTION_LABEL}/>
            <div className="flex flex-1 flex-nowrap gap-2 items-center overflow-x-auto py-2">
                {
                    MEDICINE.map((medicine, index) => (
                        <MedicineCard
                            key={index}
                            medicine={medicine}
                        />
                    ))
                }
            </div>
        </section>
    );
};