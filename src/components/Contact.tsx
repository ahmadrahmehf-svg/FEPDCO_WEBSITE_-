import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative py-16 sm:py-20 md:py-28 bg-navy/40">
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-green/5 blur-[150px]" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-green text-sm font-semibold tracking-[0.2em] uppercase">Get in Touch</span>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Contact <span className="gradient-text font-caveat text-5xl md:text-6xl">Us</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/50 text-lg">
            Ready to discuss your energy project? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-green" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <address className="text-white/50 text-sm not-italic">
                    Amman, Jordan<br />P.O. Box 2801, 11941
                  </address>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-green" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <p className="text-white/50 text-sm">
                    <a href="tel:+96265350103" className="hover:text-mint transition-colors">+962-6-5350103</a>
                  </p>
                  <p className="text-white/50 text-sm">Fax: +962-6-5350107</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-green" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-white/50 text-sm">
                    <a href="mailto:info@future-jordan.com" className="hover:text-mint transition-colors break-all">info@future-jordan.com</a>
                  </p>
                  <p className="text-white/50 text-sm">
                    <a href="https://www.future-jordan.com" rel="noopener noreferrer" className="hover:text-mint transition-colors">www.future-jordan.com</a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-5 sm:p-8 space-y-5 sm:space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/60 text-sm mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-navy/60 border border-green/10 text-white placeholder:text-white/30 focus:border-green/40 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-navy/60 border border-green/10 text-white placeholder:text-white/30 focus:border-green/40 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-2">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-navy/60 border border-green/10 text-white placeholder:text-white/30 focus:border-green/40 focus:outline-none transition-colors"
                  placeholder="Company name"
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl bg-navy/60 border border-green/10 text-white/70 focus:border-green/40 focus:outline-none transition-colors">
                  <option value="">Select a topic</option>
                  <option value="consulting">Energy Consulting</option>
                  <option value="epc">EPC Services</option>
                  <option value="renewable">Renewable Energy Projects</option>
                  <option value="oilgas">Oil & Gas</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-navy/60 border border-green/10 text-white placeholder:text-white/30 focus:border-green/40 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-green to-mint text-navy-dark font-bold text-lg hover:shadow-2xl hover:shadow-green/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
