import Image from 'next/image';
import Link from 'next/link';
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import {Button} from '@/components/ui/button';
import {
    DiamondPlus,
    HandCoins,
    HeartHandshake,
    Home,
    LineChart,
    Package,
    Package2,
    PanelLeft,
    ShoppingCart,
    Users2
} from 'lucide-react';
import {CustomizeBreadcrum} from '@/components/common/CustomizeBreadcrum';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

export const Header = () => {
    return (
        <header
            className="flex items-center w-full justify-between gap-4 bg-background sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline" className="sm:hidden">
                            <PanelLeft className="h-5 w-5"/>
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="sm:max-w-xs">
                        <nav className="grid gap-6 text-lg font-medium">
                            <Link
                                href="#"
                                className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                            >
                                <Package2 className="h-5 w-5 transition-all group-hover:scale-110"/>
                                <span className="sr-only">Acme Inc</span>
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                            >
                                <Home className="h-5 w-5"/>
                                Dashboard
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                            >
                                <ShoppingCart className="h-5 w-5"/>
                                Orders
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-4 px-2.5 text-foreground"
                            >
                                <Package className="h-5 w-5"/>
                                Products
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                            >
                                <Users2 className="h-5 w-5"/>
                                Customers
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                            >
                                <LineChart className="h-5 w-5"/>
                                Settings
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
                <CustomizeBreadcrum/>
            </div>
            <div className="flex gap-2">
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Your Role"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">
                            <div className="flex gap-2 text-slate-700">
                                <HeartHandshake size={20}/>
                                <span>Fundraiser</span>
                            </div>
                        </SelectItem>
                        <SelectItem value="dark">
                            <div className="flex gap-2 text-slate-700">
                                <HandCoins size={20}/>
                                <span>Donor</span>
                            </div>
                        </SelectItem>
                        <SelectItem value="system">
                            <div className="flex gap-2 text-slate-700">
                                <DiamondPlus size={20}/>
                                <span>Both</span>
                            </div>
                        </SelectItem>
                    </SelectContent>
                </Select>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="overflow-hidden rounded-full"
                        >
                            <Image
                                src="/placeholder-user.jpg"
                                width={36}
                                height={36}
                                alt="Avatar"
                                className="overflow-hidden rounded-full"
                            />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>
                            <Link href={'/login'}>
                                Logout
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
};