import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MapPin, Phone, Mail } from "lucide-react";
import { useSiteData } from "../../context/SiteDataContext";

// This modal uses the same CSS variables (--bg, --text, --border, etc.)
// as every other page component, so it always matches the current theme.

const ContactModal = ({ open, setOpen }) => {
  const { contact } = useSiteData();

  const [sending, setSending] = useState(false);
  const [sent, setSent]       = useState(false);
  const [form, setForm]       = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 900));
    setSending(false);
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setOpen(false);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 2200);
  };

  // Shared input style — uses CSS variables so it matches the page theme
  const inputStyle = {
    width: "100%",
    background: "var(--bg-card)",
    border: "1px solid var(--border)",
    color: "var(--text)",
    borderRadius: "0.75rem",
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

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
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal panel — uses same glass-card + CSS vars as rest of site */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit={{   opacity: 0, scale: 0.93, y: 24  }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            className="glass-card relative z-10 w-full max-w-xl rounded-3xl overflow-hidden overflow-y-auto max-h-[90vh]"
            style={{ background: "var(--bg)", borderColor: "var(--border)" }}
          >
            {/* orange accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

            <div className="p-7">

              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-black" style={{ color: "var(--text)" }}>Contact Us</h2>
                  <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>We respond within 24 hours</p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="mt-1 hover:text-orange-500 transition-colors"
                  style={{ color: "var(--text-muted)" }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Info chips */}
              <div className="flex flex-wrap gap-2.5 mb-6">
                {[
                  { icon: Phone, text: contact.phone },
                  { icon: Mail,  text: contact.email },
                  { icon: MapPin,text: "Addis Ababa"  },
                ].map(({ icon: Icon, text }, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-xl px-3 py-2"
                    style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                  >
                    <Icon className="text-orange-500 shrink-0" size={13} />
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>{text}</span>
                  </div>
                ))}
              </div>

              {/* Success */}
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="h-16 w-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                    <Send className="text-green-400" size={28} />
                  </div>
                  <p className="font-bold text-lg mb-1" style={{ color: "var(--text)" }}>Message Sent!</p>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>Name *</label>
                      <input name="name" type="text" required
                        value={form.name} onChange={handleChange}
                        placeholder="Your name" style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>Phone</label>
                      <input name="phone" type="text"
                        value={form.phone} onChange={handleChange}
                        placeholder="+251..." style={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>Email *</label>
                    <input name="email" type="email" required
                      value={form.email} onChange={handleChange}
                      placeholder="your@email.com" style={inputStyle}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>Subject</label>
                    <select name="subject" value={form.subject} onChange={handleChange}
                      style={{ ...inputStyle, background: "var(--bg)" }}
                    >
                      <option value="">Select subject</option>
                      <option>ATM Installation</option>
                      <option>Maintenance Service</option>
                      <option>Emergency Support</option>
                      <option>Product Inquiry</option>
                      <option>Partnership</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>Message *</label>
                    <textarea name="message" required rows={4}
                      value={form.message} onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      style={{ ...inputStyle, resize: "none" }}
                    />
                  </div>

                  <motion.button
                    type="submit" disabled={sending}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(249,115,22,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 py-3.5 text-sm font-semibold text-white disabled:opacity-60"
                  >
                    {sending
                      ? <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      : <><Send size={15} /> Send Message</>
                    }
                  </motion.button>
                </form>
              )}

              <p className="mt-5 text-center text-xs" style={{ color: "var(--text-muted)" }}>
                Emergency? Call 24/7:{" "}
                <span className="text-orange-500 font-semibold">{contact.emergency}</span>
              </p>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
