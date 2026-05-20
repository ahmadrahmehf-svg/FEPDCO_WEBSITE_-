import { motion } from 'framer-motion';
import { Shield, Star, Target, Smile } from 'lucide-react';

const principles = [
  {
    icon: Shield,
    title: 'Integrity',
    desc: 'We conduct our business with the highest level of honesty, transparency and ethical standards in everything we do.',
    color: 'from-green to-teal-light',
  },
  {
    icon: Star,
    title: 'Excellence',
    desc: 'We strive to deliver the highest quality services, continuously improving and exceeding industry standards.',
    color: 'from-mint to-green',
  },
  {
    icon: Target,
    title: 'Commitments',
    desc: 'We honor our commitments to clients, partners and stakeholders, delivering on every promise we make.',
    color: 'from-teal-light to-navy-light',
  },
  {
    icon: Smile,
    title: 'Enjoy Work',
    desc: 'We believe in creating a positive work environment where passion drives innovation and results.',
    color: 'from-green to-mint',
  },
];

export default function Principles() {
  return (
    <section id="principles" aria-labelledby="principles-heading" className="relative py-16 sm:py-20 md:py-28 bg-navy/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-green text-sm font-semibold tracking-[0.2em] uppercase">Our Values</span>
          <h2 id="principles-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Guiding <span className="gradient-text font-caveat text-5xl md:text-6xl">Principles</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group glass-teal rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:border-green/30"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <p.icon size={24} className="text-navy-dark" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
              <p className="text-white/50 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
