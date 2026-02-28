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

      <main className="max-w-lg mx-auto px-4 py-4 pb-28 space-y-5">
        <BalanceCard />
        <QuickActions />
        <AdBanner />
        <ServicesGrid />
      </main>

      <BottomNavbar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
