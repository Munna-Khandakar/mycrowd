'use client';

import {ApplicationFilters} from '@/components/Home/ApplicationFilters';
import {ApplicationCard} from '@/components/Home/ApplicationCard';
import {FundraiseFile} from '@/constants/FundRaise/FundraiseFile';

export const Applications = () => {
    return (
        <div className="container">
            <ApplicationFilters/>
            <div className="grid grid-cols-4 gap-4 mt-10 mb-10">
                {
                    FundraiseFile.map((fundraise) => (
                        <ApplicationCard
                            key={fundraise._id}
                            fundraise={fundraise}
                        />
                    ))
                }
            </div>
        </div>
    );
};