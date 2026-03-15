import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#historia", label: "Nossa História" },
  { href: "#evento", label: "Evento" },
  { href: "#rsvp", label: "RSVP" },
  { href: "#presentes", label: "Presentes" },
  { href: "#galeria", label: "Galeria" },
  { href: "#mensagens", label: "Mensagens" },
];

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-md" : "py-5"
      }`}
      style={{
        background: scrolled ? "hsl(var(--background) / 0.9)" : "transparent",
        borderBottom: scrolled ? "1px solid hsl(var(--gold-light) / 0.2)" : "none",
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="wedding-container flex items-center justify-between">
        <a href="#" className="font-serif text-lg tracking-wide text-foreground">
          L <span className="text-gold">&</span> M
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-sans tracking-[0.15em] uppercase text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          className="md:hidden py-6 px-4"
          style={{ background: "hsl(var(--background) / 0.98)" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-sans tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors text-center"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavigationBar;
