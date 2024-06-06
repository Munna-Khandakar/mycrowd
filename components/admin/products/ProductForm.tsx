import * as React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';

import {cn} from '@/lib/utils';
import {Button} from '@/components/ui/button';

import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {PlusCircle} from 'lucide-react';

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
            className={cn('grid items-start gap-4')}
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="grid gap-2">
                <Label htmlFor="email">Medicine Name</Label>
                <Input
                    type="string"
                    id="name"
                    defaultValue="shadcn@example.com"
                    {...register('name', {required: true})}
                />
                {errors.name?.type === 'required' && (
                    <p role="alert" className="text-red-600">First name is required</p>
                )}
            </div>
            <div className="grid gap-2">
                <Label htmlFor="username">Composition</Label>
                <Input
                    id="composition"

                    {...register('composition', {required: true})}
                />
                {errors.composition?.type === 'required' && (
                    <p role="alert" className="text-red-600">First name is required</p>
                )}
            </div>
            <div className="grid gap-2">
                <Label htmlFor="username">Company</Label>
                <Input
                    id="company"

                    {...register('company', {required: true})}
                />
                {errors.company?.type === 'required' && (
                    <p role="alert" className="text-red-600">First name is required</p>
                )}
            </div>
            <div className="grid gap-2">
                <Label htmlFor="username">Type</Label>
                <Input
                    id="company"

                    {...register('company', {required: true})}
                />
                {errors.company?.type === 'required' && (
                    <p role="alert" className="text-red-600">First name is required</p>
                )}
            </div>
            <div className="grid gap-2">
                <Label htmlFor="username">Price</Label>
                <Input
                    id="price"

                    {...register('price', {required: true})}
                />
                {errors.price?.type === 'required' && (
                    <p role="alert" className="text-red-600">First name is required</p>
                )}
            </div>
            <Button size="sm" className="h-8 gap-1" type="submit">
                <PlusCircle className="h-3.5 w-3.5"/>
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Medicine
                  </span>
            </Button>
        </form>
    );
};
