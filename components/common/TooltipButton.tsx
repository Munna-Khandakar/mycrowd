'use client';

import {Button} from '@/components/ui/button';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';

type TooltipButtonProps = {
    onClick: () => void;
    tooltip: string;
    className?: string;
    children?: any;
}

export const TooltipButton = (props: TooltipButtonProps) => {

    const {onClick, className, tooltip, children} = props;
    const handleClick = () => {
        onClick();
    };

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    onClick={handleClick}
                    variant="ghost" size="icon"
                    aria-label={tooltip}
                    className={`flex items-center justify-center gap-1 ${className}`}
                >
                    {children}
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                {tooltip}
            </TooltipContent>
        </Tooltip>
    );
};