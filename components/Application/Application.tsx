import Image from 'next/image';
import {User, Share, HandCoins, Sigma} from 'lucide-react';
import {Badge} from '@/components/ui/badge';
import {Card, CardContent, CardHeader} from '@/components/ui/card';
import {FundRaiseProgressBar} from '@/components/common/FundRaiseProgressBar';
import {Button} from '@/components/ui/button';
import {FundraiseFile} from '@/constants/FundRaise/FundraiseFile';
import {Donar} from '@/components/Application/Donar';

export const Application = () => {

    const application = FundraiseFile[0];

    return (
        <div className="container">
            <h1 className="my-5 text-4xl font-bold">{application.title}</h1>
            <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2">
                    <Image src={application.image} alt={'logo'} className="object-cover w-full h-[400px] rounded-2xl"/>
                    <div className="flex gap-2 items-center my-5 ">
                        <User size={24} className="inline-block"/>
                        <span>Mehedi Hasan Emon is organizing this fundraiser.</span> <Badge>Humanity</Badge>
                    </div>

                </div>
                <Card className="col-span-1 max-h-[calc(100vh-35%)]">
                    <CardHeader>
                        21 Donations so far
                        <FundRaiseProgressBar raised={500} target={1200}/>
                    </CardHeader>
                    <CardContent>
                        <div className="flex gap-2 flex-col">
                            <Button className="gap-1" size="lg" variant="secondary"> <Share size={15}/>Share </Button>
                            <Button className="gap-1" size="lg"> <HandCoins size={15}/>Donate</Button>
                        </div>
                        <div className="flex gap-2 items-center mt-5 mb-2">
                            <div className="bg-fuchsia-200 p-2 w-fit rounded-full">
                                <Sigma/>
                            </div>
                            <span className="text-base font-semibold text-slate-700">610 people just donated</span>
                        </div>
                        <div className="h-[300px] overflow-scroll">
                            <ul className="flex flex-col gap-1">
                                <Donar/>
                                <Donar/>
                                <Donar/>
                                <Donar/>
                                <Donar/>
                                <Donar/>
                                <Donar/>
                                <Donar/>
                                <Donar/>
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            </div>

        </div>
    );

};