import { useState } from "react";
import { Settings, User, Mail, Lock, KeyRound, Bell, Shield, Eye, EyeOff, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showOldPass, setShowOldPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showPin, setShowPin] = useState(false);

  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("user@gmail.com");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [pin, setPin] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [emailNotifs, setEmailNotifs] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);

  const sections = [
    {
      id: "username",
      icon: User,
      title: "Change Username",
      desc: "Update your display name",
      content: (
        <div className="space-y-3 mt-3">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full h-11 px-4 rounded-xl bg-secondary border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            placeholder="New username"
          />
          <Button className="w-full h-10 rounded-xl gradient-primary text-primary-foreground font-semibold text-sm">Save Username</Button>
        </div>
      ),
    },
    {
      id: "email",
      icon: Mail,
      title: "Change Email",
      desc: "Update your email address",
      content: (
        <div className="space-y-3 mt-3">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="w-full h-11 px-4 rounded-xl bg-secondary border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            placeholder="New email"
          />
          <Button className="w-full h-10 rounded-xl gradient-primary text-primary-foreground font-semibold text-sm">Update Email</Button>
        </div>
      ),
    },
    {
      id: "password",
      icon: Lock,
      title: "Change Password",
      desc: "Update your account password",
      content: (
        <div className="space-y-3 mt-3">
          <div className="relative">
            <input
              type={showOldPass ? "text" : "password"}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="Current password"
              className="w-full h-11 px-4 pr-10 rounded-xl bg-secondary border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
            <button type="button" onClick={() => setShowOldPass(!showOldPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {showOldPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          <div className="relative">
            <input
              type={showNewPass ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New password"
              className="w-full h-11 px-4 pr-10 rounded-xl bg-secondary border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
            <button type="button" onClick={() => setShowNewPass(!showNewPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {showNewPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          <Button className="w-full h-10 rounded-xl gradient-primary text-primary-foreground font-semibold text-sm">Update Password</Button>
        </div>
      ),
    },
    {
      id: "pin",
      icon: KeyRound,
      title: "Transaction PIN",
      desc: "Set or change your transaction PIN",
      content: (
        <div className="space-y-3 mt-3">
          <div className="relative">
            <input
              type={showPin ? "text" : "password"}
              value={pin}
              onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0, 4))}
              placeholder="4-digit PIN"
              maxLength={4}
              className="w-full h-11 px-4 pr-10 rounded-xl bg-secondary border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all tracking-[0.5em] text-center"
            />
            <button type="button" onClick={() => setShowPin(!showPin)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {showPin ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          <Button className="w-full h-10 rounded-xl gradient-primary text-primary-foreground font-semibold text-sm">Set PIN</Button>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-lg mx-auto px-4 py-4 pb-28 lg:max-w-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl gradient-primary glow-primary">
          <Settings className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-foreground">Settings</h1>
          <p className="text-xs text-muted-foreground">Manage your account preferences</p>
        </div>
      </div>

      {/* Expandable Sections */}
      <div className="space-y-3 mb-5">
        {sections.map((section) => (
          <Card key={section.id} className="border-border bg-card rounded-xl overflow-hidden">
            <CardContent className="p-0">
              <button
                onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                className="w-full p-4 flex items-center justify-between hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-secondary">
                    <section.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">{section.title}</p>
                    <p className="text-[11px] text-muted-foreground">{section.desc}</p>
                  </div>
                </div>
                <ChevronRight className={`h-4 w-4 text-muted-foreground transition-transform ${activeSection === section.id ? "rotate-90" : ""}`} />
              </button>
              {activeSection === section.id && (
                <div className="px-4 pb-4 animate-in slide-in-from-top-2 duration-200">
                  {section.content}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Toggles */}
      <h3 className="text-sm font-bold text-foreground mb-3">Preferences</h3>
      <div className="space-y-3">
        <Card className="border-border bg-card rounded-xl">
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-secondary">
                <Bell className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Push Notifications</p>
                <p className="text-[11px] text-muted-foreground">Get notified about transactions</p>
              </div>
            </div>
            <Switch checked={notifications} onCheckedChange={setNotifications} />
          </CardContent>
        </Card>

        <Card className="border-border bg-card rounded-xl">
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-secondary">
                <Mail className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Email Notifications</p>
                <p className="text-[11px] text-muted-foreground">Receive transaction receipts</p>
              </div>
            </div>
            <Switch checked={emailNotifs} onCheckedChange={setEmailNotifs} />
          </CardContent>
        </Card>

        <Card className="border-border bg-card rounded-xl">
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-secondary">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Two-Factor Auth</p>
                <p className="text-[11px] text-muted-foreground">Extra security for your account</p>
              </div>
            </div>
            <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;
