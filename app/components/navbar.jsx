import LogoSVG from "../assets/Logo";
import { Github } from 'lucide-react';


function NavLink({ href, label}) {
    return (
        <a href={href} className="text-base py-1 px-2 rounded-md trainsition ease-in-out duration-200 text-neutral-300 hover:text-neutral-50 hover:bg-neutral-50/10" >{label}</a>
    )
};


export default function Navbar() {
    const navItems = [
        { href: "/", label: "Home"},
        { href: "/apps", label: "Apps"},
        { href: "/about", label: "About"},
        { href: "/supporters", label: "Supporters"},
    ];

    const navList = navItems.map((item, index) => 
        <li key={index}><NavLink href={item.href} label={item.label} /></li>
    )
    
    return (
        <nav className="flex flex-row justify-between items-center py-3 px-6 border-b border-neutral-800 bg-neutral-950/80">
            <div className="flex flex-row gap-5">
                <a href="/"><LogoSVG /></a>
                <ul className="flex flex-row items-center gap-3">{navList}</ul>
            </div>
            <a href="https://github.com/ItsRiprod/DeskThing" 
            className="transition ease-in-out duration-200 text-neutral-50 hover:text-green-600">
                <Github />
                </a>
        </nav>
    )
}