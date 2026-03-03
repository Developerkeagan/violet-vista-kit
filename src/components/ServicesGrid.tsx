import {
  Wifi, Smartphone, Users, Hash,
  Phone, Globe, Zap, MoreHorizontal,
} from "lucide-react";

const services = [
  { icon: Wifi, label: "Data Bundle", badge: "Hot", id: "data-bundle" },
  { icon: Smartphone, label: "Social Boost", badge: null, id: "social-boost" },
  { icon: Phone, label: "Virtual No.", badge: "New", id: "sim" },
  { icon: Globe, label: "Airtime", badge: null, id: "airtime" },
  { icon: Users, label: "Refer", badge: null, id: "referral" },
  { icon: Hash, label: "SMM Panel", badge: null, id: "social-boost" },
  { icon: Zap, label: "Instant Top", badge: null, id: "airtime" },
  { icon: MoreHorizontal, label: "More", badge: "Soon", id: "" },
];

interface ServicesGridProps {
  onNavigate?: (tab: string) => void;
}

const ServicesGrid = ({ onNavigate }: ServicesGridProps) => {
  return (
    <div>
      <h3 className="text-sm font-bold text-foreground mb-3">Services</h3>
      <div className="grid grid-cols-4 lg:grid-cols-4 gap-3">
        {services.map((service) => (
          <button
            key={service.label}
            onClick={() => service.id && onNavigate?.(service.id)}
            className="flex flex-col items-center gap-2 py-3 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] active:scale-95 relative"
          >
            {service.badge && (
              <span className="absolute -top-1.5 -right-1 text-[8px] font-bold px-1.5 py-0.5 rounded-full gradient-primary text-primary-foreground">
                {service.badge}
              </span>
            )}
            <div className="p-2.5 rounded-xl bg-secondary">
              <service.icon className="h-5 w-5 text-primary" />
            </div>
            <span className="text-[10px] font-semibold text-foreground leading-tight text-center px-1">
              {service.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
