import { motion } from 'framer-motion';
import {
  Lightbulb,
  Settings,
  FileSearch,
  Wrench,
  BarChart3,
  Cpu,
  Building2,
  Plug,
} from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Energy Consulting',
    desc: 'Strategic energy consulting for power generation, renewable energy integration and project feasibility analysis.',
  },
  {
    icon: Settings,
    title: 'EPC Contracting',
    desc: 'Engineering, procurement and construction services for power plants and energy infrastructure projects.',
  },
  {
    icon: FileSearch,
    title: 'Technical Due Diligence',
    desc: 'Comprehensive technical assessments and due diligence for energy investments and project development.',
  },
  {
    icon: Wrench,
    title: 'O&M Services',
    desc: 'Operations and maintenance services for solar, wind and conventional power plants with proven track records.',
  },
  {
    icon: BarChart3,
    title: 'Market Assessment',
    desc: 'Renewable energy market assessment and feasibility studies for regional and international markets.',
  },
  {
    icon: Cpu,
    title: 'System Integration',
    desc: 'Power generation system integration including SCADA, switchgear, inverters and grid connection systems.',
  },
  {
    icon: Building2,
    title: 'Project Development',
    desc: 'Full project development services from land selection to grid connection, financial modeling and bid preparation.',
  },
  {
    icon: Plug,
    title: 'Grid Connection',
    desc: 'Electrical design, balance of plant, substations and grid interconnection engineering for power projects.',
  },
];

const businessModel = [
  {
    title: 'Consulting',
    desc: 'Technical consulting services for international developers and EPCs bidding for energy projects.',
    items: ['Feasibility Studies', 'Technical Advisory', 'Market Assessment', 'Due Diligence'],
  },
  {
    title: 'EPC',
    desc: 'Engineering, Procurement and Construction for power generation and energy infrastructure.',
    items: ['Design & Engineering', 'Procurement', 'Construction', 'Commissioning'],
  },
  {
    title: 'Project Development',
    desc: 'End-to-end project development from concept to financial close and construction.',
    items: ['Site Selection', 'Permitting', 'Financial Modeling', 'Bid Strategy'],
  },
  {
    title: 'System Integration',
    desc: 'Integration of power generation systems with grid infrastructure and control systems.',
    items: ['SCADA Systems', 'Substations', 'Grid Connection', 'BOP Design'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal/5 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-green text-sm font-semibold tracking-[0.2em] uppercase">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Electrical Power <span className="gradient-text font-caveat text-5xl md:text-6xl">Energy Services</span>
          </h2>
          <p className="max-w-3xl mx-auto text-white/50 text-lg">
            We focus on providing solutions in energy efficiency and emission level control for generation operations
            by the implementation of the latest technology available for power plants.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass-teal rounded-2xl p-6 group hover:border-green/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-green/10 flex items-center justify-center mb-4 group-hover:bg-green/20 transition-colors">
                <s.icon size={22} className="text-green" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Business Model */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-green text-sm font-semibold tracking-[0.2em] uppercase">How We Work</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Business <span className="gradient-text font-caveat text-4xl md:text-5xl">Model</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessModel.map((bm, i) => (
            <motion.div
              key={bm.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative glass rounded-2xl p-6 group overflow-hidden hover:border-green/30 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green to-mint opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-5xl font-bold text-green/10 font-caveat mb-2">0{i + 1}</div>
              <h3 className="text-xl font-bold text-white mb-3">{bm.title}</h3>
              <p className="text-white/50 text-sm mb-4">{bm.desc}</p>
              <ul className="space-y-2">
                {bm.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-green/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
