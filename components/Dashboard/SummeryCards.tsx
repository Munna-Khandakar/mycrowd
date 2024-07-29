import {Card, CardContent, CardHeader} from '@/components/ui/card';
import {ArrowDownToDot, ArrowUpFromDot, HandHelping, Users} from 'lucide-react';

export const SummeryCards = ()=>{
    return (
        <div className="grid grid-cols-4 gap-2">
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <p className="text-xs text-slate-500 font-medium">Total Raise</p>
                        <ArrowDownToDot className="h-5 w-5"/>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-md font-extrabold text-slate-800">45,234.00</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <p className="text-xs text-slate-500 font-medium">Total Donor</p>
                        <Users className="h-5 w-5"/>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-md font-extrabold text-slate-800">757</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <p className="text-xs text-slate-500 font-medium">Total Funds</p>
                        <ArrowUpFromDot className="h-5 w-5"/>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-md font-extrabold text-slate-800">00.00</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <p className="text-xs text-slate-500 font-medium">Total Help</p>
                        <HandHelping className="h-5 w-5"/>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-md font-extrabold text-slate-800">00</p>
                </CardContent>
            </Card>
        </div>
    )
}