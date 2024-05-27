import Image from "next/image";

type CategoryCardProps = {
    id: string;
    name: string;
    price: number;
    img: any;
}

export function MedicineCard(props: CategoryCardProps) {
    const {name, id, price, img} = props;
    return (
        <div
            className="p-1 md:p-2 border rounded truncate flex flex-col md:flex-row items-center min-w-[88px] md:min-w-[156px] hover:bg-red-200">
            <Image src={img} alt={'Category'} className="w-[100px]" width={50}/>

            <span className="text-xs md:text-sm text-slate-800">{name}</span>
        </div>
    )
}
