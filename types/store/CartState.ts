import {CartItem} from '@/types/CartItem';

export interface CartState {
    items: CartItem[];
    setItems: (item: CartItem) => void;
    getItemsQuantityCount: () => number;
}