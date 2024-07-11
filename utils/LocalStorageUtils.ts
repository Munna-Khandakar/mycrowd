import {CartItem} from '@/types/CartItem';

export class LocalStorageUtils {
    static setItem(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static getItem(key: string) {
        return localStorage.getItem(key);
    }

    static removeItem(key: string) {
        localStorage.removeItem(key);
    }

    static getCart() {
        return JSON.parse(this.getItem('cart') || '[]');
    }

    static addToCart(item: CartItem) {
        const cart = this.getCart();
        const index = cart.findIndex((cartItem: CartItem) => cartItem.id === item.id);
        if (index !== -1) {
            cart[index].quantity = item.quantity;
            this.setItem('cart', cart);
            return;
        }else{
            cart.push(item);
            this.setItem('cart', cart);
        }
    }

    static removeFromCart(id: string) {
        const cart = this.getCart();
        const index = cart.findIndex((cartItem: CartItem) => cartItem.id === id);
        if (index !== -1) {
            cart.splice(index, 1);
            this.setItem('cart', cart);
        }
    }
}