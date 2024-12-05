import Image from 'next/image';
import {HandCoins, Landmark, Share, User} from 'lucide-react';
import {Badge} from '@/components/ui/badge';
import {Card, CardContent, CardHeader} from '@/components/ui/card';
import {FundRaiseProgressBar} from '@/components/common/FundRaiseProgressBar';
import {Button} from '@/components/ui/button';
import {FundraiseFile} from '@/constants/FundRaise/FundraiseFile';
import {PaymentMethod} from '@/components/Application/PaymentMethod';
import {PaymentGateway} from '@/enums/PaymentGateway';

export const Application = () => {

    const application = FundraiseFile[0];

    return (
        <div className="container">
            <h1 className="my-5 text-4xl font-bold">{application.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-10">
                <div className="col-span-1 md:col-span-2">
                    <Image src={application.image} alt={'logo'} className="object-cover w-full h-[400px] rounded-2xl"/>
                    <div className="flex gap-2 items-center my-5 ">
                        <User size={24} className="inline-block"/>
                        <span>Mehedi Hasan Emon is organizing this fundraiser.</span> <Badge>Humanity</Badge>
                    </div>
                    <div className="text-justify">
                        <h2>What is Lorem Ipsum?</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </p>
                        <h2>What is Lorem Ipsum?</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the  standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </p>
                        <h2>What is Lorem Ipsum?</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
                <div className="relative col-span-1">
                    <Card className="sticky top-0">
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
                                    <Landmark/>
                                </div>
                                <span className="text-base font-semibold text-slate-700">Helping Medium</span>
                            </div>
                            <div className="max-h-[300px] overflow-scroll">
                                <ul className="flex flex-col gap-4">
                                    <PaymentMethod
                                        accountNumber="+8801792134563"
                                        accountName="Mehedi Hasan Emon"
                                        gateway={PaymentGateway.NAGAD}
                                    />
                                    <PaymentMethod
                                        accountNumber="+8801792134563"
                                        accountName="Riadul Islam"
                                        gateway={PaymentGateway.ROCKET}
                                    />
                                    <PaymentMethod
                                        accountNumber="+8801792134563"
                                        accountName="Munna Khandakar"
                                        gateway={PaymentGateway.BKASH}
                                    />
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );

};