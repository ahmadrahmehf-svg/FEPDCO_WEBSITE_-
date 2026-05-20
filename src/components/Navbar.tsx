import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL;

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Principles', href: '#principles' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-dark/90 backdrop-blur-xl shadow-lg shadow-navy-dark/50'
          : 'bg-transparent'
      }`}
    >
     <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between bg-slate-900"> {/* Added dark background for testing */}
  <a href="#home" className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full overflow-hidden bg-transparent flex items-center justify-center">
      <img
        src={`${baseUrl}images/FEPDCO-logo.png`}
        alt="Future Energy logo"
        className="h-full w-full object-contain"
      />
    </div>
    {/* Removed 'hidden md:block' so it shows on all screens */}
    <div className="block">
      <span className="text-base font-bold text-white tracking-wide block">FUTURE ENERGY</span>
      {/* Changed to standard green-400 with 80% opacity */}
      <span className="block text-[10px] tracking-[0.2em] text-green-400/80 uppercase">Projects Development Co.</span>
    </div>
  </a>
</div>
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 hover:text-mint transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-green to-mint text-navy-dark text-sm font-semibold hover:shadow-lg hover:shadow-green/30 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-dark/95 backdrop-blur-xl border-t border-green/10"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/80 hover:text-mint transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-3 rounded-full bg-gradient-to-r from-green to-mint text-navy-dark font-semibold text-center"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
