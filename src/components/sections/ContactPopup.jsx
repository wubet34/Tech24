import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";

import { useSiteData } from "../../context/SiteDataContext";

const ContactPopup = ({ open, setOpen }) => {
  const { contact } = useSiteData();

  const inputClass = `
    w-full rounded-xl px-4 py-3 text-sm outline-none
    transition-all duration-200
    bg-[var(--bg-card)]
    border border-[var(--border)]
    text-[var(--text)]
    placeholder:text-[var(--text-muted)]
    focus:border-orange-500/50
    focus:ring-2 focus:ring-orange-500/10
  `;

  const labelClass =
    "block mb-2 text-xs font-medium uppercase tracking-wider";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
            }}
            className="
              relative z-10
              w-full max-w-3xl
              rounded-3xl
              glass-card
              overflow-y-auto
              max-h-[90vh]
            "
            style={{ background: "var(--bg)" }}
          >
            {/* Orange top line */}
            <div className="
              absolute top-0 left-1/2 -translate-x-1/2
              w-40 h-px
              bg-gradient-to-r
              from-transparent
              via-orange-500
              to-transparent
            " />

            <div className="p-7 md:p-9">

              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="
                  absolute top-5 right-5
                  h-9 w-9
                  rounded-full
                  flex items-center justify-center
                  transition-all
                  hover:bg-orange-500/10
                  hover:text-orange-500
                "
                style={{ color: "var(--text-muted)" }}
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {/* Header */}
              <div className="text-center mb-8">
                <div className="
                  inline-flex items-center justify-center
                  h-12 w-12
                  rounded-2xl
                  bg-orange-500/10
                  border border-orange-500/20
                  mb-4
                ">
                  <Send
                    size={22}
                    className="text-orange-500"
                  />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  Get In Touch
                </h2>

                <p
                  className="text-sm max-w-md mx-auto"
                  style={{ color: "var(--text-muted)" }}
                >
                  Have a question or need assistance? Send us a message and
                  our team will get back to you.
                </p>
              </div>

              {/* Contact highlights */}
              <div className="
                grid
                grid-cols-2
                md:grid-cols-4
                gap-3
                mb-8
              ">
                <div className="
                  rounded-2xl
                  border border-orange-500/20
                  bg-orange-500/10
                  p-3
                  text-center
                ">
                  <Phone
                    size={18}
                    className="mx-auto mb-2 text-orange-500"
                  />
                  <p className="text-xs font-semibold text-orange-500">
                    Fast Response
                  </p>
                </div>

                <div className="
                  rounded-2xl
                  border border-orange-500/20
                  bg-orange-500/10
                  p-3
                  text-center
                ">
                  <ShieldCheck
                    size={18}
                    className="mx-auto mb-2 text-orange-500"
                  />
                  <p className="text-xs font-semibold text-orange-500">
                    Expert Support
                  </p>
                </div>

                <div className="
                  rounded-2xl
                  border border-orange-500/20
                  bg-orange-500/10
                  p-3
                  text-center
                ">
                  <Mail
                    size={18}
                    className="mx-auto mb-2 text-orange-500"
                  />
                  <p className="text-xs font-semibold text-orange-500">
                    Direct Contact
                  </p>
                </div>

                <div className="
                  rounded-2xl
                  border border-orange-500/20
                  bg-orange-500/10
                  p-3
                  text-center
                ">
                  <Clock
                    size={18}
                    className="mx-auto mb-2 text-orange-500"
                  />
                  <p className="text-xs font-semibold text-orange-500">
                    24/7 Support
                  </p>
                </div>
              </div>

              {/* Form */}
              <form className="space-y-5">

                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-5">

                  <div>
                    <label
                      className={labelClass}
                      style={{ color: "var(--text-muted)" }}
                    >
                      Your Name *
                    </label>

                    <input
                      type="text"
                      placeholder="Full name"
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label
                      className={labelClass}
                      style={{ color: "var(--text-muted)" }}
                    >
                      Email *
                    </label>

                    <input
                      type="email"
                      placeholder="Email address"
                      className={inputClass}
                      required
                    />
                  </div>

                </div>

                {/* Phone + Subject */}
                <div className="grid md:grid-cols-2 gap-5">

                  <div>
                    <label
                      className={labelClass}
                      style={{ color: "var(--text-muted)" }}
                    >
                      Phone
                    </label>

                    <input
                      type="text"
                      placeholder="Phone number"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      className={labelClass}
                      style={{ color: "var(--text-muted)" }}
                    >
                      Subject
                    </label>

                    <select
                      className={inputClass}
                      style={{
                        background: "var(--bg-card)",
                      }}
                    >
                      <option>Select subject</option>
                      <option>ATM Installation</option>
                      <option>Maintenance</option>
                      <option>Emergency Support</option>
                      <option>GRG Support</option>
                      <option>Partnership</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                </div>

                {/* Message */}
                <div>
                  <label
                    className={labelClass}
                    style={{ color: "var(--text-muted)" }}
                  >
                    Message *
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className={`${inputClass} resize-none`}
                    required
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-3 pt-2">

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="
                      w-full
                      rounded-xl
                      py-3.5
                      text-sm
                      font-medium
                      transition
                    "
                    style={{
                      border: "1px solid var(--border)",
                      color: "var(--text-muted)",
                    }}
                  >
                    Cancel
                  </button>

                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.02,
                      boxShadow:
                        "0 0 25px rgba(249,115,22,0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="
                      w-full
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-gradient-to-r
                      from-orange-500
                      to-orange-600
                      py-3.5
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    <Send size={16} />
                    Send Message
                  </motion.button>

                </div>

              </form>

              {/* Contact information */}
              <div className="
                mt-8
                pt-6
                border-t
                grid
                grid-cols-1
                md:grid-cols-3
                gap-4
              "
                style={{
                  borderColor: "var(--border)",
                }}
              >

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="
                    shrink-0
                    h-9 w-9
                    rounded-xl
                    flex items-center justify-center
                    bg-orange-500/10
                    border border-orange-500/20
                  ">
                    <Phone
                      size={16}
                      className="text-orange-500"
                    />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="text-[10px] uppercase tracking-wider"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Phone
                    </p>

                    <p
                      className="text-xs font-medium truncate"
                      style={{ color: "var(--text)" }}
                    >
                      {contact.phone}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="
                    shrink-0
                    h-9 w-9
                    rounded-xl
                    flex items-center justify-center
                    bg-orange-500/10
                    border border-orange-500/20
                  ">
                    <Mail
                      size={16}
                      className="text-orange-500"
                    />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="text-[10px] uppercase tracking-wider"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Email
                    </p>

                    <p
                      className="text-xs font-medium truncate"
                      style={{ color: "var(--text)" }}
                    >
                      {contact.email}
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="
                    shrink-0
                    h-9 w-9
                    rounded-xl
                    flex items-center justify-center
                    bg-orange-500/10
                    border border-orange-500/20
                  ">
                    <MapPin
                      size={16}
                      className="text-orange-500"
                    />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="text-[10px] uppercase tracking-wider"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Location
                    </p>

                    <p
                      className="text-xs font-medium truncate"
                      style={{ color: "var(--text)" }}
                    >
                      {contact.address}
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom note */}
              <p
                className="mt-6 text-center text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                We'll respond within 24 hours. Urgent?{" "}
                <span className="text-orange-500 font-medium">
                  {contact.emergency}
                </span>
              </p>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;