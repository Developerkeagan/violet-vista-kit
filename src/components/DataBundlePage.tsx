import { useState } from "react";
import { Wifi } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const networks = [
  { id: "mtn", name: "MTN", color: "bg-yellow-500" },
  { id: "airtel", name: "Airtel", color: "bg-red-500" },
  { id: "glo", name: "Glo", color: "bg-green-500" },
  { id: "9mobile", name: "9mobile", color: "bg-emerald-600" },
];

const dataTypes: Record<string, string[]> = {
  mtn: ["SME", "Corporate Gifting", "Direct Gifting"],
  airtel: ["Corporate Gifting", "Direct Gifting"],
  glo: ["Corporate Gifting", "Direct Gifting"],
  "9mobile": ["Corporate Gifting", "Direct Gifting"],
};

const dataPlans: Record<string, { id: string; size: string; price: number; validity: string }[]> = {
  "mtn-SME": [
    { id: "1", size: "500MB", price: 130, validity: "30 days" },
    { id: "2", size: "1GB", price: 260, validity: "30 days" },
    { id: "3", size: "2GB", price: 520, validity: "30 days" },
    { id: "4", size: "3GB", price: 780, validity: "30 days" },
    { id: "5", size: "5GB", price: 1300, validity: "30 days" },
    { id: "6", size: "10GB", price: 2600, validity: "30 days" },
  ],
  "mtn-Corporate Gifting": [
    { id: "1", size: "500MB", price: 140, validity: "30 days" },
    { id: "2", size: "1GB", price: 280, validity: "30 days" },
    { id: "3", size: "2GB", price: 560, validity: "30 days" },
    { id: "4", size: "5GB", price: 1400, validity: "30 days" },
  ],
  "mtn-Direct Gifting": [
    { id: "1", size: "500MB", price: 150, validity: "30 days" },
    { id: "2", size: "1GB", price: 300, validity: "30 days" },
    { id: "3", size: "3GB", price: 900, validity: "30 days" },
  ],
  "airtel-Corporate Gifting": [
    { id: "1", size: "500MB", price: 130, validity: "30 days" },
    { id: "2", size: "1GB", price: 260, validity: "30 days" },
    { id: "3", size: "2GB", price: 520, validity: "30 days" },
    { id: "4", size: "5GB", price: 1300, validity: "30 days" },
  ],
  "airtel-Direct Gifting": [
    { id: "1", size: "500MB", price: 140, validity: "30 days" },
    { id: "2", size: "1GB", price: 280, validity: "30 days" },
  ],
  "glo-Corporate Gifting": [
    { id: "1", size: "1GB", price: 250, validity: "30 days" },
    { id: "2", size: "2GB", price: 500, validity: "30 days" },
    { id: "3", size: "5GB", price: 1250, validity: "30 days" },
  ],
  "glo-Direct Gifting": [
    { id: "1", size: "1GB", price: 260, validity: "30 days" },
    { id: "2", size: "2GB", price: 520, validity: "30 days" },
  ],
  "9mobile-Corporate Gifting": [
    { id: "1", size: "500MB", price: 120, validity: "30 days" },
    { id: "2", size: "1GB", price: 240, validity: "30 days" },
    { id: "3", size: "1.5GB", price: 360, validity: "30 days" },
  ],
  "9mobile-Direct Gifting": [
    { id: "1", size: "500MB", price: 130, validity: "30 days" },
    { id: "2", size: "1GB", price: 260, validity: "30 days" },
  ],
};

const DataBundlePage = () => {
  const [network, setNetwork] = useState("");
  const [phone, setPhone] = useState("");
  const [dataType, setDataType] = useState("");
  const [plan, setPlan] = useState("");

  const types = network ? dataTypes[network] || [] : [];
  const plans = network && dataType ? dataPlans[`${network}-${dataType}`] || [] : [];
  const selectedPlan = plans.find((p) => p.id === plan);

  const handleNetworkChange = (val: string) => {
    setNetwork(val);
    setDataType("");
    setPlan("");
  };

  const handleTypeChange = (val: string) => {
    setDataType(val);
    setPlan("");
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-4 pb-28 lg:max-w-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl gradient-primary glow-primary">
          <Wifi className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-foreground">Data Bundle</h1>
          <p className="text-xs text-muted-foreground">Purchase affordable data plans</p>
        </div>
      </div>

      {/* Network Selection */}
      <div className="space-y-1.5 mb-3">
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Network</label>
        <div className="grid grid-cols-4 gap-2">
          {networks.map((n) => (
            <button
              key={n.id}
              onClick={() => handleNetworkChange(n.id)}
              className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all ${
                network === n.id
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card hover:border-primary/30"
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
        {/* Phone Number */}
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

        {/* Data Type */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Data Type</label>
          <Select value={dataType} onValueChange={handleTypeChange} disabled={!network}>
            <SelectTrigger className="h-12 bg-card border-border rounded-xl text-sm">
              <SelectValue placeholder="Select data type" />
            </SelectTrigger>
            <SelectContent>
              {types.map((t) => (
                <SelectItem key={t} value={t}>{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Data Plan */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Data Plan</label>
          <Select value={plan} onValueChange={setPlan} disabled={!dataType}>
            <SelectTrigger className="h-12 bg-card border-border rounded-xl text-sm">
              <SelectValue placeholder="Select plan" />
            </SelectTrigger>
            <SelectContent>
              {plans.map((p) => (
                <SelectItem key={p.id} value={p.id}>
                  {p.size} — ₦{p.price.toLocaleString()} ({p.validity})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Display */}
        {selectedPlan && (
          <Card className="border-border bg-secondary/50 rounded-xl">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Plan</span>
                <span className="text-sm font-semibold text-foreground">{selectedPlan.size}</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Validity</span>
                <span className="text-sm font-semibold text-foreground">{selectedPlan.validity}</span>
              </div>
              <div className="h-px bg-border my-2" />
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total</span>
                <span className="text-xl font-bold text-gradient">₦{selectedPlan.price.toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Purchase Button */}
        <Button
          disabled={!network || !phone || !dataType || !plan}
          className="w-full h-12 rounded-xl gradient-primary text-primary-foreground font-semibold text-sm glow-primary disabled:opacity-40 disabled:shadow-none"
        >
          Purchase Data{selectedPlan ? ` — ₦${selectedPlan.price.toLocaleString()}` : ""}
        </Button>
      </div>
    </div>
  );
};

export default DataBundlePage;
