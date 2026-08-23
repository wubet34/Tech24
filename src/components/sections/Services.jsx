import { motion } from "framer-motion";
import { Wrench, Settings, Clock, Package, Globe, Cpu, CheckCircle } from "lucide-react";
import AnimatedCard from "../ui/AnimatedCard";
import SectionHeading from "../ui/SectionHeading";

const ICON_MAP = { Wrench, Settings, Clock, Package, Globe, Cpu };

const SERVICES = [
  { icon: "Wrench",   title: "ATM Installation",       desc: "Complete professional installation with site prep, hardware setup, and full commissioning.", features: ["Site survey & preparation","Hardware installation","Software configuration","Testing & commissioning"] },
  { icon: "Settings", title: "Preventive Maintenance",  desc: "Scheduled programs to prevent breakdowns and extend your ATM lifecycle.",                   features: ["Monthly inspections","Cleaning & calibration","Parts replacement","Performance optimization"] },
  { icon: "Clock",    title: "Emergency Repair",        desc: "24/7 rapid-response for ATM breakdowns — we're on-site within 2 hours.",                    features: ["2-hour response time","On-site diagnosis","Rapid repair","Spare parts on-hand"] },
  { icon: "Package",  title: "Spare Parts Supply",      desc: "Genuine manufacturer parts for all ATM models, delivered anywhere in Ethiopia.",             features: ["Original OEM parts","Fast delivery","Inventory management","Warranty included"] },
  { icon: "Globe",    title: "Remote Support",          desc: "Instant remote diagnostics and software troubleshooting to minimise downtime.",              features: ["24/7 helpdesk","Remote diagnostics","Software fixes","Technical consultation"] },
  { icon: "Cpu",      title: "GRG Banking Support",     desc: "Certified expertise for GRG Banking Systems — the leading ATM platform in Africa.",          features: ["GRG certified engineers","Firmware updates","System integration","Technical training"] },
];

const WHY = [
  { title: "Certified Experts",  desc: "GRG-certified technicians with years of hands-on experience." },
  { title: "2-Hour Response",    desc: "Emergency response guarantee across all covered regions." },
  { title: "Genuine Parts",      desc: "100% original spare parts backed by manufacturer warranty." },
];

const Services = () => (
  <div style={{ color: "var(--text)" }}>

    <section className="relative max-w-7xl mx-auto px-6 pt-36 pb-20 text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(249,115,22,0.09) 0%, transparent 70%)" }} />
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative">
        <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 mb-6">
          Our Services
        </span>
        <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 gradient-text">
          Complete ATM Solutions Built for Banks
        </h1>
        <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--text-muted)" }}>
          From first installation to 24/7 emergency support — every service your ATM fleet needs, under one roof.
        </p>
      </motion.div>
    </section>

    <section className="max-w-7xl mx-auto px-6 pb-28">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {SERVICES.map(({ icon, title, desc, features }, i) => {
          const Icon = ICON_MAP[icon];
          return (
            <motion.div key={i}
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass-card rounded-3xl p-8 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/20">
                  <Icon className="text-orange-500" size={26} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text)" }}>{title}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>{desc}</p>
                <ul className="space-y-2.5">
                  {features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-muted)" }}>
                      <CheckCircle className="text-orange-500 shrink-0" size={15} />{f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 pb-32">
      <SectionHeading eyebrow="Why Tech24" title="Excellence in Every Call" className="mb-14" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {WHY.map(({ title, desc }, i) => (
          <AnimatedCard key={i} delay={i * 0.1} hover3d className="p-8 text-center">
            <div className="text-5xl font-black text-orange-500/20 mb-3">0{i + 1}</div>
            <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text)" }}>{title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
          </AnimatedCard>
        ))}
      </div>
    </section>

  </div>
);

export default Services;
