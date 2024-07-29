import Link from 'next/link';
import { Settings} from 'lucide-react';
import {NavItem} from '@/components/common/NavItem';
import {NavItemType} from '@/types/NavItem';
import useNavItems from '@/hooks/useNavItems';
import Logo from '@/public/icon.png'
import Image from 'next/image';
import {AppConstant} from '@/constants/AppConstant';

const SETTINGS_NAV_ITEM: NavItemType = {
    id: '10',
    label: 'Settings',
    link: '/dashboard/settings',
    icon: <Settings className="h-5 w-5"/>
};

export const SideNavbar = () => {

    const {  navItems } = useNavItems();

    return (
        <aside className=" inset-y-0 w-[300px] flex-col border-r bg-background flex">
            <nav className="flex flex-col items-center gap-1 px-2 py-4">
                <div className="w-full h-[80px] mb-6 border rounded flex items-center justify-center">
                    <Link href="#" className="flex items-center">
                        <Image src={Logo} alt={'app logo'} width={40} className="w-full"/>
                        <h1 className="text-lg font-bold">{AppConstant.app.title}</h1>
                    </Link>
                </div>
                {
                    navItems.map((navItem, index) => (
                        <NavItem navItem={navItem} key={index}/>
                    ))
                }
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
                <NavItem navItem={SETTINGS_NAV_ITEM}/>
            </nav>
        </aside>
    );
};