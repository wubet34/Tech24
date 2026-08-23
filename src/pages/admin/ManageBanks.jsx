import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Pencil, Trash2, Building2 } from "lucide-react";
import { useSiteData } from "../../context/SiteDataContext";
import { Modal, Field, SaveBar, ConfirmDelete } from "./ManageServices";
// import { banksAPI } from "../../services/api"; // ← uncomment when backend ready

const inp = "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white text-sm placeholder:text-white/25 outline-none focus:border-orange-500/50 transition";
const EMPTY = { name: "", years: "1+ years", atms: 0, status: "active", contact: "" };

const ManageBanks = () => {
  const { banks, setBanks } = useSiteData();
  const [modal, setModal]   = useState(false);
  const [form, setForm]     = useState(EMPTY);
  const [editId, setEditId] = useState(null);
  const [delId, setDelId]   = useState(null);
  const [saving, setSaving] = useState(false);

  const openAdd  = () => { setForm(EMPTY); setEditId(null); setModal("add"); };
  const openEdit = (item) => { setForm({ ...item }); setEditId(item.id); setModal("edit"); };

  const handleSave = async () => {
    if (!form.name.trim()) return;
    setSaving(true);
    try {
      if (modal === "add") {
        // const created = await banksAPI.create(form);
        setBanks([...banks, { ...form, id: Date.now() }]);
      } else {
        // await banksAPI.update(editId, form);
        setBanks(banks.map(b => b.id === editId ? { ...form, id: editId } : b));
      }
      setModal(false);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    // await banksAPI.delete(id);
    setBanks(banks.filter(b => b.id !== id));
    setDelId(null);
  };

  const total = banks.reduce((sum, b) => sum + Number(b.atms || 0), 0);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-black text-white mb-1">Partner Banks</h2>
          <p className="text-white/40 text-sm">{banks.length} banks · {total} ATMs managed</p>
        </div>
        <motion.button onClick={openAdd}
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white"
        >
          <Plus size={16} /> Add Bank
        </motion.button>
      </div>

      {/* Table */}
      <div className="glass-card rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5">
              {["Bank Name", "Partnership", "ATMs", "Contact", "Status", "Actions"].map(h => (
                <th key={h} className="px-5 py-4 text-left text-xs font-semibold text-white/30 uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {banks.map((b, i) => (
              <motion.tr key={b.id}
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                className="border-b border-white/5 hover:bg-white/3 transition-colors"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-orange-500/10 flex items-center justify-center">
                      <Building2 className="text-orange-400" size={16} />
                    </div>
                    <span className="text-white font-medium">{b.name}</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-white/50">{b.years}</td>
                <td className="px-5 py-4 text-white font-semibold">{b.atms}</td>
                <td className="px-5 py-4 text-white/40 text-xs">{b.contact}</td>
                <td className="px-5 py-4">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium
                    ${b.status === "active" ? "bg-green-500/15 text-green-400" : "bg-white/8 text-white/40"}`}>
                    {b.status}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex gap-2">
                    <button onClick={() => openEdit(b)}
                      className="h-8 w-8 rounded-lg bg-white/5 hover:bg-orange-500/20 hover:text-orange-400 text-white/40 flex items-center justify-center transition">
                      <Pencil size={13} />
                    </button>
                    <button onClick={() => setDelId(b.id)}
                      className="h-8 w-8 rounded-lg bg-white/5 hover:bg-red-500/20 hover:text-red-400 text-white/40 flex items-center justify-center transition">
                      <Trash2 size={13} />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <AnimatePresence>
        {modal && (
          <Modal title={modal === "add" ? "Add Partner Bank" : "Edit Bank"} onClose={() => setModal(false)}>
            <div className="space-y-4">
              <Field label="Bank Name">
                <input className={inp} value={form.name} placeholder="e.g. Awash Bank"
                  onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Partnership Duration">
                  <input className={inp} value={form.years} placeholder="e.g. 2+ years"
                    onChange={e => setForm(p => ({ ...p, years: e.target.value }))} />
                </Field>
                <Field label="Number of ATMs">
                  <input type="number" className={inp} value={form.atms} min={0}
                    onChange={e => setForm(p => ({ ...p, atms: e.target.value }))} />
                </Field>
              </div>
              <Field label="Contact Email">
                <input type="email" className={inp} value={form.contact} placeholder="contact@bank.et"
                  onChange={e => setForm(p => ({ ...p, contact: e.target.value }))} />
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

      <AnimatePresence>
        {delId && (
          <ConfirmDelete
            message="Remove this bank from the partner list?"
            onCancel={() => setDelId(null)}
            onConfirm={() => handleDelete(delId)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ManageBanks;
