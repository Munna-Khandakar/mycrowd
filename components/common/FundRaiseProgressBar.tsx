type FundRaiseProgressBarProps = {
    riased: number,
    target: number
}

export const FundRaiseProgressBar = (props: FundRaiseProgressBarProps) => {

    const {riased, target} = props;


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
                    style={{width: `${calculatePercentage(riased, target)}%`}}
                ></div>
            </div>
            <span className="text-sm">${riased} raised</span>
        </div>
    );
};