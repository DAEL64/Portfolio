import "../index.css";
import { motion } from "motion/react";

const NavItem = ({ href, label }) => {
  return (
    <a href={href} className="relative group px-2 py-1">
      <motion.span
        className="relative z-10 font-medium tracking-wide transition-colors duration-300 group-hover:text-amber-400"
        whileHover={{ textShadow: "0px 0px 8px rgba(245, 158, 11, 0.6)" }}
      >
        {label}
      </motion.span>
      
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 ease-out group-hover:w-full box-border shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
    </a>
  );
};

export default function Header() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full poiret-one-regular">
      <div className="absolute inset-0 bg-[#111111]/90 backdrop-blur-md border-b border-amber-500/20 shadow-lg shadow-amber-900/5" />
      
      <div className="w-full relative mx-auto px-6 h-20 flex items-center justify-between text-amber-50">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="cursor-default"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 rounded-sm backdrop-blur-sm transition-colors duration-300"
          >
            <p className="text-2xl font-bold tracking-widest uppercase drop-shadow-[0_0_2px_rgba(245,158,11,0.5)]">
              Andria
            </p>
          </motion.div>
        </motion.div>

        <nav className="flex items-center gap-2">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
             
            >
              <NavItem href={link.href} label={link.name} />
            </motion.div>
          ))}
        </nav>
      </div>
    </header>
  );
}