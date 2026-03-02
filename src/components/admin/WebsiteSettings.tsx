import { Save, Globe, Palette, Bell, Shield } from "lucide-react";

const WebsiteSettings = () => {
  return (
    <div className="space-y-5 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-foreground">Website Settings</h1>
          <p className="text-sm text-muted-foreground">Configure general website settings</p>
        </div>
        <button className="h-10 px-4 rounded-xl gradient-primary text-primary-foreground text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-all glow-primary">
          <Save className="h-4 w-4" /> Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* General */}
        <div className="rounded-xl border border-border bg-card p-5 space-y-4">
          <div className="flex items-center gap-3 mb-1">
            <div className="p-2 rounded-xl bg-secondary"><Globe className="h-4 w-4 text-primary" /></div>
            <h3 className="text-sm font-bold text-foreground">General</h3>
          </div>
          {[
            { label: "Site Name", value: "KeaHub", type: "text" },
            { label: "Site URL", value: "https://keahub.com", type: "url" },
            { label: "Support Email", value: "support@keahub.com", type: "email" },
            { label: "Currency", value: "NGN (₦)", type: "text" },
          ].map(field => (
            <div key={field.label} className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{field.label}</label>
              <input defaultValue={field.value} className="w-full h-10 px-3 rounded-xl bg-secondary border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
          ))}
        </div>

        {/* Appearance */}
        <div className="rounded-xl border border-border bg-card p-5 space-y-4">
          <div className="flex items-center gap-3 mb-1">
            <div className="p-2 rounded-xl bg-secondary"><Palette className="h-4 w-4 text-primary" /></div>
            <h3 className="text-sm font-bold text-foreground">Appearance</h3>
          </div>
          {[
            { label: "Primary Color", value: "#7C3AED" },
            { label: "Logo URL", value: "/logo.png" },
            { label: "Favicon URL", value: "/favicon.ico" },
          ].map(field => (
            <div key={field.label} className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{field.label}</label>
              <input defaultValue={field.value} className="w-full h-10 px-3 rounded-xl bg-secondary border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
          ))}
        </div>

        {/* Notifications */}
        <div className="rounded-xl border border-border bg-card p-5 space-y-4">
          <div className="flex items-center gap-3 mb-1">
            <div className="p-2 rounded-xl bg-secondary"><Bell className="h-4 w-4 text-primary" /></div>
            <h3 className="text-sm font-bold text-foreground">Notifications</h3>
          </div>
          {["Email on new registration", "Email on deposit", "Email on withdrawal request", "SMS alerts for large transactions"].map(item => (
            <div key={item} className="flex items-center justify-between py-2">
              <span className="text-sm text-foreground">{item}</span>
              <button className="relative w-11 h-6 rounded-full bg-primary transition-colors">
                <div className="absolute top-0.5 left-[22px] w-5 h-5 rounded-full bg-primary-foreground transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Security */}
        <div className="rounded-xl border border-border bg-card p-5 space-y-4">
          <div className="flex items-center gap-3 mb-1">
            <div className="p-2 rounded-xl bg-secondary"><Shield className="h-4 w-4 text-primary" /></div>
            <h3 className="text-sm font-bold text-foreground">Security</h3>
          </div>
          {["Force HTTPS", "Enable 2FA for admin", "Rate limit API calls", "Block VPN access"].map(item => (
            <div key={item} className="flex items-center justify-between py-2">
              <span className="text-sm text-foreground">{item}</span>
              <button className="relative w-11 h-6 rounded-full bg-primary transition-colors">
                <div className="absolute top-0.5 left-[22px] w-5 h-5 rounded-full bg-primary-foreground transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebsiteSettings;
