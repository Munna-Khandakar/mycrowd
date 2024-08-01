type FundRaiseProgressBarProps = {
    raised: number,
    target: number
}

export const FundRaiseProgressBar = (props: FundRaiseProgressBarProps) => {

    const {raised, target} = props;


    const calculatePercentage = (raised: number, target: number) => {

        if (raised > target) {
            return 100;
        }

        return (raised / target) * 100;
    };


    return (
        <div>
            <div className="w-full bg-gray-200 rounded h-1">
                <div
                    className="bg-black h-1 rounded"
                    style={{width: `${calculatePercentage(raised, target)}%`}}
                ></div>
            </div>
            <span className="text-sm">${raised} raised of goal ${target}</span>
        </div>
    );
};