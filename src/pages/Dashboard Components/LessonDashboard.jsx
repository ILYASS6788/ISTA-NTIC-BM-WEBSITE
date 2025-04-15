import { Edit, Trash2, Plus } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function LessonDashboard() {
  const navigate = useNavigate();
  return (
    <div className="flex-1 p-8 flex-grow">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Management Events</h1>
        <button
          onClick={() => navigate("../add-lesson")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span className="max-[850px]:hidden">Add New Lesson</span>
        </button>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-6 grid grid-cols-2 gap-4">
          <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <option>All Classes</option>
            <option>Development Web - Year 1</option>
            <option>Development Web - Year 2</option>
          </select>
          <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <option>All Subjects</option>
            <option>Web Development</option>
            <option>Database Design</option>
          </select>
        </div>
        <div className="space-y-4">
          {/* Lesson cards would go here */}
          <div className="border rounded-lg p-4 hover:bg-gray-50">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">Introduction to HTML & CSS</h3>
                <p className="text-sm text-gray-500">
                  Web Development - Dr. Hassan
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-800">
                  <Edit className="h-5 w-5" />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
