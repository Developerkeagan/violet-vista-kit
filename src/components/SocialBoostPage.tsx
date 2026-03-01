import { useState, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Clock, AlertCircle } from "lucide-react";

const platforms = [
  { value: "tiktok", label: "TikTok" },
  { value: "instagram", label: "Instagram" },
  { value: "twitter", label: "Twitter / X" },
  { value: "facebook", label: "Facebook" },
  { value: "youtube", label: "YouTube" },
  { value: "telegram", label: "Telegram" },
];

const servicesByPlatform: Record<string, { value: string; label: string; pricePerK: number; min: number; max: number; time: string }[]> = {
  tiktok: [
    { value: "followers-avg", label: "Average Quality Followers", pricePerK: 2394, min: 50, max: 20000, time: "2 Hours" },
    { value: "followers-hq", label: "High Quality Followers", pricePerK: 4200, min: 100, max: 10000, time: "4 Hours" },
    { value: "likes", label: "Post Likes", pricePerK: 1200, min: 50, max: 50000, time: "1 Hour" },
    { value: "views", label: "Video Views", pricePerK: 800, min: 500, max: 100000, time: "30 Min" },
  ],
  instagram: [
    { value: "followers-avg", label: "Average Quality Followers", pricePerK: 2800, min: 50, max: 20000, time: "3 Hours" },
    { value: "followers-hq", label: "High Quality Followers", pricePerK: 5000, min: 100, max: 10000, time: "6 Hours" },
    { value: "likes", label: "Post Likes", pricePerK: 1500, min: 50, max: 50000, time: "1 Hour" },
    { value: "reels-views", label: "Reels Views", pricePerK: 600, min: 500, max: 100000, time: "30 Min" },
  ],
  twitter: [
    { value: "followers", label: "Followers", pricePerK: 3200, min: 50, max: 15000, time: "4 Hours" },
    { value: "likes", label: "Tweet Likes", pricePerK: 1800, min: 50, max: 30000, time: "2 Hours" },
    { value: "retweets", label: "Retweets", pricePerK: 2000, min: 50, max: 20000, time: "2 Hours" },
  ],
  facebook: [
    { value: "page-likes", label: "Page Likes", pricePerK: 3500, min: 100, max: 10000, time: "6 Hours" },
    { value: "post-likes", label: "Post Likes", pricePerK: 1400, min: 50, max: 50000, time: "2 Hours" },
    { value: "followers", label: "Profile Followers", pricePerK: 3000, min: 100, max: 10000, time: "5 Hours" },
  ],
  youtube: [
    { value: "subscribers", label: "Subscribers", pricePerK: 6000, min: 50, max: 5000, time: "12 Hours" },
    { value: "views", label: "Video Views", pricePerK: 1000, min: 500, max: 100000, time: "1 Hour" },
    { value: "likes", label: "Video Likes", pricePerK: 2200, min: 50, max: 20000, time: "3 Hours" },
  ],
  telegram: [
    { value: "members", label: "Channel Members", pricePerK: 4000, min: 100, max: 20000, time: "6 Hours" },
    { value: "post-views", label: "Post Views", pricePerK: 500, min: 500, max: 100000, time: "30 Min" },
  ],
};

const SocialBoostPage = () => {
  const [platform, setPlatform] = useState("");
  const [service, setService] = useState("");
  const [link, setLink] = useState("");
  const [quantity, setQuantity] = useState("");

  const services = platform ? servicesByPlatform[platform] || [] : [];
  const selectedService = services.find((s) => s.value === service);

  const price = useMemo(() => {
    if (!selectedService || !quantity) return 0;
    const qty = parseInt(quantity);
    if (isNaN(qty) || qty <= 0) return 0;
    return Math.round((qty / 1000) * selectedService.pricePerK);
  }, [selectedService, quantity]);

  const platformLabel = platforms.find((p) => p.value === platform)?.label;

  const handlePlatformChange = (val: string) => {
    setPlatform(val);
    setService("");
    setQuantity("");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-4 pb-28 space-y-5">
      <h2 className="text-xl font-bold text-foreground">Social Boost</h2>

      {/* Platform */}
      <div className="space-y-2">
        <label className="text-sm font-bold text-foreground">Platform:</label>
        <Select value={platform} onValueChange={handlePlatformChange}>
          <SelectTrigger className="w-full h-12 rounded-xl border-primary/40 focus:ring-primary">
            <SelectValue placeholder="Select platform" />
          </SelectTrigger>
          <SelectContent>
            {platforms.map((p) => (
              <SelectItem key={p.value} value={p.value}>{p.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Service */}
      <div className="space-y-2">
        <label className="text-sm font-bold text-foreground">Service:</label>
        <Select value={service} onValueChange={setService} disabled={!platform}>
          <SelectTrigger className="w-full h-12 rounded-xl border-border">
            <SelectValue placeholder="Select service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((s) => (
              <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Link */}
      <div className="space-y-2">
        <label className="text-sm font-bold text-foreground">
          {platformLabel ? `${platformLabel} account link:` : "Account link:"}
        </label>
        <Input
          placeholder={platformLabel ? `Enter your ${platformLabel} link` : "Enter link"}
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="h-12 rounded-xl"
        />
      </div>

      {/* Quantity */}
      <div className="space-y-2">
        <label className="text-sm font-bold text-foreground">Quantity:</label>
        <Input
          type="number"
          placeholder="Enter quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="h-12 rounded-xl"
        />
        {selectedService && (
          <p className="text-xs text-muted-foreground">
            (Min: {selectedService.min.toLocaleString()} - Max: {selectedService.max.toLocaleString()})
          </p>
        )}
      </div>

      {/* Price */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-bold text-foreground">Price:</span>
        <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-lg">
          {price.toLocaleString()} NGN
        </span>
      </div>
      {selectedService && (
        <p className="text-xs text-muted-foreground -mt-3">
          ({selectedService.pricePerK.toLocaleString()} NGN / 1k {selectedService.label})
        </p>
      )}

      {/* Completion time */}
      {selectedService && (
        <div className="space-y-1">
          <label className="text-sm font-bold text-foreground">Average completion time:</label>
          <div className="flex items-center gap-2 bg-muted rounded-xl px-4 py-3">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-foreground">{selectedService.time}</span>
          </div>
        </div>
      )}

      {/* Note */}
      {platform && (
        <div className="space-y-2">
          <label className="text-sm font-bold text-foreground">Note:</label>
          <div className="bg-muted rounded-xl p-4 space-y-2 text-sm text-muted-foreground">
            <p><strong className="text-foreground">1.</strong> If you have purchased {platformLabel} {selectedService?.label?.toLowerCase() || "services"} already and want to purchase again, make sure your previous order is completed!</p>
            <p><strong className="text-foreground">2.</strong> Make sure the account is not private, and don't change the username while the order is being processed.</p>
            <p><strong className="text-foreground">3.</strong> Almost no drop in {selectedService?.label?.toLowerCase() || "services"}!</p>
            <p><strong className="text-foreground">4.</strong> Average quality means a shorter guarantee length, semi-real looking accounts/engagements, and average drops.</p>
          </div>
        </div>
      )}

      {/* Submit */}
      <Button
        className="w-full h-12 rounded-xl text-base font-bold gradient-primary glow-primary"
        disabled={!platform || !service || !link || !quantity || price === 0}
      >
        <ShoppingCart className="h-5 w-5 mr-2" />
        Place Order — {price.toLocaleString()} NGN
      </Button>
    </div>
  );
};

export default SocialBoostPage;
