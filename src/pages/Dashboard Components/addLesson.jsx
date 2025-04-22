import { File } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoBackBtn from '../../components/GoBackBtn';
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
    <div className="w-full mx-auto p-6 bg-white shadow-xl rounded-2xl">
      <div>
      <GoBackBtn />

      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center"> Add New Course</h2>
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Course Title */}
        <div className="col-span-2 row-start-3 row-end-4 flex gap-1 flex-col md:flex-row">
        <div className='w-full md:w-1/2'>
          <label className="block font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            className="w-full p-2 border border-gray-300 rounded-md block py-2.5 px-0  text-gray-900 bg-transparent border-b-2   dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        </div>
        <div className='w-full md:w-1/2'>
          <label className="block font-medium text-gray-700">Subject</label>
          <input
            type="text"
            name="subject"
            className="w-full p-2 border border-gray-300 rounded-md block py-2.5 px-0  text-gray-900 bg-transparent border-b-2   dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        </div>
      </div>

        {/* Instructor */}
        <div className="col-span-2 row-start-3 row-end-4 flex gap-4 flex-col md:flex-row">
        <div className='w-full md:w-1/2'>
          <label className="block font-medium text-gray-700">Intructor</label>
          <input
            type="text"
            name="instructor"
            className="w-full p-2 border border-gray-300 rounded-md block py-2.5 px-0  text-gray-900 bg-transparent border-b-2   dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        </div>
        <div className='w-full md:w-1/2'>
          <label className="block font-medium text-gray-700">Class</label>
          <input
            type="text"
            name="class"
            className="w-full p-2 border border-gray-300 rounded-md block py-2.5 px-0  text-gray-900 bg-transparent border-b-2   dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          />
        </div>
      </div>

        {/* Course Materials (PDF Upload) */}
        <div className="flex items-center justify-center my-2 rounded-b-md border-2 border-dashed border-gray-300 p-4">
          <label htmlFor='courseFile' 
          className="grid place-content-center w-full p-2  font-medium text-gray-700 cursor-pointer">
            <File className='text-indigo-700 mx-auto w-16 h-16' />
            Course Materials (PDFs)
          </label>
          <input
          id='courseFile'
            type="file"
            accept=".pdf"
            multiple
            onChange={handleFileChange}
            className="hidden w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
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

