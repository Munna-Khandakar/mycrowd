import {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {Navbar} from '@/components/Navbar/Navbar';
import {Footer} from '@/components/Footer';
import './globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'Medicine 24/7',
    description: 'Medicine 24/7',
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Navbar/>
        <main>
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}
