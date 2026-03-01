import { useState, useRef, useEffect } from "react";
import { Menu, Wallet, User, ChevronDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface TopNavbarProps {
  onMenuClick?: () => void;
}

const TopNavbar = ({ onMenuClick }: TopNavbarProps) => {
  const [walletOpen, setWalletOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
      <button
        onClick={onMenuClick}
        className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors"
      >
        <Menu className="h-5 w-5 text-foreground" />
      </button>

      <h1 className="text-lg font-bold text-gradient">DataHub</h1>

      <div className="flex items-center gap-2">
        {/* Wallet Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setWalletOpen(!walletOpen)}
            className={cn(
              "flex items-center gap-1 p-2 rounded-lg bg-secondary hover:bg-muted transition-colors",
              walletOpen && "bg-muted"
            )}
          >
            <Wallet className="h-5 w-5 text-foreground" />
            <ChevronDown className={cn("h-3 w-3 text-muted-foreground transition-transform", walletOpen && "rotate-180")} />
          </button>

          {walletOpen && (
            <div className="absolute right-0 top-full mt-2 w-56 rounded-xl bg-card border border-border shadow-xl shadow-black/20 overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200">
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Main Balance</p>
                  <p className="text-lg font-bold text-foreground">₦12,450.00</p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Commission Balance</p>
                  <p className="text-lg font-bold text-gradient">₦3,200.00</p>
                </div>
                <button className="w-full flex items-center justify-center gap-2 h-10 rounded-xl gradient-primary text-primary-foreground text-sm font-semibold glow-primary transition-all hover:opacity-90">
                  <Plus className="h-4 w-4" />
                  Add Funds
                </button>
              </div>
            </div>
          )}
        </div>

        <button className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors">
          <User className="h-5 w-5 text-foreground" />
        </button>
      </div>
    </header>
  );
};

export default TopNavbar;
