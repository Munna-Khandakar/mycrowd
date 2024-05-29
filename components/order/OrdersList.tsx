import {BellRing, Check} from 'lucide-react';

import {cn} from '@/lib/utils';
import {Button} from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

const notifications = [
    {
        title: 'Napa, Civit',
        description: 'Ondelivery',
    },
    {
        title: 'Medicine Names',
        description: 'Accepted',
    },
    {
        title: 'Medicine Names',
        description: 'Order Places',
    },
];

type CardProps = React.ComponentProps<typeof Card>

export function OrdersList({className, ...props}: CardProps) {
    return (
        <div className="container p-4">
            <Card className="rounded">
                <CardHeader>
                    <CardTitle>Orders</CardTitle>
                    <CardDescription>You have 3 active orders.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div>
                        {notifications.map((notification, index) => (
                            <Link
                                href={'/order/1'}
                                key={index}
                                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                            >
                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500"/>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        {notification.title}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {notification.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
