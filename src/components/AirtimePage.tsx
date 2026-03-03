import { useState } from "react";
import { Globe } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const networks = [
  { id: "mtn", name: "MTN", color: "bg-yellow-500" },
  { id: "airtel", name: "Airtel", color: "bg-red-500" },
  { id: "glo", name: "Glo", color: "bg-green-500" },
  { id: "9mobile", name: "9mobile", color: "bg-emerald-600" },
];

const airtimeTypes = ["VTU", "Share & Sell"];

const AirtimePage = () => {
  const [network, setNetwork] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");

  const discount = type === "Share & Sell" ? 0.03 : 0.02;
  const numAmount = parseFloat(amount) || 0;
  const payable = numAmount > 0 ? numAmount - numAmount * discount : 0;

  return (
    <div className="max-w-lg mx-auto px-4 py-4 pb-28 lg:max-w-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl gradient-primary glow-primary">
          <Globe className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-foreground">Airtime Top-Up</h1>
          <p className="text-xs text-muted-foreground">Instant airtime recharge at discount</p>
        </div>
      </div>

      {/* Network */}
      <div className="space-y-1.5 mb-3">
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Network</label>
        <div className="grid grid-cols-4 gap-2">
          {networks.map((n) => (
            <button
              key={n.id}
              onClick={() => setNetwork(n.id)}
              className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all ${
                network === n.id ? "border-primary bg-primary/10" : "border-border bg-card hover:border-primary/30"
              }`}
            >
              <div className={`w-8 h-8 rounded-full ${n.color} flex items-center justify-center`}>
                <span className="text-[10px] font-bold text-white">{n.name[0]}</span>
              </div>
              <span className="text-[10px] font-semibold text-foreground">{n.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {/* Phone */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="08012345678"
            className="w-full h-12 px-4 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          />
        </div>

        {/* Type */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Type</label>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger className="h-12 bg-card border-border rounded-xl text-sm">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              {airtimeTypes.map((t) => (
                <SelectItem key={t} value={t}>{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Amount */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="₦100 - ₦50,000"
            className="w-full h-12 px-4 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          />
        </div>

        {/* Quick Amounts */}
        <div className="flex gap-2 flex-wrap">
          {[100, 200, 500, 1000, 2000, 5000].map((a) => (
            <button
              key={a}
              onClick={() => setAmount(String(a))}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                amount === String(a) ? "gradient-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-muted"
              }`}
            >
              ₦{a.toLocaleString()}
            </button>
          ))}
        </div>

        {/* Summary */}
        {numAmount > 0 && type && (
          <Card className="border-border bg-secondary/50 rounded-xl">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Amount</span>
                <span className="text-sm font-semibold text-foreground">₦{numAmount.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Discount ({(discount * 100).toFixed(0)}%)</span>
                <span className="text-sm font-semibold text-success">-₦{(numAmount * discount).toLocaleString()}</span>
              </div>
              <div className="h-px bg-border my-2" />
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">You Pay</span>
                <span className="text-xl font-bold text-gradient">₦{payable.toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>
        )}

        <Button
          disabled={!network || !phone || !type || numAmount < 100}
          className="w-full h-12 rounded-xl gradient-primary text-primary-foreground font-semibold text-sm glow-primary disabled:opacity-40 disabled:shadow-none"
        >
          Buy Airtime{payable > 0 ? ` — ₦${payable.toLocaleString()}` : ""}
        </Button>
      </div>
    </div>
  );
};

export default AirtimePage;
