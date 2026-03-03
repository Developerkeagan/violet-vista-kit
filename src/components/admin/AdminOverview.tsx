import { Users, DollarSign, UserCheck, CreditCard, TrendingUp, TrendingDown } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const stats = [
  { label: "Total Users", value: "12,847", icon: Users, change: "+12.5%", trend: "up", color: "from-primary to-accent" },
  { label: "Revenue Gain", value: "₦4,235,000", icon: DollarSign, change: "+8.2%", trend: "up", color: "from-accent to-primary" },
  { label: "Active Users", value: "3,456", icon: UserCheck, change: "+5.1%", trend: "up", color: "from-primary to-accent" },
  { label: "Total Deposits", value: "₦8,921,000", icon: CreditCard, change: "+15.3%", trend: "up", color: "from-accent to-primary" },
];

const userHistory = [
  { month: "Jan", users: 4200 }, { month: "Feb", users: 5300 }, { month: "Mar", users: 6100 },
  { month: "Apr", users: 7400 }, { month: "May", users: 8200 }, { month: "Jun", users: 9500 },
  { month: "Jul", users: 10200 }, { month: "Aug", users: 11000 }, { month: "Sep", users: 11800 },
  { month: "Oct", users: 12100 }, { month: "Nov", users: 12500 }, { month: "Dec", users: 12847 },
];

const revenueHistory = [
  { month: "Jan", revenue: 1200000 }, { month: "Feb", revenue: 1800000 }, { month: "Mar", revenue: 2100000 },
  { month: "Apr", revenue: 2600000 }, { month: "May", revenue: 2900000 }, { month: "Jun", revenue: 3200000 },
  { month: "Jul", revenue: 3500000 }, { month: "Aug", revenue: 3700000 }, { month: "Sep", revenue: 3900000 },
  { month: "Oct", revenue: 4000000 }, { month: "Nov", revenue: 4100000 }, { month: "Dec", revenue: 4235000 },
];

const recentTransactions = [
  { user: "Adebayo O.", type: "Data Purchase", amount: "₦1,500", status: "success", time: "2 min ago" },
  { user: "Chioma N.", type: "SMM Order", amount: "₦3,200", status: "success", time: "5 min ago" },
  { user: "Ibrahim K.", type: "Deposit", amount: "₦10,000", status: "pending", time: "8 min ago" },
  { user: "Favour A.", type: "Number Purchase", amount: "₦800", status: "success", time: "12 min ago" },
  { user: "Emeka J.", type: "Withdrawal", amount: "₦5,000", status: "failed", time: "15 min ago" },
];

const AdminOverview = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-sm text-muted-foreground">Welcome back, Admin</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-card p-4 hover:border-primary/30 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color}`}>
                <stat.icon className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="flex items-center gap-1 text-xs font-semibold text-success">
                <TrendingUp className="h-3 w-3" />
                {stat.change}
              </div>
            </div>
            <p className="text-lg font-bold text-foreground">{stat.value}</p>
            <p className="text-[11px] text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Users Chart */}
        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-bold text-foreground mb-4">User Growth</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={userHistory}>
                <defs>
                  <linearGradient id="userGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(270, 70%, 60%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(270, 70%, 60%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(260, 15%, 22%)" />
                <XAxis dataKey="month" tick={{ fill: "hsl(260, 10%, 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "hsl(260, 10%, 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "hsl(260, 18%, 14%)", border: "1px solid hsl(260, 15%, 22%)", borderRadius: "8px", color: "hsl(0, 0%, 98%)", fontSize: 12 }} />
                <Area type="monotone" dataKey="users" stroke="hsl(270, 70%, 60%)" fill="url(#userGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="text-sm font-bold text-foreground mb-4">Revenue History</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueHistory}>
                <defs>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(290, 80%, 50%)" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="hsl(270, 70%, 55%)" stopOpacity={0.6} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(260, 15%, 22%)" />
                <XAxis dataKey="month" tick={{ fill: "hsl(260, 10%, 55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "hsl(260, 10%, 55%)", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `₦${(v / 1000000).toFixed(1)}M`} />
                <Tooltip contentStyle={{ background: "hsl(260, 18%, 14%)", border: "1px solid hsl(260, 15%, 22%)", borderRadius: "8px", color: "hsl(0, 0%, 98%)", fontSize: 12 }} formatter={(value: number) => [`₦${value.toLocaleString()}`, "Revenue"]} />
                <Bar dataKey="revenue" fill="url(#revGrad)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="text-sm font-bold text-foreground mb-4">Recent Transactions</h3>
        <div className="space-y-3">
          {recentTransactions.map((tx, i) => (
            <div key={i} className="flex items-center justify-between py-2.5 border-b border-border last:border-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                  <span className="text-[10px] font-bold text-foreground">{tx.user.split(" ").map(n => n[0]).join("")}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{tx.user}</p>
                  <p className="text-[11px] text-muted-foreground">{tx.type} · {tx.time}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-foreground">{tx.amount}</p>
                <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
                  tx.status === "success" ? "bg-success/10 text-success" :
                  tx.status === "pending" ? "bg-warning/10 text-warning" :
                  "bg-destructive/10 text-destructive"
                }`}>{tx.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
