import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, TrendingDown, Zap, DollarSign, ShieldCheck, ArrowRight } from "lucide-react";
import AnimatedCard from "../ui/AnimatedCard";
import SectionHeading from "../ui/SectionHeading";
import GlowButton from "../ui/GlowButton";
import GetQuoteModal from "./GetQuoteModal";
import { useSiteData } from "../../context/SiteDataContext";
import { BENEFITS } from "../../constants";

const BENEFIT_ICONS = { TrendingDown, Zap, DollarSign, ShieldCheck };

const Banks = () => {
  const [openQuote, setOpenQuote] = useState(false);
  const { banks } = useSiteData();
  const active = banks.filter(b => b.status === "active");

  return (
    <div style={{ color: "var(--text)" }}>

      <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(249,115,22,0.09) 0%, transparent 70%)" }} />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative">
          <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 mb-6">
            For Banks
          </span>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 gradient-text">
            Partner with Ethiopia's #1 ATM Network
          </h1>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--text-muted)" }}>
            Reliable installation, maintenance and support trusted by {active.length}+ leading Ethiopian banks.
          </p>
        </motion.div>
      </section>

      {/* Partner Banks */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <SectionHeading
          eyebrow="Our Partners"
          title="Trusted by Leading Banks"
          subtitle="We maintain ATM fleets for major financial institutions across Ethiopia."
          className="mb-14"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {active.map((bank, i) => (
            <motion.div key={bank.id}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.25 } }}
              className="glass-card rounded-3xl p-8 text-center group"
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/20 mb-5 group-hover:bg-orange-500/20 transition-colors duration-300">
                <Building2 className="text-orange-500" size={30} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>{bank.name}</h3>
              <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>Partnership: {bank.years}</p>
              {bank.atms > 0 && (
                <p className="text-xs text-orange-500 font-semibold mb-3">{bank.atms} ATMs managed</p>
              )}
              <div className="flex items-center justify-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-500 text-xs font-medium">Active Partner</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <SectionHeading eyebrow="Why Partner With Us" title="Real Results for Your Bank" className="mb-14" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BENEFITS.map(({ title, description, icon }, i) => {
            const Icon = BENEFIT_ICONS[icon];
            return (
              <AnimatedCard key={i} delay={i * 0.1} hover3d className="p-8 flex gap-6 items-start">
                <div className="shrink-0 h-14 w-14 inline-flex items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/20">
                  {Icon && <Icon className="text-orange-500" size={26} />}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{description}</p>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl p-12 text-center glass-card"
        >
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <h2 className="text-4xl font-black mb-4 gradient-text">Ready to Get Started?</h2>
            <p className="max-w-xl mx-auto mb-8 text-sm" style={{ color: "var(--text-muted)" }}>
              Contact us for a free consultation. Let Tech24 keep your ATM network running at peak performance.
            </p>
            <GlowButton onClick={() => setOpenQuote(true)} variant="primary" className="text-base px-10 py-4">
              Request a Quote <ArrowRight size={16} />
            </GlowButton>
          </div>
        </motion.div>
      </section>

      <GetQuoteModal open={openQuote} setOpen={setOpenQuote} />
    </div>
  );
};

export default Banks;
