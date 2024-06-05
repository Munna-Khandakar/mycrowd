'use client';
import Link from 'next/link';
import {BriefcaseMedical, Search} from 'lucide-react';
import {ProfileDropdown} from '@/components/ProfileDropdown';
import {Input} from '../ui/input';

export const UserNavbar = () => {

    return (
        <header className="sticky top-0 flex h-14 justify-between items-center gap-4 border-b bg-background px-4">
            <Link className="inline-flex gap-2 p-1" href={'/'}>
                <BriefcaseMedical/>
                <span className="hidden md:block">Medicine 24/7</span>
            </Link>

            <div className="flex gap-2 md:gap-4">
                <div className="relative ml-auto flex-1 md:grow-0">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>
                    <Input
                        type="search"
                        placeholder="Search your medicine..."
                        className="w-full rounded-lg bg-background pl-8 md:min-w-[350px]"
                    />
                </div>
                <ProfileDropdown/>
            </div>
        </header>
    );
};
