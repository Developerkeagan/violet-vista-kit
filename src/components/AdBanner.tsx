import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

const ads = [
  {
    title: "🔥 Data Bundles Sale!",
    description: "Get 50% off on all data bundles this weekend only",
    bg: "from-primary/20 to-accent/10",
  },
  {
    title: "📱 Virtual Numbers Available",
    description: "Get US, UK, and Canada numbers instantly",
    bg: "from-emerald-500/20 to-teal-500/10",
  },
  {
    title: "🚀 Boost Your Socials",
    description: "Instagram, TikTok, Twitter followers & more",
    bg: "from-amber-500/20 to-orange-500/10",
  },
];

const AdBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % ads.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const ad = ads[current];

  return (
    <div className={`relative rounded-2xl p-5 bg-gradient-to-r ${ad.bg} border border-border overflow-hidden transition-all duration-500`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-sm font-bold text-foreground mb-1">{ad.title}</h3>
          <p className="text-xs text-muted-foreground">{ad.description}</p>
        </div>
        <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
      </div>

      <div className="flex items-center gap-1.5 mt-3">
        {ads.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === current ? "w-5 bg-primary" : "w-1.5 bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AdBanner;
