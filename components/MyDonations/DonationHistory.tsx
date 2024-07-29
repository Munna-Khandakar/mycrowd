'use client';

import {User, Users} from 'lucide-react';
import {SimpleTable} from '@/components/SimpleTable';
import {TableCell, TableHead, TableRow} from '@/components/ui/table';
import {AppConstant} from '@/constants/AppConstant';
import {DonationHistoryFile} from '@/constants/Donations/DonationHistory';
import {DonationHistoryType} from '@/types/DonationHistory';
import {Badge} from '@/components/ui/badge';

export const DonationHistory = () => {
    return (
        <div>
            <SimpleTable
                title={AppConstant.myDonations.title}
                subTitle={AppConstant.myDonations.subTitle}
                tableHeader={
                    <TableRow>
                        <TableHead>Applicant</TableHead>
                        <TableHead className="hidden md:table-cell">Type</TableHead>
                        <TableHead className="hidden md:table-cell">Amount</TableHead>
                        <TableHead>Date</TableHead>
                    </TableRow>
                }
                tableBody={
                    DonationHistoryFile.map((donation: DonationHistoryType, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <h4 className="text-sm font-semibold text-wrap truncate line-clamp-1">{donation.raiser}</h4>
                                <span
                                    className="text-sm font-medium text-slate-500 text-wrap truncate line-clamp-2">{donation.title}</span>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                                <Badge variant="outline" className="gap-1 text-xs text-slate-500 font-normal">
                                    {
                                        donation.raiser_type === 'individual'
                                            ? <User size={12}/>
                                            : <Users size={12}/>
                                    }
                                    {donation.raiser_type}
                                </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">{donation.donation_amount}</TableCell>
                            <TableCell>{donation.date}</TableCell>
                        </TableRow>
                    ))
                }
            />
        </div>
    );
};