import { motion } from "framer-motion";
import { Building2, Users, Clock, ShieldCheck, Target, Eye, Gem, UserCircle2, Cpu, Wrench, Headphones } from "lucide-react";
import AnimatedCard from "../ui/AnimatedCard";
import SectionHeading from "../ui/SectionHeading";
import { useSiteData } from "../../context/SiteDataContext";

const TEAM_ICONS = { UserCircle2, Cpu, Wrench, Headphones };

const MVV = [
  { icon: Target, title: "Our Mission", text: "To provide reliable, fast, and professional ATM services that keep Ethiopia's financial infrastructure running without interruption." },
  { icon: Eye,    title: "Our Vision",  text: "To become the leading ATM service provider in East Africa, trusted by every bank and financial institution across the continent." },
  { icon: Gem,    title: "Our Values",  text: "Integrity, Excellence, Customer First, Innovation, and Teamwork — the pillars that drive everything we do." },
];

const STORY_STATS = [
  { icon: Building2,   value: "6+",    label: "Banks" },
  { icon: Users,       value: "50+",   label: "Technicians" },
  { icon: Clock,       value: "24/7",  label: "Support" },
  { icon: ShieldCheck, value: "99.9%", label: "Uptime" },
];

const About = () => {
  const { team } = useSiteData();

  return (
    <div style={{ color: "var(--text)" }}>

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(249,115,22,0.09) 0%, transparent 70%)" }} />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative">
          <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 mb-6">
            About Tech24
          </span>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 gradient-text">
            Ethiopia's Leading ATM Service Provider
          </h1>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--text-muted)" }}>
            Trusted ATM installation, maintenance, and GRG Banking System support for banks across Ethiopia since 2021.
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 mb-5">
              Our Story
            </span>
            <h2 className="text-4xl font-black mb-6 gradient-text">Built to Keep Banks Running</h2>
            <p className="leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
              Tech24 was founded with a clear mission: give Ethiopian banks a reliable, professional partner for their entire ATM lifecycle — from installation to emergency repair.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Today we proudly serve 6+ major banks across Ethiopia, maintaining over 1,000 ATMs with a 99.9% uptime guarantee.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-5">
            {STORY_STATS.map(({ icon: Icon, value, label }, i) => (
              <AnimatedCard key={i} delay={i * 0.1} className="p-7 text-center">
                <Icon className="mx-auto mb-4 text-orange-500" size={36} />
                <div className="text-3xl font-black text-orange-500 mb-1">{value}</div>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>{label}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeading eyebrow="Who We Are" title="Purpose That Drives Us" className="mb-14" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MVV.map(({ icon: Icon, title, text }, i) => (
            <AnimatedCard key={i} delay={i * 0.1} hover3d className="p-9 text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/20 mb-6">
                <Icon className="text-orange-500" size={30} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text)" }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{text}</p>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Team — reads live from context, admin changes reflect here instantly */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeading
          eyebrow="Leadership"
          title="The Team Behind Tech24"
          subtitle="Meet the experts driving Ethiopia's ATM service revolution."
          className="mb-14"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map(({ id, name, role, bio, icon }, i) => {
            const Icon = TEAM_ICONS[icon] || UserCircle2;
            return (
              <AnimatedCard key={id ?? i} delay={i * 0.1} hover3d className="p-8 text-center group">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/20 mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-orange-500" size={36} />
                </div>
                <h3 className="text-lg font-bold mb-1" style={{ color: "var(--text)" }}>{name}</h3>
                <p className="text-orange-500 text-xs font-semibold mb-3">{role}</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{bio}</p>
              </AnimatedCard>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default About;
