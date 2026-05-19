import { motion } from 'framer-motion';
import { ArrowDown, Zap } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Solar panels in desert"
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
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
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
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6"
        >
          <span className="text-white">FUTURE</span>
          <br />
          <span className="gradient-text font-caveat text-6xl md:text-8xl lg:text-9xl">Energy</span>
          <br />
          <span className="text-white/90 text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">PROJECTS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 leading-relaxed mb-10"
        >
          Independent energy consulting, services & contracting company providing
          world-class solutions to international developers and EPCs across Jordan & the Middle East.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#services"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-green to-mint text-navy-dark font-bold text-lg hover:shadow-2xl hover:shadow-green/30 transition-all duration-300 hover:scale-105"
          >
            Our Services
          </a>
          <a
            href="#projects"
            className="px-8 py-4 rounded-full border border-green/30 text-white hover:bg-green/10 hover:border-green/50 font-medium transition-all duration-300"
          >
            View Projects
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
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
