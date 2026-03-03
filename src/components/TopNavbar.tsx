import { useState, useRef, useEffect } from "react";
import { Menu, Wallet, User, ChevronDown, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface TopNavbarProps {
  onMenuClick?: () => void;
  onProfileClick?: () => void;
}

const TopNavbar = ({ onMenuClick, onProfileClick }: TopNavbarProps) => {
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
      <button onClick={onMenuClick} className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors">
        <Menu className="h-5 w-5 text-foreground" />
      </button>

      <h1 className="text-lg font-bold text-gradient">KeaHub</h1>

      <div className="flex items-center gap-2">
        <div className="relative" ref={dropdownRef}>
          <button onClick={() => setWalletOpen(!walletOpen)} className={cn("flex items-center gap-1 p-2 rounded-lg bg-secondary hover:bg-muted transition-colors", walletOpen && "bg-muted")}>
            <Wallet className="h-5 w-5 text-foreground" />
            <ChevronDown className={cn("h-3 w-3 text-muted-foreground transition-transform", walletOpen && "rotate-180")} />
          </button>

          {walletOpen && (
            <div className="absolute right-0 top-full mt-2 w-64 rounded-xl bg-card border border-border shadow-xl shadow-black/20 overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200">
              <div className="p-4 space-y-3">
                {/* Wallet Balance */}
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Wallet Balance</p>
                  <p className="text-lg font-bold text-foreground">₦12,450.00</p>
                  <button className="mt-2 flex items-center gap-1.5 h-8 px-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-semibold hover:opacity-90 transition-all">
                    <ExternalLink className="h-3 w-3" />
                    Add Funds
                  </button>
                </div>
                <div className="h-px bg-border" />
                {/* Commission Balance */}
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Commission Balance</p>
                  <p className="text-lg font-bold text-foreground">₦320.50</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <button onClick={onProfileClick} className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors">
          <User className="h-5 w-5 text-foreground" />
        </button>
      </div>
    </header>
  );
};

export default TopNavbar;
