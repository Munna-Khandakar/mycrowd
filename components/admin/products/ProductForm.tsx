import * as React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';

import {cn} from '@/lib/utils';
import {Button} from '@/components/ui/button';

import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {PlusCircle, Upload} from 'lucide-react';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {Textarea} from '@/components/ui/textarea';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import Image from 'next/image';

type Inputs = {
    name: string
    composition: string
    company: string
    type: string
    price: number

}

export const ProductForm = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    console.log(watch('name'));

    return (
        <form
            className={cn('grid items-start gap-4 grid-cols-3')}
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Product Details</CardTitle>
                        <CardDescription>
                            Lipsum dolor sit amet, consectetur adipiscing elit
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    className="w-full"
                                    defaultValue="Gamer Gear Pro Controller"
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                                    className="min-h-32"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="col-span-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Product Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="status">Status</Label>
                                <Select>
                                    <SelectTrigger id="status" aria-label="Select status">
                                        <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="draft">Draft</SelectItem>
                                        <SelectItem value="published">Active</SelectItem>
                                        <SelectItem value="archived">Archived</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="overflow-hidden mt-2">
                    <CardHeader>
                        <CardTitle>Product Images</CardTitle>
                        <CardDescription>
                            Lipsum dolor sit amet, consectetur adipiscing elit
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-2">
                            <Image
                                alt="Product image"
                                className="aspect-square w-full rounded-md object-cover"
                                height="300"
                                src="/placeholder.svg"
                                width="300"
                            />
                            <div className="grid grid-cols-3 gap-2">
                                <button>
                                    <Image
                                        alt="Product image"
                                        className="aspect-square w-full rounded-md object-cover"
                                        height="84"
                                        src="/placeholder.svg"
                                        width="84"
                                    />
                                </button>
                                <button>
                                    <Image
                                        alt="Product image"
                                        className="aspect-square w-full rounded-md object-cover"
                                        height="84"
                                        src="/placeholder.svg"
                                        width="84"
                                    />
                                </button>
                                <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                                    <Upload className="h-4 w-4 text-muted-foreground" />
                                    <span className="sr-only">Upload</span>
                                </button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </form>
    );
};
