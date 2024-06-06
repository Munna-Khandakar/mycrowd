import Image from 'next/image';
import {MoreHorizontal, PlusCircle, Search} from 'lucide-react';

import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {Input} from '@/components/ui/input';

export function Products() {
    return (
        <div className="p-2 h-screen">
            <div className="flex justify-end pb-2">
                <div className="relative ml-auto pr-2 flex-1 md:grow-0">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>
                    <Input
                        type="search"
                        placeholder="Search..."
                        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                    />
                </div>
                <Button size="sm" className="h-8 gap-1">
                    <PlusCircle className="h-3.5 w-3.5"/>
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Product
                  </span>
                </Button>
            </div>
            <Card className="rounded" style={{height: 'calc(100vh - 65px)'}}>
                <CardHeader>
                    <CardTitle>Products</CardTitle>
                    <CardDescription>
                        Manage your products and view their sales performance.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="hidden w-[100px] sm:table-cell">
                                    <span className="sr-only">Image</span>
                                </TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead className="hidden md:table-cell">Composition</TableHead>
                                <TableHead className="hidden md:table-cell">Company</TableHead>
                                <TableHead>Price(BDT)</TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Type
                                </TableHead>
                                <TableHead>
                                    <span className="sr-only">Actions</span>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="hidden sm:table-cell">
                                    <Image
                                        alt="Product image"
                                        className="aspect-square rounded-md object-cover"
                                        height="64"
                                        src="/placeholder.svg"
                                        width="64"
                                    />
                                </TableCell>
                                <TableCell className="font-medium">
                                    Napa Extra 500
                                </TableCell>
                                <TableCell className="hidden md:table-cell">Paracetamol + Caffeine</TableCell>
                                <TableCell className="hidden md:table-cell">Beximco Pharmaceuticals Ltd.</TableCell>
                                <TableCell>30</TableCell>
                                <TableCell className="hidden md:table-cell">
                                    <Badge variant={'outline'}>Tablet</Badge>
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button aria-haspopup="true" size="icon" variant="ghost">
                                                <MoreHorizontal className="h-4 w-4"/>
                                                <span className="sr-only">Toggle menu</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell className="hidden sm:table-cell">
                                    <Image
                                        alt="Product image"
                                        className="aspect-square rounded-md object-cover"
                                        height="64"
                                        src="/placeholder.svg"
                                        width="64"
                                    />
                                </TableCell>
                                <TableCell className="font-medium">
                                    Zimax
                                </TableCell>
                                <TableCell className="hidden md:table-cell">Azithromycin Dihydrate</TableCell>
                                <TableCell className="hidden md:table-cell">Square Pharmaceuticals PLC</TableCell>
                                <TableCell>461</TableCell>
                                <TableCell className="hidden md:table-cell">
                                    <Badge variant={'outline'}>Injection</Badge>
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button aria-haspopup="true" size="icon" variant="ghost">
                                                <MoreHorizontal className="h-4 w-4"/>
                                                <span className="sr-only">Toggle menu</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                            <DropdownMenuItem>Delete</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter>
                    <div className="text-xs text-muted-foreground">
                        Showing <strong>1-10</strong> of <strong>32</strong> products
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
