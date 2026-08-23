import { motion } from "framer-motion";
import { Briefcase, Clock, Users, Sparkles, ArrowRight } from "lucide-react";

const FEATURES = [
  { icon: Users,     title: "Team Growth",       desc: "Expand your skills alongside industry experts." },
  { icon: Sparkles,  title: "Opportunities",     desc: "New roles in ATM engineering opening soon." },
  { icon: Briefcase, title: "Professional Work", desc: "Work within Ethiopia's banking tech sector." },
];

const Careers = () => (
  <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 py-16" style={{ color: "var(--text)" }}>
    <div className="max-w-3xl w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card rounded-3xl p-12 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(249,115,22,0.09) 0%, transparent 70%)" }} />

        <div className="relative">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/20 mb-7"
          >
            <Briefcase className="text-orange-500" size={36} />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-black gradient-text mb-4">Join Our Team</h1>
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold text-orange-500 mb-6">
            <Clock size={13} /> Coming Soon
          </span>
          <p className="max-w-lg mx-auto text-base leading-relaxed mb-10" style={{ color: "var(--text-muted)" }}>
            We're building a professional recruitment system to connect talented engineers and technicians with career opportunities at Tech24.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-10 text-left">
            {FEATURES.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                className="rounded-2xl border p-5"
                style={{ borderColor: "var(--border)", background: "var(--bg-card)" }}
              >
                <div className="h-9 w-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-3">
                  <Icon className="text-orange-500" size={17} />
                </div>
                <p className="font-semibold text-sm mb-1" style={{ color: "var(--text)" }}>{title}</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
            <input type="email" placeholder="Your email for updates"
              className="flex-1 rounded-full px-5 py-3 text-sm outline-none transition"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text)" }}
            />
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(249,115,22,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-semibold text-white shrink-0"
            >
              Notify Me <ArrowRight size={14} />
            </motion.button>
          </div>
          <p className="mt-6 text-xs" style={{ color: "var(--text-muted)" }}>Stay tuned — we'll announce openings soon.</p>
        </div>
      </motion.div>
    </div>
  </div>
);

export default Careers;
