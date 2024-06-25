'use client';

import {useParams} from 'next/navigation';
import Image from 'next/image';
import {MEDICINE} from '@/constants/Medicines';
import Link from 'next/link';
import {Fragment} from 'react';
import {Badge} from '@/components/ui/badge';
import {MedicineUtils} from '@/utils/MedicineUtils';
import {SimiliarProducts} from '@/components/category_slug/medicine/SimiliarProducts';
import {MedicineHero} from '@/components/category_slug/medicine/MedicineHero';

export const MedicinePage = () => {

    const {category_slug, medicine_id} = useParams();

    const selectedMedicine = MEDICINE[1];

    return (
        <section className="container py-8">
            <div className="grid grid-cols-3">
                <div className="col-span-2 p-2 ">
                    <MedicineHero medicine={selectedMedicine}/>
                    <hr className="my-6"/>
                    <SimiliarProducts/>
                </div>
                <div className="border p-2"> car=td</div>
            </div>
        </section>
    );
};