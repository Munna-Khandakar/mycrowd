import {Fragment} from 'react';
import {Label} from '@/components/ui/label';
import {Checkbox} from '@/components/ui/checkbox';
import {DiamondPlus, HandCoins, HeartHandshake} from 'lucide-react';

enum TOS {
    DONATION = 'donation',
    FUNDRAISE = 'fundraise',
    BOTH = 'both'
}

export const TosInputForm = () => {
    return (
        <div className="grid gap-4">
            <Label htmlFor="fullname">
                Your Purpose of Signing Up
            </Label>
            <div className="signup-container grid grid-cols-3 gap-4 grid-rows-1">
                <Fragment>
                    <input
                        type="radio"
                        defaultChecked
                        name="tos"
                        id={TOS.DONATION}
                        value={TOS.DONATION}
                    />
                    <label htmlFor={TOS.DONATION} className="border rounded p-2 w-full">
                        <div className="flex items-center justify-center flex-col gap-2">
                            <HandCoins size={20}/>
                            <p className="text-xs font-semibold capitalize">{TOS.DONATION}</p>
                        </div>
                    </label>
                </Fragment>
                <Fragment>
                    <input
                        type="radio"
                        name="tos"
                        id={TOS.FUNDRAISE}
                        value={TOS.FUNDRAISE}
                    />
                    <label htmlFor={TOS.FUNDRAISE} className="border rounded p-2 w-full">
                        <div className="flex items-center justify-center flex-col gap-2">
                            <HeartHandshake size={20}/>
                            <p className="text-xs font-semibold capitalize">{TOS.FUNDRAISE}</p>
                        </div>
                    </label>
                </Fragment>
                <Fragment>
                    <input
                        type="radio"
                        name="tos"
                        id={TOS.BOTH}
                        value={TOS.BOTH}
                    />
                    <label htmlFor={TOS.BOTH} className="border rounded p-2 w-full">
                        <div className="flex items-center justify-center flex-col gap-2">
                            <DiamondPlus size={20}/>
                            <p className="text-xs font-semibold capitalize">{TOS.BOTH}</p>
                        </div>
                    </label>
                </Fragment>
            </div>
            <div className="flex items-center space-x-2">
                <Checkbox id="terms" defaultChecked={true}/>
                <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
        </div>
    );
};