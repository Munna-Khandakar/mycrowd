'use client';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Label} from '@/components/ui/label';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import Image from 'next/image';
import {Upload} from 'lucide-react';
import {Button} from '@/components/ui/button';
import './Fundraise.css'

const IMAGE_URL = false;

export const NewApplication = () => {
    return (
        <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2 space-y-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Application Summery</CardTitle>
                        <CardDescription>Please briefly describe your application.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    type="text"
                                    className="w-full"
                                    defaultValue="Gamer Gear Pro Controller"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="grid gap-3">
                                    <Label htmlFor="amount">Fund Needed</Label>
                                    <Input
                                        id="amount"
                                        type="number"
                                        className="w-full"
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="currency">Currency</Label>
                                    <Select>
                                        <SelectTrigger id="currency" aria-label="Select currency">
                                            <SelectValue placeholder="Select currency"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="bdt">BDT</SelectItem>
                                            <SelectItem value="usd">USD</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="grid gap-3">
                                <div className="flex flex-col gap-1">
                                    <Label htmlFor="summery">Short Description</Label>
                                    <span
                                        className="text-slate-500 text-sm">Why you need this support in 250 words</span>
                                </div>
                                <Textarea
                                    id="summery"
                                    className="min-h-32"
                                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="h-[35rem]">
                    <CardHeader>
                        <CardTitle>Application Details</CardTitle>
                        <CardDescription>
                            Please tell your fundraising details, story and others important things here.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-3">
                            <Label htmlFor="description">Description</Label>
                            <div className="">
                                <ReactQuill
                                    // value={value}
                                    // onChange={(value) => setValue(value)}
                                    placeholder="your description here"
                                    style={{
                                        maxHeight: '200px',
                                        overflowY: 'auto',
                                    }}
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="col-span-1 space-y-2">
                <Card className="overflow-hidden">
                    <CardHeader>
                        <CardTitle>Product Images</CardTitle>
                        <CardDescription>
                            Upload your cover image here. It will be shown in the application page.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-2">
                            {
                                IMAGE_URL
                                    ? <Image
                                        alt="Product image"
                                        className="aspect-square w-full rounded-md object-cover"
                                        height="300"
                                        src="/placeholder.svg"
                                        width="300"
                                    />
                                    : <div
                                        className="relative flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                                        <Upload className="h-4 w-4 text-muted-foreground"/>
                                        <span className="sr-only">Upload</span>
                                        <input
                                            type="file"
                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                        />
                                    </div>


                            }
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Application Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className="grid gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="status">Sector</Label>
                                <Select>
                                    <SelectTrigger id="status" aria-label="Select status">
                                        <SelectValue placeholder="Select status"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="draft">Humanity</SelectItem>
                                        <SelectItem value="published">Medical</SelectItem>
                                        <SelectItem value="archived">Education</SelectItem>
                                        <SelectItem value="archived">Volunteer</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="status">Type</Label>
                                <Select>
                                    <SelectTrigger id="status" aria-label="Select status">
                                        <SelectValue placeholder="Select status"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="draft">On Behalf</SelectItem>
                                        <SelectItem value="published">Campaign</SelectItem>
                                        <SelectItem value="archived">Project</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Save Application</CardTitle>
                        <CardDescription>
                            All the information in this page will be displayed publicly.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div></div>
                        <Button size="sm" variant="secondary">
                            Submit
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};