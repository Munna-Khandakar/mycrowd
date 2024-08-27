import {useMemo} from 'react';
import {NavItemType} from '@/types/NavItem';
import {ArrowDownToDot, ArrowUpFromDot, Home} from 'lucide-react';
import {NavigationLink} from '@/constants/NavigationLink';

const useNavItems = () => {
    const navItems: NavItemType[] = useMemo(() => [
        {
            id: '1',
            label: 'Dashboard',
            link: NavigationLink.dashboard,
            icon: <Home className="h-5 w-5"/>
        },
        {
            id: '2',
            label: 'Fundraise',
            link: NavigationLink.fundraise,
            icon: <ArrowDownToDot className="h-5 w-5"/>
        },
        {
            id: '3',
            label: 'My Donations',
            link: NavigationLink.myDonations,
            icon: <ArrowUpFromDot className="h-5 w-5"/>
        },
    ], []);

    const getNavItemFromPathname = (pathname: string): NavItemType | undefined => {
        return navItems.find((item: NavItemType) => item.link === pathname);
    };

    return {navItems, getNavItemFromPathname};
};

export default useNavItems;