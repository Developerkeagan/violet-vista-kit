import { Eye, EyeOff, ChevronDown, ChevronUp, ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const recentTxns = [
  { type: "Data Purchase", desc: "MTN 2GB", amount: "-₦520", status: "success", time: "2 min ago", dir: "out" },
  { type: "Deposit", desc: "Bank Transfer", amount: "+₦5,000", status: "success", time: "1 hr ago", dir: "in" },
  { type: "Airtime", desc: "Airtel ₦500", amount: "-₦490", status: "success", time: "3 hrs ago", dir: "out" },
  { type: "Commission", desc: "Referral bonus", amount: "+₦250", status: "success", time: "Yesterday", dir: "in" },
  { type: "SMM Order", desc: "IG Followers", amount: "-₦3,200", status: "pending", time: "Yesterday", dir: "out" },
];

interface BalanceCardProps {
  onViewAllTransactions?: () => void;
}

const BalanceCard = ({ onViewAllTransactions }: BalanceCardProps) => {
  const [visible, setVisible] = useState(true);
  const [historyOpen, setHistoryOpen] = useState(false);

  return (
    <div>
      <div className="gradient-balance rounded-2xl p-5 glow-primary">
        <div className="flex items-center justify-between mb-1">
          <p className="text-sm font-medium text-primary-foreground/80">Welcome back,</p>
          <button
            onClick={() => setHistoryOpen(!historyOpen)}
            className="flex items-center gap-1 text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            History {historyOpen ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
          </button>
        </div>
        <h2 className="text-lg font-bold text-primary-foreground mb-4">Keagan 👋</h2>

        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <p className="text-xs text-primary-foreground/70">Available Balance</p>
              <button onClick={() => setVisible(!visible)} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {visible ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
              </button>
            </div>
            <p className="text-2xl font-extrabold text-primary-foreground">
              {visible ? "₦12,450.00" : "****"}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-primary-foreground/70 mb-1">Commission</p>
            <p className="text-lg font-bold text-primary-foreground">
              {visible ? "₦320.50" : "****"}
            </p>
          </div>
        </div>
      </div>

      {/* Recent Transactions Dropdown */}
      {historyOpen && (
        <div className="mt-3 rounded-xl border border-border bg-card overflow-hidden animate-in slide-in-from-top-2 duration-200">
          <div className="p-3 border-b border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Recent Transactions</p>
          </div>
          <div className="divide-y divide-border">
            {recentTxns.map((tx, i) => (
              <div key={i} className="flex items-center justify-between px-3 py-2.5">
                <div className="flex items-center gap-2.5">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${tx.dir === "in" ? "bg-success/10" : "bg-secondary"}`}>
                    {tx.dir === "in"
                      ? <ArrowDownLeft className="h-3.5 w-3.5 text-success" />
                      : <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                    }
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">{tx.type}</p>
                    <p className="text-[10px] text-muted-foreground">{tx.desc} · {tx.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-xs font-semibold ${tx.dir === "in" ? "text-success" : "text-foreground"}`}>{tx.amount}</p>
                  <span className={`text-[9px] font-semibold px-1 py-0.5 rounded-full ${
                    tx.status === "success" ? "bg-success/10 text-success" :
                    tx.status === "pending" ? "bg-warning/10 text-warning" :
                    "bg-destructive/10 text-destructive"
                  }`}>{tx.status}</span>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={onViewAllTransactions}
            className="w-full p-2.5 text-xs font-semibold text-primary hover:bg-secondary/50 transition-colors border-t border-border"
          >
            View All Transactions →
          </button>
        </div>
      )}
    </div>
  );
};

export default BalanceCard;
