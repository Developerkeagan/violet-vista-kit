import { Menu, Wallet, User } from "lucide-react";

interface TopNavbarProps {
  onMenuClick?: () => void;
}

const TopNavbar = ({ onMenuClick }: TopNavbarProps) => {
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
        <button className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors relative">
          <Wallet className="h-5 w-5 text-foreground" />
        </button>
        <button className="p-2 rounded-lg bg-secondary hover:bg-muted transition-colors">
          <User className="h-5 w-5 text-foreground" />
        </button>
      </div>
    </header>
  );
};

export default TopNavbar;
