import {Fragment} from 'react';
import {Label} from '@/components/ui/label';
import {Input} from '@/components/ui/input';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';


export const ContactInputForm = () => {
    return (
        <Fragment>
            <div className="grid gap-2">
                <Label htmlFor="fullname">Choose your contact method</Label>

                <Tabs defaultValue="phone" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                        <TabsList>
                            <TabsTrigger value="phone" defaultChecked className="relative">
                                Phone
                            </TabsTrigger>
                            <TabsTrigger value="email">Email</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="phone" className="border-none p-0 outline-none">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            id="phone"
                            type="text"
                            placeholder="01XXXXXXXXX"
                            required
                        />
                    </TabsContent>
                    <TabsContent value="email" className="border-none p-0 outline-none">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="youremail@email"
                            required
                        />
                    </TabsContent>

                </Tabs>
            </div>
        </Fragment>
    );
};