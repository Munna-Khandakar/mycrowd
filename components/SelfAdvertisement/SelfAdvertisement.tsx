
import PlusSvg from '@/components/SelfAdvertisement/PlusSvg';
import FamilyPic from '@/components/SelfAdvertisement/Family-PNG-Picture.png';
import Image from 'next/image';

export const SelfAdvertisement = () => {

    return (
        <div className="container bg-gradient-to-bl from-emerald-900 to-teal-500">
            <section
                className="container h-full md:h-[320px] flex flex-col md:flex-row gap-4 items-center justify-between">
                <div>
                    <div className="flex flex-col items-center gap-2 mt-8 md:mt-0">
                        <div className="flex flex-row gap-2 text-lg md:text-3xl text-white font-semibold">
                            <span>Become a </span>
                            <div className="h-2 md:h-4 w-14 md:w-24"><PlusSvg/></div>
                            <span>member</span>
                        </div>
                        <span
                            className="text-xs text-center md:text-base font-medium text-slate-100 leading-5 md:leading-10">Save 5% on medicines, 50% on 1st lab test & get FREE delivery with PLUS membership</span>
                        <span className="text-xs text-center md:text-sm font-medium text-slate-200">Enjoy extra bachat on every order</span>
                    </div>
                </div>
                <div className="items-center flex justify-center h-full">
                    <Image className="w-full h-full " src={FamilyPic} alt={'group family photo'}/>
                </div>
            </section>
        </div>
    );
};