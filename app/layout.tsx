import {ReactNode} from 'react';
import {Inter} from 'next/font/google'
import './globals.css';
import {TooltipProvider} from '@/components/ui/tooltip';
import {AppConstant} from '@/constants/AppConstant';

const inter = Inter({subsets: ['latin']});

export default function RootLayout({children}: Readonly<{ children: ReactNode; }>) {
    return (
        <html lang="en">
        <head>
            <title>{`${AppConstant.app.title} | ${AppConstant.app.subTitle}`}</title>
            <link rel="icon" href="/icon.ico" sizes="any"/>
            <link
                rel="icon"
                href="/icon.ico?<generated>"
                type="image/<generated>"
                sizes="<generated>"
            />
        </head>
        <body className={inter.className}>
        <main>
            <TooltipProvider>
                {children}
            </TooltipProvider>

        </main>
        </body>
        </html>
    );
}
