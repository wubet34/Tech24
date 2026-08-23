import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Wrench, Clock, ShieldCheck, Users, Globe, Cpu, ArrowRight, ChevronDown } from "lucide-react";
import AnimatedCard from "../ui/AnimatedCard";
import SectionHeading from "../ui/SectionHeading";
import GlowButton from "../ui/GlowButton";
import GetQuoteModal from "./GetQuoteModal";
import { useTheme } from "../../context/ThemeContext";
import { STATS } from "../../constants";

const SERVICES_PREVIEW = [
  { icon: Wrench,      title: "ATM Installation",    desc: "Professional installation of new ATMs with GRG Banking Systems." },
  { icon: Clock,       title: "24/7 Emergency",      desc: "Round-the-clock emergency repair and maintenance services." },
  { icon: ShieldCheck, title: "Genuine Parts",       desc: "Original spare parts and components for all ATM models." },
  { icon: Users,       title: "Expert Team",         desc: "Certified and experienced GRG system technicians." },
  { icon: Globe,       title: "Nationwide",          desc: "Services available across all regions of Ethiopia." },
  { icon: Cpu,         title: "GRG Banking Support", desc: "Expert support including software updates and troubleshooting." },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 35 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
});

const Home = () => {
  const [openQuote, setOpenQuote] = useState(false);
  const { dark } = useTheme();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY  = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroOp = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <div className="min-h-screen" style={{ color: "var(--text)" }}>

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Animated CSS blobs — no Three.js */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full blur-[120px] ${dark ? "bg-orange-500/10" : "bg-orange-200/60"}`}
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, -25, 0], y: [0, 25, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className={`absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-[120px] ${dark ? "bg-slate-700/30" : "bg-orange-100/80"}`}
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1], x: [0, 15, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[100px] ${dark ? "bg-orange-600/6" : "bg-orange-100/50"}`}
          />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 -z-10 bg-grid opacity-60" />

        <motion.div style={{ y: heroY, opacity: heroOp }}
          className="relative max-w-6xl mx-auto px-6 text-center pt-28 pb-20"
        >
          {/* Live badge */}
          <motion.div {...fadeUp(0.1)}>
            <span className={`inline-flex items-center gap-2.5 rounded-full px-5 py-2 mb-8 text-xs font-semibold uppercase tracking-[0.2em]
              ${dark ? "border border-orange-500/30 bg-orange-500/10 text-orange-400"
                     : "border border-orange-200   bg-orange-50        text-orange-600"}`}>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
              </span>
              Welcome To Tech24
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 {...fadeUp(0.2)}
            className="max-w-5xl mx-auto text-5xl md:text-7xl font-bold leading-tight gradient-text"
          >
            Professional ATM Installation & Maintenance Services
          </motion.h1>

          {/* Sub */}
          <motion.p {...fadeUp(0.35)}
            className="max-w-2xl mx-auto mt-7 text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Trusted by{" "}
            <span className="text-orange-500 font-semibold">6+ banks</span> across Ethiopia.
            Expert GRG Banking System support with{" "}
            <span className="text-orange-500 font-semibold">24/7 emergency response</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.45)} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <GlowButton onClick={() => setOpenQuote(true)} variant="primary" className="text-base px-9 py-4">
              Request Services <ArrowRight size={16} />
            </GlowButton>
            <GlowButton variant="outline" className="text-base px-9 py-4">
              Join Our Team
            </GlowButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {STATS.map(({ value, label }, i) => (
              <motion.div key={i}
                whileHover={{ y: -5, scale: 1.04, transition: { duration: 0.25 } }}
                className="glass-card rounded-3xl p-6 text-center"
              >
                <h2 className="text-3xl font-bold text-orange-500 mb-1">{value}</h2>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          style={{ color: "var(--text-muted)" }}
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <ChevronDown size={18} />
        </motion.div>
      </section>

      {/* ══ SERVICES ══════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        {/* Divider glow */}
        <div className={`w-full h-px mb-20 ${dark ? "bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" : "bg-gradient-to-r from-transparent via-orange-300/50 to-transparent"}`} />

        <SectionHeading
          eyebrow="What We Do"
          title="Our Services"
          subtitle="Comprehensive ATM solutions tailored to your bank's needs."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {SERVICES_PREVIEW.map(({ icon: Icon, title, desc }, i) => (
            <AnimatedCard key={i} delay={i * 0.08} hover3d className="p-8 group cursor-default">
              <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300
                ${dark ? "bg-orange-500/10 border border-orange-500/20 group-hover:bg-orange-500/20"
                       : "bg-orange-50 border border-orange-100 group-hover:bg-orange-100"}`}>
                <Icon className="text-orange-500" size={26} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text)" }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
              <div className="mt-5 flex items-center gap-1 text-orange-500 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more <ArrowRight size={12} />
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* ══ CTA BAND ══════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl p-12 text-center"
          style={{
            background: dark
              ? "linear-gradient(135deg,rgba(249,115,22,0.12) 0%,rgba(2,6,23,0.7) 50%,rgba(249,115,22,0.08) 100%)"
              : "linear-gradient(135deg,rgba(249,115,22,0.08) 0%,rgba(248,250,252,0.9) 50%,rgba(249,115,22,0.06) 100%)",
            border: dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(249,115,22,0.15)",
          }}
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-orange-500/8 blur-3xl pointer-events-none" />
          <div className="relative">
            <span className={`inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 mb-5
              ${dark ? "border border-orange-500/30 bg-orange-500/10" : "border border-orange-200 bg-orange-50"}`}>
              Ready to partner?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-5">
              Ready To Partner With Us?
            </h2>
            <p className="max-w-2xl mx-auto text-lg mb-8" style={{ color: "var(--text-muted)" }}>
              Join the leading banks in Ethiopia that trust Tech24 for ATM installation and maintenance services.
            </p>
            <GlowButton onClick={() => setOpenQuote(true)} variant="primary" className="text-base px-10 py-4 animate-pulse-glow">
              Get Quote <ArrowRight size={16} />
            </GlowButton>
          </div>
        </motion.div>
      </section>

      <GetQuoteModal open={openQuote} setOpen={setOpenQuote} />
    </div>
  );
};

export default Home;
