import { motion } from "framer-motion";

const SectionHeading = ({ eyebrow, title, subtitle, center = true, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className={`${center ? "text-center" : ""} ${className}`}
  >
    {eyebrow && (
      <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 mb-3">
        {eyebrow}
      </span>
    )}
    {title && (
      <h2 className="mt-2 text-3xl font-bold leading-tight md:text-5xl gradient-text">
        {title}
      </h2>
    )}
    {subtitle && (
      <p className="mt-4 max-w-2xl text-base md:text-lg mx-auto" style={{ color: "var(--text-muted)" }}>
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
