import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Zap } from 'lucide-react';

type Category = 'all' | 'renewable' | 'oilgas' | 'conventional';

interface Project {
  title: string;
  location: string;
  category: 'renewable' | 'oilgas' | 'conventional';
  description: string;
  capacity?: string;
}

const projects: Project[] = [
  // Renewable Energy Projects
  {
    title: 'Sheik Zayed Solar Complex',
    location: 'Jordan',
    category: 'renewable',
    description: '103MW PV Solar Plant — Providing assistance with Electrical Design and connection to the Grid and BOS scope. Operation and maintenance including PV solar panels, Inverters, BOP, 33KV cables, Switchgear, SCADA.',
    capacity: '103 MW',
  },
  {
    title: 'AL Arabia Project',
    location: 'Jordan',
    category: 'renewable',
    description: '10MW — Technical consulting for Ingenia and making the testing commissioning for the plant in LV side. Part of Ministry of Energy Round 1.',
    capacity: '10 MW',
  },
  {
    title: 'Ministry of Energy Round 2',
    location: 'Jordan',
    category: 'renewable',
    description: 'Renewable Energy project (4×50MW) — Provide assistance with Electrical Design and connection to the Grid and BOS scope to developers bidding for wind and PV Solar projects.',
    capacity: '4×50 MW',
  },
  {
    title: 'Wind Power Plant (Round 3)',
    location: 'Jordan',
    category: 'renewable',
    description: 'Consultancy services for international developer. Provide technical consulting covering wind power plant BOP design, grid connection and O&M services.',
  },
  {
    title: 'Al-Rajef Wind Plant',
    location: 'Jordan',
    category: 'renewable',
    description: 'Assistance in Electrical and Balance of Plant (BOP) including 132KV S/S and Grid connection for this 82MW wind energy project.',
    capacity: '82 MW',
  },
  {
    title: 'Aqaba Development Corp PV Solar',
    location: 'Aqaba, Jordan',
    category: 'renewable',
    description: 'First government PV Solar project in Jordan. Scope included design, supply, install, civil works, test & commissioning and 2 years O&M. Executed entirely by Future Co. (2013)',
  },
  {
    title: 'Askar 100MW PV Solar',
    location: 'Bahrain',
    category: 'renewable',
    description: 'Technical consulting for international bidders for this 100 MW PV Solar farm that will be built on top of Askar Landfill. (2018)',
    capacity: '100 MW',
  },
  {
    title: 'Risha 50MW PV Solar',
    location: 'Jordan',
    category: 'renewable',
    description: 'Provide technical assistance for the electromechanical and BOS scope of work for the local subcontractor (Alown). Scope includes 132KV S/S and PV Solar farm.',
    capacity: '50 MW',
  },
  {
    title: 'SKAKA 300MW PV Solar',
    location: 'KSA',
    category: 'renewable',
    description: 'Provide technical assistance for the electromechanical and BOS scope of work for the local Saudi subcontractor (Taqqat Co). (2018)',
    capacity: '300 MW',
  },
  {
    title: 'Tatweer / Ministry of Education PV Solar',
    location: 'KSA',
    category: 'renewable',
    description: 'Provide technical consulting services for the Saudi public schools PV solar system and energy efficiency to POWERCO Co.',
  },
  {
    title: 'Saudi Aramco Hybrid Power Generation',
    location: 'KSA',
    category: 'renewable',
    description: 'Provide technical support and design services for Aramco hybrid power plant (Diesel generators + PV Solar system) to Al-Tamimi Co.',
  },
  {
    title: 'Alkifah Paper Co. Hybrid System',
    location: 'KSA',
    category: 'renewable',
    description: 'Provide technical support and design services for hybrid power plant (Diesel generators + PV Solar system) to Al-Kifah Group.',
  },
  {
    title: 'Mali 100MW Hybrid Power Plant',
    location: 'Mali',
    category: 'renewable',
    description: 'Technical feasibility, preliminary engineering, financial modeling and project development services for 50MW PV Solar + 50MW HFO hybrid plant. Client: AON Group.',
    capacity: '100 MW',
  },
  {
    title: 'Baynounah 200MW PV Solar',
    location: 'UAE',
    category: 'renewable',
    description: 'Provide installation and commissioning assistance for the solar inverters for this major 200MW PV Solar Power Plant.',
    capacity: '200 MW',
  },
  {
    title: 'Saudi Arabia RE Market Assessment',
    location: 'KSA',
    category: 'renewable',
    description: 'Provide Renewable Energy market assessment for El Seif Engineering Contracting Company (Saudi Arabia).',
  },
  // Oil & Gas Projects
  {
    title: 'OHL $174M ASTTP',
    location: 'Jordan',
    category: 'oilgas',
    description: 'Major oil and gas infrastructure project with OHL Group valued at $174M for the Aqaba Special Terminal Transport Project.',
  },
  {
    title: 'Aqaba Oil Terminal',
    location: 'Aqaba, Jordan',
    category: 'oilgas',
    description: 'Technical consulting and engineering services for the Aqaba Oil Terminal facility including storage capacity and pipeline infrastructure.',
  },
  {
    title: 'Baker Hughes Project',
    location: 'Jordan',
    category: 'oilgas',
    description: 'Partnership project with Baker Hughes providing technical consulting and engineering support for oil & gas operations.',
  },
  {
    title: 'JOPETROL',
    location: 'Jordan',
    category: 'oilgas',
    description: 'Technical services and consulting for JOPETROL petroleum operations and infrastructure development.',
  },
  // Conventional Power Projects
  {
    title: 'Shell Jordan Oil Shale',
    location: 'Jordan',
    category: 'conventional',
    description: 'Technical consulting for Shell/JOSCO oil shale exploration and development project, supporting the In-Situ Conversion Process (ICP) technology evaluation.',
  },
  {
    title: 'WAHA Libya Gialo Field',
    location: 'Libya',
    category: 'conventional',
    description: 'Conventional power generation consulting services for WAHA Oil Company at the Gialo field operations in the Sirte Basin.',
  },
  {
    title: 'Water Authority Power Project',
    location: 'Jordan',
    category: 'conventional',
    description: 'Power generation and electrical infrastructure development project for the Jordan Water Authority.',
  },
  {
    title: 'AON Mali Power Plant',
    location: 'Mali',
    category: 'conventional',
    description: 'Conventional power plant development and engineering services for AON Group operations in Mali.',
  },
];

