import { useState } from "react";
import { Save, Percent, Globe, Smartphone } from "lucide-react";

const providers = [
  { id: "5sim", name: "5SIM", countries: 80, percentage: 15, status: true },
  { id: "smsman", name: "SMS-Man", countries: 60, percentage: 12, status: true },
  { id: "smsactivate", name: "SMS-Activate", countries: 120, percentage: 18, status: false },
  { id: "grizzly", name: "Grizzly SMS", countries: 45, percentage: 10, status: true },
];

const VirtualNumbersSetup = () => {
  const [configs, setConfigs] = useState(providers);

  const updatePercentage = (id: string, val: string) => {
    setConfigs(prev => prev.map(p => p.id === id ? { ...p, percentage: parseFloat(val) || 0 } : p));
  };

  const toggleStatus = (id: string) => {
    setConfigs(prev => prev.map(p => p.id === id ? { ...p, status: !p.status } : p));
  };

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-foreground">Virtual Numbers Setup</h1>
          <p className="text-sm text-muted-foreground">Configure virtual number providers and markup rates</p>
        </div>
        <button className="h-10 px-4 rounded-xl gradient-primary text-primary-foreground text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-all glow-primary">
          <Save className="h-4 w-4" /> Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {configs.map((provider) => (
          <div key={provider.id} className="rounded-xl border border-border bg-card p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-secondary">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">{provider.name}</h3>
                  <p className="text-[11px] text-muted-foreground flex items-center gap-1"><Globe className="h-3 w-3" /> {provider.countries} countries</p>
                </div>
              </div>
              <button onClick={() => toggleStatus(provider.id)} className={`relative w-11 h-6 rounded-full transition-colors ${provider.status ? "bg-primary" : "bg-muted"}`}>
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-primary-foreground transition-transform ${provider.status ? "left-[22px]" : "left-0.5"}`} />
              </button>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                <Percent className="h-3 w-3" /> Markup Percentage
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="1"
                  value={provider.percentage}
                  onChange={(e) => updatePercentage(provider.id, e.target.value)}
                  className="w-24 h-10 px-3 rounded-xl bg-secondary border border-border text-sm text-foreground text-center focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <span className="text-sm text-muted-foreground">%</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-secondary/50 border border-border">
              <p className="text-[11px] text-muted-foreground">Provider charges <span className="text-foreground font-semibold">₦100</span> → User pays <span className="text-primary font-semibold">₦{100 + provider.percentage}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualNumbersSetup;
