import { useState } from 'react';
import { Clock, MapPin } from 'lucide-react';

const mockSchedule = {
  id: '1',
  class: 'Development Web - Year 1',
  weekSchedule: {
    Monday: [
      { time: '08:00-10:00', subject: 'Web Development', instructor: 'Dr. Hassan', room: 'Lab 101' },
      { time: '10:30-12:30', subject: 'Database Design', instructor: 'Prof. Amina', room: 'Room 203' },
      { time: '14:00-16:00', subject: 'JavaScript Basics', instructor: 'Mr. Karim', room: 'Lab 102' }
    ],
    Tuesday: [
      { time: '09:00-11:00', subject: 'UI/UX Design', instructor: 'Ms. Sara', room: 'Design Studio' },
      { time: '11:30-13:30', subject: 'React Framework', instructor: 'Dr. Omar', room: 'Lab 103' }
    ],
    Wednesday: [
      { time: '08:00-10:00', subject: 'Node.js', instructor: 'Mr. Youssef', room: 'Lab 101' },
      { time: '10:30-12:30', subject: 'Project Management', instructor: 'Prof. Leila', room: 'Room 205' }
    ],
    Thursday: [
      { time: '09:00-11:00', subject: 'Software Testing', instructor: 'Dr. Mehdi', room: 'Lab 104' },
      { time: '11:30-13:30', subject: 'API Development', instructor: 'Ms. Fatima', room: 'Lab 102' }
    ],
    Friday: [
      { time: '08:00-10:00', subject: 'Team Project', instructor: 'Dr. Hassan', room: 'Project Room' },
      { time: '10:30-12:30', subject: 'Career Development', instructor: 'Mr. Ali', room: 'Room 201' }
    ]
  }
};

export default function SchedulePage() {
  const [selectedClass, setSelectedClass] = useState('Development Web - Year 1');
  const days = Object.keys(mockSchedule.weekSchedule);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900">Class Schedule</h1>
          <div className="mt-4">
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="mt-1 block w-full md:w-64 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus: ring-blue-500"
            >
              <option>Development Web - Year 1</option>
              <option>Development Web - Year 2</option>
              <option>Digital Marketing - Year 1</option>
            </select>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x">
            {days.map((day) => (
              <div key={day} className="p-4">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">{day}</h3>
                <div className="space-y-4">
                  {mockSchedule.weekSchedule[day].map((session, index) => (
                    <div
                      key={index}
                      className="bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-colors"
                    >
                      <div className="flex items-center text-blue-900 mb-2">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="font-medium">{session.time}</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {session.subject}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {session.instructor}
                      </p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {session.room}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
            Download Schedule (PDF)
          </button>
        </div>
      </div>
    </div>
  );
}