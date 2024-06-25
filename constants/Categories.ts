import {Category} from '@/types/Category';
import MustHave from '@/components/categorysection/must-have.webp';
import ElderCare from '@/components/categorysection/ElderCare.webp';

export const CATEGORIES: Category[] = [
    {
        label: 'Must Have',
        icon: MustHave,
        id: '#F6D6D6',
        category_slug: 'must-have'
    },
    {
        label: 'Elderly care',
        icon: ElderCare,
        id: '#CDFAD5',
        category_slug: 'elderly-care'
    },
    {
        label: 'Personal Care',
        icon: ElderCare,
        id: '#F6D6D6',
        category_slug: 'personal-care'
    },
    {
        label: 'Healthcare Device',
        icon: ElderCare,
        id: '#CDFAD5',
        category_slug: 'healthcare-device'
    },
    {
        label: 'Health Food and Drinks',
        icon: ElderCare,
        id: '#F6D6D6',
        category_slug: 'health-food-and-drinks'
    },
    {
        label: 'Skin Care',
        icon: ElderCare,
        id: '#CDFAD5',
        category_slug: 'skin-care'
    },
    {
        label: 'Mother and Baby Care',
        icon: ElderCare,
        id: '#F6D6D6',
        category_slug: 'mother-and-baby-care'
    },
];