import Link from 'next/link';
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {CircleUserRound} from 'lucide-react';

export const ProfileDropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <CircleUserRound size={36}/>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                    Munna Khandakar
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                    <Link href={'/order'}>
                        Order
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={'/history'}>
                        History
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={'/profile'}>
                        Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};