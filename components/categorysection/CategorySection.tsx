import {Grip} from "lucide-react";
import {CategoryCard} from "@/components/categorysection/CategoryCard";
import Dumbell from "./dumbbell.png";
import PersonalCare from "./personal-care.png";
import FamilyCare from "./nursing-home.png"
import FastAidBox from "./first-aid-kit.png"
import Syringe from "./syringe.png";
import {Category} from "@/types/Category";

const CATEGORIES: Category[] = [
    {
        label: 'Fitness',
        icon: Dumbell,
        color: '#F6D6D6'
    },
    {
        label: 'Personal Care',
        icon: PersonalCare,
        color: '#CDFAD5'
    },
    {
        label: 'Family Care',
        icon: FamilyCare,
        color: '#CAEDFF'
    },
    {
        label: 'First Aid',
        icon: FastAidBox,
        color: '#F6F5F2'
    },
    {
        label: 'Vaccination',
        icon: Syringe,
        color: '#F6FDC3'
    }
]

export const CategorySection = () => {
    return (
        <section className="container mx-auto">
            <div className="flex gap-2 items-center mt-4 mb-2 md:mt-10 md:mb-4">
                <Grip/>
                <h2 className="text-lg md:text-2xl font-bold text-slate-800">Category</h2>
            </div>
            <div className="flex flex-1 flex-nowrap gap-2 items-center overflow-x-auto">
                {
                    CATEGORIES.map((category) => (
                        <CategoryCard key={category.label} {...category}/>
                    ))
                }
            </div>
        </section>
    )
}