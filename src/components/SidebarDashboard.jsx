import React from 'react';
import { Users, Calendar, BookOpen, Clock, Settings} from 'lucide-react';

export default function SidebarDashboard({setActiveTab,activeTab}) {
  return (
    <div className="bg-blue-800 min-h-screen p-4">
          <div className="flex items-center max-[850px]:flex-col space-x-2 text-white mb-4 pb-3 border-b-2 border-amber-50">
            <Settings className="h-6 w-6" />
            <span className="max-[850px]:hidden text-lg font-semibold">Admin Dashboard</span>
          </div>
          <nav className="space-y-2 flex justify-center items-center flex-col">
            <button
              onClick={() => setActiveTab('events')}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                activeTab === 'events' ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700'
              }`}
            >
              <Calendar className="h-5 w-5" />
              <span className='max-[850px]:hidden'>Events</span>
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                activeTab === 'schedule' ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700'
              }`}
            >
              <Clock className="h-5 w-5" />
              <span className='max-[850px]:hidden'>Schedule</span>
            </button>
            <button
              onClick={() => setActiveTab('lessons')}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                activeTab === 'lessons' ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700'
              }`}
            >
              <BookOpen className="h-5 w-5" />
              <span className='max-[850px]:hidden'>Lessons</span>
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                activeTab === 'users' ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700'
              }`}
            >
              <Users className="h-5 w-5" />
              <span className='max-[850px]:hidden'>Users</span>
            </button>
          </nav>
        </div>
  )
}
