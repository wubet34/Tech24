import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ShieldAlert, Send } from "lucide-react";
import AnimatedCard from "../ui/AnimatedCard";
import { useSiteData } from "../../context/SiteDataContext";

const inputClass = `
  w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200
  bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text)]
  placeholder:text-[var(--text-muted)] focus:border-orange-500/50
`;

const Contact = () => {
  const { contact } = useSiteData();

  const infoCards = [
    { icon: MapPin, title: "Visit Us",      lines: [contact.address]                          },
    { icon: Phone,  title: "Call Us",       lines: [contact.phone],  note: "Emergency: 24/7"  },
    { icon: Mail,   title: "Email Us",      lines: [contact.email, contact.support]            },
    { icon: Clock,  title: "Working Hours", lines: [contact.hours, "Sat: 9:00 – 13:00"]       },
  ];

  return (
    <div style={{ color: "var(--text)" }}>

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-16 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(249,115,22,0.09) 0%, transparent 70%)" }} />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative">
          <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 mb-6">
            Contact Us
          </span>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 gradient-text">
            Get In Touch With Our Team
          </h1>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--text-muted)" }}>
            Reach out for service inquiries, maintenance contracts, or partnership opportunities.
          </p>
        </motion.div>
      </section>

      {/* Main grid */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Info cards */}
          <div className="space-y-5">
            {infoCards.map(({ icon: Icon, title, lines, note }, i) => (
              <AnimatedCard key={i} delay={i * 0.08} className="p-7 flex gap-5 items-start">
                <div className="shrink-0 h-12 w-12 inline-flex items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/20">
                  <Icon className="text-orange-500" size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1" style={{ color: "var(--text)" }}>{title}</h3>
                  {lines.map((l, j) => <p key={j} className="text-sm" style={{ color: "var(--text-muted)" }}>{l}</p>)}
                  {note && <p className="text-orange-500 text-xs font-semibold mt-1">{note}</p>}
                </div>
              </AnimatedCard>
            ))}

            {/* Emergency banner — shows admin-set emergency number */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }}
              className="rounded-3xl p-7 bg-gradient-to-r from-orange-500 to-orange-600 glow-orange"
            >
              <ShieldAlert className="mb-4 text-white" size={36} />
              <h3 className="text-xl font-bold text-white mb-2">24/7 Emergency Support</h3>
              <p className="text-white/80 text-sm mb-4">For urgent ATM breakdowns — we respond within 2 hours.</p>
              <p className="text-2xl font-black text-white">{contact.emergency}</p>
            </motion.div>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl p-9"
          >
            <h2 className="text-2xl font-bold mb-7" style={{ color: "var(--text)" }}>Send Us a Message</h2>
            <form className="space-y-5">
              <div>
                <label className="block mb-2 text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Your Name *</label>
                <input type="text" placeholder="Enter your name" className={inputClass} />
              </div>
              <div>
                <label className="block mb-2 text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Email *</label>
                <input type="email" placeholder="Enter your email" className={inputClass} />
              </div>
              <div>
                <label className="block mb-2 text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Phone</label>
                <input type="text" placeholder="Enter your phone" className={inputClass} />
              </div>
              <div>
                <label className="block mb-2 text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Subject</label>
                <select className={inputClass} style={{ background: "var(--bg-card)" }}>
                  <option>Select subject</option>
                  <option>ATM Installation</option>
                  <option>Maintenance</option>
                  <option>Emergency Support</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Message *</label>
                <textarea rows={5} placeholder="Tell us how we can help..." className={`${inputClass} resize-none`} />
              </div>
              <motion.button type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(249,115,22,0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3.5 text-sm font-semibold text-white"
              >
                <Send size={16} /> Send Message
              </motion.button>
            </form>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
