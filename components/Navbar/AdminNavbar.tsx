'use client';
import {Fragment} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {
    Bell,
    Home,
    LineChart,
    Package,
    Package2,
    ShoppingCart,
    Users,
} from 'lucide-react';
import {Button} from '@/components/ui/button';

const NavItems = [
    {
        icon: Home,
        label: 'Dashboard',
        href: '/admin/dashboard',
    },
    {
        icon: ShoppingCart,
        label: 'Orders',
        href: '/admin/orders',
    },
    {
        icon: Package,
        label: 'Products',
        href: '/admin/products',
    },
    {
        icon: Users,
        label: 'Customers',
        href: '/admin/customers',
    },
    {
        icon: LineChart,
        label: 'Analytics',
        href: '/admin/analytics',
    },
];

export const AdminNavbar = () => {

    const pathName = usePathname();

    return (
        <Fragment>
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                    <Package2 className="h-6 w-6"/>
                    <span className="">Med 24/7</span>
                </Link>
                <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                    <Bell className="h-4 w-4"/>
                    <span className="sr-only">Toggle notifications</span>
                </Button>
            </div>
            <div className="flex-1">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                    {/*          <Link
                        href="#"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                        <Home className="h-4 w-4"/>
                        Dashboard
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                        <ShoppingCart className="h-4 w-4"/>
                        Orders
                        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                            6
                        </Badge>
                    </Link>
                    <Link
                        href="/admin/products"
                        className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                    >
                        <Package className="h-4 w-4"/>
                        Products{' '}
                    </Link>
                    <Link
                        href="/admin/customers"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                        <Users className="h-4 w-4"/>
                        Customers
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                        <LineChart className="h-4 w-4"/>
                        Analytics
                    </Link>*/}
                    {
                        NavItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${pathName === item.href ? 'bg-muted' : ''}`}
                            >
                                <item.icon className="h-4 w-4"/>
                                {item.label}
                            </Link>
                        ))
                    }
                </nav>
            </div>
        </Fragment>
    );
};