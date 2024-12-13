import { JSX } from "react";
import MiniArrowRight from "./assets/icons/MiniArrow_Right"

interface BtnIconProps {
    to: string;
    icon: JSX.Element;
    label: string;
}

const BtnIcon: React.FC<BtnIconProps> = ({ to, icon, label }) => {
    return (
        <a href={to} 
        className="font-mono px-4 py-2 border border-neutral-800 rounded-lg flex flex-row items-center gap-2 w-fit
        hover:bg-neutral-50/10 hover:text-green-400 transition ease-in-out duration-200">
            {icon}
            {label}
        </a>
    )
}

interface BtnArrowProps {
    to: string;
    label: string;
    filled?: boolean;
}

const BtnArrow: React.FC<BtnArrowProps> = ({ to, label, filled }) => {
    const baseStyles =
    "font-mono text-sm px-4 py-2 border border-neutral-800 rounded-lg flex flex-row items-center gap-2 w-fit  hover:gap-3 transition-all ease-in-out duration-200";
    const filledStyles = 
    filled ? "bg-neutral-50 text-neutral-950 hover:bg-green-600" : "hover:bg-neutral-50/10";

    return (   
        <a href={to} className={`${baseStyles} ${filledStyles}`}>
            {label}
            <MiniArrowRight />
        </a>
    )
}

export { BtnIcon }
export { BtnArrow }