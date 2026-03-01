import { useState, useMemo } from "react";
import { Smartphone, Copy, CheckCircle2, XCircle, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const servers = [
  { id: "server1", name: "Server 1 — Fast" },
  { id: "server2", name: "Server 2 — Stable" },
  { id: "server3", name: "Server 3 — Premium" },
];

const countries: Record<string, { id: string; name: string; flag: string }[]> = {
  server1: [
    { id: "ng", name: "Nigeria", flag: "🇳🇬" },
    { id: "us", name: "United States", flag: "🇺🇸" },
    { id: "uk", name: "United Kingdom", flag: "🇬🇧" },
    { id: "gh", name: "Ghana", flag: "🇬🇭" },
  ],
  server2: [
    { id: "ng", name: "Nigeria", flag: "🇳🇬" },
    { id: "ke", name: "Kenya", flag: "🇰🇪" },
    { id: "za", name: "South Africa", flag: "🇿🇦" },
  ],
  server3: [
    { id: "us", name: "United States", flag: "🇺🇸" },
    { id: "uk", name: "United Kingdom", flag: "🇬🇧" },
    { id: "ca", name: "Canada", flag: "🇨🇦" },
  ],
};

const products: Record<string, { id: string; name: string }[]> = {
  ng: [
    { id: "whatsapp", name: "WhatsApp" },
    { id: "telegram", name: "Telegram" },
    { id: "twitter", name: "Twitter / X" },
    { id: "facebook", name: "Facebook" },
    { id: "google", name: "Google" },
  ],
  us: [
    { id: "whatsapp", name: "WhatsApp" },
    { id: "google", name: "Google" },
    { id: "openai", name: "OpenAI" },
  ],
  uk: [
    { id: "whatsapp", name: "WhatsApp" },
    { id: "telegram", name: "Telegram" },
  ],
  gh: [
    { id: "whatsapp", name: "WhatsApp" },
    { id: "telegram", name: "Telegram" },
  ],
  ke: [
    { id: "whatsapp", name: "WhatsApp" },
    { id: "mpesa", name: "M-Pesa" },
  ],
  za: [
    { id: "whatsapp", name: "WhatsApp" },
    { id: "facebook", name: "Facebook" },
  ],
  ca: [
    { id: "google", name: "Google" },
    { id: "whatsapp", name: "WhatsApp" },
  ],
};

const providers: Record<string, { id: string; name: string; price: number }[]> = {
  whatsapp: [
    { id: "mtn", name: "MTN", price: 150 },
    { id: "airtel", name: "Airtel", price: 120 },
    { id: "glo", name: "Glo", price: 100 },
  ],
  telegram: [
    { id: "mtn", name: "MTN", price: 200 },
    { id: "airtel", name: "Airtel", price: 180 },
  ],
  twitter: [
    { id: "mtn", name: "MTN", price: 250 },
    { id: "9mobile", name: "9mobile", price: 220 },
  ],
  facebook: [
    { id: "airtel", name: "Airtel", price: 130 },
    { id: "glo", name: "Glo", price: 110 },
  ],
  google: [
    { id: "mtn", name: "MTN", price: 300 },
    { id: "airtel", name: "Airtel", price: 280 },
  ],
  openai: [
    { id: "tmobile", name: "T-Mobile", price: 500 },
    { id: "att", name: "AT&T", price: 480 },
  ],
  mpesa: [
    { id: "safaricom", name: "Safaricom", price: 200 },
  ],
};

type OrderStatus = "idle" | "pending" | "active" | "completed" | "cancelled";

interface SmsMessage {
  from: string;
  message: string;
  time: string;
}

const SimPage = () => {
  const [server, setServer] = useState("");
  const [country, setCountry] = useState("");
  const [product, setProduct] = useState("");
  const [provider, setProvider] = useState("");
  const [orderStatus, setOrderStatus] = useState<OrderStatus>("idle");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [smsMessages, setSmsMessages] = useState<SmsMessage[]>([]);
  const [copied, setCopied] = useState(false);

  const countryList = useMemo(() => countries[server] || [], [server]);
  const productList = useMemo(() => products[country] || [], [country]);
  const providerList = useMemo(() => providers[product] || [], [product]);

  const selectedProvider = useMemo(
    () => providerList.find((p) => p.id === provider),
    [providerList, provider]
  );

  const handleServerChange = (val: string) => {
    setServer(val);
    setCountry("");
    setProduct("");
    setProvider("");
  };

  const handleCountryChange = (val: string) => {
    setCountry(val);
    setProduct("");
    setProvider("");
  };

  const handleProductChange = (val: string) => {
    setProduct(val);
    setProvider("");
  };

  const handleBuy = () => {
    setOrderStatus("active");
    setPhoneNumber("+234 812 345 6789");
    setSmsMessages([
      {
        from: "WhatsApp",
        message: "Your verification code is 483-291. Do not share this with anyone.",
        time: "Just now",
      },
    ]);
  };

  const handleCancel = () => {
    setOrderStatus("cancelled");
    setPhoneNumber("");
    setSmsMessages([]);
    setTimeout(() => setOrderStatus("idle"), 1500);
  };

  const handleFinish = () => {
    setOrderStatus("completed");
    setTimeout(() => {
      setOrderStatus("idle");
      setServer("");
      setCountry("");
      setProduct("");
      setProvider("");
      setPhoneNumber("");
      setSmsMessages([]);
    }, 1500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber.replace(/\s/g, ""));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const canBuy = server && country && product && provider && orderStatus === "idle";

  return (
    <div className="max-w-lg mx-auto px-4 py-4 pb-28 lg:max-w-2xl">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl gradient-primary glow-primary">
          <Smartphone className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-foreground">Virtual Numbers</h1>
          <p className="text-xs text-muted-foreground">Receive SMS verification codes instantly</p>
        </div>
      </div>

      {/* Selection Form */}
      <div className="space-y-3">
        {/* Server */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Server</label>
          <Select value={server} onValueChange={handleServerChange} disabled={orderStatus === "active"}>
            <SelectTrigger className="h-12 bg-card border-border rounded-xl text-sm">
              <SelectValue placeholder="Select server" />
            </SelectTrigger>
            <SelectContent>
              {servers.map((s) => (
                <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Country */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Country</label>
          <Select value={country} onValueChange={handleCountryChange} disabled={!server || orderStatus === "active"}>
            <SelectTrigger className="h-12 bg-card border-border rounded-xl text-sm">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              {countryList.map((c) => (
                <SelectItem key={c.id} value={c.id}>
                  <span className="flex items-center gap-2">{c.flag} {c.name}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Product */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Product</label>
          <Select value={product} onValueChange={handleProductChange} disabled={!country || orderStatus === "active"}>
            <SelectTrigger className="h-12 bg-card border-border rounded-xl text-sm">
              <SelectValue placeholder="Select product" />
            </SelectTrigger>
            <SelectContent>
              {productList.map((p) => (
                <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Provider */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Provider</label>
          <Select value={provider} onValueChange={setProvider} disabled={!product || orderStatus === "active"}>
            <SelectTrigger className="h-12 bg-card border-border rounded-xl text-sm">
              <SelectValue placeholder="Select provider" />
            </SelectTrigger>
            <SelectContent>
              {providerList.map((p) => (
                <SelectItem key={p.id} value={p.id}>
                  {p.name} — ₦{p.price.toLocaleString()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Display */}
        {selectedProvider && (
          <Card className="border-border bg-secondary/50 rounded-xl">
            <CardContent className="p-4 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Price</span>
              <span className="text-xl font-bold text-gradient">₦{selectedProvider.price.toLocaleString()}</span>
            </CardContent>
          </Card>
        )}

        {/* Buy Button */}
        {orderStatus === "idle" && (
          <Button
            onClick={handleBuy}
            disabled={!canBuy}
            className="w-full h-12 rounded-xl gradient-primary text-primary-foreground font-semibold text-sm glow-primary disabled:opacity-40 disabled:shadow-none"
          >
            Buy Number{selectedProvider ? ` — ₦${selectedProvider.price.toLocaleString()}` : ""}
          </Button>
        )}
      </div>

      {/* Active Order Section */}
      {orderStatus === "active" && (
        <div className="mt-5 space-y-3">
          {/* Phone Number */}
          <Card className="border-border bg-card rounded-xl">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Your Number</span>
                <Badge variant="outline" className="border-accent text-accent text-[10px]">
                  <Clock className="h-3 w-3 mr-1" /> Active
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-foreground tracking-wide">{phoneNumber}</span>
                <Button variant="ghost" size="icon" onClick={handleCopy} className="text-muted-foreground hover:text-foreground">
                  {copied ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* SMS Messages */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                SMS Messages ({smsMessages.length})
              </span>
            </div>

            {smsMessages.length === 0 ? (
              <Card className="border-border bg-card rounded-xl">
                <CardContent className="p-6 text-center">
                  <p className="text-sm text-muted-foreground">Waiting for SMS...</p>
                  <div className="mt-2 flex justify-center gap-1">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse"
                        style={{ animationDelay: `${i * 0.3}s` }}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-2">
                {smsMessages.map((sms, idx) => (
                  <Card key={idx} className="border-border bg-card rounded-xl">
                    <CardContent className="p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-accent">{sms.from}</span>
                        <span className="text-[10px] text-muted-foreground">{sms.time}</span>
                      </div>
                      <p className="text-sm text-foreground">{sms.message}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Cancel & Finish Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={handleCancel}
              variant="outline"
              className="flex-1 h-12 rounded-xl border-destructive/50 text-destructive hover:bg-destructive/10 font-semibold text-sm"
            >
              <XCircle className="h-4 w-4 mr-2" /> Cancel
            </Button>
            <Button
              onClick={handleFinish}
              className="flex-1 h-12 rounded-xl gradient-primary text-primary-foreground font-semibold text-sm glow-primary"
            >
              <CheckCircle2 className="h-4 w-4 mr-2" /> Finish
            </Button>
          </div>
        </div>
      )}

      {/* Status Feedback */}
      {orderStatus === "cancelled" && (
        <Card className="mt-5 border-destructive/30 bg-destructive/10 rounded-xl">
          <CardContent className="p-4 text-center">
            <XCircle className="h-8 w-8 text-destructive mx-auto mb-2" />
            <p className="text-sm font-semibold text-destructive">Order Cancelled</p>
          </CardContent>
        </Card>
      )}

      {orderStatus === "completed" && (
        <Card className="mt-5 border-green-500/30 bg-green-500/10 rounded-xl">
          <CardContent className="p-4 text-center">
            <CheckCircle2 className="h-8 w-8 text-green-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-green-400">Order Completed</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SimPage;
