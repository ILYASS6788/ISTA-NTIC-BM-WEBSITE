import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function AddCourseForm  ()  {
  const [materials, setMaterials] = useState([]);
  const navigate = useNavigate();
  const handleFileChange = (e) => {
    setMaterials([...e.target.files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can now send form data to backend (Laravel)
    console.log('Form submitted');
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10">

      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center"> Add New Course</h2>
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Course Title */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Course Title</label>
          <input
            type="text"
            placeholder="e.g. JavaScript Fundamentals"
            className="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Subject</label>
          <input
            type="text"
            placeholder="e.g. Web Development"
            className="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Instructor */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Instructor</label>
          <input
            type="text"
            placeholder="e.g. Mr. Karim"
            className="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Class */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Class</label>
          <input
            type="text"
            placeholder="e.g. Development Web - Year 1"
            className="w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Course Materials (PDF Upload) */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Course Materials (PDFs)</label>
          <input
            type="file"
            accept=".pdf"
            multiple
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-200"
        >
          Add Course
        </button>
        <button
          type="button"
          onClick={() => navigate('/dashboard')}
          className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-xl transition-all duration-200 mt-2"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

