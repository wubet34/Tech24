import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Pencil, Trash2, AlertTriangle, Package } from "lucide-react";
import { demoInventory } from "../../services/demoData";
import { Modal, Field, SaveBar, ConfirmDelete } from "./ManageServices";
// import { inventoryAPI } from "../../services/api"; // ← uncomment when backend ready

const inp = "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white text-sm placeholder:text-white/25 outline-none focus:border-orange-500/50 transition";
const EMPTY = { partName: "", partNumber: "", quantity: 0, minStock: 5, unit: "pcs", supplier: "" };

const Inventory = () => {
  const [items, setItems]   = useState(demoInventory);
  const [modal, setModal]   = useState(false);
  const [form, setForm]     = useState(EMPTY);
  const [editId, setEditId] = useState(null);
  const [delId, setDelId]   = useState(null);
  const [saving, setSaving] = useState(false);

  const openAdd  = () => { setForm(EMPTY); setEditId(null); setModal("add"); };
  const openEdit = (item) => { setForm({ ...item }); setEditId(item.id); setModal("edit"); };

  const handleSave = async () => {
    if (!form.partName.trim()) return;
    setSaving(true);
    try {
      if (modal === "add") {
        setItems(prev => [...prev, { ...form, id: Date.now(), lastUpdated: new Date().toISOString().split("T")[0] }]);
      } else {
        setItems(prev => prev.map(i => i.id === editId ? { ...form, id: editId, lastUpdated: new Date().toISOString().split("T")[0] } : i));
      }
      setModal(false);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    setItems(prev => prev.filter(i => i.id !== id));
    setDelId(null);
  };

  const lowStock = items.filter(i => i.quantity <= i.minStock);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-black text-white mb-1">Spare Parts Inventory</h2>
          <p className="text-white/40 text-sm">{items.length} parts tracked · {lowStock.length} low in stock</p>
        </div>
        <motion.button onClick={openAdd}
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white"
        >
          <Plus size={16} /> Add Part
        </motion.button>
      </div>

      {/* Low stock warning */}
      {lowStock.length > 0 && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 rounded-2xl bg-red-500/10 border border-red-500/20 px-5 py-4 mb-6"
        >
          <AlertTriangle className="text-red-400 shrink-0" size={18} />
          <p className="text-red-400 text-sm">
            <span className="font-bold">{lowStock.length} part{lowStock.length > 1 ? "s" : ""}</span> at or below minimum stock level:{" "}
            {lowStock.map(i => i.partName).join(", ")}
          </p>
        </motion.div>
      )}

      <div className="glass-card rounded-2xl overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5">
              {["Part Name", "Part Number", "Qty", "Min Stock", "Unit", "Supplier", "Updated", "Actions"].map(h => (
                <th key={h} className="px-5 py-4 text-left text-xs font-semibold text-white/30 uppercase tracking-wider whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => {
              const isLow = item.quantity <= item.minStock;
              return (
                <motion.tr key={item.id}
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="border-b border-white/5 hover:bg-white/3 transition-colors"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                        <Package className="text-orange-400" size={14} />
                      </div>
                      <span className="text-white font-medium whitespace-nowrap">{item.partName}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-white/40 text-xs font-mono">{item.partNumber}</td>
                  <td className="px-5 py-4">
                    <span className={`font-bold text-base ${isLow ? "text-red-400" : "text-white"}`}>
                      {item.quantity}
                    </span>
                    {isLow && <AlertTriangle className="inline ml-1 text-red-400" size={13} />}
                  </td>
                  <td className="px-5 py-4 text-white/40">{item.minStock}</td>
                  <td className="px-5 py-4 text-white/40">{item.unit}</td>
                  <td className="px-5 py-4 text-white/40 text-xs whitespace-nowrap">{item.supplier}</td>
                  <td className="px-5 py-4 text-white/30 text-xs whitespace-nowrap">{item.lastUpdated}</td>
                  <td className="px-5 py-4">
                    <div className="flex gap-2">
                      <button onClick={() => openEdit(item)}
                        className="h-8 w-8 rounded-lg bg-white/5 hover:bg-orange-500/20 hover:text-orange-400 text-white/40 flex items-center justify-center transition">
                        <Pencil size={13} />
                      </button>
                      <button onClick={() => setDelId(item.id)}
                        className="h-8 w-8 rounded-lg bg-white/5 hover:bg-red-500/20 hover:text-red-400 text-white/40 flex items-center justify-center transition">
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <AnimatePresence>
        {modal && (
          <Modal title={modal === "add" ? "Add Part" : "Edit Part"} onClose={() => setModal(false)}>
            <div className="space-y-4">
              <Field label="Part Name">
                <input className={inp} value={form.partName} placeholder="e.g. Cash Cassette"
                  onChange={e => setForm(p => ({ ...p, partName: e.target.value }))} />
              </Field>
              <Field label="Part Number">
                <input className={inp} value={form.partNumber} placeholder="e.g. GRG-CC-001"
                  onChange={e => setForm(p => ({ ...p, partNumber: e.target.value }))} />
              </Field>
              <div className="grid grid-cols-3 gap-3">
                <Field label="Quantity">
                  <input type="number" className={inp} value={form.quantity} min={0}
                    onChange={e => setForm(p => ({ ...p, quantity: Number(e.target.value) }))} />
                </Field>
                <Field label="Min Stock">
                  <input type="number" className={inp} value={form.minStock} min={0}
                    onChange={e => setForm(p => ({ ...p, minStock: Number(e.target.value) }))} />
                </Field>
                <Field label="Unit">
                  <input className={inp} value={form.unit} placeholder="pcs"
                    onChange={e => setForm(p => ({ ...p, unit: e.target.value }))} />
                </Field>
              </div>
              <Field label="Supplier">
                <input className={inp} value={form.supplier} placeholder="Supplier name"
                  onChange={e => setForm(p => ({ ...p, supplier: e.target.value }))} />
              </Field>
              <SaveBar onCancel={() => setModal(false)} onSave={handleSave} saving={saving} />
            </div>
          </Modal>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {delId && (
          <ConfirmDelete
            message="Remove this part from inventory?"
            onCancel={() => setDelId(null)}
            onConfirm={() => handleDelete(delId)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Inventory;
