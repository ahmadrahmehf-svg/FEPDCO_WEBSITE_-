import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Globe, Award } from 'lucide-react';

const stats = [
  { icon: Calendar, value: 18, suffix: '+', label: 'Years Experience', prefix: '' },
  { icon: Users, value: 65, suffix: '+', label: 'Years Combined Management', prefix: '' },
  { icon: Globe, value: 23, suffix: '+', label: 'Projects Completed', prefix: '' },
  { icon: Award, value: 16, suffix: '+', label: 'Business Partners', prefix: '' },
];

function Counter({ target, suffix, prefix }: { target: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-3xl sm:text-4xl md:text-5xl font-bold text-mint">
      {prefix}{count}{suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-teal-dark/50" aria-label="Company statistics">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-green/10 mb-4">
                <stat.icon size={24} className="text-green" />
              </div>
              <Counter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              <p className="mt-2 text-white/50 text-xs sm:text-sm leading-snug px-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
