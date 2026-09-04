import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Trash2, X } from "lucide-react";
import { demoQuotes } from "../../services/demoData";
import { ConfirmDelete } from "./ManageServices";
// import { quotesAPI } from "../../services/api"; // ← uncomment when backend ready

const STATUS_STYLES = {
  pending:  "bg-yellow-500/15 text-yellow-400 border border-yellow-500/20",
  reviewed: "bg-blue-500/15   text-blue-400   border border-blue-500/20",
  closed:   "bg-green-500/15  text-green-400  border border-green-500/20",
};

const QuoteRequests = () => {
  const [items, setItems]       = useState(demoQuotes);
  const [viewing, setViewing]   = useState(null);
  const [delId, setDelId]       = useState(null);
  const [filter, setFilter]     = useState("all");

  const handleStatusChange = async (id, status) => {
    // await quotesAPI.update(id, { status });
    setItems(prev => prev.map(q => q.id === id ? { ...q, status } : q));
  };

  const handleDelete = async (id) => {
    // await quotesAPI.delete(id);
    setItems(prev => prev.filter(q => q.id !== id));
    setDelId(null);
  };

  const visible = filter === "all" ? items : items.filter(q => q.status === filter);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-black text-white mb-1">Contact Inquiries</h2>
          <p className="text-white/40 text-sm">{items.filter(q => q.status === "pending").length} pending review</p>
        </div>
        <div className="flex gap-2">
          {["all", "pending", "reviewed", "closed"].map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold capitalize transition
                ${filter === f ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                              : "text-white/40 hover:text-white hover:bg-white/5"}`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {visible.map((q, i) => (
          <motion.div key={q.id}
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass-card rounded-2xl px-6 py-5 flex items-center gap-4"
          >
            <div className="h-10 w-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 text-orange-400 font-bold text-sm">
              {q.bank.charAt(0)}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm truncate">{q.bank}</p>
              <p className="text-white/40 text-xs">{q.contact} · {q.service} · {q.date}</p>
            </div>

            <span className={`text-xs px-3 py-1 rounded-full font-semibold shrink-0 ${STATUS_STYLES[q.status]}`}>
              {q.status}
            </span>

            {/* Quick status change */}
            <select
              value={q.status}
              onChange={e => handleStatusChange(q.id, e.target.value)}
              className="text-xs bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white outline-none cursor-pointer"
            >
              <option value="pending">pending</option>
              <option value="reviewed">reviewed</option>
              <option value="closed">closed</option>
            </select>

            <div className="flex gap-2 shrink-0">
              <button onClick={() => setViewing(q)}
                className="h-8 w-8 rounded-lg bg-white/5 hover:bg-blue-500/20 hover:text-blue-400 text-white/40 flex items-center justify-center transition">
                <Eye size={14} />
              </button>
              <button onClick={() => setDelId(q.id)}
                className="h-8 w-8 rounded-lg bg-white/5 hover:bg-red-500/20 hover:text-red-400 text-white/40 flex items-center justify-center transition">
                <Trash2 size={14} />
              </button>
            </div>
          </motion.div>
        ))}

        {visible.length === 0 && (
          <div className="glass-card rounded-2xl p-12 text-center text-white/25 text-sm">
            No {filter !== "all" ? filter : ""} requests found.
          </div>
        )}
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {viewing && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setViewing(null)} />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="dark-card relative z-10 w-full max-w-md rounded-3xl p-7"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white">Quote Details</h3>
                <button onClick={() => setViewing(null)} className="text-white/30 hover:text-white"><X size={20} /></button>
              </div>
              <div className="space-y-3">
                {[
                  ["Bank",          viewing.bank],
                  ["Contact",       viewing.contact],
                  ["Email",         viewing.email],
                  ["Phone",         viewing.phone],
                  ["ATMs",          viewing.atms],
                  ["Service",       viewing.service],
                  ["Date",          viewing.date],
                  ["Status",        viewing.status],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4">
                    <span className="text-white/35 text-sm">{label}</span>
                    <span className="text-white text-sm font-medium text-right">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {delId && (
          <ConfirmDelete
            message="Delete this quote request?"
            onCancel={() => setDelId(null)}
            onConfirm={() => handleDelete(delId)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuoteRequests;
