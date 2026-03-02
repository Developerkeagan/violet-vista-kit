import { useState } from "react";
import { Save, Percent, Wifi, Phone, Tv, Zap } from "lucide-react";

const services = [
  { id: "data", name: "Data Bundles", icon: Wifi, provider: "MTN, Airtel, Glo, 9mobile", percentage: 5, status: true },
  { id: "airtime", name: "Airtime", icon: Phone, provider: "All Networks", percentage: 3, status: true },
  { id: "cable", name: "Cable TV", icon: Tv, provider: "DSTV, GOtv, StarTimes", percentage: 2, status: true },
  { id: "electricity", name: "Electricity", icon: Zap, provider: "IKEDC, EKEDC, AEDC", percentage: 1.5, status: false },
];

const VTUSetup = () => {
  const [configs, setConfigs] = useState(services);

  const updatePercentage = (id: string, val: string) => {
    setConfigs(prev => prev.map(s => s.id === id ? { ...s, percentage: parseFloat(val) || 0 } : s));
  };

  const toggleStatus = (id: string) => {
    setConfigs(prev => prev.map(s => s.id === id ? { ...s, status: !s.status } : s));
  };

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-foreground">VTU Setup</h1>
          <p className="text-sm text-muted-foreground">Configure VTU services and commission rates</p>
        </div>
        <button className="h-10 px-4 rounded-xl gradient-primary text-primary-foreground text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-all glow-primary">
          <Save className="h-4 w-4" /> Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {configs.map((service) => (
          <div key={service.id} className="rounded-xl border border-border bg-card p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-secondary">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">{service.name}</h3>
                  <p className="text-[11px] text-muted-foreground">{service.provider}</p>
                </div>
              </div>
              <button onClick={() => toggleStatus(service.id)} className={`relative w-11 h-6 rounded-full transition-colors ${service.status ? "bg-primary" : "bg-muted"}`}>
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-primary-foreground transition-transform ${service.status ? "left-[22px]" : "left-0.5"}`} />
              </button>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                <Percent className="h-3 w-3" /> Commission Rate
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="0.5"
                  value={service.percentage}
                  onChange={(e) => updatePercentage(service.id, e.target.value)}
                  className="w-24 h-10 px-3 rounded-xl bg-secondary border border-border text-sm text-foreground text-center focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <span className="text-sm text-muted-foreground">%</span>
                <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full gradient-primary rounded-full transition-all" style={{ width: `${Math.min(service.percentage * 10, 100)}%` }} />
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-secondary/50 border border-border">
              <p className="text-[11px] text-muted-foreground">If a user pays <span className="text-foreground font-semibold">₦1,000</span>, you earn <span className="text-primary font-semibold">₦{(1000 * service.percentage / 100).toFixed(0)}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VTUSetup;
