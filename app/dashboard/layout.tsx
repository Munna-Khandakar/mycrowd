import {ReactNode} from 'react';
import {Header} from '@/components/common/Header';
import {SideNavbar} from '@/components/common/SideNavbar';


export default function RootLayout({children}: Readonly<{ children: ReactNode; }>) {
    return (

        <div className="flex min-h-screen bg-muted/40">
           <SideNavbar/>
            <div className="w-full">
                <div className="h-14 flex  items-center">
                    <Header/>
                </div>
                <div className="px-4 py-0">
                    {children}
                </div>
            </div>
        </div>

    );
}
