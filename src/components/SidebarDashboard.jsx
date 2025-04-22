import React, { useEffect, useRef, useState } from "react";
import {
  Calendar,
  BookOpen,
  Clock,
  Settings,
  CircleUserRoundIcon,
  LucideArrowUpRightFromCircle,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import ".././hamburger.css";
import { useDispatch } from "react-redux";
import { logoutUser } from "../sotre/slices/AuthSlice";

export default function SidebarDashboard({ user }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const Navigate = useNavigate();
  const location = useLocation();
  const sidebarDrop = useRef(null);
  const handleLogOut= async()=>{
    await dispatch(logoutUser())
  }

  const [Isimage, setImageNotFound] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarDrop.current && !sidebarDrop.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSidebar = () => setOpen(!open);

  return (
    <div className="relative md:w-fit bg-red-600" ref={sidebarDrop}>
      <div
        className={`xl:hidden fixed top-3 md:top-16.5 left-3 z-50 ${open && "hidden"}`}
      >
        <div className="hamburger">
          <input
            className="checkbox"
            type="checkbox"
            checked={open}
            onChange={toggleSidebar}
          />
          <svg viewBox="0 0 50 50" height="50" width="50" className="bg-white rounded-md">
            <path
              className="lineTop line"
              strokeLinecap="round"
              d="M6 11L44 11"
            ></path>
            <path
              className="lineMid line"
              strokeLinecap="round"
              d="M6 24H43"
            ></path>
            <path
              className="lineBottom line"
              strokeLinecap="round"
              d="M6 37H43"
            ></path>
          </svg>
        </div>
      </div>

      <div
      
      className={`bg-gradient-to-b from-gray-900 via-slate-700 to-slate-500 text-white shadow-xl rounded-r-md pl-7 pr-0 pt-7 md:pl-5 md:pr-5 md:w-60 transition-all duration-300 ease-in-out
        ${open ? "block fixed top-18 left-0 z-40 w-60" : "hidden xl:block"}`}
        style={{ height: "calc(100vh - 74px)" }}
      >
        <div className="shrink-0 h-28 md:h-14 md:hover:h-28 transition-all duration-150 block mb-6 overflow-y-hidden">
          <div className="flex items-center space-x-3 mb-3">
            {Isimage || !user.client_avatar ? (
              <CircleUserRoundIcon size={38} color="white" />
            ) : (
              <img
                className="inline-block shrink-0 w-10 h-10 rounded-full object-cover border border-white"
                referrerPolicy="no-referrer" 
                src={user.client_avatar}
                onError={() => setImageNotFound(true)}
                alt="Avatar"
              />
            )}
            <div>
              <h3 className="font-semibold text-white">{user.name}</h3>
              <p className="text-sm text-blue-200">{user.email}</p>
            </div>
          </div>
            <div>
              <button
              onClick={handleLogOut}
               className="ml-10 text-white px-4 py-3 text-sm cursor-pointer hover:bg-white/5 hover:text-red-400 p-1 rounded-md transition-colors ease-linear">
                Deconnexion 
                <LucideArrowUpRightFromCircle className="ml-1.5 inline" size={18} />
              </button>
            </div>
        </div>

        <div className="flex items-center space-x-2 text-white mb-4 pb-3 border-b-2 border-amber-50">
          <Settings className="h-6 w-6" />
          <span className=" text-lg font-semibold">Admin Dashboard</span>
        </div>
        <nav className="space-y-2 flex justify-center items-center flex-col">
          <SidebarButton
            to="events"
            active={
              location.pathname === "/dashboard/events" ||
              location.pathname === "/dashboard/add-event"
            }
            icon={<Calendar className="h-5 w-5" />}
            label="Events"
            onClick={() => {
              Navigate("events");
              setOpen(false);
            }}
          />
          <SidebarButton
            to="schedule"
            active={
              location.pathname === "/dashboard/schedule" ||
              location.pathname === "/dashboard/add-schedule"
            }
            icon={<Clock className="h-5 w-5" />}
            label="Schedule"
            onClick={() => {
              Navigate("schedule");
              setOpen(false);
            }}
          />
          <SidebarButton
            to="lessons"
            active={
              location.pathname === "/dashboard/lessons" ||
              location.pathname === "/dashboard/add-lesson"
            }
            icon={<BookOpen className="h-5 w-5" />}
            label="Lessons"
            onClick={() => {
              Navigate("lessons");
              setOpen(false);
            }}
          />
        </nav>
      </div>
    </div>
  );
}

function SidebarButton({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full transition duration-200 cursor-pointer
        flex items-center space-x-2 px-4 py-2 rounded-l-lg ${
        active
          ? "bg-white text-indigo-800 shadow-md font-bold"
          : "text-blue-100 hover:bg-gray-900 hover:scale-[1.03]"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
