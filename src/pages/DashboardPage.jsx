import { useState } from "react";
import { Navigate, Outlet, useLocation} from "react-router-dom";
import SidebarDashboard from "../components/SidebarDashboard";
import { useSelector } from "react-redux";
export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("events");
  const {role} = useSelector((state)=>state.authUser);
  const Location = useLocation();

  if(role === 'user'){
    return Navigate({to:'/'})
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="flex">
        {/* Sidebar */}
        <SidebarDashboard setActiveTab={setActiveTab} activeTab={activeTab} />

        {/* Main Content */}
        <section className="w-full pt-9 md:p-0">
          {Location.pathname !== '/dashboard' ?
          <Outlet /> :
          <h1>Dashboard</h1>
          }
        </section>
      </div>
    </div>
  );
}
