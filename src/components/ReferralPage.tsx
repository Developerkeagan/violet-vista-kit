import { useState } from "react";
import { Users, Copy, CheckCircle2, Gift, TrendingUp, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const referrals = [
  { name: "Adebayo O.", date: "Dec 15, 2024", commission: "₦250", status: "active" },
  { name: "Chioma N.", date: "Dec 10, 2024", commission: "₦180", status: "active" },
  { name: "Ibrahim K.", date: "Nov 28, 2024", commission: "₦320", status: "active" },
  { name: "Favour A.", date: "Nov 15, 2024", commission: "₦150", status: "inactive" },
  { name: "Emeka J.", date: "Oct 30, 2024", commission: "₦200", status: "active" },
  { name: "Grace M.", date: "Oct 22, 2024", commission: "₦90", status: "inactive" },
];

const ReferralPage = () => {
  const [copied, setCopied] = useState(false);
  const referralCode = "KEAHUB-JD2847";
  const referralLink = `https://keahub.com/ref/${referralCode}`;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-4 pb-28 lg:max-w-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl gradient-primary glow-primary">
          <Users className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-foreground">Referral Program</h1>
          <p className="text-xs text-muted-foreground">Earn commissions by inviting friends</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { icon: Users, label: "Total Referrals", value: "6", color: "from-primary to-accent" },
          { icon: DollarSign, label: "Total Earned", value: "₦1,190", color: "from-accent to-primary" },
          { icon: TrendingUp, label: "Active", value: "4", color: "from-primary to-accent" },
        ].map((stat) => (
          <Card key={stat.label} className="border-border bg-card rounded-xl">
            <CardContent className="p-3 text-center">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-2`}>
                <stat.icon className="h-4 w-4 text-primary-foreground" />
              </div>
              <p className="text-lg font-bold text-foreground">{stat.value}</p>
              <p className="text-[10px] text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Referral Code */}
      <Card className="border-border bg-card rounded-xl mb-4">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Gift className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Your Referral Code</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-secondary border border-border">
            <span className="flex-1 text-sm font-bold text-foreground tracking-wider">{referralCode}</span>
            <button
              onClick={() => handleCopy(referralCode)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {copied ? <CheckCircle2 className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4 text-muted-foreground" />}
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Referral Link */}
      <Card className="border-border bg-card rounded-xl mb-5">
        <CardContent className="p-4">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">Referral Link</span>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-secondary border border-border">
            <span className="flex-1 text-xs text-muted-foreground truncate">{referralLink}</span>
            <button
              onClick={() => handleCopy(referralLink)}
              className="p-2 rounded-lg hover:bg-muted transition-colors shrink-0"
            >
              {copied ? <CheckCircle2 className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4 text-muted-foreground" />}
            </button>
          </div>
        </CardContent>
      </Card>

      {/* How It Works */}
      <Card className="border-border bg-card rounded-xl mb-5">
        <CardContent className="p-4">
          <h3 className="text-sm font-bold text-foreground mb-3">How It Works</h3>
          <div className="space-y-3">
            {[
              { step: "1", text: "Share your referral code or link with friends" },
              { step: "2", text: "They sign up and make their first transaction" },
              { step: "3", text: "You earn commission on every transaction they make" },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full gradient-primary flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold text-primary-foreground">{item.step}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Referrals List */}
      <div>
        <h3 className="text-sm font-bold text-foreground mb-3">Your Referrals</h3>
        <div className="space-y-2">
          {referrals.map((ref, i) => (
            <Card key={i} className="border-border bg-card rounded-xl">
              <CardContent className="p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-[10px] font-bold text-foreground">
                      {ref.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{ref.name}</p>
                    <p className="text-[11px] text-muted-foreground">{ref.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-foreground">{ref.commission}</p>
                  <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
                    ref.status === "active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"
                  }`}>{ref.status}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReferralPage;
