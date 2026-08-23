import { motion } from "framer-motion";
import {
  Building2, Cpu, Users, Ticket, FileText, Activity,
  TrendingUp, AlertTriangle, CheckCircle2, Clock,
} from "lucide-react";
import { demoStats, demoQuotes, demoMessages, demoInventory } from "../../services/demoData";

// When your backend is ready, replace demoStats with:
//   const stats = await statsAPI.getAll();

const StatCard = ({ icon: Icon, label, value, color, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
    className="glass-card rounded-2xl p-5 flex items-center gap-4"
  >
    <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
      <Icon size={20} className="text-white" />
    </div>
    <div>
      <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">{label}</p>
      <p className="text-2xl font-black text-white">{value}</p>
    </div>
  </motion.div>
);

const Overview = ({ user }) => {
  const pendingQuotes   = demoQuotes.filter(q => q.status === "pending").length;
  const unreadMessages  = demoMessages.filter(m => !m.read).length;
  const lowStock        = demoInventory.filter(i => i.quantity <= i.minStock).length;

  const stats = [
    { icon: Building2, label: "Partner Banks",   value: demoStats.banks,        color: "bg-blue-500",   delay: 0 },
    { icon: Cpu,       label: "ATMs Managed",    value: demoStats.atms,         color: "bg-orange-500", delay: 0.05 },
    { icon: Users,     label: "Technicians",     value: demoStats.technicians,  color: "bg-green-500",  delay: 0.1 },
    { icon: Activity,  label: "Uptime",          value: demoStats.uptime,       color: "bg-purple-500", delay: 0.15 },
    { icon: Ticket,    label: "Open Tickets",    value: demoStats.openTickets,  color: "bg-red-500",    delay: 0.2 },
    { icon: FileText,  label: "Quote Requests",  value: demoStats.quoteRequests,color: "bg-yellow-500", delay: 0.25 },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-black text-white mb-1">
          Good morning{user ? `, ${user.name.split(" ")[0]}` : ""}! 👋
        </h2>
        <p className="text-white/40 text-sm">Here's what's happening with Tech24 today.</p>
      </div>

      {/* Main stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {stats.map((s, i) => <StatCard key={i} {...s} />)}
      </div>

      {/* Alert bar */}
      {(pendingQuotes > 0 || unreadMessages > 0 || lowStock > 0) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="glass-card rounded-2xl p-5 mb-8 flex flex-wrap gap-4"
        >
          <p className="w-full text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">Needs attention</p>
          {pendingQuotes > 0 && (
            <div className="flex items-center gap-2 rounded-xl bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 text-yellow-400 text-sm">
              <AlertTriangle size={14} /> {pendingQuotes} pending quote{pendingQuotes > 1 ? "s" : ""}
            </div>
          )}
          {unreadMessages > 0 && (
            <div className="flex items-center gap-2 rounded-xl bg-blue-500/10 border border-blue-500/20 px-4 py-2 text-blue-400 text-sm">
              <FileText size={14} /> {unreadMessages} unread message{unreadMessages > 1 ? "s" : ""}
            </div>
          )}
          {lowStock > 0 && (
            <div className="flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-2 text-red-400 text-sm">
              <AlertTriangle size={14} /> {lowStock} part{lowStock > 1 ? "s" : ""} low in stock
            </div>
          )}
        </motion.div>
      )}

      {/* Recent quotes + recent messages side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Recent Quote Requests */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="glass-card rounded-2xl p-6"
        >
          <h3 className="text-sm font-bold text-white mb-4">Recent Quote Requests</h3>
          <div className="space-y-3">
            {demoQuotes.slice(0, 3).map(q => (
              <div key={q.id} className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm text-white font-medium truncate">{q.bank}</p>
                  <p className="text-xs text-white/40">{q.service} · {q.date}</p>
                </div>
                <span className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full
                  ${q.status === "pending"  ? "bg-yellow-500/15 text-yellow-400" :
                    q.status === "reviewed" ? "bg-blue-500/15 text-blue-400"    :
                                              "bg-green-500/15 text-green-400"  }
                `}>
                  {q.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Messages */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          className="glass-card rounded-2xl p-6"
        >
          <h3 className="text-sm font-bold text-white mb-4">Recent Messages</h3>
          <div className="space-y-3">
            {demoMessages.slice(0, 3).map(m => (
              <div key={m.id} className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0 text-orange-400 text-xs font-bold">
                  {m.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-white font-medium truncate">{m.name}</p>
                  <p className="text-xs text-white/40 truncate">{m.subject}</p>
                </div>
                {!m.read && <span className="h-2 w-2 rounded-full bg-orange-400 shrink-0" />}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Overview;
