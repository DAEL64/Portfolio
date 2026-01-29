import { useState } from "react";
import "../index.css";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavItem = ({ href, label, onClick }) => {
  return (
    <a href={href} onClick={onClick} className="relative group px-2 py-1 whitespace-nowrap">
      <motion.span
        className="relative z-10 text-lg md:text-base font-medium tracking-wide transition-colors duration-300 group-hover:text-amber-400"
        whileHover={{ textShadow: "0px 0px 8px rgba(245, 158, 11, 0.6)" }}
      >
        {label}
      </motion.span>
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 ease-out group-hover:w-full" />
    </a>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <header className="sticky m-0 top-0 z-50 w-full poiret-one-regular">

      <div className="absolute inset-0 bg-[#111111]/90 backdrop-blur-md border-b border-amber-500/20" />

      <div className="mx-auto relative px-6 h-20 flex items-center justify-between text-amber-50">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="text-2xl font-bold tracking-widest uppercase drop-shadow-[0_0_2px_rgba(245,158,11,0.5)]"
          >
            Andria
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavItem key={link.name} href={link.href} label={link.name} />
          ))}
        </nav>

        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-amber-500 focus:outline-none z-50"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden relative bg-[#111111]/95 border-b border-amber-500/20 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <NavItem 
                  key={link.name} 
                  href={link.href} 
                  label={link.name} 
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}