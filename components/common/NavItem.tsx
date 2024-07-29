'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Tooltip, TooltipContent, TooltipTrigger} from '@/components/ui/tooltip';
import {NavItemType} from '@/types/NavItem';

type NavItemProps = {
    navItem: NavItemType
}

export const NavItem = (props: NavItemProps) => {

    const {navItem} = props;

    const pathname = usePathname();

    const pathSegments = pathname.split('/');

    pathSegments[pathSegments.length - 1] = navItem.label.toLowerCase();

    const presentPath = pathSegments.join('/');

    const isActive = pathname === presentPath;

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Link
                    href={`${navItem.link}`}
                    className={`flex gap-2 h-9 w-full items-center justify-start rounded ${isActive ? 'bg-slate-100' : 'bg-transparent'} hover:bg-slate-100`}
                >
                    {navItem.icon}
                    <span className="text-sm text-slate-700 font-medium">{navItem.label}</span>
                </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{navItem.label}</TooltipContent>
        </Tooltip>
    );
};