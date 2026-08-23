import { useState } from "react";
import { motion } from "framer-motion";
import { Save, Check } from "lucide-react";
import { useSiteData } from "../../context/SiteDataContext";

// When backend is ready: load initial values with await statsAPI.getAll()
// and call await statsAPI.update({...}) inside handleSave.

const inp = "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white text-sm placeholder:text-white/25 outline-none focus:border-orange-500/50 transition";

const SiteSettings = () => {
  const { hero, setHero, stats, setStats, contact, setContact } = useSiteData();
  const [saved, setSaved] = useState(false);

  // Local copies so the user can edit freely before hitting Save
  const [localHero,    setLocalHero]    = useState({ ...hero });
  const [localStats,   setLocalStats]   = useState([...stats]);
  const [localContact, setLocalContact] = useState({ ...contact });

  const handleSave = () => {
    // Push local copies into the shared context (also saves to localStorage)
    setHero(localHero);
    setStats(localStats);
    setContact(localContact);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const updateStat = (i, field, value) => {
    const next = localStats.map((s, idx) => idx === i ? { ...s, [field]: value } : s);
    setLocalStats(next);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-black text-white mb-1">Site Settings</h2>
          <p className="text-white/40 text-sm">Changes apply to the public website instantly on save</p>
        </div>
        <motion.button onClick={handleSave}
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300
            ${saved ? "bg-green-500" : "bg-gradient-to-r from-orange-500 to-orange-600"}`}
        >
          {saved ? <><Check size={15} /> Saved!</> : <><Save size={15} /> Save Changes</>}
        </motion.button>
      </div>

      <div className="space-y-6 max-w-3xl">

        {/* ── Hero Section ── */}
        <Section title="Hero Section" desc="Main headline displayed on the home page">
          <Field label="Badge Text">
            <input className={inp} value={localHero.badge}
              onChange={e => setLocalHero(p => ({ ...p, badge: e.target.value }))} />
          </Field>
          <Field label="Main Headline">
            <textarea className={`${inp} resize-none`} rows={2} value={localHero.headline}
              onChange={e => setLocalHero(p => ({ ...p, headline: e.target.value }))} />
          </Field>
          <Field label="Sub-headline">
            <textarea className={`${inp} resize-none`} rows={3} value={localHero.subline}
              onChange={e => setLocalHero(p => ({ ...p, subline: e.target.value }))} />
          </Field>
        </Section>

        {/* ── Stats ── */}
        <Section title="Home Page Stats" desc="Four numbers shown below the hero headline">
          <div className="grid grid-cols-2 gap-4">
            {localStats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <Field label={`Stat ${i + 1} — Value`}>
                  <input className={inp} value={stat.value}
                    onChange={e => updateStat(i, "value", e.target.value)} />
                </Field>
                <Field label="Label">
                  <input className={inp} value={stat.label}
                    onChange={e => updateStat(i, "label", e.target.value)} />
                </Field>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Contact Info ── */}
        <Section title="Contact Information" desc="Shown on the Contact page, Footer, and emergency banner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Office Address">
              <input className={inp} value={localContact.address}
                onChange={e => setLocalContact(p => ({ ...p, address: e.target.value }))} />
            </Field>
            <Field label="Main Phone">
              <input className={inp} value={localContact.phone}
                onChange={e => setLocalContact(p => ({ ...p, phone: e.target.value }))} />
            </Field>
            <Field label="Emergency Hotline">
              <input className={inp} value={localContact.emergency}
                onChange={e => setLocalContact(p => ({ ...p, emergency: e.target.value }))} />
            </Field>
            <Field label="Primary Email">
              <input className={inp} value={localContact.email}
                onChange={e => setLocalContact(p => ({ ...p, email: e.target.value }))} />
            </Field>
            <Field label="Support Email">
              <input className={inp} value={localContact.support}
                onChange={e => setLocalContact(p => ({ ...p, support: e.target.value }))} />
            </Field>
            <Field label="Working Hours">
              <input className={inp} value={localContact.hours}
                onChange={e => setLocalContact(p => ({ ...p, hours: e.target.value }))} />
            </Field>
          </div>
        </Section>

      </div>
    </div>
  );
};

export default SiteSettings;

// ── Shared layout helpers ────────────────────────────────
const Section = ({ title, desc, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
    className="glass-card rounded-2xl p-7"
  >
    <div className="mb-5 pb-4 border-b border-white/5">
      <p className="text-white font-bold">{title}</p>
      {desc && <p className="text-white/35 text-xs mt-1">{desc}</p>}
    </div>
    <div className="space-y-4">{children}</div>
  </motion.div>
);

const Field = ({ label, children }) => (
  <div>
    <label className="block text-xs font-semibold text-white/35 uppercase tracking-wider mb-2">{label}</label>
    {children}
  </div>
);
