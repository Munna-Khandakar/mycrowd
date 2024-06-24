export type  Medicine = {
    id: string;
    name: string;
    price: number;
    image: any;
    description?: string;
    howToUse?: string;
    ingredients?: string;
    productDetails?: ProductDetails;
}


type ProductDetails = {
    brand: string;
    expires: string;
    countryOfOrigin: string;
}