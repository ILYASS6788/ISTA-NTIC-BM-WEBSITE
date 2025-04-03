import EventCarousel from '../components/EventCarousel';

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
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <section className="mb-12">
          <EventCarousel events={mockEvents} />
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">For Students</h2>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                • Access course materials
              </li>
              <li className="flex items-center text-gray-700">
                • View class schedules
              </li>
              <li className="flex items-center text-gray-700">
                • Register for events
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">For Staff</h2>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                • Manage courses
              </li>
              <li className="flex items-center text-gray-700">
                • Schedule classes
              </li>
              <li className="flex items-center text-gray-700">
                • Organize events
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Quick Links</h2>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                • Academic Calendar
              </li>
              <li className="flex items-center text-gray-700">
                • Student Resources
              </li>
              <li className="flex items-center text-gray-700">
                • Contact Support
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-blue-700 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg mb-6">Join OFPPT and take the first step towards your professional future.</p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Apply Now
          </button>
        </section>
      </div>
    </div>
  );
}