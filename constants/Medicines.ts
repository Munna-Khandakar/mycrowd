import {Medicine} from '@/types/Medicine';
import Softovc from '@/components/medicine/softovac.webp';
import ProtinPowder from '@/components/medicine/protein-powder.webp';
import Revital from '@/components/medicine/revital.webp';
import Revital_h_Men from '@/components/medicine/revital-h-men.webp';
import Shelcalt from '@/components/medicine/shelcalt.webp';
import Neurobion from '@/components/medicine/neurobion.webp';
import Supradyn from '@/components/medicine/supradyn.webp';

export const MEDICINE: Medicine[] = [
    {
        id: '1',
        image: Softovc,
        name: 'Softovac Liquifibre Mango Flavour Sugar Free Bottle Of 225ml Liquid',
        category: 'health-care',
        price: 140,
        productDetails: {
            brand: 'Lupin Ltd.',
            expires: '15/12/2023',
            countryOfOrigin: 'India'
        }
    },
    {
        id: '2',
        image: ProtinPowder,
        name: 'Pharmeasy Diabetic Protein Powder French Vanilla Flavour Jar Of 1kg',
        category: 'health-care',
        price: 140,
        discount: 10,
        productDetails: {
            brand: 'Square Ltd.',
            expires: '15/12/2023',
            countryOfOrigin: 'Japan'
        }
    },
    {
        id: '3',
        image: Revital,
        name: 'Revital Cal 500mg Strip Of 15 Tablets',
        category: 'health-care',
        price: 117,
        productDetails: {
            brand: 'ACI Ltd.',
            expires: '15/12/2023',
            countryOfOrigin: 'India'
        }
    },
    {
        id: '4',
        image: Revital_h_Men,
        name: 'Revital H Men Multivitamin With Calcium Zinc & Ginseng For Immunity Strong Bones (30 Capsules)',
        category: 'health-care',
        price: 310,
        productDetails: {
            brand: 'ACI Ltd.',
            expires: '15/12/2023',
            countryOfOrigin: 'India'
        }
    },
    {
        id: '5',
        image: Shelcalt,
        name: 'Shelcal 500mg Strip Of 15 Tablets',
        category: 'health-care',
        price: 132,
        productDetails: {
            brand: 'ACI Ltd.',
            expires: '15/12/2023',
            countryOfOrigin: 'India'
        }
    },
    {
        id: '6',
        image: Neurobion,
        name: "Neurobion Forte Tablet 30'S",
        category: 'health-care',
        price:38,
        productDetails: {
            brand: 'ACI Ltd.',
            expires: '15/12/2023',
            countryOfOrigin: 'India'
        }
    },
    {
        id: '7',
        image: Supradyn,
        name: "Supradyn Daily Multivitamin With Essential Zinc, Vitamins, For Immunity & Energy Strip Of 15 Tablets",
        category: 'health-care',
        price:38,
        productDetails: {
            brand: 'ACI Ltd.',
            expires: '15/12/2023',
            countryOfOrigin: 'India'
        }
    }
];