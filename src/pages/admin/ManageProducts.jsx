import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Pencil, Trash2, Cpu, ExternalLink } from "lucide-react";
import { GRG_PRODUCTS } from "../../constants";
import { Modal, Field, SaveBar, ConfirmDelete } from "./ManageServices";

// Products come from constants/index.js (GRG_PRODUCTS).
// This admin page lets you preview them and manage custom products
// stored in localStorage via the same pattern as services/banks.
// When backend is ready, replace localStorage ops with productAPI calls.

const STORAGE_KEY = "site_custom_products";

const loadCustom = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
};

const saveCustom = (v) => {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(v)); } catch {}
};

const inp = "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white text-sm placeholder:text-white/25 outline-none focus:border-orange-500/50 transition";
const EMPTY = { name: "", type: "", category: "", tagline: "", description: "", manualUrl: "", badge: "" };

const ManageProducts = () => {
  const [custom, setCustom]   = useState(loadCustom);
  const [modal, setModal]     = useState(false);
  const [form, setForm]       = useState(EMPTY);
  const [editId, setEditId]   = useState(null);
  const [delId, setDelId]     = useState(null);
  const [saving, setSaving]   = useState(false);
  const [tab, setTab]         = useState("grg"); // "grg" | "custom"

  const openAdd  = () => { setForm(EMPTY); setEditId(null); setModal("add"); };
  const openEdit = (item) => { setForm({ ...item }); setEditId(item.id); setModal("edit"); };

  const handleSave = async () => {
    if (!form.name.trim()) return;
    setSaving(true);
    try {
      let next;
      if (modal === "add") {
        next = [...custom, { ...form, id: Date.now() }];
      } else {
        next = custom.map(p => p.id === editId ? { ...form, id: editId } : p);
      }
      setCustom(next);
      saveCustom(next);
      setModal(false);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = (id) => {
    const next = custom.filter(p => p.id !== id);
    setCustom(next);
    saveCustom(next);
    setDelId(null);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-black text-white mb-1">Products</h2>
          <p className="text-white/40 text-sm">
            {GRG_PRODUCTS.length} GRG models · {custom.length} custom products
          </p>
        </div>
        <motion.button onClick={openAdd}
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white"
        >
          <Plus size={16} /> Add Product
        </motion.button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {[
          { id: "grg",    label: `GRG Models (${GRG_PRODUCTS.length})` },
          { id: "custom", label: `Custom (${custom.length})` },
        ].map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition
              ${tab === t.id
                ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                : "text-white/40 hover:text-white hover:bg-white/5"}`}>
            {t.label}
          </button>
        ))}
      </div>

      {/* GRG Products — read-only preview */}
      {tab === "grg" && (
        <div className="space-y-3">
          {GRG_PRODUCTS.map((p, i) => (
            <motion.div key={p.id}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-2xl px-6 py-5 flex items-center gap-4"
            >
              <div className="h-10 w-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                <Cpu className="text-orange-400" size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm">{p.name}</p>
                <p className="text-white/40 text-xs">{p.type} · {p.category}</p>
              </div>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${p.badgeColor}`}>
                {p.badge}
              </span>
              <a href={p.manualUrl} target="_blank" rel="noopener noreferrer"
                className="shrink-0 h-8 w-8 rounded-lg bg-white/5 hover:bg-orange-500/20 hover:text-orange-400 text-white/40 flex items-center justify-center transition">
                <ExternalLink size={13} />
              </a>
            </motion.div>
          ))}
          <p className="text-white/20 text-xs pt-2 pl-1">
            GRG models are defined in <code className="text-orange-500/60">constants/index.js</code> — edit the file to update them.
          </p>
        </div>
      )}

      {/* Custom products */}
      {tab === "custom" && (
        <div className="space-y-3">
          {custom.length === 0 && (
            <div className="glass-card rounded-2xl p-10 text-center text-white/25 text-sm">
              No custom products yet. Click "Add Product" to create one.
            </div>
          )}
          {custom.map((p, i) => (
            <motion.div key={p.id}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-2xl px-6 py-5 flex items-center gap-4"
            >
              <div className="h-10 w-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                <Cpu className="text-orange-400" size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm">{p.name}</p>
                <p className="text-white/40 text-xs truncate">{p.type} {p.category ? `· ${p.category}` : ""}</p>
              </div>
              {p.badge && (
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-500/15 text-orange-400 border border-orange-500/20">
                  {p.badge}
                </span>
              )}
              <div className="flex gap-2 shrink-0">
                <button onClick={() => openEdit(p)}
                  className="h-8 w-8 rounded-lg bg-white/5 hover:bg-orange-500/20 hover:text-orange-400 text-white/40 flex items-center justify-center transition">
                  <Pencil size={13} />
                </button>
                <button onClick={() => setDelId(p.id)}
                  className="h-8 w-8 rounded-lg bg-white/5 hover:bg-red-500/20 hover:text-red-400 text-white/40 flex items-center justify-center transition">
                  <Trash2 size={13} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Add/Edit modal */}
      <AnimatePresence>
        {modal && (
          <Modal title={modal === "add" ? "Add Product" : "Edit Product"} onClose={() => setModal(false)}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Field label="Product Name">
                  <input className={inp} value={form.name} placeholder="e.g. GRG H22V"
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
                </Field>
                <Field label="Badge">
                  <input className={inp} value={form.badge} placeholder="e.g. New"
                    onChange={e => setForm(p => ({ ...p, badge: e.target.value }))} />
                </Field>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Type">
                  <input className={inp} value={form.type} placeholder="Cash Dispenser ATM"
                    onChange={e => setForm(p => ({ ...p, type: e.target.value }))} />
                </Field>
                <Field label="Category">
                  <input className={inp} value={form.category} placeholder="Full-Function ATM"
                    onChange={e => setForm(p => ({ ...p, category: e.target.value }))} />
                </Field>
              </div>
              <Field label="Tagline">
                <input className={inp} value={form.tagline} placeholder="Short one-liner"
                  onChange={e => setForm(p => ({ ...p, tagline: e.target.value }))} />
              </Field>
              <Field label="Description">
                <textarea className={`${inp} resize-none`} rows={3} value={form.description}
                  placeholder="Product description..." onChange={e => setForm(p => ({ ...p, description: e.target.value }))} />
              </Field>
              <Field label="Brochure / Manual URL">
                <input className={inp} value={form.manualUrl} placeholder="https://..."
                  onChange={e => setForm(p => ({ ...p, manualUrl: e.target.value }))} />
              </Field>
              <SaveBar onCancel={() => setModal(false)} onSave={handleSave} saving={saving} />
            </div>
          </Modal>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {delId && (
          <ConfirmDelete
            message="Remove this product?"
            onCancel={() => setDelId(null)}
            onConfirm={() => handleDelete(delId)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ManageProducts;
