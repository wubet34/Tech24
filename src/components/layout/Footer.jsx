import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { NAV_LINKS } from "../../constants";

const Footer = () => {
  const contactItems = [
    { icon: MapPin,  text: "Gofe Gebriel, Addis Ababa, Ethiopia" },
    { icon: Phone,   text: "+251 911 234 567" },
    { icon: Mail,    text: "info@tech24.com" },
    { icon: Clock,   text: "24/7 Emergency Support" },
  ];

  return (
    <footer className="relative mt-24 overflow-hidden" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-orange-500/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <img src={logo} alt="Tech24" className="h-14 w-auto mb-5" />
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
              Professional ATM installation, maintenance, and support services for banks across Ethiopia.
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                <motion.a key={i} href="#"
                  whileHover={{ scale: 1.15, backgroundColor: "rgba(249,115,22,0.9)" }}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200"
                  style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h4 className="font-semibold mb-5 text-xs uppercase tracking-wider" style={{ color: "var(--text)" }}>Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-orange-500 transition-colors duration-200" style={{ color: "var(--text-muted)" }}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h4 className="font-semibold mb-5 text-xs uppercase tracking-wider" style={{ color: "var(--text)" }}>Contact</h4>
            <ul className="space-y-4">
              {contactItems.map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-muted)" }}>
                  <Icon className="text-orange-500 mt-0.5 shrink-0" size={14} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <h4 className="font-semibold mb-5 text-xs uppercase tracking-wider" style={{ color: "var(--text)" }}>Hours</h4>
            <ul className="space-y-3 text-sm" style={{ color: "var(--text-muted)" }}>
              <li>Monday – Friday: 8:00 – 18:00</li>
              <li>Saturday: 9:00 – 13:00</li>
              <li>Sunday: Closed</li>
              <li className="text-orange-500 font-semibold">Emergency: 24/7</li>
            </ul>
          </motion.div>

        </div>

        <div className="mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs" style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}>
          <p>© 2026 Tech24. All rights reserved.</p>
          <p>Developed by <span className="text-orange-500 font-medium">Wubet Alebachew</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
