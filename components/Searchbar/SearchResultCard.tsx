'use client';

import {ChevronRight} from 'lucide-react';
import {Medicine} from '@/types/Medicine';
import Link from 'next/link';

type SearchResultCardProps = {
    medicine: Medicine
}

export const SearchResultCard = (props: SearchResultCardProps) => {

    const {medicine} = props;

    return (
        <Link
            href={`/${medicine.category}/${medicine.id}`}
            className="w-full border-0 p-0 rounded-0"
        >
            <div
                className="flex items-center text-start w-full justify-between p-2 hover:bg-teal-50">
                <span className="text-slate-600 text-sm truncate text-nowrap font-normal ml-8">{medicine.name}</span>
                <ChevronRight size={16}/>
            </div>
        </Link>

    );
};