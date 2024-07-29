'use client';

export class LocalStorageUtils {

    static isLocalStorageAvailable() {
        return typeof window !== 'undefined';
    }

    static setItem(key: string, value: any) {
        if (this.isLocalStorageAvailable()) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }

    static getItem(key: string) {
        if (this.isLocalStorageAvailable()) {
            return localStorage.getItem(key);
        }
        return null;
    }

    static removeItem(key: string) {
        if (this.isLocalStorageAvailable()) {
            localStorage.removeItem(key);
        }
    }

    static getCart() {
        if (this.isLocalStorageAvailable()) {
            return JSON.parse(this.getItem('cart') || '[]');
        }
        return [];
    }

}