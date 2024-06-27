'use client';

import {Medicine} from '@/types/Medicine';
import Image from 'next/image';
import Link from 'next/link';
import {Fragment} from 'react';
import {Badge} from '@/components/ui/badge';
import {MedicineUtils} from '@/utils/MedicineUtils';
import {AddToCartButton} from '@/components/AddToCartButton';


type MedicineHeroProps = {
    medicine: Medicine
}

export const MedicineHero = (props: MedicineHeroProps) => {

    const {medicine} = props;

    return (
        <div className="flex gap-4 md:gap-8">
            <div className="h-[180px] md:h-[250px] w-[180px] md:w-[250px] rounded-lg p-4 border items-center flex justify-center">
                <Image
                    src={medicine.image} alt={medicine.name}
                    className="w-full h-full hover:scale-110 transition"
                    width={220} height={220} objectFit={'contain'}
                />
            </div>
            <div>
                <h1 className="text-base md:text-2xl font-medium leading-5 md:leading-9">{medicine.name}</h1>
                {
                    medicine?.productDetails &&
                    <Link
                        href={`/company/${medicine.productDetails?.brand}`}
                        className="text-teal-900 font-normal text-xs md:text-sm leading-2 md:leading-7">Visit
                        all {medicine?.productDetails?.brand} Company &apos;s Product
                    </Link>
                }
                <br/>
                <div className="flex justify-between items-center">
                    <div className="mt-4">
                                <span className="text-slate-900 font-bold text-xs md:text-lg leading-9">
                                MRP:
                                </span>
                        <span className={`${medicine?.discount ? 'line-through text-slate-400' : ''}`}>
                                ৳{medicine.price}
                                </span>
                        {
                            medicine?.discount &&
                            <Fragment>
                                <Badge variant="secondary" className="text-red-500">
                                    {MedicineUtils.calculateDiscountPercentage(medicine.price, medicine.discount)}%
                                    OFF
                                </Badge>
                                <br/>
                                <span
                                    className="font-bold text-slate-900">৳{medicine.price - medicine.discount}</span>
                            </Fragment>
                        }
                    </div>
                    <AddToCartButton/>
                </div>
                <p className="text-xs text-slate-500">Inclusive of all taxes</p>
                <p className="text-xs text-slate-500 mt-4">
                    Delivery by <b>Today, before 10:00 pm</b>
                </p>
            </div>
        </div>
    );

};