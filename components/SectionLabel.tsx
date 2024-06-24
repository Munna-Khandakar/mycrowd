type SectionLabelProps = {
    label: string;
    subLabel?: string;
}

export const SectionLabel = (props: SectionLabelProps) => {

    const {label, subLabel} = props;

    return (
        <div className="flex gap-2 items-center mt-4 mb-2 md:mt-10 md:mb-4">
            <h2 className="text-lg md:text-2xl font-semibold antialiased leading-8 tracking-normal text-slate-800">
                {label}
            </h2>
        </div>
    );
};