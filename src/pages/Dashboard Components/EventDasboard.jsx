import React from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
const mockEvents = [];
export default function EventDasboard() {
  const navigate = useNavigate();
  return (
    <div className="flex-1 p-8 flex-grow">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Management Events</h1>
        <button
          onClick={() => navigate("../add-event")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span className="max-[850px]:hidden">Add New Lesson</span>
        </button>
      </div>
      <div className="bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockEvents.map((event) => (
              <tr key={event.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {event.title}
                  </div>
                  <div className="text-sm text-gray-500">
                    {event.description}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {event.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {event.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-4">
                    <Edit className="h-5 w-5" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
