import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, Wrench, Building2, Users,
  Package, FileText, Mail, Settings,
  LogOut, Menu, X, BarChart2, User, Calendar,
} from "lucide-react";

import Overview        from "./admin/Overview";
import ManageServices  from "./admin/ManageServices";
import ManageBanks     from "./admin/ManageBanks";
import ManageTeam      from "./admin/ManageTeam";
import Inventory       from "./admin/Inventory";
import QuoteRequests   from "./admin/QuoteRequests";
import Messages        from "./admin/Messages";
import SiteSettings    from "./admin/SiteSettings";

// When backend is ready swap this:
//   const profile = await authAPI.profile();
// For now it hits your existing endpoint

const TABS = [
  { id: "overview",  label: "Overview",       icon: LayoutDashboard },
  { id: "services",  label: "Services",       icon: Wrench          },
  { id: "banks",     label: "Banks",          icon: Building2       },
  { id: "team",      label: "Team",           icon: Users           },
  { id: "inventory", label: "Inventory",      icon: Package         },
  { id: "quotes",    label: "Quote Requests", icon: FileText        },
  { id: "messages",  label: "Messages",       icon: Mail            },
  { id: "settings",  label: "Site Settings",  icon: Settings        },
];

const Dashboard = () => {
  const [user, setUser]           = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [sideOpen, setSideOpen]   = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:3000/api/users/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) setUser(await res.json());
      } catch {
        // backend not connected — show demo admin
        setUser({ name: "Admin User", email: "admin@tech24.com", created_at: new Date().toISOString() });
      }
    };
    load();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const currentTab = TABS.find(t => t.id === activeTab);

  const renderContent = () => {
    switch (activeTab) {
      case "overview":  return <Overview user={user} />;
      case "services":  return <ManageServices />;
      case "banks":     return <ManageBanks />;
      case "team":      return <ManageTeam />;
      case "inventory": return <Inventory />;
      case "quotes":    return <QuoteRequests />;
      case "messages":  return <Messages />;
      case "settings":  return <SiteSettings />;
      default:          return <Overview user={user} />;
    }
  };

  return (
    <div className="force-dark min-h-screen flex overflow-hidden">
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-20 z-0" />

      {/* ── Sidebar ─────────────────────────────────────── */}
      <motion.aside
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`
          relative z-20 flex flex-col shrink-0
          border-r border-white/5
          transition-all duration-300
          ${sideOpen ? "w-60" : "w-16"}
        `}
        style={{ background: "rgba(2,6,23,0.92)", backdropFilter: "blur(20px)" }}
      >
        {/* Logo */}
        <div className="p-4 border-b border-white/5 flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shrink-0">
            <BarChart2 size={17} className="text-white" />
          </div>
          {sideOpen && (
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-white leading-tight">Tech24</p>
              <p className="text-xs text-white/30">Admin Panel</p>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-3 px-2 space-y-0.5 overflow-y-auto">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button key={id}
              onClick={() => setActiveTab(id)}
              title={!sideOpen ? label : undefined}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
                transition-all duration-200 group
                ${activeTab === id
                  ? "bg-orange-500/10 text-orange-400 border border-orange-500/20"
                  : "text-white/45 hover:bg-white/5 hover:text-white"
                }
              `}
            >
              <Icon size={16} className="shrink-0" />
              {sideOpen && <span className="truncate">{label}</span>}
              {activeTab === id && sideOpen && (
                <motion.span layoutId="indicator"
                  className="ml-auto h-1.5 w-1.5 rounded-full bg-orange-400 shrink-0" />
              )}
            </button>
          ))}
        </nav>

        {/* User + logout */}
        <div className="p-3 border-t border-white/5">
          {sideOpen && user && (
            <div className="flex items-center gap-3 px-3 py-2 mb-1">
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                {user.name?.charAt(0).toUpperCase()}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-white truncate">{user.name}</p>
                <p className="text-white/30 text-xs truncate">{user.email}</p>
              </div>
            </div>
          )}
          <button onClick={logout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/35 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200"
          >
            <LogOut size={16} className="shrink-0" />
            {sideOpen && "Log Out"}
          </button>
        </div>
      </motion.aside>

      {/* ── Main area ────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col overflow-hidden">

        {/* Top bar */}
        <header className="sticky top-0 border-b border-white/5 px-6 py-3.5 flex items-center justify-between"
          style={{ background: "rgba(2,6,23,0.75)", backdropFilter: "blur(20px)" }}>
          <div className="flex items-center gap-4">
            <button onClick={() => setSideOpen(p => !p)}
              className="text-white/40 hover:text-white transition">
              <Menu size={20} />
            </button>
            <div>
              <p className="text-base font-bold text-white">{currentTab?.label}</p>
              <p className="text-xs text-white/30">Tech24 Admin</p>
            </div>
          </div>

          {user && (
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-xs font-bold">
                {user.name?.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm text-white/50 hidden sm:block">{user.name}</span>
            </div>
          )}
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
