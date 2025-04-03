import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function EventCarousel({ events }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[85svh] overflow-hidden rounded-xl">
      <div 
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {events.map((event, index) => (
          <div
            key={event.id}
            className="relative w-full h-full flex-shrink-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/1600x900/?education,university&sig=${index})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
              <h2 className="text-4xl font-bold mb-4">{event.title}</h2>
              <p className="text-xl mb-2">{event.date}</p>
              <p className="text-lg mb-4">{event.location}</p>
              <p className="text-center max-w-2xl">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 backdrop-blur-sm transition-all"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 backdrop-blur-sm transition-all"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}