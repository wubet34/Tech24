import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const GetQuoteModal = ({ open, setOpen }) => {
  const inputClass = `
    w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200
    bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text)]
    placeholder:text-[var(--text-muted)] focus:border-orange-500/50
  `;
  const labelClass = "block mb-2 text-xs font-medium uppercase tracking-wider";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-2xl rounded-3xl glass-card overflow-y-auto max-h-[90vh]"
            style={{ background: "var(--bg)" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
            <div className="p-8">
              <button onClick={() => setOpen(false)}
                className="absolute top-5 right-5 transition"
                style={{ color: "var(--text-muted)" }}
                aria-label="Close"
              >
                <X size={22} />
              </button>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold gradient-text mb-2">Request a Quote</h2>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>Get a customized service plan for your bank</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {["Expert Service","Fast Response","Certified Techs","Dedicated Support"].map((f) => (
                  <div key={f} className="rounded-2xl border border-orange-500/20 bg-orange-500/10 p-3 text-center">
                    <p className="text-xs font-semibold text-orange-500">{f}</p>
                  </div>
                ))}
              </div>

              <form className="space-y-5">
                <div>
                  <label className={labelClass} style={{ color: "var(--text-muted)" }}>Bank Name *</label>
                  <input type="text" placeholder="Enter bank name" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} style={{ color: "var(--text-muted)" }}>Contact Person *</label>
                  <input type="text" placeholder="Full name" className={inputClass} />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass} style={{ color: "var(--text-muted)" }}>Email *</label>
                    <input type="email" placeholder="Email address" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass} style={{ color: "var(--text-muted)" }}>Phone</label>
                    <input type="text" placeholder="Phone number" className={inputClass} />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass} style={{ color: "var(--text-muted)" }}>Number of ATMs *</label>
                    <select className={inputClass} style={{ background: "var(--bg-card)" }}>
                      <option>Select number</option>
                      <option>1 – 10</option><option>10 – 50</option><option>50 – 100</option><option>100+</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass} style={{ color: "var(--text-muted)" }}>Service Type</label>
                    <select className={inputClass} style={{ background: "var(--bg-card)" }}>
                      <option>Select service</option>
                      <option>ATM Installation</option><option>Maintenance</option><option>Emergency Repair</option><option>GRG Support</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className={labelClass} style={{ color: "var(--text-muted)" }}>Location / Branches</label>
                  <input type="text" placeholder="City / Regions" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass} style={{ color: "var(--text-muted)" }}>Additional Information</label>
                  <textarea rows={4} placeholder="Any specific requirements..." className={`${inputClass} resize-none`} />
                </div>
                <div className="flex flex-col md:flex-row gap-3 pt-2">
                  <button type="button" onClick={() => setOpen(false)}
                    className="w-full rounded-xl py-3 text-sm font-medium transition"
                    style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
                  >Cancel</button>
                  <motion.button type="submit"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(249,115,22,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-3 text-sm font-semibold text-white"
                  >Submit Request</motion.button>
                </div>
              </form>

              <p className="mt-6 text-center text-xs" style={{ color: "var(--text-muted)" }}>
                We'll respond within 24 hours. Urgent?{" "}
                <span className="text-orange-500">+251 911 000 000</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GetQuoteModal;
