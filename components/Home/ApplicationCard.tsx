import Link from 'next/link';
import Image from 'next/image';
import {FundRaiseType} from '@/types/FundRaise';
import {FundRaiseProgressBar} from '@/components/Home/FundRaiseProgressBar';

type ApplicationCardProps = {
    fundraise: FundRaiseType
}

export const ApplicationCard = (props: ApplicationCardProps) => {

    const {fundraise} = props;

    return (
        <Link href={`/application/${fundraise._id}`}>
            <Image
                src={fundraise.image}
                alt={'donation'}
                className="w-full h-[200px] object-cover rounded"
            />
            <div className="py-4 flex flex-col items-start justify-between h-[125px]">
                <h1 className="text-base font-semibold mb-4 text-wrap truncate line-clamp-2">{fundraise.title}</h1>
               <div className="w-full">
                   <FundRaiseProgressBar riased={fundraise.raise} target={fundraise.target}/>
               </div>
            </div>
        </Link>
    );
};