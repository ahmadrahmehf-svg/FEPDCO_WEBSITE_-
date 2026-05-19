import { motion } from 'framer-motion';

const partners = [
  { name: 'Shell', logo: '/images/business-partners/shell.jpg' },
  { name: 'OHL Group', logo: '/images/business-partners/ohl.png' },
  { name: 'SENER', logo: '/images/business-partners/sener.png' },
  { name: 'Ingeteam', logo: '/images/business-partners/ingeteam.jpg' },
  { name: 'Baker Hughes', logo: '/images/business-partners/baker.png' },
  { name: 'Gaffney-Kroese', logo: '/images/business-partners/gk.jpg' },
  { name: 'Sofcon', logo: '/images/business-partners/sofcon.png' },
  { name: 'Suris', logo: '/images/business-partners/suris.jpg' },
  { name: 'Alten Energías Renovables', logo: '/images/business-partners/alten.png' },
  { name: 'AEC', logo: '/images/business-partners/aec.png' },
  { name: 'Aqaba Development Corp', logo: '/images/business-partners/aqaba.png' },
  { name: 'GRS', logo: '/images/business-partners/grs.png' },
  { name: 'Building Energy', logo: '/images/business-partners/be.jpg' },
  { name: 'Energy D', logo: '/images/business-partners/energy.png' },
  { name: 'Waha Oil Company', logo: '/images/business-partners/w3.jpg' },
];

export default function Partners() {
  return (
    <section id="partners" className="relative py-28">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-green text-sm font-semibold tracking-[0.2em] uppercase">Trusted By</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Business <span className="gradient-text font-caveat text-5xl md:text-6xl">Partners</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/50 text-lg">
            Collaborating with world-class companies in energy, oil & gas, and renewable sectors across the globe.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="glass rounded-3xl p-6 flex items-center justify-center transition-all duration-300 min-h-[120px] group"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 w-auto object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Registered Bodies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-white/40 text-sm mb-4">Registered With</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-5 py-2.5 rounded-full glass text-white/60 text-sm">
              Jordan Engineers Union
            </span>
            <span className="px-5 py-2.5 rounded-full glass text-white/60 text-sm">
              Ministry of Commerce and Industry
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
