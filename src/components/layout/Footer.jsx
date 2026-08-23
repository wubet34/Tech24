import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { NAV_LINKS } from "../../constants";
import { useSiteData } from "../../context/SiteDataContext";

const socials = [
  { Icon: FaFacebookF,  href: "https://facebook.com", label: "Facebook" },
  { Icon: FaTwitter,    href: "https://twitter.com",  label: "Twitter"  },
  { Icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
];

const Footer = () => {
  const navigate   = useNavigate();
  const { contact } = useSiteData();

  const contactItems = [
    { icon: MapPin, text: contact.address },
    { icon: Phone,  text: contact.phone   },
    { icon: Mail,   text: contact.email   },
    { icon: Clock,  text: "24/7 Emergency Support" },
  ];

  const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <footer className="relative mt-24 overflow-hidden" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-24 bg-orange-500/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <img src={logo} alt="Tech24" className="h-14 w-auto mb-5" />
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
              Professional ATM installation, maintenance, and support services for banks across Ethiopia.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  whileHover={{ scale: 1.15, backgroundColor: "rgba(249,115,22,0.85)" }}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200"
                  style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h4 className="font-semibold mb-5 text-xs uppercase tracking-wider" style={{ color: "var(--text)" }}>Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <button onClick={() => handleNavClick(link.path)}
                    className="text-sm hover:text-orange-500 transition-colors duration-200 text-left w-full"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact — reads from SiteDataContext, updates when admin saves */}
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

          {/* Hours */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <h4 className="font-semibold mb-5 text-xs uppercase tracking-wider" style={{ color: "var(--text)" }}>Hours</h4>
            <ul className="space-y-3 text-sm" style={{ color: "var(--text-muted)" }}>
              <li>{contact.hours}</li>
              <li>Saturday: 9:00 – 13:00</li>
              <li>Sunday: Closed</li>
              <li className="text-orange-500 font-semibold">Emergency: 24/7</li>
            </ul>
          </motion.div>

        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}>
          <p>© 2026 Tech24. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a href="https://wubet-os.vercel.app/" target="_blank" rel="noopener noreferrer"
              className="text-orange-500 font-medium hover:text-orange-400 transition-colors">
              Wubet Alebachew
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
