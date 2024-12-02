import MiniArrowRight from "../assets/icons/MiniArrow_Right"

function BtnIcon({ to, icon, label }) {
    return (
        <a href={to} 
        className="font-mono px-4 py-2 border border-neutral-800 rounded-lg flex flex-row items-center gap-2 w-fit
        hover:bg-neutral-50/10 transition ease-in-out duration-200">
            {icon}
            {label}
        </a>
    )
}

function  BtnArrow({ to, label}) {
    return (   
        <a href={to}
        className="font-mono text-sm px-4 py-2 border border-neutral-800 rounded-lg flex flex-row items-center gap-2 w-fit
        hover:bg-neutral-50/10 hover:gap-3 transition-all ease-in-out duration-200">
            {label}
            <MiniArrowRight />
        </a>
    )
}


export { BtnIcon }
export { BtnArrow }