import {Medicine} from '@/types/Medicine';
import Softovc from '@/components/medicine/softovac.webp';
import ProtinPowder from '@/components/medicine/protein-powder.webp';
import Revital from '@/components/medicine/revital.webp';

export const MEDICINE: Medicine[] = [
    {
        id: '1',
        image: Softovc,
        name: 'Softovac Liquifibre Mango Flavour Sugar Free Bottle Of 225ml Liquid',
        category: 'health-care',
        price: 140
    },
    {
        id: '2',
        image: ProtinPowder,
        name: 'Pharmeasy Diabetic Protein Powder French Vanilla Flavour Jar Of 1kg',
        category: 'health-care',
        price: 140,
        discount: 10
    },
    {
        id: '3',
        image: Revital,
        name: 'Revital Cal 500mg Strip Of 15 Tablets',
        category: 'health-care',
        price: 117
    }
];