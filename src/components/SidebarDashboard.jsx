import React, { useEffect, useRef, useState } from "react";
import { Calendar, BookOpen, Clock, Settings } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import ".././hamburger.css"; 

export default function SidebarDashboard() {
  const [open, setOpen] = useState(false);
  const Navigate = useNavigate();
  const location = useLocation();
  const sidebarDrop =useRef(null)

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
    <div className="relative h-12 bg-geay-600" ref={sidebarDrop}>
     
      <div className={`xl:hidden absolute top-0 left-2 z-48 ${open && 'hidden'}`}>
        <div className="hamburger">
          <input
            className="checkbox"
            type="checkbox"
            checked={open}
            onChange={toggleSidebar}
          />
          <svg  viewBox="0 0 50 50" height="50" width="50">
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
        className={`bg-blue-800 px-7 pt-7 md:px-5 md:w-60 h-screen p-2 transition-all duration-300 ease-in-out
        ${open ? "block absolute top-0 left-0 z-40 w-60 h-screen" : "hidden xl:block"}`}
      >

        <div className="flex items-center space-x-2 text-white mb-4 pb-3 border-b-2 border-amber-50">
          <Settings className="h-6 w-6" />
          <span className=" text-lg font-semibold">
            Admin Dashboard
          </span>
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

function SidebarButton({ icon, label,  active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full cursor-pointer flex items-center space-x-2 px-4 py-2 rounded-lg ${
        active
          ? "bg-blue-700 text-white"
          : "text-blue-100 hover:bg-blue-700"
      }`}
    >
      {icon}
      <span >{label}</span>
    </button>
  );
}
