export class MedicineUtils {
    static calculateDiscountPercentage(price: number, discount: number) {
        return (price * discount / 100);
    }
}