'use client';

import {useParams} from 'next/navigation';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {MEDICINE} from '@/constants/Medicines';
import {MedicineLongCard} from '@/components/medicine/MedicineLongCard';

export const CategorySlugPage = () => {

    const {category_slug} = useParams();

    return (
        <section className="container py-8">
            <div className="flex justify-between items-center pb-4">
                <h1 className="text-2xl">{category_slug}</h1>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort By"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="apple">Popularity</SelectItem>
                            <SelectItem value="blueberry">Price Low to High</SelectItem>
                            <SelectItem value="grapes">Price High to Low</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex flex-wrap gap-2">
                {
                    MEDICINE.map((medicine, index) => (
                        <MedicineLongCard medicine={medicine} key={index}/>
                    ))
                }
                {
                    MEDICINE.map((medicine, index) => (
                        <MedicineLongCard medicine={medicine} key={index}/>
                    ))
                }
                {
                    MEDICINE.map((medicine, index) => (
                        <MedicineLongCard medicine={medicine} key={index}/>
                    ))
                }
            </div>
        </section>
    );
};