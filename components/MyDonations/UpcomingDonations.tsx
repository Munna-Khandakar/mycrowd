import {Fragment} from 'react';
import {UpcomingDonationCard} from '@/components/MyDonations/UpcomingDonationCard';
import {UpcomigDonationFile} from '@/constants/Donations/UpcomigDonation';

export const UpcomingDonations = () => {
    return (
        <Fragment>
            <h2 className="text-xl font-semibold mb-2">Upcoming Donation List</h2>
            <div className="flex flex-col gap-2">
                {
                    UpcomigDonationFile.map((donation, index) => (
                        <UpcomingDonationCard key={index} donation={donation}/>
                    ))
                }
            </div>
        </Fragment>
    );
};