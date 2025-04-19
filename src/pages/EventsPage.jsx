import { useEffect, useState } from "react";
import { Calendar, MapPin, Plus, Bell } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { addEvents } from "../sotre/slices/EventSlice";
import Loader from "../Loader";

export default function EventsPage() {
  // const [filter, setFilter] = useState('all');
  const { events, loading } = useSelector((state) => state.EventsData);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      await dispatch(addEvents({ urlApi: "getevents" }));
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900">Upcoming Events</h1>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.length > 0 ? (
              events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(https://source.unsplash.com/800x400/?event,conference&sig=${event.id})`,
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
              ))
            ) : (
              <div className="text-center  col-span-full">
                Aucun événement pour l'instant, attendez de nouveaux événements.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
