'use client';

import {Search} from 'lucide-react';
import {Input} from '@/components/ui/input';

export const Searchbar = () => {
    return (
        <div className="container flex flex-col w-fit justify-center items-center gap-6 h-[300px]">
            <div className="text-center">
                <h1 className="text-3xl font-semibold text-slate-800 mb-2">Search fundraisers on MyCrowd</h1>
                <span className="text-sm text-slate-500 font-normal">Find fundraisers by location, title, keyword, or a person’s name</span>
            </div>
            <div className="flex w-full items-center bg-amber-50 rounded-xl">
                <Search className="ml-4" size={20} color="gray"/>
                <Input
                    type="text"
                    title="Search Application"
                    className="py-2 md:py-6 border-0 outline-none shadow-none focus:ring-0 w-full focus:outline-none focus-visible:ring-0"
                    placeholder="Search"
                />
            </div>
        </div>
    );
};