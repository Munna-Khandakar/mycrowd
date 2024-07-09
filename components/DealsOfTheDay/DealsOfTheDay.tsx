'use client';

import {SectionLabel} from '@/components/SectionLabel';
import {MedicineCard} from '@/components/medicine/MedicineCard';
import {MEDICINE} from '@/constants/Medicines';

const SECTION_LABEL = 'Deals Of the Day';

export const DealsOfTheDay = () => {
    return (
        <section className="container mx-auto">
            <SectionLabel label={SECTION_LABEL}/>
            <div className="flex flex-1 flex-nowrap gap-2 no-scrollbar items-start overflow-x-auto py-2">
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