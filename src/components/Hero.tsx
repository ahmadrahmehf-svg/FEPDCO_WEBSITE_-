import { motion } from 'framer-motion';
import { ArrowDown, Zap } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';

const baseUrl = import.meta.env.BASE_URL;

export default function Hero() {
  return (
    <section id="home" aria-label="Home" className="relative min-h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={`${baseUrl}images/hero-bg.jpg`}
          alt="Large-scale solar photovoltaic power plant in the desert — renewable energy infrastructure"
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy-dark/70 to-navy-dark" />
      </div>

      {/* Particle Canvas */}
      <ParticleCanvas />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(170,255,199,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(170,255,199,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto section-container text-center pb-24 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Zap size={14} className="text-mint" />
          <span className="text-sm text-mint/90 tracking-wider uppercase">Since 2007 • Amman, Jordan</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-4 sm:mb-6 break-words"
        >
          <span className="text-white">FUTURE</span>
          <br />
          <span className="gradient-text font-caveat text-5xl sm:text-6xl md:text-8xl lg:text-9xl">Energy</span>
          <br />
          <span className="text-white/90 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">PROJECTS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/60 leading-relaxed mb-8 sm:mb-10 px-1"
        >
          Independent energy consulting, services & contracting company providing
          world-class solutions to international developers and EPCs across Jordan & the Middle East.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto max-w-sm sm:max-w-none mx-auto"
        >
          <a
            href="#services"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-green to-mint text-navy-dark font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-green/30 transition-all duration-300 hover:scale-105 text-center"
          >
            Our Services
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-green/30 text-white hover:bg-green/10 hover:border-green/50 font-medium transition-all duration-300 text-center"
          >
            View Projects
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden sm:block absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-green/50"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
