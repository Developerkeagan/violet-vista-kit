import { MessageSquare, Clock, CheckCircle, AlertCircle } from "lucide-react";

const tickets = [
  { id: "TKT-001", user: "Adebayo O.", subject: "Failed transaction not refunded", priority: "high", status: "open", time: "2 hours ago" },
  { id: "TKT-002", user: "Chioma N.", subject: "Can't activate virtual number", priority: "medium", status: "open", time: "5 hours ago" },
  { id: "TKT-003", user: "Ibrahim K.", subject: "Wrong data bundle delivered", priority: "high", status: "in-progress", time: "1 day ago" },
  { id: "TKT-004", user: "Favour A.", subject: "How to withdraw commissions", priority: "low", status: "resolved", time: "2 days ago" },
  { id: "TKT-005", user: "Emeka J.", subject: "Account verification issue", priority: "medium", status: "open", time: "3 days ago" },
];

const SupportTickets = () => {
  return (
    <div className="space-y-5 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-foreground">Support Tickets</h1>
        <p className="text-sm text-muted-foreground">Manage user support requests</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Open", value: 3, icon: AlertCircle, color: "text-warning" },
          { label: "In Progress", value: 1, icon: Clock, color: "text-primary" },
          { label: "Resolved", value: 1, icon: CheckCircle, color: "text-success" },
          { label: "Total", value: 5, icon: MessageSquare, color: "text-foreground" },
        ].map(s => (
          <div key={s.label} className="rounded-xl border border-border bg-card p-4 text-center">
            <s.icon className={`h-5 w-5 mx-auto mb-2 ${s.color}`} />
            <p className="text-lg font-bold text-foreground">{s.value}</p>
            <p className="text-[11px] text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        {tickets.map(t => (
          <div key={t.id} className="rounded-xl border border-border bg-card p-4 flex items-center justify-between hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full shrink-0 ${t.priority === "high" ? "bg-destructive" : t.priority === "medium" ? "bg-warning" : "bg-muted-foreground"}`} />
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[11px] font-mono text-muted-foreground">{t.id}</span>
                  <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
                    t.status === "open" ? "bg-warning/10 text-warning" :
                    t.status === "in-progress" ? "bg-primary/10 text-primary" :
                    "bg-success/10 text-success"
                  }`}>{t.status}</span>
                </div>
                <p className="text-sm font-medium text-foreground">{t.subject}</p>
                <p className="text-[11px] text-muted-foreground">{t.user} · {t.time}</p>
              </div>
            </div>
            <button className="h-8 px-3 rounded-lg bg-secondary text-xs font-medium text-foreground hover:bg-muted transition-colors">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportTickets;
