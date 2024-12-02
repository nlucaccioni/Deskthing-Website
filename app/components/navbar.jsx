
function NavLink({ href, label}) {
    return (
        <a href={href} className="py-1 px-2 rounded-md trainsition ease-in-out duration-200 text-neutral-300 hover:text-neutral-50 hover:bg-neutral-50/10" >{label}</a>
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
        <nav className="flex flex-row justify-between py-3 px-6 border-b border-neutral-800 bg-neutral-950/80">
            <div className="flex flex-row gap-5">
                <h1>DESKTHING</h1>
                <ul className="flex flex-row gap-3">{navList}</ul>
            </div>
            <a>github</a>
        </nav>
    )
}