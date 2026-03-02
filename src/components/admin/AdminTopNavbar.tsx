import { useState, useRef, useEffect } from "react";
import { Menu, Wallet, ChevronDown, ExternalLink, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface AdminTopNavbarProps {
  onMenuClick?: () => void;
}

const apiBalances = [
  { name: "Data API", balance: "₦6,000.00", color: "from-primary to-accent" },
  { name: "Boosting API", balance: "₦6,000.00", color: "from-accent to-primary" },
  { name: "Number API", balance: "₦6,000.00", color: "from-primary to-accent" },
];

const AdminTopNavbar = ({ onMenuClick }: AdminTopNavbarProps) => {
  const [walletOpen, setWalletOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setWalletOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick} className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors lg:hidden">
          <Menu className="h-5 w-5 text-foreground" />
        </button>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xs">KH</span>
          </div>
          <div>
            <h1 className="text-sm font-bold text-gradient">KeaHub Admin</h1>
            <p className="text-[10px] text-muted-foreground">Management Panel</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative" ref={dropdownRef}>
          <button onClick={() => setWalletOpen(!walletOpen)} className={cn("flex items-center gap-1.5 px-3 py-2 rounded-lg bg-secondary hover:bg-muted transition-colors", walletOpen && "bg-muted")}>
            <Wallet className="h-4 w-4 text-foreground" />
            <span className="text-xs font-semibold text-foreground hidden sm:inline">API Balances</span>
            <ChevronDown className={cn("h-3 w-3 text-muted-foreground transition-transform", walletOpen && "rotate-180")} />
          </button>

          {walletOpen && (
            <div className="absolute right-0 top-full mt-2 w-64 rounded-xl bg-card border border-border shadow-xl shadow-black/20 overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200">
              <div className="p-4 space-y-3">
                {apiBalances.map((api, i) => (
                  <div key={api.name}>
                    {i > 0 && <div className="h-px bg-border mb-3" />}
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{api.name}</p>
                        <p className="text-lg font-bold text-foreground">{api.balance}</p>
                      </div>
                      <button className={`flex items-center gap-1.5 h-8 px-3 rounded-lg bg-gradient-to-r ${api.color} text-primary-foreground text-xs font-semibold hover:opacity-90 transition-all`}>
                        <ExternalLink className="h-3 w-3" />
                        Fund
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <button onClick={() => navigate("/")} className="p-2 rounded-lg bg-secondary hover:bg-destructive/20 hover:text-destructive transition-colors">
          <LogOut className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
};

export default AdminTopNavbar;
