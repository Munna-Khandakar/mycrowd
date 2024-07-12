'use client';

import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from '@/components/ui/drawer';
import {Minus, Plus, ShoppingCart} from 'lucide-react';
import {ScrollArea} from '@/components/ui/scroll-area';
import {useCartStore} from '@/stores/cartStore';
import {Badge} from '@/components/ui/badge';
import {Fragment} from 'react';
import {MEDICINE} from '@/constants/Medicines';
import Image from 'next/image';
import {MedicineUtils} from '@/utils/MedicineUtils';
import {Button} from '@/components/ui/button';

export const CartComponent = () => {

    const {items, getItemsQuantityCount} = useCartStore();

    return (
        <Drawer direction="right">
            <DrawerTrigger>
                <div className="relative">
                    <ShoppingCart className="w-[26px]"/>
                    {
                        getItemsQuantityCount() > 0 &&
                        <Badge variant="secondary"
                               className="absolute -top-3 -right-3 bg-red-300 px-1 py-0 rounded-2xl">{getItemsQuantityCount()}
                        </Badge>
                    }
                </div>
            </DrawerTrigger>
            <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-[280px] md:w-[500px] rounded-none">
                <div className="h-screen">
                    <DrawerHeader>
                        <DrawerTitle>{`${getItemsQuantityCount()} items in your Cart`} </DrawerTitle>
                        <DrawerDescription>
                            Check The items in your cart and proceed to checkout
                        </DrawerDescription>
                    </DrawerHeader>
                    <ScrollArea className="h-[calc(100%-100px)]">
                        <div className="p-4 pb-0 flex flex-col gap-2 md:gap-4  divide-y-2">
                            {
                                items.map((item, index) => {

                                    const medicine = MEDICINE.find(med => med.id === item.id);

                                    return (
                                        <div className="flex items-center justify-start gap-2" key={index}>
                                            <Image src={medicine?.image} alt={'imagfe'} className="w-[80px]"/>
                                            <div className="w-full">
                                                <div>
                                                    <h1 className="text-sm  font-medium leading-5 ">{medicine?.name}</h1>
                                                </div>
                                                <div className="mt-4 flex flex-col md:flex-row justify-between items-center ">
                                                    <div>
                                                        <span className="text-slate-900 font-bold text-xs"> MRP:</span>
                                                        <span
                                                            className={`${medicine?.discount ? 'line-through text-slate-400' : ''}`}> ৳{medicine?.price} </span>
                                                        {
                                                            medicine?.discount &&
                                                            <Fragment>
                                                                <Badge variant="secondary" className="text-red-500">
                                                                    {MedicineUtils.calculateDiscountPercentage(medicine?.price, medicine.discount)}%
                                                                    OFF
                                                                </Badge>
                                                                <br/>
                                                                <span
                                                                    className="font-bold text-slate-900">৳{medicine?.price - medicine?.discount}</span>
                                                            </Fragment>
                                                        }
                                                    </div>
                                                    <div className="flex items-center gap-2 justify-center">
                                                        <Button size="icon" variant="outline"
                                                                className="text-xs"><Minus/></Button>
                                                        <Badge variant="secondary"
                                                               className="text-slate-900 rounded">{item.quantity}</Badge>
                                                        <Button size="icon" variant="outline"
                                                                className="text-xs"><Plus/></Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <Button className="align-bottom w-full my-4">Proceed To Checkout</Button>
                    </ScrollArea>
                </div>
            </DrawerContent>
        </Drawer>
    );
};