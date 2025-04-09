import { useState } from 'react';
import { Calendar, MapPin, Plus, Bell } from 'lucide-react';

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
  },
  {
    id: '3',
    title: 'Career Fair 2024',
    date: 'April 5, 2024',
    description: 'Connect with industry leaders and explore career opportunities.',
    location: 'Exhibition Hall'
  },
  {
    id: '4',
    title: 'Hackathon 2024',
    date: 'April 15, 2024',
    description: '24-hour coding challenge with amazing prizes and networking opportunities.',
    location: 'Innovation Center'
  }
];

export default function EventsPage() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900">Upcoming Events</h1>
        </div>

        <div className="mb-6">
          <div className="flex space-x-4">
            {['all', 'workshops', 'seminars', 'career events'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg capitalize ${
                  filter === category
                    ? 'bg-blue-700 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://source.unsplash.com/800x400/?event,conference&sig=${event.id})`
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex justify-between items-center">
                  <button className="text-blue-700 hover:text-blue-800 font-medium">
                    Learn More
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-blue-700">
                    <Bell className="h-5 w-5 mr-1" />
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}