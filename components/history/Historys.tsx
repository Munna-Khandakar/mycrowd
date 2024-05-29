import {Badge} from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';


export const Historys = () => {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <div className="grid flex-1 items-start p-4">
                <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                    <Card className="rounded">
                        <CardHeader className="px-7">
                            <CardTitle>Orders</CardTitle>
                            <CardDescription>
                                Recent orders from this store.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Order Id</TableHead>
                                        <TableHead className="hidden sm:table-cell">
                                            Status
                                        </TableHead>
                                        <TableHead className="hidden md:table-cell">
                                            Date
                                        </TableHead>
                                        <TableHead className="text-right">Amount</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        Array.from({length: 5}).map((_, index) => (
                                            <TableRow key={index}>
                                                <TableCell>
                                                    <div className="font-medium">Odr-12-09-XX-31</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        cash on delivery
                                                    </div>
                                                    <div className="inline text-sm text-muted-foreground md:hidden">
                                                        2023-06-23
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    <Badge className="text-xs" variant="secondary">
                                                        Completed
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    2023-06-23
                                                </TableCell>
                                                <TableCell className="text-right">$250.00</TableCell>
                                            </TableRow>
                                        ))
                                    }

                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};
