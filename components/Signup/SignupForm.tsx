'use client';

import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {UserTypeSelectionForm} from '@/components/Signup/UserTypeSelectionForm';
import {useState} from 'react';
import {NameInputForm} from '@/components/Signup/NameInputForm';
import {ContactInputForm} from '@/components/Signup/ContactInputForm';
import {OtpInputForm} from '@/components/Signup/OtpInputForm';
import {TosInputForm} from '@/components/Signup/TosInputForm';
import './Signup.css';
import {ProceedToLogin} from '@/components/Signup/ProceedToLogin';


export function SignupForm() {

    const [steps, setSteps] = useState(0);
    const [registrationSuccessfull, setRegistrationSuccessfull] = useState(false);
    const nextForm = () => {
        if (steps == 4) {
            setRegistrationSuccessfull(true);
        }
        setSteps(p => p + 1);
    };
    const previousForm = () => {
        setSteps(p => p - 1);
    };

    return (
        <div className="flex items-center justify-center h-screen">
            {
                registrationSuccessfull
                    ? <ProceedToLogin/>
                    : <Card className="max-w-sm md:max-w-md w-full">
                        <CardHeader>
                            <CardTitle className="text-2xl">Signup</CardTitle>
                            <CardDescription>
                                Welcome to Donate! Your participation can make others life beautiful
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                {
                                    steps == 0 && <UserTypeSelectionForm/>
                                }
                                {
                                    steps == 1 && <NameInputForm/>
                                }
                                {
                                    steps == 2 && <ContactInputForm/>
                                }
                                {
                                    steps == 3 && <OtpInputForm/>
                                }
                                {
                                    steps == 4 && <TosInputForm/>
                                }
                                <div className="flex gap-2">
                                    {
                                        steps > 0 &&
                                        <Button type="button" variant="secondary" className="w-full" onClick={previousForm}>
                                            Back
                                        </Button>
                                    }

                                    <Button type="button" className="w-full" onClick={nextForm}>
                                        Next
                                    </Button>
                                </div>
                            </div>
                            <div className="mt-4 text-center text-sm">
                                Already have an account?{' '}
                                <Link href={'/login'} className="underline">
                                    Login
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
            }

        </div>
    );
}
