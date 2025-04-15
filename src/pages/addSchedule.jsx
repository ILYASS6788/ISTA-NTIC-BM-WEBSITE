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
    <div className="w-svh mx-auto p-2 bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-300 rounded-xl shadow-lg h-110 mt-9 ">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center"> Add New Schedule</h2>

      <label
        for="grpoup"
        class="block mb-2 text-center font-medium text-gray-900 dark:text-black"
      >
        Select Group
      </label>
      <select
        id="countries"
        className="bg-gray-50 border  border-gray-300 text-gray-900   rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-100 py-2 px-5 m-9 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Choose a Group</option>
        <option value="US">devloppement web 1A</option>
        <option value="CA">devloppement web 2A</option>
        <option value="FR">infrastructure digital 1A</option>
        <option value="DE">infrastricture digital 1A</option>
      </select>
      <div className=" flex gap-4 mb-4 ml-40 mt-17">
          <label className="block mb-1 font-medium text-gray-700">schudule Materials (PDFs) :</label>
          <input
            type="file"
            accept=".pdf"
            multiple
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

      <div className="flex justify-around mt-17 ">
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
    </div>
  );
}
