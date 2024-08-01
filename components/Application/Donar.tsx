import {HandCoins} from 'lucide-react';

export const Donar = () => {
    return (
        <li>
            <div className="flex gap-2 items-center">
                <div className="bg-fuchsia-50 p-2 w-fit rounded-full">
                    <HandCoins/>
                </div>
                <div>
                    <p className="text-sm font-normal text-slate-700">Munna Khandakar</p>
                    <span className="text-sm font-semibold text-slate-700">$61</span>
                </div>
            </div>
        </li>
    );
};