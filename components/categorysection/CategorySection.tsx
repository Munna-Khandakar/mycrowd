import {Grip} from "lucide-react";

export const CategorySection = () => {
    return(
        <section className="container mx-auto p-4">
            <div className="flex gap-2 items-center mt-4 mb-2 md:mt-10 md:mb-4">
                <Grip />
                <h2 className="text-lg md:text-2xl font-bold text-slate-800">Category</h2>
            </div>
            <div className="flex flex-wrap gap-2 items-center overflow-y-auto overflow-scroll">
                <div className="w-[100px] h-[100px] border rounded p-2 bg-red-200"> Fitness</div>
                <div className="w-[100px] h-[100px] border rounded p-2 bg-green-200"> Fitness</div>
                <div className="w-[100px] h-[100px] border rounded p-2 bg-pink-200"> Fitness</div>
                <div className="w-[100px] h-[100px] border rounded p-2 bg-teal-200"> Fitness</div>
            </div>
        </section>
    )
}