import { createContext, useContext, useState, useCallback } from "react";
import { demoServices, demoBanks, demoTeam } from "../services/demoData";

// ── Default values — shown on first visit before admin edits anything ──
const DEFAULTS = {
  hero: {
    badge:    "Ethiopia's #1 ATM Service Provider",
    headline: "Professional ATM Installation & Maintenance Services",
    subline:  "Trusted by 6+ banks across Ethiopia. Expert GRG Banking System support with 24/7 emergency response.",
  },
  stats: [
    { value: "6+",    label: "Banks Trusted"      },
    { value: "24/7",  label: "Emergency Response"  },
    { value: "3+",    label: "Years Experience"    },
    { value: "99.9%", label: "Uptime Guarantee"    },
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
  team:     demoTeam,
};

// Load from localStorage, fall back to defaults
const load = (key, fallback) => {
  try {
    const raw = localStorage.getItem(`site_${key}`);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const save = (key, value) => {
  try {
    localStorage.setItem(`site_${key}`, JSON.stringify(value));
  } catch {}
};

// ── Context ────────────────────────────────────────────────────────────
const SiteDataContext = createContext(null);

export const SiteDataProvider = ({ children }) => {
  const [hero,     setHeroState]     = useState(() => load("hero",     DEFAULTS.hero));
  const [stats,    setStatsState]    = useState(() => load("stats",    DEFAULTS.stats));
  const [contact,  setContactState]  = useState(() => load("contact",  DEFAULTS.contact));
  const [services, setServicesState] = useState(() => load("services", DEFAULTS.services));
  const [banks,    setBanksState]    = useState(() => load("banks",    DEFAULTS.banks));
  const [team,     setTeamState]     = useState(() => load("team",     DEFAULTS.team));

  // Generic updater that saves to localStorage and updates state
  const update = useCallback((key, setter, value) => {
    setter(value);
    save(key, value);
  }, []);

  const setHero     = (v) => update("hero",     setHeroState,     v);
  const setStats    = (v) => update("stats",    setStatsState,    v);
  const setContact  = (v) => update("contact",  setContactState,  v);
  const setServices = (v) => update("services", setServicesState, v);
  const setBanks    = (v) => update("banks",    setBanksState,    v);
  const setTeam     = (v) => update("team",     setTeamState,     v);

  return (
    <SiteDataContext.Provider value={{
      hero,     setHero,
      stats,    setStats,
      contact,  setContact,
      services, setServices,
      banks,    setBanks,
      team,     setTeam,
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
