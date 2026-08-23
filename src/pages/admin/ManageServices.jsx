import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Pencil, Trash2, X, Check } from "lucide-react";
import { demoServices } from "../../services/demoData";
// import { servicesAPI } from "../../services/api"; // ← uncomment when backend ready

const EMPTY = { title: "", icon: "Wrench", description: "", status: "active" };

const inp = "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white text-sm placeholder:text-white/25 outline-none focus:border-orange-500/50 transition";

const ManageServices = () => {
  const [items, setItems]     = useState(demoServices);
  const [modal, setModal]     = useState(false);   // "add" | "edit" | false
  const [form, setForm]       = useState(EMPTY);
  const [editId, setEditId]   = useState(null);
  const [delId, setDelId]     = useState(null);
  const [saving, setSaving]   = useState(false);

  const openAdd  = () => { setForm(EMPTY); setEditId(null); setModal("add"); };
  const openEdit = (item) => { setForm({ ...item }); setEditId(item.id); setModal("edit"); };

  const handleSave = async () => {
    if (!form.title.trim()) return;
    setSaving(true);
    try {
      if (modal === "add") {
        // const created = await servicesAPI.create(form);
        const created = { ...form, id: Date.now() };
        setItems(prev => [...prev, created]);
      } else {
        // await servicesAPI.update(editId, form);
        setItems(prev => prev.map(s => s.id === editId ? { ...form, id: editId } : s));
      }
      setModal(false);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    // await servicesAPI.delete(id);
    setItems(prev => prev.filter(s => s.id !== id));
    setDelId(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-black text-white mb-1">Services</h2>
          <p className="text-white/40 text-sm">{items.length} services listed on the website</p>
        </div>
        <motion.button onClick={openAdd}
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white"
        >
          <Plus size={16} /> Add Service
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {items.map((s, i) => (
          <motion.div key={s.id}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass-card rounded-2xl p-6 flex flex-col gap-3"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-white font-bold text-base">{s.title}</p>
                <span className={`mt-1 inline-block text-xs px-2.5 py-0.5 rounded-full font-medium
                  ${s.status === "active" ? "bg-green-500/15 text-green-400" : "bg-white/10 text-white/40"}`}>
                  {s.status}
                </span>
              </div>
              <div className="flex gap-2 shrink-0">
                <button onClick={() => openEdit(s)}
                  className="h-8 w-8 rounded-lg bg-white/5 hover:bg-orange-500/20 hover:text-orange-400 text-white/40 flex items-center justify-center transition">
                  <Pencil size={14} />
                </button>
                <button onClick={() => setDelId(s.id)}
                  className="h-8 w-8 rounded-lg bg-white/5 hover:bg-red-500/20 hover:text-red-400 text-white/40 flex items-center justify-center transition">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
            <p className="text-white/40 text-xs leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Add / Edit Modal */}
      <AnimatePresence>
        {modal && (
          <Modal title={modal === "add" ? "Add Service" : "Edit Service"} onClose={() => setModal(false)}>
            <div className="space-y-4">
              <Field label="Title">
                <input className={inp} value={form.title} placeholder="Service title"
                  onChange={e => setForm(p => ({ ...p, title: e.target.value }))} />
              </Field>
              <Field label="Description">
                <textarea className={`${inp} resize-none`} rows={3} value={form.description} placeholder="Short description"
                  onChange={e => setForm(p => ({ ...p, description: e.target.value }))} />
              </Field>
              <Field label="Status">
                <select className={inp} value={form.status}
                  onChange={e => setForm(p => ({ ...p, status: e.target.value }))}>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </Field>
              <SaveBar onCancel={() => setModal(false)} onSave={handleSave} saving={saving} />
            </div>
          </Modal>
        )}
      </AnimatePresence>

      {/* Delete confirm */}
      <AnimatePresence>
        {delId && (
          <ConfirmDelete
            message="Delete this service from the website?"
            onCancel={() => setDelId(null)}
            onConfirm={() => handleDelete(delId)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ManageServices;

// ── Shared sub-components ────────────────────────────────

export const Modal = ({ title, onClose, children }) => (
  <motion.div
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
  >
    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="dark-card relative z-10 w-full max-w-lg rounded-3xl p-7"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full" />
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <button onClick={onClose} className="text-white/30 hover:text-white transition">
          <X size={20} />
        </button>
      </div>
      {children}
    </motion.div>
  </motion.div>
);

export const Field = ({ label, children }) => (
  <div>
    <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">{label}</label>
    {children}
  </div>
);

export const SaveBar = ({ onCancel, onSave, saving }) => (
  <div className="flex gap-3 pt-2">
    <button onClick={onCancel}
      className="flex-1 rounded-xl border border-white/10 py-3 text-sm text-white/50 hover:text-white hover:bg-white/5 transition">
      Cancel
    </button>
    <motion.button onClick={onSave} disabled={saving}
      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
      className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-3 text-sm font-semibold text-white disabled:opacity-50"
    >
      {saving ? <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
               : <><Check size={15} /> Save</>}
    </motion.button>
  </div>
);

export const ConfirmDelete = ({ message, onCancel, onConfirm }) => (
  <motion.div
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
  >
    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onCancel} />
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="dark-card relative z-10 w-full max-w-sm rounded-3xl p-7 text-center"
    >
      <div className="h-14 w-14 rounded-full bg-red-500/15 border border-red-500/20 flex items-center justify-center mx-auto mb-4">
        <Trash2 className="text-red-400" size={24} />
      </div>
      <p className="text-white font-bold mb-2">Are you sure?</p>
      <p className="text-white/40 text-sm mb-6">{message}</p>
      <div className="flex gap-3">
        <button onClick={onCancel}
          className="flex-1 rounded-xl border border-white/10 py-3 text-sm text-white/50 hover:text-white hover:bg-white/5 transition">
          Cancel
        </button>
        <button onClick={onConfirm}
          className="flex-1 rounded-xl bg-red-500 hover:bg-red-600 py-3 text-sm font-semibold text-white transition">
          Delete
        </button>
      </div>
    </motion.div>
  </motion.div>
);
