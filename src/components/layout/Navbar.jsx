import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";
import GetQuoteModal from "../sections/GetQuoteModal";
import { NAV_LINKS } from "../../constants";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [open, setOpen]           = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [openQuote, setOpenQuote] = useState(false);
  const location  = useLocation();
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  const navBg = scrolled
    ? dark
      ? "border-white/10 bg-slate-950/85 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
      : "border-black/8 bg-white/90 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
    : dark
      ? "border-white/8  bg-white/5  backdrop-blur-xl"
      : "border-black/8  bg-white/70 backdrop-blur-xl";

  const linkColor  = dark ? "text-white/60 hover:text-white" : "text-black/60 hover:text-black";
  const activeLink = dark ? "text-orange-400" : "text-orange-500";
  const mobileMenuBg = dark
    ? "border-white/10 bg-slate-950/95 backdrop-blur-2xl"
    : "border-black/8  bg-white/95  backdrop-blur-2xl";
  const mobileLinkActive = dark
    ? "bg-orange-500/10 text-orange-400 border border-orange-500/20"
    : "bg-orange-50 text-orange-500 border border-orange-200";
  const mobileLinkIdle = dark
    ? "text-white/70 hover:bg-white/5 hover:text-white"
    : "text-black/60 hover:bg-black/5 hover:text-black";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`mx-auto flex w-full max-w-7xl items-center justify-between rounded-2xl border px-6 py-3 transition-all duration-500 ${navBg}`}
        >
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Tech24" className="h-12 w-auto" />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link key={link.path} to={link.path}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${active ? activeLink : linkColor}`}
                >
                  {active && (
                    <motion.span layoutId="nav-pill"
                      className={`absolute inset-0 rounded-xl ${dark ? "bg-white/5 border border-white/10" : "bg-orange-500/8 border border-orange-200"}`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme toggle */}
            <motion.button
              onClick={toggle}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
              className={`h-9 w-9 rounded-xl flex items-center justify-center transition-colors duration-200
                ${dark ? "text-white/50 hover:text-orange-400 hover:bg-white/5 border border-white/10"
                       : "text-black/50 hover:text-orange-500 hover:bg-black/5 border border-black/10"}`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={dark ? "moon" : "sun"}
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0,   opacity: 1, scale: 1   }}
                  exit={{    rotate:  90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.25 }}
                >
                  {dark ? <Sun size={17} /> : <Moon size={17} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            {/* Get Quote */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(249,115,22,0.45)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setOpenQuote(true)}
              className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_15px_rgba(249,115,22,0.3)]"
            >
              Get Quote
            </motion.button>
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <motion.button
              onClick={toggle}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
              className={`h-8 w-8 rounded-lg flex items-center justify-center ${dark ? "text-white/50" : "text-black/50"}`}
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>
            <button onClick={() => setOpen(!open)} aria-label="Menu"
              className={`${dark ? "text-white/70 hover:text-white" : "text-black/70 hover:text-black"} transition`}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{   opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mx-auto mt-2 w-full max-w-7xl overflow-hidden"
            >
              <div className={`rounded-2xl border p-6 flex flex-col gap-2 ${mobileMenuBg}`}>
                {NAV_LINKS.map((link, i) => (
                  <motion.div key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link to={link.path}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                        ${location.pathname === link.path ? mobileLinkActive : mobileLinkIdle}`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => { setOpen(false); setOpenQuote(true); }}
                  className="mt-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 py-3 text-sm font-semibold text-white"
                >
                  Get Quote
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <GetQuoteModal open={openQuote} setOpen={setOpenQuote} />
    </>
  );
};

export default Navbar;
