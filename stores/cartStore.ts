import {create} from 'zustand';
import {CartItem} from '@/types/CartItem';
import {LocalStorageUtils} from '@/utils/LocalStorageUtils';
import {CartState} from '@/types/store/CartState';

export const useCartStore = create<CartState>()((set, getState) => ({
    items: LocalStorageUtils.getCart(),
    setItems: (item: CartItem) => {
        const cart = LocalStorageUtils.getCart();
        const index = cart.findIndex((cartItem: CartItem) => cartItem.id === item.id);
        if (index !== -1) {
            cart[index].quantity = item.quantity;
        } else {
            cart.push(item);
        }
        LocalStorageUtils.setItem('cart', cart);
        set({items: cart});
    },
    getItemsQuantityCount: () => {
        const items = getState().items;
        return items.reduce((acc: number, item: CartItem) => acc + item.quantity, 0);
    }
}));