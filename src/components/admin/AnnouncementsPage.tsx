import { useState } from "react";
import { Plus, Megaphone, Trash2, Edit } from "lucide-react";

const initialAnnouncements = [
  { id: 1, title: "System Maintenance", message: "Scheduled maintenance on March 5th, 2026 from 2-4 AM.", type: "warning", active: true },
  { id: 2, title: "New Feature: Virtual Numbers", message: "We now support 80+ countries for virtual numbers!", type: "info", active: true },
  { id: 3, title: "Holiday Promo", message: "Get 30% off all data bundles this weekend.", type: "promo", active: false },
];

const AnnouncementsPage = () => {
  const [announcements, setAnnouncements] = useState(initialAnnouncements);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", message: "", type: "info" });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setAnnouncements(prev => [{ id: Date.now(), ...form, active: true }, ...prev]);
    setForm({ title: "", message: "", type: "info" });
    setShowForm(false);
  };

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-foreground">Announcements</h1>
          <p className="text-sm text-muted-foreground">Broadcast messages to all users</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="h-10 px-4 rounded-xl gradient-primary text-primary-foreground text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-all glow-primary">
          <Plus className="h-4 w-4" /> New
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleAdd} className="rounded-xl border border-border bg-card p-5 space-y-4">
          <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="Announcement title" className="w-full h-10 px-3 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
          <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Message..." rows={3} className="w-full px-3 py-2 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
          <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} className="h-10 px-3 rounded-xl bg-secondary border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
            <option value="info">Info</option>
            <option value="warning">Warning</option>
            <option value="promo">Promo</option>
          </select>
          <button type="submit" className="h-10 px-6 rounded-xl gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90">Publish</button>
        </form>
      )}

      <div className="space-y-3">
        {announcements.map((a) => (
          <div key={a.id} className="rounded-xl border border-border bg-card p-5 flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-lg shrink-0 ${a.type === "warning" ? "bg-warning/10" : a.type === "promo" ? "bg-primary/10" : "bg-accent/10"}`}>
                <Megaphone className={`h-4 w-4 ${a.type === "warning" ? "text-warning" : a.type === "promo" ? "text-primary" : "text-accent"}`} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm font-bold text-foreground">{a.title}</h3>
                  <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${a.active ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}`}>
                    {a.active ? "Active" : "Inactive"}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{a.message}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button className="p-1.5 rounded-lg hover:bg-secondary transition-colors"><Edit className="h-3.5 w-3.5 text-muted-foreground" /></button>
              <button onClick={() => setAnnouncements(prev => prev.filter(x => x.id !== a.id))} className="p-1.5 rounded-lg hover:bg-destructive/10 transition-colors"><Trash2 className="h-3.5 w-3.5 text-destructive" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsPage;
