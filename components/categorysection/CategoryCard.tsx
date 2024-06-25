import Image from 'next/image';
import Link from 'next/link';

type CategoryCardProps = {
    label: string;
    icon: any;
}

export function CategoryCard(props: CategoryCardProps) {
    const {label, icon,} = props;
    return (
        <Link href={'1'} className="truncate border-0 min-w-fit">
            <div className="flex flex-col items-center  w-[100px] md:w-[160px]">
                <div
                    className="flex items-center justify-center rounded-lg p-2 border w-full h-[100px] md:h-[160px] hover:shadow">
                    <Image src={icon} alt={label}
                           width={150} objectFit="contain"
                           className="hover:scale-110 transition"
                    />
                </div>
                <p className="text-xs md:text-base font-medium truncate w-full text-center leading-6 text-slate-800 mt-2">
                    {label}
                </p>
            </div>
        </Link>
    );
}
