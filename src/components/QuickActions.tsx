import { Plus, ArrowDownToLine, Users } from "lucide-react";

const actions = [
  { icon: Plus, label: "Add Money", color: "from-primary to-accent" },
  { icon: ArrowDownToLine, label: "Withdraw", color: "from-emerald-500 to-emerald-600" },
  { icon: Users, label: "Refer", color: "from-amber-500 to-orange-500" },
];

const QuickActions = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {actions.map((action) => (
        <button
          key={action.label}
          className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] active:scale-95"
        >
          <div className={`p-3 rounded-xl bg-gradient-to-br ${action.color}`}>
            <action.icon className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xs font-semibold text-foreground">{action.label}</span>
        </button>
      ))}
    </div>
  );
};

export default QuickActions;
