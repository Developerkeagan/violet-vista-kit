import {
  LayoutDashboard, Users, Smartphone, TrendingUp, Globe, Settings,
  CreditCard, BarChart3, Megaphone, HelpCircle, X, ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const navSections = [
  {
    title: "Dashboard",
    items: [
      { icon: LayoutDashboard, label: "Overview", id: "overview" },
      { icon: BarChart3, label: "Transactions", id: "transactions" },
    ],
  },
  {
    title: "Service Setup",
    items: [
      { icon: Globe, label: "VTU Setup", id: "vtu-setup" },
      { icon: TrendingUp, label: "SMM Setup", id: "smm-setup" },
      { icon: Smartphone, label: "Numbers Setup", id: "numbers-setup" },
    ],
  },
  {
    title: "Management",
    items: [
      { icon: Users, label: "User Management", id: "users" },
      { icon: CreditCard, label: "Direct Deposit", id: "direct-deposit" },
      { icon: Megaphone, label: "Announcements", id: "announcements" },
      { icon: HelpCircle, label: "Support Tickets", id: "support" },
      { icon: Settings, label: "Website Settings", id: "website-settings" },
    ],
  },
];

interface AdminSidebarProps {
  open: boolean;
  onClose: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const AdminSidebar = ({ open, onClose, activeTab, onTabChange }: AdminSidebarProps) => {
  const handleNav = (id: string) => {
    onTabChange(id);
    onClose();
  };

  return (
    <>
      {open && <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden" onClick={onClose} />}

      <aside className={cn(
        "fixed top-0 left-0 z-[70] h-full w-72 bg-card border-r border-border flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 lg:sticky lg:top-0 lg:z-40",
        open ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl gradient-primary glow-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">KH</span>
            </div>
            <div>
              <h2 className="text-sm font-bold text-foreground">Admin Panel</h2>
              <p className="text-[10px] text-muted-foreground">KeaHub Management</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-secondary transition-colors lg:hidden">
            <X className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-5">
          {navSections.map((section) => (
            <div key={section.title}>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold px-3 mb-2">{section.title}</p>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    className={cn(
                      "w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all group",
                      activeTab === item.id
                        ? "gradient-primary text-primary-foreground glow-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </div>
                    <ChevronRight className={cn("h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity", activeTab === item.id && "opacity-100")} />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default AdminSidebar;
