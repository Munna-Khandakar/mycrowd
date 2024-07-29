'use client';

import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {Button} from '@/components/ui/button';
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

export const PostEngagement = () => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                    <CardTitle>Post Engagement</CardTitle>
                    <CardDescription>
                        Recent engagement of your posts.
                    </CardDescription>
                </div>
                <Button asChild size="sm" className="ml-auto gap-1">
                    <Link href={'/dashboard/fundraise'}>
                        View All
                        <ArrowUpRight className="h-4 w-4"/>
                    </Link>
                </Button>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Post</TableHead>
                            <TableHead className="text-right">Views</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <div className="font-medium">The Education and Opportunity Fund</div>
                                <div className="hidden text-sm text-muted-foreground md:inline">
                                    Teachers often spend their own money to give their students the best learning experience possible.
                                </div>
                            </TableCell>
                            <TableCell className="text-right">250.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className="font-medium">The Wildfire Relief Fund</div>
                                <div className="hidden text-sm text-muted-foreground md:inline">
                                    This fund was created to provide direct relief to people in need after a wildfire.
                                </div>
                            </TableCell>
                            <TableCell className="text-right">150.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div className="font-medium">The Hurricane Relief Fund</div>
                                <div className="hidden text-sm text-muted-foreground md:inline">
                                    This fund was created to provide direct relief to people in need after a hurricane.
                                </div>
                            </TableCell>

                            <TableCell className="text-right">350.00</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};
