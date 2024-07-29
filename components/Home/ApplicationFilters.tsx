import {Fragment, useState} from 'react';
import SlidingPane from 'react-sliding-pane';
import {Siren, SlidersHorizontal} from 'lucide-react';
import {Button} from '@/components/ui/button';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import './ApplicationFilter.css';
import {Switch} from '@/components/ui/switch';
import {Label} from '@/components/ui/label';

enum ApplicationCategory {
    ALL = ' all',
    EMERGENCY = ' emergency',
}

const categories = ['education', 'health', 'food', 'environment', 'emergency', 'business', 'event', 'volunteer', 'family'];
const areas = ['personal', 'community', 'campaign', 'organization'];

export const ApplicationFilters = () => {

    const [isPaneOpen, setIsPaneOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(ApplicationCategory.EMERGENCY);

    const selectCategory = (category: ApplicationCategory) => {
        setSelectedCategory(category);
    };

    return (
        <Fragment>
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
                <Button className=" gap-1" variant="outline"
                        onClick={() => {
                            setIsPaneOpen(true);
                        }}
                >
                    <SlidersHorizontal size={15}/>Filters
                </Button>
            </div>
            <SlidingPane
                width="30%"
                isOpen={isPaneOpen}
                title="Filters"
                subtitle="Choose filters to find the best application"
                onRequestClose={() => {
                    setIsPaneOpen(false);
                }}
            >
                <div className="space-y-5">
                    <div>
                        <div>
                            <span className="text-sm font-semibold text-slate-800">Area</span><br/>
                            <span className="text-sm font-normal text-slate-500">Choose one or more area</span>
                        </div>
                        <div className="flex gap-1 flex-wrap">
                            {
                                areas.map((area, index) => (
                                    <Button
                                        key={index}
                                        className="gap-1 capitalize"
                                        size="sm"
                                        variant="outline"
                                    >
                                        {area}
                                    </Button>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className="text-sm font-semibold text-slate-800">Category</span><br/>
                            <span className="text-sm font-normal text-slate-500">Choose one or more</span>
                        </div>
                        <div className="flex gap-1 flex-wrap">
                            {
                                categories.map((category, index) => (
                                    <Button
                                        key={index}
                                        className="gap-1 capitalize"
                                        size="sm"
                                        variant="outline"
                                    >
                                        {category}
                                    </Button>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                        <Label htmlFor="airplane-mode" className="text-sm font-semibold text-slate-800">
                            Close to goal
                            <br/>
                            <span className="text-sm font-normal text-slate-500">$50 or less needed</span>
                        </Label>
                        <Switch id="airplane-mode"/>
                    </div>
                </div>
            </SlidingPane>
        </Fragment>
    );
};