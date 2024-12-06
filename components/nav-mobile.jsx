"use client";
import { Cross as Hamburger } from "hamburger-react";
import { Github } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import LogoSVG from "../components/assets/Logo";
import MiniArrowRight from "../components/assets/icons/MiniArrow_Right";
import { motion, AnimatePresence } from "framer-motion";

export default function NavMobile({ navItems }) {
  const [isOpen, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      height: 'auto',
      transition: {
        height: { duration: 0.5, ease: "easeInOut" },
        staggerChildren: 0.1, 
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        height: { duration: 0.5, ease: "easeInOut" },
        staggerChildren: 0.1,
        staggerDirection: -1, 
      },
    },
  };


  const childVariants = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  const navList = navItems.map((item, index) => (
    <motion.li
      key={index}
      className="text-3xl py-4 px-3 text-neutral-300"
      variants={childVariants}
      transition="east-in-out"
    >
      <a href={item.href} className="flex flex-row w-full gap-4 items-center">
        <p>{item.label}</p>
        <MiniArrowRight size="18" />
      </a>
    </motion.li>
  ));

  return (
    <div ref={navRef} className="sm:hidden flex flex-row justify-between items-center w-full">
      <div className="lg:hidden">
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 bg-neutral-950 border-b border-b-white/20 z-50"
              initial="hidden"
              animate="show"
              exit="exit"
              variants={containerVariants}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.ul
                className="flex flex-col gap-2"
                variants={containerVariants}
              >
                {navList}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <a href="./" className="-ml-5">
        <LogoSVG />
      </a>
      <a
        href="https://github.com/ItsRiprod/DeskThing"
        className="transition ease-in-out duration-200 p-2 text-neutral-50 hover:text-green-400 hover:bg-neutral-50/10 rounded-md"
      >
        <Github />
      </a>
    </div>
  );
}
