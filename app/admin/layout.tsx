import {Metadata} from 'next';
import {AdminNavbar} from '@/components/Navbar/AdminNavbar';

export const metadata: Metadata = {
    title: 'Medicine 24/7',
    description: 'Medicine 24/7',
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {

    return (
        <div className="flex">
            <div className="w-1/4 h-screen">
                <AdminNavbar/>
            </div>
            <div className="w-3/4">
                {children}
            </div>
        </div>

    );
}
