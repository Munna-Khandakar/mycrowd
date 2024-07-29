import {Fragment} from 'react';
import {Label} from '@/components/ui/label';
import {Input} from '@/components/ui/input';

export const NameInputForm = () => {
    return (
        <Fragment>
            <div className="grid gap-2">
                <Label htmlFor="fullname">Full Name</Label>
                <Input
                    id="fullname"
                    type="text"
                    placeholder="your name"
                    required
                />
            </div>
        </Fragment>
    );
};