import {Card, CardContent} from '@/components/ui/card';
import {DateCard} from '@/components/MyDonations/DateCard';
import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {User, Users} from 'lucide-react';
import {UpcomigDonationType} from '@/types/UpcomingDonation';

type UpcomingDonationCardProps = {
    donation: UpcomigDonationType
}

export const UpcomingDonationCard = (props: UpcomingDonationCardProps) => {

    const {donation} = props;

    return (
        <Card className="p-2 rounded-md">
            <CardContent className="flex gap-2 items-center justify-between p-0">
               <div className="flex gap-2 w-full">
                   <DateCard/>
                   <div>
                       <div className="mb-2">
                           <p className="text-sm font-semibold ">{donation.title}</p>
                           <Badge variant="outline" className="gap-1 text-xs text-slate-500 font-normal">
                               {
                                   donation.raiser_type === 'individual'
                                       ? <User size={12}/>
                                       : <Users size={12}/>
                               }
                               {donation.raiser}
                           </Badge>
                       </div>
                       <p className="text-sm font-normal text-wrap line-clamp-3 truncate">
                           {donation.description}
                       </p>
                   </div>
               </div>
                <Button>Donate Now</Button>
            </CardContent>
        </Card>
    );
};