'use client';

import {SectionLabel} from '@/components/SectionLabel';
import {useParams} from 'next/navigation';
import {MEDICINE} from '@/constants/Medicines';
import {MedicineCard} from '@/components/medicine/MedicineCard';

const LABEL = 'Similar Products';

export const SimiliarProducts = () => {

    const {category_slug} = useParams();

    return (
        <div>
            <SectionLabel label={LABEL}/>
            <div className="flex flex-1 flex-nowrap gap-2 items-start overflow-x-auto py-2">
                {
                    MEDICINE.map((medicine, index) => (
                        <MedicineCard
                            key={index}
                            medicine={medicine}
                        />
                    ))
                }
                {
                    MEDICINE.map((medicine, index) => (
                        <MedicineCard
                            key={index}
                            medicine={medicine}
                        />
                    ))
                }
                {
                    MEDICINE.map((medicine, index) => (
                        <MedicineCard
                            key={index}
                            medicine={medicine}
                        />
                    ))
                }
            </div>
        </div>
    );
};