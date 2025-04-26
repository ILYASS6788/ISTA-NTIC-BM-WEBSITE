import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonNav from "../../components/ButtonNav";

export default function ShedulesDashboard() {
  return (
    <div className="flex-1 p-8 flex-grow">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Management Events</h1>
        <ButtonNav text={"Ajouter un horaire"} to={"../add-schedule"} />
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-6">
          <select className="mt-1 text-sm block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-0 p-2">
            <option>Development Web - Year 1</option>
            <option>Development Web - Year 2</option>
            <option>Digital Marketing - Year 1</option>
          </select>
        </div>
        <div className="grid grid-cols-5 gap-4">
          
        </div>
      </div>
    </div>
  );
}
