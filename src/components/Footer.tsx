import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-green/10 bg-navy-dark/80">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green to-mint flex items-center justify-center">
              <Zap size={20} className="text-navy-dark" />
            </div>
            <div>
              <span className="text-sm font-bold text-white tracking-wide">FUTURE ENERGY</span>
              <span className="block text-[10px] tracking-[0.2em] text-green/60 uppercase">Projects Development Co.</span>
            </div>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="text-sm text-white/40 hover:text-mint transition-colors">Home</a>
            <a href="#about" className="text-sm text-white/40 hover:text-mint transition-colors">About</a>
            <a href="#services" className="text-sm text-white/40 hover:text-mint transition-colors">Services</a>
            <a href="#projects" className="text-sm text-white/40 hover:text-mint transition-colors">Projects</a>
            <a href="#contact" className="text-sm text-white/40 hover:text-mint transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <div className="text-right">
            <p className="text-sm text-white/30">
              © {new Date().getFullYear()} Future Energy Projects Development Co.
            </p>
            <p className="text-xs text-white/20 mt-1">Amman, Jordan • Since 2007</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
