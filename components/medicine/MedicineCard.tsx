'use client';

import Image from 'next/image';
import Link from 'next/link';
import {Medicine} from '@/types/Medicine';

type MedicineCardProps = {
    medicine: Medicine
}

export function MedicineCard(props: MedicineCardProps) {

    const {medicine} = props;

    console.log(medicine);

    return (
        <Link href={'1'} className="border-0 min-w-fit">
            <div className="flex flex-col items-center w-[200px]">
                <div
                    className="rounded p-2 border h-[200px] hover:shadow">
                    <Image src={medicine.image} alt={medicine.name}
                           width={160} objectFit="contain"
                           className="hover:scale-110 transition"
                    />
                </div>
                <p className="text-xs md:text-base font-medium line-clamp-2 leading-6 text-wrap truncate text-slate-800 mt-2">
                    {medicine.name}
                </p>
            </div>
        </Link>
    );
}
