import { useState } from "react";
import { Outlet} from "react-router-dom";
import SidebarDashboard from "../components/SidebarDashboard";
export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("events");


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <SidebarDashboard setActiveTab={setActiveTab} activeTab={activeTab} />

        {/* Main Content */}
          <Outlet />
        
      </div>
    </div>
  );
}
