import EventCarousel from '../components/EventCarousel';
import Features from '../components/Features';

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

        
          <Features />

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