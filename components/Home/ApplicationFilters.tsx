import {Button} from '@/components/ui/button';
import {Siren, SlidersHorizontal} from 'lucide-react';
import {useState} from 'react';

enum ApplicationCategory {
    ALL = ' all',
    EMERGENCY = ' emergency',
}

export const ApplicationFilters = () => {

    const [selectedCategory, setSelectedCategory] = useState(ApplicationCategory.EMERGENCY);

    const selectCategory = (category: ApplicationCategory) => {
        setSelectedCategory(category);
    };

    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-2">
                <Button
                    className="gap-1 capitalize"
                    variant={selectedCategory == ApplicationCategory.EMERGENCY ? 'default' : 'ghost'}
                    onClick={() => selectCategory(ApplicationCategory.EMERGENCY)}
                >
                    <Siren size={20}/>
                    {ApplicationCategory.EMERGENCY}
                </Button>
                <Button
                    className=" gap-1 capitalize"
                    variant={selectedCategory == ApplicationCategory.ALL ? 'default' : 'ghost'}
                    onClick={() => selectCategory(ApplicationCategory.ALL)}
                >
                    {ApplicationCategory.ALL}
                </Button>
            </div>
            <Button className=" gap-1" variant="outline">
                <SlidersHorizontal size={15}/>Filters</Button>
        </div>
    );
};