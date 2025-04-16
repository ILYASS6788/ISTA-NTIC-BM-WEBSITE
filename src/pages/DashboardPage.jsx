import { useState } from "react";
import { Outlet, useLocation} from "react-router-dom";
import SidebarDashboard from "../components/SidebarDashboard";
export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("events");
  const Location = useLocation();


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <SidebarDashboard setActiveTab={setActiveTab} activeTab={activeTab} />

        {/* Main Content */}
        <section className="w-full">
          {Location.pathname !== '/dashboard' ?
          <Outlet /> :
          <h1>Dashboard</h1>
          }
        </section>
      </div>
    </div>
  );
}
