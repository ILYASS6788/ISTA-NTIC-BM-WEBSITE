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
    <div className="grid grid-cols-2 grid-rows-5 gap-2 w-180 mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="col-span-2 row-start-1 row-end-2 ">
        <h2 className="text-2xl font-bold text-center text-blue-500">Add New Event</h2>
      </div>

      <div className="col-span-2 row-start-2 row-end-3">
        <label className="block font-medium text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          className="w-full p-2 border border-gray-300 rounded-md block py-2.5 px-0  text-gray-900 bg-transparent border-b-2   dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        />
      </div>
      <div className="col-span-2 row-start-3 row-end-4 flex gap-4">
        <div className="w-1/2">
          <label className="block font-medium text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            className="w-full p-2 border border-gray-300 rounded-md block py-2.5 px-0  text-gray-900 bg-transparent border-b-2   dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        </div>
        <div className="w-1/2">
          <label className="block font-medium text-gray-700">Time</label>
          <input
            type="time"
            name="time"
            className="w-full p-2 border border-gray-300 rounded-md block py-2.5 px-0  text-gray-900 bg-transparent border-b-2   dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        </div>
      </div>

      <div className="col-span-2 row-start-4 row-end-5">
        <label className="block font-medium text-gray-700">Location</label>
        <input
          type="text"
          name="location"
          className="w-full p-2 border border-gray-300 rounded-md block py-2.5 px-0  text-gray-900 bg-transparent border-b-2   dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        />
      </div>

      <div className="col-span-2 row-start-5 row-end-6">
        <label className="block font-medium text-gray-700">
          Description
        </label>
        <textarea
          name="description"
          className="w-full p-2 border border-gray-300 rounded-md block py-2.5 px-0  text-gray-900 bg-transparent border-b-2   dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        ></textarea>
      </div>

      <div className="col-span-2 row-start-6 row-end-7 flex flex-col gap-2">
        <label className="block font-medium text-gray-700">Images</label>
        <input
          type="file"
          multiple
          className="block w-full  text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />

        <div className="flex gap-4 mt-2">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Add Event
          </button>
          <button
            type="button"
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
