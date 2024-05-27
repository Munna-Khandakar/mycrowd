import Image from "next/image";

type CategoryCardProps = {
    label: string;
    icon: any;
    color: string;
}

export function CategoryCard(props: CategoryCardProps) {
    const {label, icon, color} = props;
    return (
        <button className="p-1 md:p-2 rounded truncate border-0 min-w-[88px] md:min-w-[156px]">
            <div
                className="bg-red-100 rounded p-1 md:p-2 h-[80px] md:h-[100px] w-[80px] md:w-[140px] flex items-center justify-center"
                style={{backgroundColor: color}}
            >
                <Image src={icon} alt={'Category'} className="w-[50px]" width={50}/>
            </div>
            <span className="text-xs md:text-sm text-slate-800">{label}</span>
        </button>
    )
}
