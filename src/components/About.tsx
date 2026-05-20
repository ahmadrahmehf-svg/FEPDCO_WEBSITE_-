import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const baseUrl = import.meta.env.BASE_URL;

const highlights = [
  'Jordanian-American company associated with US Based "Gaffney-Kroese" corporation',
  'Various partnerships with Spanish companies of significant importance',
  'Over 12 years company experience in the energy sector',
  'Over 65 years of combined management team experience',
  'Registered with Jordan Engineers Union',
  'Registered with Ministry of Commerce and Industry',
];

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-green/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal/10 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={`${baseUrl}images/about-bg.jpg`}
                alt="Energy consulting team"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
            </div>
            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 glass rounded-xl p-6 max-w-[220px]"
            >
              <div className="text-3xl font-bold text-mint font-caveat">Since 2007</div>
              <p className="text-white/50 text-sm mt-1">Amman, Jordan</p>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-green text-sm font-semibold tracking-[0.2em] uppercase">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 leading-tight">
              Independent Energy
              <span className="gradient-text font-caveat text-5xl md:text-6xl block">Consulting Excellence</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Future Energy Projects Development Co. is an independent energy consulting, services and contracting
              company established in Amman-Jordan in 2007 to provide its services to international developers and
              EPCs in Jordan and the Middle East.
            </p>

            <div className="space-y-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={20} className="text-green mt-0.5 shrink-0" />
                  <span className="text-white/70">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
