import {
  Home, TrendingUp, Smartphone, BarChart3, Settings,
  Wifi, Users, HelpCircle, LogOut, X, Globe
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const mainLinks = [
  { icon: Home, label: "Home", id: "home" },
  { icon: Wifi, label: "Data Bundle", id: "data-bundle" },
  { icon: Globe, label: "Airtime", id: "airtime" },
  { icon: TrendingUp, label: "Social Boost", id: "social-boost" },
  { icon: Smartphone, label: "Virtual Numbers", id: "sim" },
  { icon: BarChart3, label: "Analytics", id: "analytics" },
  { icon: Settings, label: "Settings", id: "settings" },
];

const secondaryLinks = [
  { icon: Users, label: "Referrals", id: "referral" },
  { icon: HelpCircle, label: "Help & Support", id: "settings" },
];

interface AppSidebarProps {
  open: boolean;
  onClose: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const AppSidebar = ({ open, onClose, activeTab, onTabChange }: AppSidebarProps) => {
  const navigate = useNavigate();

  const handleNav = (id: string) => {
    onTabChange(id);
    onClose();
  };

  const handleLogout = () => {
    onClose();
    navigate("/");
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed top-0 left-0 z-[70] h-full w-72 bg-card border-r border-border flex flex-col transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl gradient-primary glow-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">KH</span>
            </div>
            <div>
              <h2 className="text-sm font-bold text-foreground">KeaHub</h2>
              <p className="text-[10px] text-muted-foreground">Premium Services</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-secondary transition-colors">
            <X className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>

        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
              <span className="text-sm font-bold text-foreground">JD</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">John Doe</p>
              <p className="text-[11px] text-muted-foreground">user@gmail.com</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-3">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold px-3 mb-2">Main Menu</p>
          <div className="space-y-1">
            {mainLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                  activeTab === link.id
                    ? "gradient-primary text-primary-foreground glow-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </button>
            ))}
          </div>

          <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold px-3 mb-2 mt-5">Quick Access</p>
          <div className="space-y-1">
            {secondaryLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.id)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </button>
            ))}
          </div>
        </nav>

        <div className="p-3 border-t border-border">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/10 transition-all"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default AppSidebar;
