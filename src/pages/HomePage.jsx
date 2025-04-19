import { useEffect } from 'react';
import EventCarousel from '../components/EventCarousel';
import Features from '../components/Features';
import { useSelector } from 'react-redux';
import { fetchEvents } from '../sotre/slices/EventSlice';



export default function HomePage() {
  const {events} = useSelector((state)=>state.EventsData)
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <section className="mb-12">
          <EventCarousel events={events} />
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