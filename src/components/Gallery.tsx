import { motion } from 'framer-motion';

const baseUrl = import.meta.env.BASE_URL;

const images = [
  {
    src: `${baseUrl}images/hero-bg.jpg`,
    title: 'Solar Farms',
    subtitle: 'PV Solar Power Plants',
  },
  {
    src: `${baseUrl}images/wind-farm.jpg`,
    title: 'Wind Energy',
    subtitle: 'Wind Power Development',
  },
  {
    src: `${baseUrl}images/oil-gas.jpg`,
    title: 'Oil & Gas',
    subtitle: 'Industrial Infrastructure',
  },
];

export default function Gallery() {
  return (
    <section aria-label="Energy project gallery" className="relative py-12 sm:py-16 md:py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={img.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden h-[220px] sm:h-[260px] md:h-[300px]"
            >
              <img
                src={img.src}
                alt={`${img.title} — ${img.subtitle} by FEPDCO`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">{img.title}</h3>
                <p className="text-green/70 text-sm">{img.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
