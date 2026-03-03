import { ArrowDownLeft, ArrowUpRight, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const allTransactions = [
  { id: 1, type: "Data Purchase", desc: "MTN 2GB", amount: "-₦520", status: "success", date: "Dec 20, 2024", time: "2:30 PM", dir: "out" },
  { id: 2, type: "Deposit", desc: "Bank Transfer", amount: "+₦5,000", status: "success", date: "Dec 20, 2024", time: "1:15 PM", dir: "in" },
  { id: 3, type: "Airtime", desc: "Airtel ₦500", amount: "-₦490", status: "success", date: "Dec 19, 2024", time: "6:45 PM", dir: "out" },
  { id: 4, type: "SMM Order", desc: "IG Followers x1000", amount: "-₦3,200", status: "pending", date: "Dec 19, 2024", time: "3:20 PM", dir: "out" },
  { id: 5, type: "Commission", desc: "Referral bonus", amount: "+₦250", status: "success", date: "Dec 18, 2024", time: "9:00 AM", dir: "in" },
  { id: 6, type: "Data Purchase", desc: "Glo 1GB", amount: "-₦250", status: "success", date: "Dec 17, 2024", time: "11:30 AM", dir: "out" },
  { id: 7, type: "Virtual Number", desc: "US WhatsApp", amount: "-₦300", status: "success", date: "Dec 16, 2024", time: "4:15 PM", dir: "out" },
  { id: 8, type: "Deposit", desc: "Card Payment", amount: "+₦10,000", status: "success", date: "Dec 15, 2024", time: "10:00 AM", dir: "in" },
  { id: 9, type: "Airtime", desc: "MTN ₦1000", amount: "-₦980", status: "failed", date: "Dec 14, 2024", time: "7:45 PM", dir: "out" },
  { id: 10, type: "SMM Order", desc: "TikTok Views x5000", amount: "-₦1,500", status: "success", date: "Dec 13, 2024", time: "2:00 PM", dir: "out" },
];

const UserTransactionsPage = () => {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? allTransactions : allTransactions.filter((t) => t.status === filter);

  return (
    <div className="max-w-lg mx-auto px-4 py-4 pb-28 lg:max-w-2xl">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-lg font-bold text-foreground">Transaction History</h1>
        <div className="flex items-center gap-1">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="text-xs bg-secondary border border-border rounded-lg px-2 py-1.5 text-foreground focus:outline-none"
          >
            <option value="all">All</option>
            <option value="success">Success</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        {filtered.map((tx) => (
          <Card key={tx.id} className="border-border bg-card rounded-xl">
            <CardContent className="p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                  tx.dir === "in" ? "bg-success/10" : "bg-secondary"
                }`}>
                  {tx.dir === "in"
                    ? <ArrowDownLeft className="h-4 w-4 text-success" />
                    : <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  }
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{tx.type}</p>
                  <p className="text-[11px] text-muted-foreground">{tx.desc} · {tx.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-sm font-semibold ${tx.dir === "in" ? "text-success" : "text-foreground"}`}>{tx.amount}</p>
                <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
                  tx.status === "success" ? "bg-success/10 text-success" :
                  tx.status === "pending" ? "bg-warning/10 text-warning" :
                  "bg-destructive/10 text-destructive"
                }`}>{tx.status}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserTransactionsPage;
