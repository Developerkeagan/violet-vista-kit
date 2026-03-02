import { useState } from "react";
import { Search, CreditCard, CheckCircle, AlertCircle } from "lucide-react";

const DirectDeposit = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [deposited, setDeposited] = useState(false);

  const handleDeposit = (e: React.FormEvent) => {
    e.preventDefault();
    setDeposited(true);
    setTimeout(() => setDeposited(false), 3000);
  };

  const recentDeposits = [
    { user: "Adebayo O.", amount: "₦5,000", time: "Today, 2:30 PM", admin: "Admin" },
    { user: "Chioma N.", amount: "₦10,000", time: "Today, 1:15 PM", admin: "Admin" },
    { user: "Ibrahim K.", amount: "₦2,500", time: "Yesterday, 4:00 PM", admin: "Admin" },
  ];

  return (
    <div className="space-y-5 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-foreground">Direct Deposit</h1>
        <p className="text-sm text-muted-foreground">Manually credit user accounts</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-primary" /> Make Deposit
          </h3>

          {deposited && (
            <div className="mb-4 p-3 rounded-xl bg-success/10 border border-success/20 flex items-center gap-2 text-success text-sm font-medium">
              <CheckCircle className="h-4 w-4" /> Deposit successful!
            </div>
          )}

          <form onSubmit={handleDeposit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">User Email</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="user@email.com" className="w-full h-10 pl-10 pr-4 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Amount (₦)</label>
              <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="0.00" className="w-full h-10 px-3 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Note (optional)</label>
              <textarea value={note} onChange={e => setNote(e.target.value)} placeholder="Reason for deposit..." rows={3} className="w-full px-3 py-2 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            </div>

            <div className="p-3 rounded-lg bg-warning/10 border border-warning/20 flex items-start gap-2">
              <AlertCircle className="h-4 w-4 text-warning shrink-0 mt-0.5" />
              <p className="text-[11px] text-warning">This action will directly credit the user's wallet balance. This cannot be undone.</p>
            </div>

            <button type="submit" className="w-full h-11 rounded-xl gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all glow-primary">
              Confirm Deposit
            </button>
          </form>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-bold text-foreground mb-4">Recent Deposits</h3>
          <div className="space-y-3">
            {recentDeposits.map((d, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 border border-border">
                <div>
                  <p className="text-sm font-medium text-foreground">{d.user}</p>
                  <p className="text-[11px] text-muted-foreground">{d.time} · by {d.admin}</p>
                </div>
                <p className="text-sm font-bold text-success">{d.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectDeposit;
