import { Settings, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SettingsPage = () => {
  return (
    <div className="max-w-lg mx-auto px-4 py-4 pb-28 lg:max-w-2xl flex flex-col items-center justify-center min-h-[60vh]">
      <Card className="border-border bg-card rounded-2xl w-full overflow-hidden">
        <CardContent className="p-8 flex flex-col items-center text-center">
          <div className="p-4 rounded-2xl gradient-primary glow-primary mb-5">
            <Rocket className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-base text-gradient font-semibold mb-2">Coming Soon</p>
          <p className="text-sm text-muted-foreground max-w-xs">
            We're building something amazing. Profile management, preferences, security settings and more will be available here soon.
          </p>
          <div className="flex items-center gap-2 mt-6">
            <Settings className="h-4 w-4 text-muted-foreground animate-spin" style={{ animationDuration: "4s" }} />
            <span className="text-xs text-muted-foreground font-medium">Under Development</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;
