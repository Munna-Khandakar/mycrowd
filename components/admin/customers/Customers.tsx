'use client';
import {useState} from 'react';
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

const CustomerData = [
    {
        id: 1,
        name: 'Munna Khandakar',
        phone: '01794807577',
        totalOrders: 12,
        totalSpend: 3000,
    },
    {
        id: 2,
        name: 'Munna Khandakar',
        phone: '01794807577',
        totalOrders: 12,
        totalSpend: 3000,
    },
    {
        id: 3,
        name: 'Munna Khandakar',
        phone: '01794807577',
        totalOrders: 12,
        totalSpend: 3000,
    },
    {
        id: 4,
        name: 'Munna Khandakar',
        phone: '01794807577',
        totalOrders: 12,
        totalSpend: 3000,
    },
    {
        id: 5,
        name: 'Munna Khandakar',
        phone: '01794807577',
        totalOrders: 12,
        totalSpend: 3000,
    },
    {
        id: 6,
        name: 'Munna Khandakar',
        phone: '01794807577',
        totalOrders: 12,
        totalSpend: 3000,
    },
    {
        id: 7,
        name: 'Munna Khandakar',
        phone: '01794807577',
        totalOrders: 12,
        totalSpend: 3000,
    },
    {
        id: 8,
        name: 'Munna Khandakar',
        phone: '01794807577',
        totalOrders: 12,
        totalSpend: 3000,
    },
    {
        id: 9,
        name: 'Munna Khandakar',
        phone: '01794807577',
        totalOrders: 12,
        totalSpend: 3000,
    },
    {
        id: 10,
        name: 'Munna Khandakar',
        phone: '01794807577',
        totalOrders: 12,
        totalSpend: 3000,
    },
];

export function Customers() {

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
            </div>
            <SimpleTable
                title="Customers"
                subTitle="Manage your customers and view their sales performance."
                tableHeader={
                    <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                            <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead className="hidden md:table-cell">Phone</TableHead>
                        <TableHead className="hidden md:table-cell">Total Orders</TableHead>
                        <TableHead>Total Spend</TableHead>
                        <TableHead>
                            <span className="sr-only">Actions</span>
                        </TableHead>
                    </TableRow>
                }
                tableBody={
                    CustomerData.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell className="hidden sm:table-cell">
                                <Image
                                    src="/images/medicine.png"
                                    alt="medicine"
                                    width={40}
                                    height={40}
                                    className="rounded-md"
                                />
                            </TableCell>
                            <TableCell>{product.name}</TableCell>
                            <TableCell className="hidden md:table-cell">{product.phone}</TableCell>
                            <TableCell className="hidden md:table-cell">{product.totalOrders}</TableCell>
                            <TableCell>{product.totalSpend}</TableCell>
                            <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <Button variant="ghost" className="p-2">
                                            <MoreHorizontal/>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>
                                            <DropdownMenuLabel>
                                                <PlusCircle className="mr-2"/>
                                                Add Order
                                            </DropdownMenuLabel>
                                        </DropdownMenuItem>
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
        </div>
    );
}
