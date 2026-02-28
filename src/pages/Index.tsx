import { useState } from "react";
import TopNavbar from "@/components/TopNavbar";
import BottomNavbar from "@/components/BottomNavbar";
import BalanceCard from "@/components/BalanceCard";
import QuickActions from "@/components/QuickActions";
import AdBanner from "@/components/AdBanner";
import ServicesGrid from "@/components/ServicesGrid";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-background">
      <TopNavbar />

      <main className="max-w-5xl mx-auto px-4 py-4 pb-28">
        {/* Top row: Balance + Quick Actions side by side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-5">
          <div className="lg:col-span-3">
            <BalanceCard />
          </div>
          <div className="lg:col-span-2">
            <QuickActions />
          </div>
        </div>

        {/* Bottom row: Ad Banner + Services side by side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          <div className="lg:col-span-2">
            <AdBanner />
          </div>
          <div className="lg:col-span-3">
            <ServicesGrid />
          </div>
        </div>
      </main>

      <BottomNavbar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
