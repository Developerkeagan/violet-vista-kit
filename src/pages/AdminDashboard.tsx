import { useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminTopNavbar from "@/components/admin/AdminTopNavbar";
import AdminOverview from "@/components/admin/AdminOverview";
import UserManagement from "@/components/admin/UserManagement";
import VTUSetup from "@/components/admin/VTUSetup";
import SMMSetup from "@/components/admin/SMMSetup";
import VirtualNumbersSetup from "@/components/admin/VirtualNumbersSetup";
import WebsiteSettings from "@/components/admin/WebsiteSettings";
import DirectDeposit from "@/components/admin/DirectDeposit";
import TransactionsPage from "@/components/admin/TransactionsPage";
import AnnouncementsPage from "@/components/admin/AnnouncementsPage";
import SupportTickets from "@/components/admin/SupportTickets";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (activeTab) {
      case "overview": return <AdminOverview />;
      case "users": return <UserManagement />;
      case "vtu-setup": return <VTUSetup />;
      case "smm-setup": return <SMMSetup />;
      case "numbers-setup": return <VirtualNumbersSetup />;
      case "website-settings": return <WebsiteSettings />;
      case "direct-deposit": return <DirectDeposit />;
      case "transactions": return <TransactionsPage />;
      case "announcements": return <AnnouncementsPage />;
      case "support": return <SupportTickets />;
      default: return <AdminOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <AdminTopNavbar onMenuClick={() => setSidebarOpen(true)} />
      <AdminSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <main className="max-w-7xl mx-auto px-4 py-5 pb-8">
        {renderPage()}
      </main>
    </div>
  );
};

export default AdminDashboard;
