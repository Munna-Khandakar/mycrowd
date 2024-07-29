'use client';

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {DonationHistory} from '@/components/MyDonations/DonationHistory';
import {UpcomingDonations} from '@/components/MyDonations/UpcomingDonations';
import {Calendar, History} from 'lucide-react';

enum MyDonationsTabs {
    UpcomingDonation = 'upcoming-donation',
    DonationHistory = 'donation-history',
}

export const MyDonations = () => {
    return (
        <Tabs defaultValue={MyDonationsTabs.UpcomingDonation}>
            <TabsList>
                <TabsTrigger value={MyDonationsTabs.UpcomingDonation} className="flex items-center gap-1">
                    <Calendar size={15}/>
                    Upcoming
                </TabsTrigger>
                <TabsTrigger value={MyDonationsTabs.DonationHistory} className="flex items-center gap-1">
                    <History size={15}/>
                    History
                </TabsTrigger>
            </TabsList>
            <TabsContent value={MyDonationsTabs.UpcomingDonation}>
                <UpcomingDonations/>
            </TabsContent>
            <TabsContent value={MyDonationsTabs.DonationHistory}>
                <DonationHistory/>
            </TabsContent>
        </Tabs>
    );
};