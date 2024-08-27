'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import useNavItems from '@/hooks/useNavItems';
import {Fragment} from 'react';


export const CustomizeBreadcrum = () => {

    const {  getNavItemFromPathname } = useNavItems();

    const paths = usePathname();
    const pathNames = paths.split('/').filter(path => path);

    return (
        <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
                {
                    pathNames.map((path, index) => {
                        const href = `/${pathNames.slice(0, index + 1).join('/')}`;
                        const label = getNavItemFromPathname(href)?.label;

                        return (
                        <Fragment key={index}>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href={href} className="capitalize">{label || path}</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                        </Fragment>
                        );
                    })
                }
            </BreadcrumbList>
        </Breadcrumb>
    );
};