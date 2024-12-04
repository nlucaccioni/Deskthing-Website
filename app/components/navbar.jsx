import LogoSVG from "../assets/Logo";
import { Github } from 'lucide-react';


function NavLink({ href, label}) {
    return (
        <a href={href} className="text-sm py-2 px-3 rounded-md trainsition ease-in-out duration-200 text-neutral-300 hover:text-neutral-50 hover:bg-neutral-50/10" >{label}</a>
    )
};


export default function Navbar() {
    const navItems = [
        { href: "./", label: "Home"},
        { href: "./about", label: "About"},
        { href: "./releases", label: "Releases"},
        { href: "./apps", label: "Apps"},
        // { href: "./supporters", label: "Supporters"},
    ];

    const navList = navItems.map((item, index) => 
        <li key={index}><NavLink href={item.href} label={item.label} /></li>
    )
    
    return (
        <nav className="z-50 fixed w-screen flex flex-row justify-between items-center py-3 px-6 border-b border-neutral-800 bg-neutral-950/80">
            <div className="flex flex-row gap-5">
                <a href="./"><LogoSVG /></a>
                <ul className="flex flex-row items-center gap-3">{navList}</ul>
            </div>
            <a href="https://github.com/ItsRiprod/DeskThing" 
            className="transition ease-in-out duration-200 p-2 text-neutral-50 hover:text-green-400 hover:bg-neutral-50/10 rounded-md">
                <Github />
                </a>
        </nav>
    )
}