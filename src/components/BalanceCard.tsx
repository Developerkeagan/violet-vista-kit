import { Eye, EyeOff, ChevronRight } from "lucide-react";
import { useState } from "react";

const BalanceCard = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div className="gradient-balance rounded-2xl p-5 glow-primary">
      <div className="flex items-center justify-between mb-1">
        <p className="text-sm font-medium text-primary-foreground/80">Welcome back,</p>
        <button className="flex items-center gap-1 text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors">
          History <ChevronRight className="h-3 w-3" />
        </button>
      </div>
      <h2 className="text-lg font-bold text-primary-foreground mb-4">Keagan 👋</h2>

      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <p className="text-xs text-primary-foreground/70">Available Balance</p>
            <button onClick={() => setVisible(!visible)} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              {visible ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
            </button>
          </div>
          <p className="text-2xl font-extrabold text-primary-foreground">
            {visible ? "₦12,450.00" : "****"}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-primary-foreground/70 mb-1">Commission</p>
          <p className="text-lg font-bold text-primary-foreground">
            {visible ? "₦320.50" : "****"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
