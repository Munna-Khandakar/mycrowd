import {FundraiseFile} from '@/constants/FundRaise/FundraiseFile';
import Image from 'next/image';
import {User} from 'lucide-react';
import {Badge} from '@/components/ui/badge';

export const Application = () => {

    const application = FundraiseFile[0];

    return (
        <div className="container">
            <h1 className="my-5 text-4xl font-bold">{application.title}</h1>
            <div className="grid grid-cols-3">
               <div className="col-span-2">
                   <Image src={application.image} alt={"logo"} className="object-cover w-full h-[400px] rounded-2xl"/>
                   <div className="flex gap-2 items-center my-5 ">
                       <User size={24} className="inline-block"/>
                          <span>Mehedi Hasan Emon is organizing this fundraiser.</span>  <Badge>Humanity</Badge>
                   </div>

               </div>
            </div>
        </div>
    );

};