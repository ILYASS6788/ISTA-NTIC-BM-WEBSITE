import { useState } from 'react';
import { Users, Calendar, BookOpen, Clock, Settings, ChevronDown, Plus, Edit, Trash2 } from 'lucide-react';

const mockEvents = [
  {
    id: '1',
    title: 'Student Orientation Day',
    date: 'March 15, 2024',
    description: 'Welcome new students! Join us for an introduction to OFPPT programs and facilities.',
    location: 'Main Auditorium'
  },
  {
    id: '2',
    title: 'Technology Workshop',
    date: 'March 20, 2024',
    description: 'Hands-on workshop on emerging technologies in web development.',
    location: 'Lab Building B'
  }
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('events');
  const [showEventModal, setShowEventModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-blue-800 min-h-screen p-4">
          <div className="flex items-center space-x-2 text-white mb-8">
            <Settings className="h-6 w-6" />
            <span className="text-lg font-semibold">Admin Dashboard</span>
          </div>
          
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('events')}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                activeTab === 'events' ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700'
              }`}
            >
              <Calendar className="h-5 w-5" />
              <span>Events</span>
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                activeTab === 'schedule' ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700'
              }`}
            >
              <Clock className="h-5 w-5" />
              <span>Schedule</span>
            </button>
            <button
              onClick={() => setActiveTab('lessons')}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                activeTab === 'lessons' ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700'
              }`}
            >
              <BookOpen className="h-5 w-5" />
              <span>Lessons</span>
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                activeTab === 'users' ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700'
              }`}
            >
              <Users className="h-5 w-5" />
              <span>Users</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="mb-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management
            </h1>
            <button
              onClick={() => setShowEventModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>Add New {activeTab.slice(0, -1)}</span>
            </button>
          </div>

          {/* Events Table */}
          {activeTab === 'events' && (
            <div className="bg-white rounded-lg shadow">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockEvents.map((event) => (
                    <tr key={event.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{event.title}</div>
                        <div className="text-sm text-gray-500">{event.description}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {event.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {event.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-4">
                          <Edit className="h-5 w-5" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Schedule Management */}
          {activeTab === 'schedule' && (
            <div className="bg-white rounded-lg shadow p-6">
              <div className="mb-6">
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Development Web - Year 1</option>
                  <option>Development Web - Year 2</option>
                  <option>Digital Marketing - Year 1</option>
                </select>
              </div>
              <div className="grid grid-cols-5 gap-4">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                  <div key={day} className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">{day}</h3>
                    <button className="text-blue-600 hover:text-blue-800 text-sm">
                      + Add Session
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lessons Management */}
          {activeTab === 'lessons' && (
            <div className="bg-white rounded-lg shadow p-6">
              <div className="mb-6 grid grid-cols-2 gap-4">
                <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>All Classes</option>
                  <option>Development Web - Year 1</option>
                  <option>Development Web - Year 2</option>
                </select>
                <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>All Subjects</option>
                  <option>Web Development</option>
                  <option>Database Design</option>
                </select>
              </div>
              <div className="space-y-4">
                {/* Lesson cards would go here */}
                <div className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Introduction to HTML & CSS</h3>
                      <p className="text-sm text-gray-500">Web Development - Dr. Hassan</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Edit className="h-5 w-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Users Management */}
          {activeTab === 'users' && (
            <div className="bg-white rounded-lg shadow">
              <div className="px-4 py-3 border-b">
                <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>All Roles</option>
                  <option>Students</option>
                  <option>Instructors</option>
                  <option>Administrators</option>
                </select>
              </div>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">John Doe</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      john@example.com
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Student
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-4">
                        <Edit className="h-5 w-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}