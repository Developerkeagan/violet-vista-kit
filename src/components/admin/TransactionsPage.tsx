import { useState } from "react";
import { Search, Filter, Download } from "lucide-react";

const transactions = [
  { id: "TXN001", user: "Adebayo O.", type: "Data Purchase", amount: "₦1,500", profit: "₦75", status: "success", date: "Mar 2, 2026" },
  { id: "TXN002", user: "Chioma N.", type: "SMM Order", amount: "₦3,200", profit: "₦320", status: "success", date: "Mar 2, 2026" },
  { id: "TXN003", user: "Ibrahim K.", type: "Deposit", amount: "₦10,000", profit: "—", status: "pending", date: "Mar 1, 2026" },
  { id: "TXN004", user: "Favour A.", type: "Number Purchase", amount: "₦800", profit: "₦120", status: "success", date: "Mar 1, 2026" },
  { id: "TXN005", user: "Emeka J.", type: "Withdrawal", amount: "₦5,000", profit: "—", status: "failed", date: "Feb 28, 2026" },
  { id: "TXN006", user: "Amina B.", type: "Airtime", amount: "₦500", profit: "₦15", status: "success", date: "Feb 28, 2026" },
  { id: "TXN007", user: "Grace O.", type: "SMM Order", amount: "₦1,800", profit: "₦180", status: "success", date: "Feb 27, 2026" },
  { id: "TXN008", user: "Daniel A.", type: "Data Purchase", amount: "₦2,000", profit: "₦100", status: "success", date: "Feb 27, 2026" },
];

const TransactionsPage = () => {
  const [search, setSearch] = useState("");
  const filtered = transactions.filter(t => t.user.toLowerCase().includes(search.toLowerCase()) || t.id.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-foreground">Transactions</h1>
          <p className="text-sm text-muted-foreground">All platform transactions</p>
        </div>
        <button className="h-10 px-4 rounded-xl bg-secondary border border-border text-sm font-medium text-foreground flex items-center gap-2 hover:bg-muted transition-colors">
          <Download className="h-4 w-4" /> Export
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by user or ID..." className="w-full h-10 pl-10 pr-4 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
        <button className="h-10 px-4 rounded-xl bg-secondary border border-border text-sm font-medium text-foreground flex items-center gap-2 hover:bg-muted transition-colors">
          <Filter className="h-4 w-4" /> Filter
        </button>
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary/50">
                {["ID", "User", "Type", "Amount", "Profit", "Status", "Date"].map(h => (
                  <th key={h} className="text-left text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-4 py-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((tx) => (
                <tr key={tx.id} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                  <td className="px-4 py-3 text-xs font-mono text-muted-foreground">{tx.id}</td>
                  <td className="px-4 py-3 text-sm font-medium text-foreground">{tx.user}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{tx.type}</td>
                  <td className="px-4 py-3 text-sm font-semibold text-foreground">{tx.amount}</td>
                  <td className="px-4 py-3 text-sm font-semibold text-primary">{tx.profit}</td>
                  <td className="px-4 py-3">
                    <span className={`text-[10px] font-semibold px-2 py-1 rounded-full ${
                      tx.status === "success" ? "bg-success/10 text-success" :
                      tx.status === "pending" ? "bg-warning/10 text-warning" :
                      "bg-destructive/10 text-destructive"
                    }`}>{tx.status}</span>
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{tx.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
