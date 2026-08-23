import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Mail, MailOpen } from "lucide-react";
import { demoMessages } from "../../services/demoData";
import { ConfirmDelete } from "./ManageServices";
// import { messagesAPI } from "../../services/api"; // ← uncomment when backend ready

const Messages = () => {
  const [items, setItems]     = useState(demoMessages);
  const [selected, setSelected] = useState(null);
  const [delId, setDelId]     = useState(null);
  const [filter, setFilter]   = useState("all");

  const markRead = (id) => {
    setItems(prev => prev.map(m => m.id === id ? { ...m, read: true } : m));
  };

  const handleDelete = (id) => {
    setItems(prev => prev.filter(m => m.id !== id));
    setDelId(null);
    if (selected?.id === id) setSelected(null);
  };

  const openMessage = (msg) => {
    setSelected(msg);
    markRead(msg.id);
  };

  const visible = filter === "all" ? items
    : filter === "unread" ? items.filter(m => !m.read)
    : items.filter(m => m.read);

  const unreadCount = items.filter(m => !m.read).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-black text-white mb-1">Messages</h2>
          <p className="text-white/40 text-sm">{unreadCount} unread message{unreadCount !== 1 ? "s" : ""}</p>
        </div>
        <div className="flex gap-2">
          {["all", "unread", "read"].map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold capitalize transition
                ${filter === f ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                              : "text-white/40 hover:text-white hover:bg-white/5"}`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">

        {/* Message list */}
        <div className="lg:col-span-2 space-y-2">
          {visible.map((msg, i) => (
            <motion.button key={msg.id}
              initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => openMessage(msg)}
              className={`w-full text-left rounded-2xl px-5 py-4 transition-all duration-200 flex items-start gap-3
                ${selected?.id === msg.id ? "bg-orange-500/10 border border-orange-500/30"
                  : "glass-card hover:bg-white/5"}`}
            >
              <div className={`h-9 w-9 rounded-full flex items-center justify-center shrink-0 font-bold text-sm
                ${!msg.read ? "bg-orange-500 text-white" : "bg-white/10 text-white/60"}`}>
                {msg.name.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <p className={`text-sm truncate ${!msg.read ? "text-white font-bold" : "text-white/70"}`}>
                    {msg.name}
                  </p>
                  {!msg.read && <span className="h-2 w-2 rounded-full bg-orange-400 shrink-0" />}
                </div>
                <p className="text-white/40 text-xs truncate">{msg.subject}</p>
                <p className="text-white/25 text-xs mt-0.5">{msg.date}</p>
              </div>
            </motion.button>
          ))}
          {visible.length === 0 && (
            <div className="glass-card rounded-2xl p-10 text-center text-white/25 text-sm">
              No messages here.
            </div>
          )}
        </div>

        {/* Message detail */}
        <div className="lg:col-span-3">
          {selected ? (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="glass-card rounded-2xl p-7 h-full"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-white font-bold text-lg">{selected.subject}</h3>
                  <p className="text-white/40 text-sm mt-1">From: <span className="text-white/60">{selected.name}</span> · {selected.email}</p>
                  <p className="text-white/30 text-xs mt-0.5">{selected.date}</p>
                </div>
                <button onClick={() => setDelId(selected.id)}
                  className="h-9 w-9 rounded-xl bg-white/5 hover:bg-red-500/20 hover:text-red-400 text-white/40 flex items-center justify-center transition shrink-0">
                  <Trash2 size={15} />
                </button>
              </div>
              <div className="rounded-2xl bg-white/3 border border-white/5 p-5">
                <p className="text-white/70 text-sm leading-relaxed">{selected.message}</p>
              </div>
              <a href={`mailto:${selected.email}`}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-semibold text-white">
                <Mail size={15} /> Reply by Email
              </a>
            </motion.div>
          ) : (
            <div className="glass-card rounded-2xl p-10 flex flex-col items-center justify-center text-center h-full min-h-48">
              <MailOpen className="text-white/15 mb-3" size={40} />
              <p className="text-white/25 text-sm">Select a message to read</p>
            </div>
          )}
        </div>

      </div>

      <AnimatePresence>
        {delId && (
          <ConfirmDelete
            message="Delete this message permanently?"
            onCancel={() => setDelId(null)}
            onConfirm={() => handleDelete(delId)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Messages;
