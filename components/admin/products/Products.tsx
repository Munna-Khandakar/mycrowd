'use client';
import {Fragment, useState} from 'react';
import Image from 'next/image';
import {MoreHorizontal, PlusCircle, Search} from 'lucide-react';

import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    TableCell,
    TableHead,
    TableRow,
} from '@/components/ui/table';
import {Input} from '@/components/ui/input';
import {ProductForm} from '@/components/admin/products/ProductForm';
import Modal from '@/components/Modal';
import {SimpleTable} from '@/components/SimpleTable';
import Link from 'next/link';

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
        <Fragment>
            <SimpleTable
                title={'Products'}
                subTitle={'Manage your products and view their sales performance.'}
                actionItems={
                    <div className="flex justify-end items-center pb-2">
                        <div className="relative ml-auto pr-2 flex-1 md:grow-0">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>
                            <Input
                                type="search"
                                placeholder="Search..."
                                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                            />
                        </div>
                        <Link href={'/admin/products/new'}
                              title="Add Product"
                              className="flex items-center justify-between bg-black text-white px-3 py-2 rounded h-8 gap-1">
                            <PlusCircle className="h-3.5 w-3.5"/>
                            <span className="whitespace-nowrap text-sm">
                                  Add Product
                            </span>
                        </Link>
                    </div>
                }
                tableHeader={
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
                }
                tableBody={
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
            />
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Add Medicine">
                <ProductForm/>
            </Modal>
        </Fragment>
    );
}
