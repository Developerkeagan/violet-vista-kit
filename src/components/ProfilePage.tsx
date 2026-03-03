import { User, Mail, Phone, MapPin, Calendar, Shield, Edit3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProfilePage = () => {
  return (
    <div className="max-w-lg mx-auto px-4 py-4 pb-28 lg:max-w-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl gradient-primary glow-primary">
          <User className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-foreground">My Profile</h1>
          <p className="text-xs text-muted-foreground">Manage your account information</p>
        </div>
      </div>

      {/* Avatar Section */}
      <Card className="border-border bg-card rounded-xl mb-5">
        <CardContent className="p-6 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full gradient-primary glow-primary flex items-center justify-center mb-3">
            <span className="text-2xl font-bold text-primary-foreground">JD</span>
          </div>
          <h2 className="text-lg font-bold text-foreground">John Doe</h2>
          <p className="text-sm text-muted-foreground">Premium Member</p>
          <div className="flex items-center gap-1 mt-2">
            <Shield className="h-3.5 w-3.5 text-success" />
            <span className="text-xs font-semibold text-success">Verified Account</span>
          </div>
        </CardContent>
      </Card>

      {/* Info Cards */}
      <div className="space-y-3">
        {[
          { icon: User, label: "Full Name", value: "John Doe" },
          { icon: Mail, label: "Email Address", value: "user@gmail.com" },
          { icon: Phone, label: "Phone Number", value: "+234 812 345 6789" },
          { icon: MapPin, label: "Location", value: "Lagos, Nigeria" },
          { icon: Calendar, label: "Member Since", value: "October 2024" },
        ].map(({ icon: Icon, label, value }) => (
          <Card key={label} className="border-border bg-card rounded-xl">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider">{label}</p>
                  <p className="text-sm font-medium text-foreground">{value}</p>
                </div>
              </div>
              <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                <Edit3 className="h-3.5 w-3.5 text-muted-foreground" />
              </button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Account Stats */}
      <Card className="border-border bg-card rounded-xl mt-5">
        <CardContent className="p-4">
          <h3 className="text-sm font-bold text-foreground mb-3">Account Summary</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Total Transactions", value: "147" },
              { label: "Total Spent", value: "₦45,230" },
              { label: "Referrals", value: "6" },
              { label: "Commission Earned", value: "₦1,190" },
            ].map((stat) => (
              <div key={stat.label} className="p-3 rounded-xl bg-secondary text-center">
                <p className="text-lg font-bold text-foreground">{stat.value}</p>
                <p className="text-[10px] text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
