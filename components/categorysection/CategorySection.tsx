import {CategoryCard} from '@/components/categorysection/CategoryCard';
import ElderCare from './ElderCare.webp';
import MustHave from './must-have.webp';
import {Category} from '@/types/Category';
import {SectionLabel} from '@/components/SectionLabel';

const SECTION_LABEL = 'Shop by Categories';

const CATEGORIES: Category[] = [
    {
        label: 'Must Have',
        icon: MustHave,
        id: '#F6D6D6'
    },
    {
        label: 'Elderly care',
        icon: ElderCare,
        id: '#CDFAD5'
    },
    {
        label: 'Personal Care',
        icon: ElderCare,
        id: '#F6D6D6'
    },
    {
        label: 'Healthcare Device',
        icon: ElderCare,
        id: '#CDFAD5'
    },
    {
        label: 'Health Food and Drinks',
        icon: ElderCare,
        id: '#F6D6D6'
    },
    {
        label: 'Skin Care',
        icon: ElderCare,
        id: '#CDFAD5'
    },
    {
        label: 'Mother and Baby Care',
        icon: ElderCare,
        id: '#F6D6D6'
    },
];

export const CategorySection = () => {
    return (
        <section className="container mx-auto">
            <SectionLabel label={SECTION_LABEL}/>
            <div className="flex flex-1 flex-nowrap gap-2 items-center overflow-x-auto py-2">
                {
                    CATEGORIES.map((category) => (
                        <CategoryCard key={category.label} {...category}/>
                    ))
                }
            </div>
        </section>
    );
};