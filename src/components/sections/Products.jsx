import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download, ChevronDown, ChevronUp,
  ExternalLink, Cpu, CheckCircle, Phone,
} from "lucide-react";
import { GRG_PRODUCTS } from "../../constants";
import ContactModal from "./ContactModal";
import { useTheme } from "../../context/ThemeContext";

// ── Single ATM product card ────────────────────────────────────────────
const ProductCard = ({ product, index }) => {
  const { dark } = useTheme();
  const [expanded, setExpanded]       = useState(false);
  const [openContact, setOpenContact] = useState(false);

  const borderColor  = dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.07)";
  const labelColor   = dark ? "rgba(248,250,252,0.30)" : "rgba(15,23,42,0.40)";
  const featureColor = dark ? "rgba(248,250,252,0.60)" : "rgba(15,23,42,0.65)";
  const specLabel    = dark ? "rgba(248,250,252,0.35)" : "rgba(15,23,42,0.40)";
  const specValue    = dark ? "rgba(248,250,252,0.70)" : "rgba(15,23,42,0.75)";
  const descColor    = dark ? "rgba(248,250,252,0.55)" : "rgba(15,23,42,0.60)";
  const specsBtn     = dark ? "rgba(248,250,252,0.50)" : "rgba(15,23,42,0.50)";
  const dlBtnCls     = dark
    ? "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-orange-500/30"
    : "bg-black/4 border-black/10 text-black/70 hover:bg-black/8 hover:border-orange-500/40";

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card rounded-3xl overflow-hidden"
      >
        {/* ── Card header — colored gradient, always dark text on it ── */}
        <div className={`relative p-8 bg-gradient-to-br ${product.color}`}
          style={{ background: undefined }}
        >
          {/* In light mode the gradient is subtle, so add a solid base tint */}
          <div className={`absolute inset-0 bg-gradient-to-br ${product.color}`} />
          <div
            className="absolute inset-0"
            style={{
              background: dark
                ? "rgba(2,6,23,0.45)"
                : "rgba(15,23,42,0.06)",
            }}
          />
          <span className={`absolute top-5 right-5 text-xs font-bold px-3 py-1 rounded-full border z-10 ${product.badgeColor}`}>
            {product.badge}
          </span>

          <div className="relative z-10">
            <div className="h-16 w-16 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center mb-5">
              <Cpu className="text-orange-400" size={32} />
            </div>

            <p className="text-xs uppercase tracking-widest font-semibold mb-1"
              style={{ color: dark ? "rgba(248,250,252,0.50)" : "rgba(15,23,42,0.55)" }}>
              {product.type}
            </p>
            <h3 className="text-2xl font-black" style={{ color: dark ? "#f8fafc" : "#0f172a" }}>
              {product.name}
            </h3>
            <p className="text-sm font-semibold mt-0.5 text-orange-500">{product.category}</p>
            <p className="text-sm mt-3 leading-relaxed"
              style={{ color: dark ? "rgba(248,250,252,0.60)" : "rgba(15,23,42,0.65)" }}>
              {product.tagline}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="px-8 py-6" style={{ borderBottom: `1px solid ${borderColor}` }}>
          <p className="text-sm leading-relaxed" style={{ color: descColor }}>{product.description}</p>
        </div>

        {/* Key features */}
        <div className="px-8 py-5" style={{ borderBottom: `1px solid ${borderColor}` }}>
          <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: labelColor }}>
            Key Features
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.features.map((f, i) => (
              <div key={i} className="flex items-start gap-2 text-sm" style={{ color: featureColor }}>
                <CheckCircle className="text-orange-500 shrink-0 mt-0.5" size={14} />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expandable specs */}
        <div className="px-8 py-4" style={{ borderBottom: `1px solid ${borderColor}` }}>
          <button
            onClick={() => setExpanded(p => !p)}
            className="w-full flex items-center justify-between text-sm font-semibold transition-colors"
            style={{ color: specsBtn }}
          >
            <span>Technical Specifications</span>
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 space-y-0">
                  {product.specs.map(({ label, value }, i) => (
                    <div
                      key={i}
                      className="flex items-start justify-between gap-4 text-sm py-2.5"
                      style={{ borderBottom: `1px solid ${borderColor}` }}
                    >
                      <span className="shrink-0" style={{ color: specLabel }}>{label}</span>
                      <span className="text-right" style={{ color: specValue }}>{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action buttons */}
        <div className="px-8 py-5 flex flex-col sm:flex-row gap-3">
          <motion.a
            href={product.manualUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`flex-1 flex items-center justify-center gap-2 rounded-xl border py-3 text-sm font-semibold transition-all duration-200 ${dlBtnCls}`}
          >
            <Download size={15} /> Download Brochure
          </motion.a>

          <motion.button
            onClick={() => setOpenContact(true)}
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(249,115,22,0.35)" }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-3 text-sm font-semibold text-white"
          >
            <Phone size={15} /> Inquire About This ATM
          </motion.button>
        </div>
      </motion.div>

      <ContactModal open={openContact} setOpen={setOpenContact} />
    </>
  );
};

// ── Products page ──────────────────────────────────────────────────────
const Products = () => {
  const { dark } = useTheme();

  const statBorder = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const statBg     = dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)";

  return (
    <div style={{ color: "var(--text)" }}>

      {/* ── Hero ── */}
      <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-16 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(249,115,22,0.09) 0%, transparent 70%)" }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} className="relative"
        >
          <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 mb-6">
            GRG Banking Systems
          </span>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 gradient-text">
            ATM Products We Support
          </h1>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--text-muted)" }}>
            Tech24 is an authorised service partner for GRG Banking Systems — one of the world's
            leading ATM manufacturers. We install, maintain, and support the full GRG product line
            across Ethiopia.
          </p>
          <a
            href="https://www.grgbanking.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-xs text-orange-400 hover:text-orange-300 transition"
          >
            <ExternalLink size={13} /> Manufactured by GRG Banking Equipment Co., Ltd.
          </a>
        </motion.div>
      </section>

      {/* ── Product grid ── */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {GRG_PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* ── GRG + Tech24 partnership band ── */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative glass-card rounded-3xl p-10 md:p-14 text-center overflow-hidden"
        >
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-orange-500/6 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 mb-5">
              Authorised Partner
            </span>
            <h2 className="text-3xl md:text-4xl font-black gradient-text mb-5">
              GRG Banking + Tech24
            </h2>
            <p className="max-w-2xl mx-auto text-base mb-10" style={{ color: "var(--text-muted)" }}>
              GRG Banking is one of the world's top 5 ATM manufacturers, serving 60+ countries.
              As an authorised Ethiopian service partner, Tech24 provides genuine spare parts,
              certified installation, and full lifecycle support for every GRG model.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { value: "60+",       label: "Countries Served"    },
                { value: "Top 5",     label: "Global ATM Maker"    },
                { value: "100%",      label: "Genuine GRG Parts"   },
                { value: "Certified", label: "GRG Field Engineers" },
              ].map(({ value, label }, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="rounded-2xl p-5 text-center"
                  style={{ border: `1px solid ${statBorder}`, background: statBg }}
                >
                  <p className="text-2xl font-black text-orange-500 mb-1">{value}</p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>{label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Products;
