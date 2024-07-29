import {Fragment} from 'react';
import {SummeryCards} from '@/components/Dashboard/SummeryCards';
import {FundRaisingChart} from '@/components/Dashboard/FundRaisingChart.';
import {PostEngagement} from '@/components/Dashboard/PostEngagement';

export const Dashboard = () => {
    return (
        <Fragment>
           <SummeryCards/>
            <div className=" mt-2 grid grid-cols-2 gap-2">
                <FundRaisingChart/>
                <PostEngagement/>
            </div>
        </Fragment>
    );
};