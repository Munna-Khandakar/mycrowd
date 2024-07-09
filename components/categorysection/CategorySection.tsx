import {CategoryCard} from '@/components/categorysection/CategoryCard';
import {SectionLabel} from '@/components/SectionLabel';
import {CATEGORIES} from '@/constants/Categories';

const SECTION_LABEL = 'Shop by Categories';


export const CategorySection = () => {
    return (
        <section className="container mx-auto">
            <SectionLabel label={SECTION_LABEL}/>
            <div className="flex flex-1 flex-nowrap no-scrollbar gap-2 items-center overflow-x-auto py-2">
                {
                    CATEGORIES.map((category) => (
                        <CategoryCard key={category.label} category={category}/>
                    ))
                }
            </div>
        </section>
    );
};