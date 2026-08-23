import { useState } from "react";
import { motion } from "framer-motion";
import { Save, Check } from "lucide-react";

// This is the "edit website content" page.
// Replace the initial state values with a real API call: const data = await statsAPI.getAll();

const inp = "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white text-sm placeholder:text-white/25 outline-none focus:border-orange-500/50 transition";

const SiteSettings = () => {
  const [saved, setSaved] = useState(false);

  const [hero, setHero] = useState({
    headline: "Professional ATM Installation & Maintenance Services",
    subline: "Trusted by 6+ banks across Ethiopia. Expert GRG Banking System support with 24/7 emergency response.",
    badge: "Ethiopia's #1 ATM Service Provider",
  });

  const [contact, setContact] = useState({
    address:   "Gofe Gebriel, Addis Ababa, Ethiopia",
    phone:     "+251 911 234 567",
    emergency: "+251 911 000 000",
    email:     "info@tech24.com",
    support:   "support@tech24.com",
    hours:     "Mon – Fri: 8:00 – 18:00",
  });

  const [stats, setStats] = useState({
    banks:   "6+",
    response:"24/7",
    years:   "3+",
    uptime:  "99.9%",
  });

  const handleSave = async () => {
    // await statsAPI.update({ hero, contact, stats });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-black text-white mb-1">Site Settings</h2>
          <p className="text-white/40 text-sm">Edit the content shown on your public website</p>
        </div>
        <motion.button onClick={handleSave}
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition
            ${saved ? "bg-green-500" : "bg-gradient-to-r from-orange-500 to-orange-600"}`}
        >
          {saved ? <><Check size={15} /> Saved!</> : <><Save size={15} /> Save Changes</>}
        </motion.button>
      </div>

      <div className="space-y-6 max-w-3xl">

        {/* Hero Section */}
        <Section title="Hero Section" desc="The main headline on the home page">
          <Field label="Badge Text">
            <input className={inp} value={hero.badge}
              onChange={e => setHero(p => ({ ...p, badge: e.target.value }))} />
          </Field>
          <Field label="Main Headline">
            <textarea className={`${inp} resize-none`} rows={2} value={hero.headline}
              onChange={e => setHero(p => ({ ...p, headline: e.target.value }))} />
          </Field>
          <Field label="Sub-headline">
            <textarea className={`${inp} resize-none`} rows={3} value={hero.subline}
              onChange={e => setHero(p => ({ ...p, subline: e.target.value }))} />
          </Field>
        </Section>

        {/* Stats */}
        <Section title="Home Page Stats" desc="Numbers shown in the stats row">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Banks Trusted">
              <input className={inp} value={stats.banks}
                onChange={e => setStats(p => ({ ...p, banks: e.target.value }))} />
            </Field>
            <Field label="Emergency Response">
              <input className={inp} value={stats.response}
                onChange={e => setStats(p => ({ ...p, response: e.target.value }))} />
            </Field>
            <Field label="Years Experience">
              <input className={inp} value={stats.years}
                onChange={e => setStats(p => ({ ...p, years: e.target.value }))} />
            </Field>
            <Field label="Uptime Guarantee">
              <input className={inp} value={stats.uptime}
                onChange={e => setStats(p => ({ ...p, uptime: e.target.value }))} />
            </Field>
          </div>
        </Section>

        {/* Contact Info */}
        <Section title="Contact Information" desc="Shown on the Contact page and Footer">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Office Address">
              <input className={inp} value={contact.address}
                onChange={e => setContact(p => ({ ...p, address: e.target.value }))} />
            </Field>
            <Field label="Main Phone">
              <input className={inp} value={contact.phone}
                onChange={e => setContact(p => ({ ...p, phone: e.target.value }))} />
            </Field>
            <Field label="Emergency Hotline">
              <input className={inp} value={contact.emergency}
                onChange={e => setContact(p => ({ ...p, emergency: e.target.value }))} />
            </Field>
            <Field label="Primary Email">
              <input className={inp} value={contact.email}
                onChange={e => setContact(p => ({ ...p, email: e.target.value }))} />
            </Field>
            <Field label="Support Email">
              <input className={inp} value={contact.support}
                onChange={e => setContact(p => ({ ...p, support: e.target.value }))} />
            </Field>
            <Field label="Working Hours">
              <input className={inp} value={contact.hours}
                onChange={e => setContact(p => ({ ...p, hours: e.target.value }))} />
            </Field>
          </div>
        </Section>

      </div>
    </div>
  );
};

export default SiteSettings;

const Section = ({ title, desc, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
    className="glass-card rounded-2xl p-7"
  >
    <div className="mb-5 pb-4 border-b border-white/5">
      <p className="text-white font-bold">{title}</p>
      {desc && <p className="text-white/35 text-xs mt-0.5">{desc}</p>}
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
