import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User, Eye, EyeOff, Shield, Zap, Globe, HeadphonesIcon, ArrowRight, CheckCircle } from "lucide-react";

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Auth */}
      <section className="relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-10 pb-16">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gradient">KeaHub</h1>
            <p className="text-muted-foreground text-sm mt-1">Your all-in-one digital services hub</p>
          </div>

          {/* Auth Card */}
          <div className="max-w-md mx-auto">
            <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-xl shadow-2xl shadow-black/30 overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-border">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-3.5 text-sm font-semibold transition-colors ${
                    isLogin
                      ? "text-primary-foreground gradient-primary"
                      : "text-muted-foreground hover:text-foreground bg-card"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-3.5 text-sm font-semibold transition-colors ${
                    !isLogin
                      ? "text-primary-foreground gradient-primary"
                      : "text-muted-foreground hover:text-foreground bg-card"
                  }`}
                >
                  Create Account
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {!isLogin && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full h-11 pl-10 pr-4 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full h-11 pl-10 pr-4 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                      placeholder="••••••••"
                      className="w-full h-11 pl-10 pr-12 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {isLogin && (
                  <div className="flex justify-end">
                    <button type="button" className="text-xs text-primary hover:underline">Forgot password?</button>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full h-12 rounded-xl gradient-primary text-primary-foreground font-bold text-sm glow-primary hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  {isLogin ? "Sign In" : "Create Account"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-border bg-secondary/30 py-6">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "50K+", label: "Active Users" },
              { value: "1M+", label: "Transactions" },
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-xl font-extrabold text-gradient">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-foreground text-center mb-2">Why Choose KeaHub?</h2>
          <p className="text-muted-foreground text-center text-sm mb-10 max-w-lg mx-auto">
            We provide reliable, fast, and affordable digital services you can trust.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Shield, title: "Secure & Trusted", desc: "Bank-level encryption protects every transaction you make on our platform." },
              { icon: Zap, title: "Instant Delivery", desc: "All orders are processed and delivered within seconds, not minutes." },
              { icon: Globe, title: "Global Reach", desc: "Access virtual numbers and social services from over 80+ countries." },
              { icon: HeadphonesIcon, title: "24/7 Support", desc: "Our support team is always available to help resolve any issues." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-5 hover:border-primary/40 transition-colors group">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center mb-3 group-hover:glow-primary transition-all">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground text-sm mb-1">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-foreground text-center mb-2">Our Services</h2>
          <p className="text-muted-foreground text-center text-sm mb-10">Everything you need in one place</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Social Media Boost", items: ["Instagram Followers", "TikTok Views", "Twitter Likes", "YouTube Subscribers"], color: "from-primary to-accent" },
              { title: "Virtual Numbers", items: ["SMS Verification", "80+ Countries", "Instant Activation", "Multiple Providers"], color: "from-accent to-primary" },
              { title: "Data & Airtime", items: ["MTN Data Bundles", "Airtel Top-up", "Glo Data Plans", "9mobile Airtime"], color: "from-primary to-accent" },
            ].map((service) => (
              <div key={service.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-bold text-foreground mb-4">{service.title}</h3>
                <ul className="space-y-2.5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-lg font-bold text-gradient mb-2">KeaHub</h3>
          <p className="text-xs text-muted-foreground">© 2026 KeaHub. All rights reserved. Your trusted digital services platform.</p>
        </div>
      </footer>
    </div>
  );
};

export default AuthPage;
