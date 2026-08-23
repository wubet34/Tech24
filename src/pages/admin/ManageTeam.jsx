import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Pencil, Trash2, UserCircle2 } from "lucide-react";
import { demoTeam } from "../../services/demoData";
import { Modal, Field, SaveBar, ConfirmDelete } from "./ManageServices";
// import { teamAPI } from "../../services/api"; // ← uncomment when backend ready

const inp = "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white text-sm placeholder:text-white/25 outline-none focus:border-orange-500/50 transition";
const EMPTY = { name: "", role: "", bio: "" };

const ManageTeam = () => {
  const [items, setItems]   = useState(demoTeam);
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
        setItems(prev => [...prev, { ...form, id: Date.now(), icon: "UserCircle2" }]);
      } else {
        setItems(prev => prev.map(t => t.id === editId ? { ...form, id: editId } : t));
      }
      setModal(false);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    setItems(prev => prev.filter(t => t.id !== id));
    setDelId(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-black text-white mb-1">Team Members</h2>
          <p className="text-white/40 text-sm">{items.length} members shown on the About page</p>
        </div>
        <motion.button onClick={openAdd}
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white"
        >
          <Plus size={16} /> Add Member
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {items.map((t, i) => (
          <motion.div key={t.id}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="glass-card rounded-2xl p-6 text-center relative group"
          >
            {/* Actions overlay */}
            <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition">
              <button onClick={() => openEdit(t)}
                className="h-7 w-7 rounded-lg bg-white/5 hover:bg-orange-500/20 hover:text-orange-400 text-white/40 flex items-center justify-center transition">
                <Pencil size={12} />
              </button>
              <button onClick={() => setDelId(t.id)}
                className="h-7 w-7 rounded-lg bg-white/5 hover:bg-red-500/20 hover:text-red-400 text-white/40 flex items-center justify-center transition">
                <Trash2 size={12} />
              </button>
            </div>
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/20 flex items-center justify-center mx-auto mb-4">
              <UserCircle2 className="text-orange-400" size={30} />
            </div>
            <p className="text-white font-bold text-sm mb-0.5">{t.name}</p>
            <p className="text-orange-400 text-xs font-semibold mb-2">{t.role}</p>
            <p className="text-white/35 text-xs leading-relaxed">{t.bio}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {modal && (
          <Modal title={modal === "add" ? "Add Team Member" : "Edit Member"} onClose={() => setModal(false)}>
            <div className="space-y-4">
              <Field label="Full Name">
                <input className={inp} value={form.name} placeholder="Full name"
                  onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
              </Field>
              <Field label="Role / Title">
                <input className={inp} value={form.role} placeholder="e.g. Technical Director"
                  onChange={e => setForm(p => ({ ...p, role: e.target.value }))} />
              </Field>
              <Field label="Bio">
                <textarea className={`${inp} resize-none`} rows={3} value={form.bio} placeholder="Short bio"
                  onChange={e => setForm(p => ({ ...p, bio: e.target.value }))} />
              </Field>
              <SaveBar onCancel={() => setModal(false)} onSave={handleSave} saving={saving} />
            </div>
          </Modal>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {delId && (
          <ConfirmDelete
            message="Remove this team member from the website?"
            onCancel={() => setDelId(null)}
            onConfirm={() => handleDelete(delId)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ManageTeam;
