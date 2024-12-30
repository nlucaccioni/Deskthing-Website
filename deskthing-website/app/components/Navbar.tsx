import { Link } from "@remix-run/react";
import { IconAbout, IconCarThing, IconCoffee, IconHome, IconLayoutGrid } from "../assets/icons";

interface NavProps {
  to: string
  children: React.ReactNode;
}

const NavButton = ({ to, children }: NavProps) => (
    <Link to={to} prefetch="intent" className="group flex gap-2 items-center">
      {children}
    </Link>
);

export default function Navbar() {
  const navItems = [
    { to: "/", label: "Home", icon: IconHome},
    { to: "/apps", label: "Apps", icon: IconLayoutGrid },
    { to: "/about", label: "About", icon: IconAbout },
    { to: "/supporters", label: "Supporters", icon: IconCoffee },
  ];

  return (
    <nav className="fixed w-screen top-0 border-b border-zinc-900 bg-black p-4 flex justify-between">
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <NavButton key={item.to} to={item.to}>
            {item.icon && <item.icon className="stroke-white fill-none" />}
            <p className="text-gray-300 hidden md:block group-hover:text-white">
              {item.label}
            </p>
          </NavButton>
        ))}
      </ul>
      <ul>
        <li>
          <iframe
            src="https://github.com/sponsors/ItsRiprod/button"
            title="Sponsor ItsRiprod"
            height="32"
            width="114"
            style={{ border: "0", borderRadius: "6px" }}
          ></iframe>
        </li>
      </ul>
    </nav>
  );
}