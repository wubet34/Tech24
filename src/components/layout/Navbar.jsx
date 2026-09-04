import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";
import ContactModal from "../sections/ContactModal";
import { NAV_LINKS } from "../../constants";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [open, setOpen]             = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const location                    = useLocation();
  const { dark, toggle }            = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navBg = scrolled
    ? dark
      ? "border-white/10 bg-slate-950/90 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
      : "border-black/8  bg-white/95  backdrop-blur-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
    : dark
      ? "border-white/8  bg-white/5   backdrop-blur-xl"
      : "border-black/8  bg-white/70  backdrop-blur-xl";

  const linkIdle   = dark ? "text-white/60 hover:text-white"  : "text-black/60 hover:text-black";
  const linkActive = dark ? "text-orange-400"                  : "text-orange-500";
  const closeMenu  = () => setOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0,   opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`mx-auto flex w-full max-w-7xl items-center justify-between rounded-2xl border px-6 py-3 transition-all duration-500 ${navBg}`}
        >
          {/* Logo */}
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Tech24" className="h-12 w-auto" />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link key={link.path} to={link.path}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${active ? linkActive : linkIdle}`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className={`absolute inset-0 rounded-xl ${dark ? "bg-white/5 border border-white/10" : "bg-orange-500/8 border border-orange-200"}`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme toggle */}
            <motion.button
              onClick={toggle}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
              className={`h-9 w-9 rounded-xl flex items-center justify-center transition-colors duration-200
                ${dark
                  ? "text-white/50 hover:text-orange-400 hover:bg-white/5 border border-white/10"
                  : "text-black/50 hover:text-orange-500 hover:bg-black/5 border border-black/10"
                }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={dark ? "sun" : "moon"}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0,   opacity: 1, scale: 1   }}
                  exit={{    rotate:  90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  {dark ? <Sun size={17} /> : <Moon size={17} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            {/* Contact Us button → opens popup */}
            <motion.button
              onClick={() => setOpenContact(true)}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(249,115,22,0.45)" }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_15px_rgba(249,115,22,0.3)]"
            >
              Contact Us
            </motion.button>
          </div>

          {/* Mobile right: theme + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button onClick={toggle} aria-label="Toggle theme"
              className={`h-8 w-8 rounded-lg flex items-center justify-center ${dark ? "text-white/50" : "text-black/50"}`}>
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <motion.button
              onClick={() => setOpen(p => !p)}
              whileTap={{ scale: 0.9 }}
              aria-label={open ? "Close menu" : "Open menu"}
              className={`h-8 w-8 rounded-lg flex items-center justify-center transition-colors ${dark ? "text-white/70 hover:text-white" : "text-black/70 hover:text-black"}`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "x" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{    rotate:  90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {open ? <X size={22} /> : <Menu size={22} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>
      </nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            />
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0   }}
              exit={{   opacity: 0, y: -16  }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className={`fixed top-0 left-0 right-0 z-50 pt-24 pb-6 px-4 md:hidden backdrop-blur-2xl
                ${dark ? "bg-slate-950/98" : "bg-white/98"}`}
              style={{ borderBottom: `1px solid ${dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"}` }}
            >
              <div className="max-w-7xl mx-auto flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => {
                  const active = location.pathname === link.path;
                  return (
                    <motion.div key={link.path}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0   }}
                      transition={{ delay: i * 0.04, duration: 0.25 }}
                    >
                      <Link to={link.path} onClick={closeMenu}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200
                          ${active
                            ? dark
                              ? "bg-orange-500/10 text-orange-400 border border-orange-500/20"
                              : "bg-orange-50 text-orange-500 border border-orange-200"
                            : dark
                              ? "text-white/65 hover:bg-white/5 hover:text-white"
                              : "text-black/60 hover:bg-black/5 hover:text-black"
                          }`}
                      >
                        {active && <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />}
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Mobile Contact Us button */}
                <motion.button
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0   }}
                  transition={{ delay: NAV_LINKS.length * 0.04, duration: 0.25 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => { closeMenu(); setOpenContact(true); }}
                  className="mt-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 py-3.5 text-sm font-semibold text-white"
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ContactModal open={openContact} setOpen={setOpenContact} />
    </>
  );
};

export default Navbar;
