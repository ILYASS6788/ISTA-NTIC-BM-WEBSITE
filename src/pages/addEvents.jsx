import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddEventPage() {
  const navigate = useNavigate();
  const [event, setEvent] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
  });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit event to your backend (e.g., Laravel API)
    console.log("Event added:", event);
    // Reset the form
    setEvent({
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
      image: "",
    });
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Add New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Event Title
          </label>
          <input
            type="text"
            name="title"
            value={event.title}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={event.description}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Event Date
          </label>
          <input
            type="date"
            name="date"
            value={event.date}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Event Time
          </label>
          <input
            type="time"
            name="time"
            value={event.time}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={event.location}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Event images</label>
          <input
            type="file"
            multiple
            onChange={handleChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        <button
          type="submit"
          className="w-50 bg-blue-600 rounded-xl text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none ml-6"
        >
          Add Event
        </button>
        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="w-50 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 ml-13 rounded-xl transition-all duration-200 mt-2"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
