'use client'
import {PaymentGateway} from '@/enums/PaymentGateway';

type PaymentMethodProps = {
    gateway: PaymentGateway;
    accountName: string;
    accountNumber: string;
}

export const PaymentMethod = (props: PaymentMethodProps) => {

    const { gateway, accountName, accountNumber} = props;

    const paymentMethodLogo = {
        [PaymentGateway.BKASH]: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVyhgCbIQ8dQDqf2j_x6vWdLtylej4otq1Q&s',
        [PaymentGateway.NAGAD]: 'https://freelogopng.com/images/all_img/1679248787Nagad-Logo.png',
        [PaymentGateway.ROCKET]: 'https://pngtom.com/files/preview/960x960/317020431739wsqe06kdzz8abbcj9ubb1txjumovorxogdiwsxfdahjy5lxcole5zugbetwsrclps4hvvlt84nfffvkb7aeykoiptprmrlpzsux.png'
    };

    return (
        <li>
            <div className="flex gap-3 items-center">
                <img
                    className="w-8 h-8 rounded-full border object-fill"
                    src={paymentMethodLogo[gateway]}
                />
                <div>
                    <span className="text-sm font-semibold text-slate-700">A/C Name: </span>
                    <span className="text-sm font-normal text-slate-700">{accountName}</span>
                    <br/>
                    <span className="text-sm font-semibold text-slate-700">A/C No: </span>
                    <span className="text-sm font-normal text-slate-700">{accountNumber}</span>
                </div>
            </div>
        </li>
    );
};