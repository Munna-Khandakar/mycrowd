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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-10">
                <div className="col-span-1 md:col-span-2">
                    <div className="mb-4">
                        <h1 className="text-lg md:text-4xl font-bold text-start">{application.title}</h1>
                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="text-xs md:text-sm opacity-50">
                                <span>Deadline: </span> <span>24 June, 2024</span>
                            </div>
                            <div className="text-xs md:text-sm opacity-50">
                                <span>Create on: </span> <span>24 June, 2024</span>
                            </div>
                        </div>
                    </div>
                    <Image src={application.image} alt={'logo'} className="object-cover w-full h-[400px] rounded-2xl"/>
                    <div className="flex gap-2 items-center my-5 ">
                        <User size={24} className="inline-block"/>
                        <span>Mehedi Hasan Emon is organizing this fundraiser.</span> <Badge>Humanity</Badge>
                    </div>
                    <div className="text-justify">
                        <h2 className="text-lg font-semibold">Summery</h2>
                        <p>
                            In a year thats shown the worst of humanity, we need show the best of Ireland and our
                            genorosity children enduring direct provision this Christmas. We are raising funds to
                            Times are tough for everyone, but imagine spending your childhood in a Direct Provision
                            centre through all of this. For many of these kids, Christmas can feel like just another
                            difficult day. We’re here to change that—and we need your help to make it happen.
                        </p>
                    </div>
                    <div className="text-justify mt-4">
                        <h2 className="text-lg font-semibold">Description</h2>
                        <p>
                            In a year thats shown the worst of humanity, we need show the best of Ireland and our
                            genorosity children enduring direct provision this Christmas. We are raising funds to
                            Times are tough for everyone, but imagine spending your childhood in a Direct Provision
                            centre through all of this. For many of these kids, Christmas can feel like just another
                            difficult day. We’re here to change that—and we need your help to make it happen.
                            <br/>
                            In a year thats shown the worst of humanity, we need show the best of Ireland and our
                            genorosity children enduring direct provision this Christmas. We are raising funds to
                            Times are tough for everyone, but imagine spending your childhood in a Direct Provision
                            centre through all of this. For many of these kids, Christmas can feel like just another
                            difficult day. We’re here to change that—and we need your help to make it happen.
                        </p>
                    </div>
                    <div className="text-justify mt-4 border">
                        <h2 className="text-lg font-semibold">Supporting documents</h2>
                        <div className="">
                            <img src="https://img.yumpu.com/5304029/1/500x640/guide-to-supporting-documents.jpg"/>
                            <img src="https://img.yumpu.com/5304029/1/500x640/guide-to-supporting-documents.jpg"/>
                            <img src="https://img.yumpu.com/5304029/1/500x640/guide-to-supporting-documents.jpg"/>
                        </div>

                    </div>
                </div>
                <div className="relative col-span-1">
                    <Card className="sticky top-14">
                        <CardHeader>
                            21 Donations so far
                            <FundRaiseProgressBar raised={500} target={1200}/>
                        </CardHeader>
                        <CardContent>
                            <div className="flex gap-2 flex-col">
                                <Button className="gap-1" size="lg" variant="secondary"> <Share size={15}/>Share
                                </Button>
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