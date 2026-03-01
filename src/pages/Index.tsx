import { useState } from "react";
import TopNavbar from "@/components/TopNavbar";
import BottomNavbar from "@/components/BottomNavbar";
import BalanceCard from "@/components/BalanceCard";
import QuickActions from "@/components/QuickActions";
import AdBanner from "@/components/AdBanner";
import ServicesGrid from "@/components/ServicesGrid";
import SocialBoostPage from "@/components/SocialBoostPage";
import SimPage from "@/components/SimPage";
import AnalyticsPage from "@/components/AnalyticsPage";
import SettingsPage from "@/components/SettingsPage";
import AppSidebar from "@/components/AppSidebar";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <TopNavbar onMenuClick={() => setSidebarOpen(true)} />
      <AppSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {activeTab === "home" && (
        <main className="max-w-5xl mx-auto px-4 py-4 pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-5">
            <div className="lg:col-span-3">
              <BalanceCard />
            </div>
            <div className="lg:col-span-2">
              <QuickActions />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
            <div className="lg:col-span-2">
              <AdBanner />
            </div>
            <div className="lg:col-span-3">
              <ServicesGrid />
            </div>
          </div>
        </main>
      )}

      {activeTab === "social-boost" && (
        <main><SocialBoostPage /></main>
      )}

      {activeTab === "sim" && (
        <main><SimPage /></main>
      )}

      {activeTab === "analytics" && (
        <main><AnalyticsPage /></main>
      )}

      {activeTab === "settings" && (
        <main><SettingsPage /></main>
      )}

      <BottomNavbar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
