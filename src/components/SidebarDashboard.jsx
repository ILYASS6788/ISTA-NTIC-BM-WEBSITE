import React from 'react';
import {  Calendar, BookOpen, Clock, Settings} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function SidebarDashboard() {
  const Navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="bg-blue-800 min-h-screen p-4">
          <div className="flex items-center max-[850px]:flex-col space-x-2 text-white mb-4 pb-3 border-b-2 border-amber-50">
            <Settings className="h-6 w-6" />
            <span className="max-[850px]:hidden text-lg font-semibold">Admin Dashboard</span>
          </div>
          <nav className="space-y-2 flex justify-center items-center flex-col">
            <button
              onClick={() => Navigate('events')}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                location.pathname === '/dashboard/events' || location.pathname === '/dashboard/add-event'
                 ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700'
              }`}
            >
              <Calendar className="h-5 w-5" />
              <span className='max-[850px]:hidden'>Events</span>
            </button>
            <button
              onClick={() => Navigate('schedule')}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                location.pathname === '/dashboard/schedule' || location.pathname === '/dashboard/add-schedule'
                 ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700'
              }`}
            >
              <Clock className="h-5 w-5" />
              <span className='max-[850px]:hidden'>Schedule</span>
            </button>
            <button
              onClick={() => Navigate('lessons')}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                location.pathname === '/dashboard/lessons' || location.pathname === '/dashboard/add-lesson'
                 ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700'
              }`}
            >
              <BookOpen className="h-5 w-5" />
              <span className='max-[850px]:hidden'>Lessons</span>
            </button>
          </nav>
        </div>
  )
}