const tabs: { key: Category; label: string }[] = [
  { key: 'all', label: 'All Projects' },
  { key: 'renewable', label: 'Renewable Energy' },
  { key: 'oilgas', label: 'Oil & Gas' },
  { key: 'conventional', label: 'Conventional Power' },
];

const categoryColors: Record<string, string> = {
  renewable: 'bg-green/20 text-green',
  oilgas: 'bg-orange-500/20 text-orange-400',
  conventional: 'bg-blue-400/20 text-blue-400',
};

export default function Projects() {
  const [active, setActive] = useState<Category>('all');

  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative py-16 sm:py-20 md:py-28 bg-navy/40">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-green text-sm font-semibold tracking-[0.2em] uppercase">Our Portfolio</span>
          <h2 id="projects-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Featured <span className="gradient-text font-caveat text-5xl md:text-6xl">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/50 text-lg">
            Over 23 major projects across renewable energy, oil & gas, and conventional power sectors
            throughout Jordan, the Middle East, and Africa.
          </p>
        </motion.div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 overflow-x-auto scrollbar-hide pb-2 -mx-1 px-1"
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={active === tab.key}
              onClick={() => setActive(tab.key)}
              className={`shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                active === tab.key
                  ? 'bg-gradient-to-r from-green to-mint text-navy-dark'
                  : 'glass text-white/60 hover:text-white hover:border-green/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-teal rounded-2xl p-6 group hover:border-green/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[project.category]}`}>
                    {project.category === 'renewable' ? 'Renewable' : project.category === 'oilgas' ? 'Oil & Gas' : 'Conventional'}
                  </span>
                  {project.capacity && (
                    <span className="flex items-center gap-1 text-mint text-sm font-semibold">
                      <Zap size={14} />
                      {project.capacity}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-mint transition-colors">{project.title}</h3>
                <div className="flex items-center gap-1.5 text-green/60 text-sm mb-3">
                  <MapPin size={14} />
                  {project.location}
                </div>
                <p className="text-white/40 text-sm leading-relaxed">{project.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
