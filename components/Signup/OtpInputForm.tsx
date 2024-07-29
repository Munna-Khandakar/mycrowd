import {Fragment} from 'react';
import {Label} from '@/components/ui/label';
import {Input} from '@/components/ui/input';

export const OtpInputForm = () => {
    return (
        <Fragment>
            <div className="grid gap-2">
                <Label htmlFor="fullname">OTP</Label>
                <p className="text-xs font-normal text-slate-500">Please check your contact method. </p>
                <div className="grid grid-cols-4 gap-2">
                    <Input
                        id="otp"
                        type="number"
                        required
                    />
                    <Input
                        id="otp"
                        type="number"
                        required
                    />
                    <Input
                        id="otp"
                        type="number"
                        required
                    />
                    <Input
                        id="otp"
                        type="number"
                        required
                    />

                </div>
            </div>
        </Fragment>
    );
};