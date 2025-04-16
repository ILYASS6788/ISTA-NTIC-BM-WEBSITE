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
    <div className="min-h-fit bg-gey-50 w-fulll py-4 px-2 sm:py-6 sm:px-4 md:py-8 md:px-6 lg:px-8">
  <div className="w-full max-w-3xl mx-auto">
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8"
    >
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-600">
          Create New Event
        </h2>
        <p className="text-center text-gray-600 mt-2 text-sm sm:text-base">
          Fill in the details to create your event 
        </p>
      </div>

      <div className="space-y-6">
        {/* Event Title */}
        <div>
          <label className="text-sm font-medium text-gray-700">Event Title</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={event.title}
            className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base bg-gray-50 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            placeholder="Enter event title"
          />
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              onChange={handleChange}
              value={event.date}
              className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base bg-gray-50 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Time</label>
            <input
              type="time"
              name="time"
              onChange={handleChange}
              value={event.time}
              className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base bg-gray-50 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            onChange={handleChange}
            value={event.location}
            className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base bg-gray-50 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            placeholder="Enter event location"
          />
        </div>

        {/* Description */}
        <div>
          <label className="text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            onChange={handleChange}
            value={event.description}
            rows="4"
            className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base bg-gray-50 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-none"
            placeholder="Describe your event..."
          ></textarea>
        </div>

        {/* Image Upload */}
        <div>
          <label className="text-sm font-medium text-gray-700">Event Images</label>
          <div className="mt-1 flex justify-center px-4 sm:px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-500 transition duration-200">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex flex-col sm:flex-row justify-center items-center text-sm text-gray-600 gap-1">
                <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                  <span>Upload files</span>
                  <input
                    type="file"
                    name="image"
                    multiple
                    className="sr-only"
                    onChange={handleChange}
                  />
                </label>
                <p className="text-gray-500">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
        <button
          type="submit"
          className="w-full sm:w-auto flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg text-sm font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
        >
          Create Event
        </button>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="w-full sm:w-auto flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg text-sm font-semibold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-200"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</div>

  );
}
