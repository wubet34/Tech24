import { createContext, useContext, useState, useCallback } from "react";
import { demoServices, demoBanks } from "../services/demoData";

// Bump this version any time DEFAULTS change — clears stale localStorage.
const DATA_VERSION = "v4";

const DEFAULTS = {
  hero: {
    badge:    "Ethiopia's #1 ATM Service Provider",
    headline: "Professional ATM Installation & Maintenance Services",
    subline:  "Trusted by 6+ banks across Ethiopia. Expert GRG Banking System support with 24/7 emergency response.",
  },
  stats: [
    { value: "6+",    label: "Banks Trusted"     },
    { value: "24/7",  label: "Emergency Response" },
    { value: "3+",    label: "Years Experience"   },
    { value: "99.9%", label: "Uptime Guarantee"   },
  ],
  contact: {
    address:   "Gofe Gebriel, Addis Ababa, Ethiopia",
    phone:     "+251 911 234 567",
    emergency: "+251 911 000 000",
    email:     "info@tech24.com",
    support:   "support@tech24.com",
    hours:     "Mon – Fri: 8:00 – 18:00",
  },
  services: demoServices,
  banks:    demoBanks,
};

// Clear stale cache whenever DATA_VERSION changes
const initStorage = () => {
  try {
    if (localStorage.getItem("site_data_version") !== DATA_VERSION) {
      Object.keys(localStorage)
        .filter(k => k.startsWith("site_"))
        .forEach(k => localStorage.removeItem(k));
      localStorage.setItem("site_data_version", DATA_VERSION);
    }
  } catch {}
};
initStorage();

const load = (key, fallback) => {
  try {
    const raw = localStorage.getItem(`site_${key}`);
    return raw ? JSON.parse(raw) : fallback;
  } catch { return fallback; }
};

const save = (key, value) => {
  try { localStorage.setItem(`site_${key}`, JSON.stringify(value)); } catch {}
};

const SiteDataContext = createContext(null);

export const SiteDataProvider = ({ children }) => {
  const [hero,     setHeroState]     = useState(() => load("hero",     DEFAULTS.hero));
  const [stats,    setStatsState]    = useState(() => load("stats",    DEFAULTS.stats));
  const [contact,  setContactState]  = useState(() => load("contact",  DEFAULTS.contact));
  const [services, setServicesState] = useState(() => load("services", DEFAULTS.services));
  const [banks,    setBanksState]    = useState(() => load("banks",    DEFAULTS.banks));

  const update = useCallback((key, setter, value) => {
    setter(value);
    save(key, value);
  }, []);

  const setHero     = (v) => update("hero",     setHeroState,     v);
  const setStats    = (v) => update("stats",    setStatsState,    v);
  const setContact  = (v) => update("contact",  setContactState,  v);
  const setServices = (v) => update("services", setServicesState, v);
  const setBanks    = (v) => update("banks",    setBanksState,    v);

  return (
    <SiteDataContext.Provider value={{
      hero,     setHero,
      stats,    setStats,
      contact,  setContact,
      services, setServices,
      banks,    setBanks,
    }}>
      {children}
    </SiteDataContext.Provider>
  );
};

export const useSiteData = () => {
  const ctx = useContext(SiteDataContext);
  if (!ctx) throw new Error("useSiteData must be inside SiteDataProvider");
  return ctx;
};
