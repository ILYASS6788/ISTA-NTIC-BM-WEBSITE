import { File } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GoBackBtn from "../../components/GoBackBtn";
export default function AddCourseForm() {
  const [cours, setCourse] = useState({
    title:'',
    module_id:'',
    cours_pdf:null
});
  const [modules, setModules] = useState([]);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const {name,value,files} = e.target;
    setMaterials({...cours,[name]: files ? files[0] : value});
  };

  useEffect(()=>{
    const fetchModules = async()=>{
        const res = await fetch(`${import.meta.env.VITE_API_URL}/adminOnly/getmodules`,{
          method:'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
          }
        })
        const data = await res.json()
        setModules(data.modules)


    }
    fetchModules()
    console.log(modules)
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(cours);
  };

  return (
    <div className="max-w-xl mx-auto mt-6 bg-white p-4 rounded-xl shadow-md">
      <div className="mb-2">
        <GoBackBtn />
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Add New Course
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title & Subject */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Nom de course
            </label>
            <input
              type="text"
              required
              name="title"
              value={cours.title}
              onChange={handleChange}
              className="w-full border border-gray-300 px-2 py-1 text-sm outline-0 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="w-full">
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Module
            </label>
            <select name="module_id" id="module" 
            value={cours.module_id}
              onChange={handleChange}>
              {modules.map((module,index) => 
                <option key={index} value={module.id}>{module.name}</option>
              )}
            </select>
          </div>
        </div>


        {/* File Upload */}
        <div className="border-2 border-dashed border-gray-300 p-4 outline-0 text-center hover:border-blue-400 transition">
          <label
            htmlFor="courseFile"
            className="cursor-pointer block text-xs text-gray-700"
          >
            <File className="text-indigo-700 mx-auto w-10 h-10 mb-1" />
            Course Materials (PDFs)
          </label>
          <input
            id="courseFile"
            required
            name="cours_pdf"
            type="file"
            accept=".pdf"
            multiple
            onChange={handleChange
              
            }
            className="hidden"
          />
        </div>

        {/* Buttons */}
        <div className="space-y-2">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 outline-0"
          >
            Add Course
          </button>
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 text-sm py-2 outline-0"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
