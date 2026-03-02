import { useState } from "react";
import { Save, Percent, Instagram, Youtube, Twitter, Facebook } from "lucide-react";

const platforms = [
  { id: "instagram", name: "Instagram", icon: Instagram, services: [
    { name: "Followers", price: "₦50/1K", percentage: 10 },
    { name: "Likes", price: "₦30/1K", percentage: 8 },
    { name: "Views", price: "₦20/1K", percentage: 12 },
  ]},
  { id: "tiktok", name: "TikTok", icon: Twitter, services: [
    { name: "Followers", price: "₦60/1K", percentage: 10 },
    { name: "Likes", price: "₦25/1K", percentage: 8 },
    { name: "Views", price: "₦15/1K", percentage: 15 },
  ]},
  { id: "youtube", name: "YouTube", icon: Youtube, services: [
    { name: "Subscribers", price: "₦100/1K", percentage: 8 },
    { name: "Views", price: "₦40/1K", percentage: 10 },
    { name: "Likes", price: "₦35/1K", percentage: 12 },
  ]},
  { id: "facebook", name: "Facebook", icon: Facebook, services: [
    { name: "Page Likes", price: "₦45/1K", percentage: 10 },
    { name: "Post Likes", price: "₦20/1K", percentage: 8 },
    { name: "Followers", price: "₦55/1K", percentage: 10 },
  ]},
];

const SMMSetup = () => {
  const [configs, setConfigs] = useState(platforms);

  const updatePercentage = (platformId: string, serviceIdx: number, val: string) => {
    setConfigs(prev => prev.map(p => {
      if (p.id !== platformId) return p;
      const updated = [...p.services];
      updated[serviceIdx] = { ...updated[serviceIdx], percentage: parseFloat(val) || 0 };
      return { ...p, services: updated };
    }));
  };

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-foreground">SMM Setup</h1>
          <p className="text-sm text-muted-foreground">Configure social media marketing services and rates</p>
        </div>
        <button className="h-10 px-4 rounded-xl gradient-primary text-primary-foreground text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-all glow-primary">
          <Save className="h-4 w-4" /> Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {configs.map((platform) => (
          <div key={platform.id} className="rounded-xl border border-border bg-card p-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-secondary">
                <platform.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-sm font-bold text-foreground">{platform.name}</h3>
            </div>

            <div className="space-y-3">
              {platform.services.map((service, idx) => (
                <div key={service.name} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 border border-border">
                  <div>
                    <p className="text-sm font-medium text-foreground">{service.name}</p>
                    <p className="text-[11px] text-muted-foreground">Base: {service.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      step="1"
                      value={service.percentage}
                      onChange={(e) => updatePercentage(platform.id, idx, e.target.value)}
                      className="w-16 h-8 px-2 rounded-lg bg-card border border-border text-xs text-foreground text-center focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    <Percent className="h-3 w-3 text-muted-foreground" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SMMSetup;
