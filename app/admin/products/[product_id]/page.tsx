'use client';

import {useParams} from 'next/navigation';
import {ProductForm} from '@/components/admin/products/ProductForm';

export default function page() {

    const {product_id} = useParams();

    if (product_id === 'new') {
        return <ProductForm/>;
    }

    return (
        <div>
            <h1>Product 2</h1>
        </div>
    );

}