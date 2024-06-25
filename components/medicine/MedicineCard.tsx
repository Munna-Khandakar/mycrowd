'use client';

import Image from 'next/image';
import Link from 'next/link';
import {Medicine} from '@/types/Medicine';
import {Fragment} from 'react';
import {Badge} from '@/components/ui/badge';
import {MedicineUtils} from '@/utils/MedicineUtils';

type MedicineCardProps = {
    medicine: Medicine
}

export function MedicineCard(props: MedicineCardProps) {

    const {medicine} = props;

    return (
        <Link href={`/${medicine.category}/${medicine.id}`} className="border-0 min-w-fit">
            <div className="flex flex-col items-center w-[120px] md:w-[200px] gap-2">
                <div
                    className="flex items-center justify-center rounded-lg p-2 border w-full h-[120px] md:h-[200px] hover:shadow">
                    <Image src={medicine.image} alt={medicine.name}
                           width={160} objectFit={'fill'}
                           className="hover:scale-110 transition w-[100px] md:w-[160px] h-[100px] md:h-[160px]"
                    />
                </div>
                <div>
                    <span
                        className="text-xs md:text-base font-medium line-clamp-2 leading-6 text-wrap truncate text-slate-800">
                    {medicine.name}
                     </span>
                    <span className="text-slate-500 font-normal text-xs md:text-sm">
                    MRP:
                        <span className={`${medicine?.discount ? 'line-through' : ''}`}>৳{medicine.price}</span>
                        {
                            medicine?.discount &&
                            <Fragment>
                                <Badge variant="secondary" className="text-red-500">
                                    {MedicineUtils.calculateDiscountPercentage(medicine.price, medicine.discount)}% OFF
                                </Badge>
                                <br/>
                                <span className="font-bold text-slate-900">৳{medicine.price - medicine.discount}</span>
                            </Fragment>
                        }
                    </span>
                </div>
            </div>
        </Link>
    );
}
