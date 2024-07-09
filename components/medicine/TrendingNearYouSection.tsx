'use client';

import {SectionLabel} from '@/components/SectionLabel';
import {MedicineCard} from '@/components/medicine/MedicineCard';
import {MEDICINE} from '@/constants/Medicines';

const SECTION_LABEL = 'Trending Near You';
const SUB_LABEL = 'Popular in your city';

export const TrendingNearYouSection = () => {
    return (
        <section className="container mx-auto">
            <SectionLabel label={SECTION_LABEL} subLabel={SUB_LABEL}/>
            <div className="flex flex-1 flex-nowrap no-scrollbar gap-2 items-start overflow-x-auto py-2">
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