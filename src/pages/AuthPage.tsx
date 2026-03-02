import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail, Lock, User, Eye, EyeOff, Shield, Zap, Globe, HeadphonesIcon,
  ArrowRight, CheckCircle, Star, Send, Heart, TrendingUp, Smartphone,
  Database, Award, Clock, MessageSquare
} from "lucide-react";

const testimonials = [
  { name: "Adebayo O.", role: "Digital Marketer", text: "KeaHub has transformed how I manage my clients' social media. Instant delivery and great pricing!", rating: 5, avatar: "AO" },
  { name: "Chioma N.", role: "Entrepreneur", text: "The virtual numbers service is a lifesaver for my business verifications. Reliable and fast!", rating: 5, avatar: "CN" },
  { name: "Ibrahim K.", role: "Student", text: "Best data bundle prices I've found. The platform is easy to use and support is always helpful.", rating: 4, avatar: "IK" },
  { name: "Favour A.", role: "Freelancer", text: "I've earned over ₦50,000 from referrals alone. KeaHub's commission system is truly rewarding.", rating: 5, avatar: "FA" },
];

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (isLogin) {
      if (form.email === "admin@gmail.com" && form.password === "12345678") {
        navigate("/admin");
        return;
      }
      if (form.email === "user@gmail.com" && form.password === "12345678") {
        navigate("/dashboard");
        return;
      }
      setError("Invalid email or password. Please try again.");
      return;
    }
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section with Auth */}
      <section className="relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] pointer-events-none animate-pulse" />
        <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-8 pb-16">
          {/* Nav */}
          <nav className="flex items-center justify-between mb-10 animate-fade-in">
            <h1 className="text-2xl font-extrabold text-gradient">KeaHub</h1>
            <div className="hidden md:flex items-center gap-6">
              {["Features", "Services", "Testimonials", "About"].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
              ))}
            </div>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Hero Text */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <Zap className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-semibold text-primary">#1 Digital Services Platform</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                Your All-in-One
                <span className="text-gradient block">Digital Services Hub</span>
              </h2>
              <p className="text-muted-foreground text-base max-w-md leading-relaxed">
                Buy data, boost your social media, get virtual numbers, and earn commissions — all from one powerful platform trusted by 50,000+ users.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {["JD", "AK", "MN", "SO"].map((initials, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center">
                      <span className="text-[10px] font-bold text-foreground">{initials}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-warning text-warning" />)}
                  </div>
                  <p className="text-[11px] text-muted-foreground">50,000+ happy users</p>
                </div>
              </div>
            </div>

            {/* Right - Auth Card */}
            <div className="animate-fade-in" style={{ animationDelay: "0.15s" }}>
              <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-xl shadow-2xl shadow-black/30 overflow-hidden">
                <div className="flex border-b border-border">
                  <button onClick={() => { setIsLogin(true); setError(""); }} className={`flex-1 py-3.5 text-sm font-semibold transition-colors ${isLogin ? "text-primary-foreground gradient-primary" : "text-muted-foreground hover:text-foreground bg-card"}`}>
                    Sign In
                  </button>
                  <button onClick={() => { setIsLogin(false); setError(""); }} className={`flex-1 py-3.5 text-sm font-semibold transition-colors ${!isLogin ? "text-primary-foreground gradient-primary" : "text-muted-foreground hover:text-foreground bg-card"}`}>
                    Create Account
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  {error && (
                    <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs font-medium">{error}</div>
                  )}

                  {!isLogin && (
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" className="w-full h-11 pl-10 pr-4 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all" />
                      </div>
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="w-full h-11 pl-10 pr-4 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input type={showPassword ? "text" : "password"} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="••••••••" className="w-full h-11 pl-10 pr-12 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all" />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  {isLogin && (
                    <div className="flex justify-end">
                      <button type="button" className="text-xs text-primary hover:underline">Forgot password?</button>
                    </div>
                  )}

                  <button type="submit" className="w-full h-12 rounded-xl gradient-primary text-primary-foreground font-bold text-sm glow-primary hover:opacity-90 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95">
                    {isLogin ? "Sign In" : "Create Account"}
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  {isLogin && (
                    <p className="text-center text-[11px] text-muted-foreground mt-2">
                      Demo: <span className="text-foreground/70">user@gmail.com</span> / <span className="text-foreground/70">admin@gmail.com</span>
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-border bg-secondary/30 py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "50K+", label: "Active Users", icon: User },
              { value: "₦2B+", label: "Transactions", icon: TrendingUp },
              { value: "99.9%", label: "Uptime", icon: Clock },
              { value: "24/7", label: "Support", icon: HeadphonesIcon },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <stat.icon className="h-5 w-5 text-primary mx-auto mb-1" />
                <p className="text-2xl font-extrabold text-gradient">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-2">Why Choose Us</span>
            <h2 className="text-3xl font-extrabold text-foreground mb-3">Built for Reliability & Speed</h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">We provide the most reliable, fast, and affordable digital services in Africa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Shield, title: "Secure & Trusted", desc: "Bank-level encryption protects every transaction on our platform." },
              { icon: Zap, title: "Instant Delivery", desc: "All orders processed and delivered within seconds." },
              { icon: Globe, title: "Global Reach", desc: "Virtual numbers and services from 80+ countries." },
              { icon: HeadphonesIcon, title: "24/7 Support", desc: "Always available to help resolve any issues." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:glow-primary transition-all">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-2">Our Services</span>
            <h2 className="text-3xl font-extrabold text-foreground mb-3">Everything You Need</h2>
            <p className="text-muted-foreground text-sm">One platform, endless possibilities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Heart, title: "Social Media Boost", items: ["Instagram Followers & Likes", "TikTok Views & Shares", "Twitter/X Engagement", "YouTube Subscribers"], color: "from-primary to-accent" },
              { icon: Smartphone, title: "Virtual Numbers", items: ["SMS Verification Numbers", "80+ Countries Available", "Instant Activation", "Multiple Providers"], color: "from-accent to-primary" },
              { icon: Database, title: "Data & Airtime", items: ["MTN Data Bundles", "Airtel Top-up Plans", "Glo Data Packages", "9mobile Airtime"], color: "from-primary to-accent" },
            ].map(({ icon: Icon, title, items, color }, i) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4`}>
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground mb-4">{title}</h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
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

      {/* About Us */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest">About KeaHub</span>
              <h2 className="text-3xl font-extrabold text-foreground">Empowering Digital Africa</h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded with a mission to make digital services accessible to everyone, KeaHub has grown into Africa's most trusted platform for data bundles, social media growth, and virtual number services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe in transparency, speed, and reliability. Every transaction on our platform is secured with bank-level encryption, and our support team is available round the clock.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, label: "Award-winning platform" },
                  { icon: Shield, label: "SSL encrypted" },
                  { icon: Clock, label: "2-second delivery" },
                  { icon: Heart, label: "50K+ satisfied users" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm text-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "3+", label: "Years Active", bg: "gradient-primary" },
                { value: "80+", label: "Countries", bg: "bg-card border border-border" },
                { value: "99.9%", label: "Success Rate", bg: "bg-card border border-border" },
                { value: "₦2B+", label: "Processed", bg: "gradient-primary" },
              ].map((stat) => (
                <div key={stat.label} className={`${stat.bg} rounded-2xl p-6 text-center ${stat.bg.includes("gradient") ? "glow-primary" : ""}`}>
                  <p className={`text-2xl font-extrabold ${stat.bg.includes("gradient") ? "text-primary-foreground" : "text-foreground"}`}>{stat.value}</p>
                  <p className={`text-xs mt-1 ${stat.bg.includes("gradient") ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold text-primary uppercase tracking-widest mb-2">Testimonials</span>
            <h2 className="text-3xl font-extrabold text-foreground mb-3">What Our Users Say</h2>
            <p className="text-muted-foreground text-sm">Trusted by thousands across Africa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <div key={t.name} className="rounded-2xl border border-border bg-card p-5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className={`h-3.5 w-3.5 ${j < t.rating ? "fill-warning text-warning" : "text-muted"}`} />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">{t.avatar}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-[11px] text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary/10 blur-[60px] pointer-events-none" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-5 glow-primary">
                <MessageSquare className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-extrabold text-foreground mb-2">Stay Updated</h2>
              <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">Get the latest updates on new features, promotions, and tips delivered to your inbox.</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 h-12 px-4 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                />
                <button className="h-12 px-6 rounded-xl gradient-primary text-primary-foreground font-semibold text-sm glow-primary hover:opacity-90 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 shrink-0">
                  <Send className="h-4 w-4" />
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-xl font-extrabold text-gradient mb-3">KeaHub</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">Your trusted digital services platform. Data, social boost, virtual numbers — all in one place.</p>
            </div>
            {[
              { title: "Services", links: ["Data Bundles", "Social Boost", "Virtual Numbers", "Airtime"] },
              { title: "Company", links: ["About Us", "Contact", "Careers", "Blog"] },
              { title: "Support", links: ["Help Center", "Terms of Service", "Privacy Policy", "FAQ"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-bold text-foreground mb-3">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}><a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">© 2026 KeaHub. All rights reserved.</p>
            <div className="flex items-center gap-4">
              {["Twitter", "Instagram", "LinkedIn", "Telegram"].map(s => (
                <a key={s} href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">{s}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuthPage;
