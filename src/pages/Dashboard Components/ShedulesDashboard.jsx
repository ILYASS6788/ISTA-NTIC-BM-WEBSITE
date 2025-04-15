import React from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ShedulesDashboard() {
  const navigate = useNavigate();
  return (
    <div className="flex-1 p-8 flex-grow">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Management Events</h1>
        <button
          onClick={() => navigate("../add-schedule")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span className="max-[850px]:hidden">Add New Lesson</span>
        </button>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-6">
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <option>Development Web - Year 1</option>
            <option>Development Web - Year 2</option>
            <option>Digital Marketing - Year 1</option>
          </select>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
            (day) => (
              <div key={day} className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">{day}</h3>
                <button className="text-blue-600 hover:text-blue-800 text-sm">
                  + Add Session
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
