import {
  Users, Wallet, Smartphone, CheckCircle2, TrendingUp, Gift, ArrowUpRight, ArrowDownRight,
  BarChart3
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const stats = [
  {
    label: "Total Balance",
    value: "₦12,450.00",
    icon: Wallet,
    change: "+₦2,300",
    trend: "up" as const,
    color: "from-primary to-accent",
  },
  {
    label: "Total Spent",
    value: "₦87,600.00",
    icon: TrendingUp,
    change: "+₦4,500 this week",
    trend: "up" as const,
    color: "from-purple-500 to-pink-500",
  },
  {
    label: "Commission Balance",
    value: "₦3,200.00",
    icon: Gift,
    change: "+₦800 this month",
    trend: "up" as const,
    color: "from-emerald-500 to-teal-500",
  },
  {
    label: "Total Referrals",
    value: "24",
    icon: Users,
    change: "+5 this month",
    trend: "up" as const,
    color: "from-orange-500 to-amber-500",
  },
  {
    label: "Virtual Numbers Bought",
    value: "38",
    icon: Smartphone,
    change: "+12 this month",
    trend: "up" as const,
    color: "from-cyan-500 to-blue-500",
  },
  {
    label: "Successful Transactions",
    value: "156",
    icon: CheckCircle2,
    change: "98% success rate",
    trend: "up" as const,
    color: "from-green-500 to-emerald-500",
  },
];

const recentActivity = [
  { type: "Data Bundle", detail: "MTN 2GB", amount: "-₦520", time: "2 mins ago", status: "success" },
  { type: "Social Boost", detail: "TikTok 1K Followers", amount: "-₦1,500", time: "1 hour ago", status: "success" },
  { type: "Virtual Number", detail: "WhatsApp NG", amount: "-₦150", time: "3 hours ago", status: "success" },
  { type: "Referral Bonus", detail: "From @chidi_01", amount: "+₦200", time: "Yesterday", status: "credit" },
  { type: "Fund Wallet", detail: "Bank Transfer", amount: "+₦5,000", time: "Yesterday", status: "credit" },
  { type: "Social Boost", detail: "IG 500 Likes", amount: "-₦400", time: "2 days ago", status: "success" },
];

const AnalyticsPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-4 pb-28">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl gradient-primary glow-primary">
          <BarChart3 className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-foreground">Analytics</h1>
          <p className="text-xs text-muted-foreground">Track your activity & earnings</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-border bg-card rounded-xl overflow-hidden group hover:border-primary/30 transition-colors">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className={cn("p-2 rounded-lg bg-gradient-to-br opacity-90", stat.color)}>
                  <stat.icon className="h-4 w-4 text-white" />
                </div>
                {stat.trend === "up" ? (
                  <ArrowUpRight className="h-4 w-4 text-green-400" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-destructive" />
                )}
              </div>
              <p className="text-xl font-bold text-foreground mb-0.5">{stat.value}</p>
              <p className="text-[11px] text-muted-foreground font-medium">{stat.label}</p>
              <p className="text-[10px] text-green-400 mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Referral Summary */}
      <Card className="border-border bg-card rounded-xl mb-6 overflow-hidden">
        <CardContent className="p-4">
          <h2 className="text-sm font-bold text-foreground mb-3">Referral Summary</h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-3 rounded-xl bg-secondary/50">
              <p className="text-lg font-bold text-gradient">24</p>
              <p className="text-[10px] text-muted-foreground font-medium">Total Referrals</p>
            </div>
            <div className="text-center p-3 rounded-xl bg-secondary/50">
              <p className="text-lg font-bold text-gradient">18</p>
              <p className="text-[10px] text-muted-foreground font-medium">Active Users</p>
            </div>
            <div className="text-center p-3 rounded-xl bg-secondary/50">
              <p className="text-lg font-bold text-gradient">₦3,200</p>
              <p className="text-[10px] text-muted-foreground font-medium">Earned</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="border-border bg-card rounded-xl overflow-hidden">
        <CardContent className="p-4">
          <h2 className="text-sm font-bold text-foreground mb-3">Recent Activity</h2>
          <div className="space-y-3">
            {recentActivity.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "h-8 w-8 rounded-lg flex items-center justify-center text-xs font-bold",
                    item.status === "credit" ? "bg-green-500/15 text-green-400" : "bg-primary/15 text-primary"
                  )}>
                    {item.status === "credit" ? "+" : "-"}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.type}</p>
                    <p className="text-[11px] text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={cn(
                    "text-sm font-bold",
                    item.status === "credit" ? "text-green-400" : "text-foreground"
                  )}>{item.amount}</p>
                  <p className="text-[10px] text-muted-foreground">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsPage;
