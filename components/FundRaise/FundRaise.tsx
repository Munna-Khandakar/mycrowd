'use client';

import Image from 'next/image';
import {Copy, Pencil, Search, Settings} from 'lucide-react';
import {SimpleTable} from '@/components/SimpleTable';
import {
    TableCell,
    TableHead,
    TableRow,
} from '@/components/ui/table';
import {Input} from '@/components/ui/input';
import {FundraiseFile} from '@/constants/FundRaise/FundraiseFile';
import {FundRaiseType} from '@/types/FundRaise';
import {AppConstant} from '@/constants/AppConstant';
import {TooltipButton} from '@/components/common/TooltipButton';

export const FundRaise = () => {
    return (
        <div>
            <SimpleTable
                title={AppConstant.fundRaise.title}
                subTitle={AppConstant.fundRaise.subTitle}
                actionItems={
                    <div className="relative ml-auto pr-2 flex-1 md:grow-0">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>
                        <Input
                            type="search"
                            title={AppConstant.fundRaise.search}
                            placeholder="Search..."
                            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                        />
                    </div>
                }
                tableHeader={
                    <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                            <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Application</TableHead>
                        <TableHead className="hidden md:table-cell">Status</TableHead>
                        <TableHead className="hidden md:table-cell">Target</TableHead>
                        <TableHead>Raise</TableHead>
                        <TableHead> Actions </TableHead>
                    </TableRow>
                }
                tableBody={
                    FundraiseFile.map((application: FundRaiseType, index) => (
                        <TableRow key={index}>
                            <TableCell className="hidden sm:table-cell">
                                <Image
                                    src={application.image}
                                    alt="medicine"
                                    width={40}
                                    height={40}
                                    className="rounded-md w-full h-full object-cover"
                                />
                            </TableCell>
                            <TableCell>
                                <h4 className="text-sm font-semibold text-wrap truncate line-clamp-1">{application.title}</h4>
                                <span
                                    className="text-sm font-medium text-slate-500 text-wrap truncate line-clamp-2">{application.description}</span>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">{application.status}</TableCell>
                            <TableCell className="hidden md:table-cell">{application.target}</TableCell>
                            <TableCell>{application.raise}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-1">
                                    <TooltipButton
                                        tooltip="Copy Application Link"
                                        onClick={() => {
                                            console.log('clicked');
                                        }}>
                                        <Copy size={18}/>
                                    </TooltipButton>
                                    <TooltipButton
                                        tooltip="Edit Application"
                                        onClick={() => {
                                            console.log('clicked');
                                        }}>
                                        <Pencil size={18}/>
                                    </TooltipButton>

                                    <TooltipButton
                                        tooltip="Application Settings"
                                        onClick={() => {
                                            console.log('clicked');
                                        }}
                                    >
                                        <Settings size={18}/>
                                    </TooltipButton>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))
                }
            />
        </div>
    );
};