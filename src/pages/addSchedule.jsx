import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AddSchedulePage() {
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState({
    startTime: "",
    endTime: "",
    subject: "",
    instructor: "",
    room: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchedule({
      ...schedule,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would send the data to your backend
    console.log("Schedule added:", schedule);
    // Reset the form after submitting
    setSchedule({
      startTime: "",
      endTime: "",
      subject: "",
      instructor: "",
      room: "",
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-300 rounded-xl shadow-lg">
      <form
        className="space-y-6 bg-white p-8 rounded-xl shadow-xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Add New Schedule
        </h2>

        <div className="mb-6">
          <label
            className="block text-lg font-semibold text-gray-700 mb-2"
            htmlFor="startTime"
          >
            Start Time
          </label>
          <input
            type="time"
            id="startTime"
            name="startTime"
            value={schedule.startTime}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-lg font-semibold text-gray-700 mb-2"
            htmlFor="endTime"
          >
            End Time
          </label>
          <input
            type="time"
            id="endTime"
            name="endTime"
            value={schedule.endTime}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-lg font-semibold text-gray-700 mb-2"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={schedule.subject}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Math"
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-lg font-semibold text-gray-700 mb-2"
            htmlFor="instructor"
          >
            Instructor
          </label>
          <input
            type="text"
            id="instructor"
            name="instructor"
            value={schedule.instructor}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Mr. Smith"
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-lg font-semibold text-gray-700 mb-2"
            htmlFor="room"
          >
            Room
          </label>
          <input
            type="text"
            id="room"
            name="room"
            value={schedule.room}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Room 101"
            required
          />
        </div>

        <div className="flex justify-around ">
          <button
            type="submit"
            className="w-50  bg-blue-600 text-white text-lg font-semibold  shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-xl"
          >
            Add Schedule
          </button>
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="w-50 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2  rounded-xl transition-all duration-200 text-lg"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
