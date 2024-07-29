import {Fragment} from 'react';
import {User, Users} from 'lucide-react';
import {Label} from '@/components/ui/label';

enum USER {
    INDIVIDUAL = 'individual',
    ORGANIZATION = 'organization'
}

export const UserTypeSelectionForm = () => {
    return (
        <div className="grid gap-4">
            <Label htmlFor="user_type">You are signing as</Label>
            <div className="signup-container grid grid-cols-2 gap-4 grid-rows-1">
                <Fragment>
                    <input
                        type="radio"
                        name="user_type"
                        defaultChecked
                        id={USER.INDIVIDUAL}
                        value={USER.INDIVIDUAL}
                    />
                    <label htmlFor={USER.INDIVIDUAL} className="border rounded p-2 w-full">
                        <div className="flex items-center justify-center flex-col gap-2">
                            <User size={25}/>
                            <p className="text-xs font-semibold capitalize">{USER.INDIVIDUAL}</p>
                        </div>
                    </label>
                </Fragment>
                <Fragment>
                    <input
                        type="radio"
                        name="user_type"
                        id={USER.ORGANIZATION}
                        value={USER.ORGANIZATION}
                    />
                    <label htmlFor={USER.ORGANIZATION} className="border rounded p-2 w-full">
                        <div className="flex items-center justify-center flex-col gap-2">
                            <Users size={25}/>
                            <p className="text-xs font-semibold capitalize">{USER.ORGANIZATION}</p>
                        </div>
                    </label>
                </Fragment>
            </div>
        </div>
    );
};