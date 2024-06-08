'use client';
import {useState} from 'react';
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
import {ProductForm} from '@/components/admin/products/ProductForm';
import Modal from '@/components/Modal';

const ProductData = [
    {
        id: 1,
        name: 'Napa Extra 500',
        composition: 'Paracetamol + Caffeine',
        company: 'Beximco Pharmaceuticals Ltd.',
        price: 30,
        type: 'Tablet',
    },
    {
        id: 2,
        name: 'Zimax',
        composition: 'Azithromycin Dihydrate',
        company: 'Square Pharmaceuticals PLC',
        price: 461,
        type: 'Injection',
    },
    {
        id: 3,
        name: 'Napa Extra 500',
        composition: 'Paracetamol + Caffeine',
        company: 'Beximco Pharmaceuticals Ltd.',
        price: 30,
        type: 'Tablet',
    },
    {
        id: 4,
        name: 'Zimax',
        composition: 'Azithromycin Dihydrate',
        company: 'Square Pharmaceuticals PLC',
        price: 461,
        type: 'Injection',
    },
    {
        id: 5,
        name: 'Napa Extra 500',
        composition: 'Paracetamol + Caffeine',
        company: 'Beximco Pharmaceuticals Ltd.',
        price: 30,
        type: 'Tablet',
    },
    {
        id: 6,
        name: 'Zimax',
        composition: 'Azithromycin Dihydrate',
        company: 'Square Pharmaceuticals PLC',
        price: 461,
        type: 'Injection',
    },
    {
        id: 7,
        name: 'Napa Extra 500',
        composition: 'Paracetamol + Caffeine',
        company: 'Beximco Pharmaceuticals Ltd.',
        price: 30,
        type: 'Tablet',
    },
    {
        id: 8,
        name: 'Zimax',
        composition: 'Azithromycin Dihydrate',
        company: 'Square Pharmaceuticals PLC',
        price: 461,
        type: 'Injection',
    },
    {
        id: 9,
        name: 'Napa Extra 500',
        composition: 'Paracetamol + Caffeine',
        company: 'Beximco Pharmaceuticals Ltd.',
        price: 30,
        type: 'Tablet',
    },
    {
        id: 10,
        name: 'Zimax',
        composition: 'Azithromycin Dihydrate',
        company: 'Square Pharmaceuticals PLC',
        price: 461,
        type: 'Injection',
    }
];


export function Products() {

    const [showModal, setShowModal] = useState(false);

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
                <Button size="sm" className="h-8 gap-1" onClick={() => setShowModal(true)}>
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
                <CardContent className="h-[80%] overflow-y-scroll">
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
                            {
                                ProductData.map((product) => (
                                    <TableRow key={product.id}>
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
                                            {product.name}
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">{product.composition}</TableCell>
                                        <TableCell className="hidden md:table-cell">{product.company}</TableCell>
                                        <TableCell>{product.price}</TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            <Badge variant={'outline'}>{product.type}</Badge>
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
                                ))
                            }

                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter className="py-2">
                    <div className="text-xs text-muted-foreground">
                        Showing <strong>1-10</strong> of <strong>32</strong> products
                    </div>
                </CardFooter>
            </Card>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Add Medicine">
                <ProductForm/>
            </Modal>
        </div>
    );
}
