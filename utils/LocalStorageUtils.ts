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
        cart.push(item);
        this.setItem('cart', cart);
    }
}