import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const inputClass = `
  w-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm
  px-4 py-3 text-white text-sm placeholder:text-white/25
  outline-none focus:border-orange-500/50 transition-colors duration-200
`;
const labelClass = "block mb-2 text-xs font-semibold text-white/40 uppercase tracking-wider";

const GetQuoteModal = ({ open, setOpen }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit={{   opacity: 0, scale: 0.92, y: 20  }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-2xl rounded-3xl overflow-y-auto max-h-[90vh]"
            style={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {/* top accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

            <div className="p-8">
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-5 text-white/30 hover:text-white transition"
                aria-label="Close"
              >
                <X size={22} />
              </button>

              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Request a Quote</h2>
                <p className="text-white/40 text-sm">Get a customized service plan for your bank</p>
              </div>

              {/* Feature pills */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {["Expert Service", "Fast Response", "Certified Techs", "Dedicated Support"].map(f => (
                  <div key={f} className="rounded-2xl border border-orange-500/20 bg-orange-500/10 p-3 text-center">
                    <p className="text-xs font-semibold text-orange-400">{f}</p>
                  </div>
                ))}
              </div>

              {/* Form */}
              <form className="space-y-5">
                <div>
                  <label className={labelClass}>Bank Name *</label>
                  <input type="text" placeholder="Enter bank name" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Contact Person *</label>
                  <input type="text" placeholder="Full name" className={inputClass} />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Email *</label>
                    <input type="email" placeholder="Email address" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Phone</label>
                    <input type="text" placeholder="Phone number" className={inputClass} />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Number of ATMs *</label>
                    <select className={inputClass} style={{ background: "#0f172a" }}>
                      <option>Select number</option>
                      <option>1 – 10</option>
                      <option>10 – 50</option>
                      <option>50 – 100</option>
                      <option>100+</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Service Type</label>
                    <select className={inputClass} style={{ background: "#0f172a" }}>
                      <option>Select service</option>
                      <option>ATM Installation</option>
                      <option>Maintenance</option>
                      <option>Emergency Repair</option>
                      <option>GRG Support</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Location / Branches</label>
                  <input type="text" placeholder="City / Regions where service is needed" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Additional Information</label>
                  <textarea rows={4} placeholder="Any specific requirements..." className={`${inputClass} resize-none`} />
                </div>

                <div className="flex flex-col md:flex-row gap-3 pt-2">
                  <button type="button" onClick={() => setOpen(false)}
                    className="w-full rounded-xl border border-white/10 py-3 text-sm font-medium text-white/50 hover:text-white hover:bg-white/5 transition">
                    Cancel
                  </button>
                  <motion.button type="submit"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(249,115,22,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-3 text-sm font-semibold text-white">
                    Submit Request
                  </motion.button>
                </div>
              </form>

              <p className="mt-6 text-center text-xs text-white/25">
                We'll respond within 24 hours. Urgent?{" "}
                <span className="text-orange-400 font-medium">+251 911 000 000</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GetQuoteModal;
