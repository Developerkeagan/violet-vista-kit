import {
  Wifi, Smartphone, Heart, Hash,
  Phone, Globe, Zap, MoreHorizontal,
} from "lucide-react";

const services = [
  { icon: Wifi, label: "Data Bundle", badge: "Hot" },
  { icon: Smartphone, label: "Social Boost", badge: null },
  { icon: Phone, label: "Virtual No.", badge: "New" },
  { icon: Globe, label: "Airtime", badge: null },
  { icon: Heart, label: "Followers", badge: null },
  { icon: Hash, label: "SMM Panel", badge: null },
  { icon: Zap, label: "Instant Top", badge: null },
  { icon: MoreHorizontal, label: "More", badge: "Soon" },
];

const ServicesGrid = () => {
  return (
    <div>
      <h3 className="text-sm font-bold text-foreground mb-3">Services</h3>
      <div className="grid grid-cols-4 gap-3">
        {services.map((service) => (
          <button
            key={service.label}
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
