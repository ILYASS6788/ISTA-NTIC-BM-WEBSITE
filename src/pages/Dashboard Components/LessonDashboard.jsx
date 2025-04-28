import { Edit, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import ButtonNav from "../../components/ButtonNav";
import { DeleteConfirmCard } from "./EventDasboard";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Loader";
import { showNotify } from "../../sotre/slices/NotificationToast";
import { DeleteCourse } from "../../sotre/slices/CoursSlice";

export default function LessonDashboard() {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [courseDelete, setcourseDelete] = useState({});
  const [filterModule, setFilterModule] = useState("all");
  const [errorFilter, setErrorFilter] = useState("");

  const dispatch = useDispatch();
  const { courses, loading } = useSelector((state) => state.CoursesData);

  const handleDelete = async (id) => {
    const token = localStorage.getItem("auth_token");
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/adminOnly/deleteCours/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();

    if (!res.ok) {
      dispatch(
        showNotify({
          title: "avertissement",
          text: data.message,
          success: false,
        })
      );
      return;
    }

    dispatch(DeleteCourse({ id }));
    dispatch(
      showNotify({ title: "Succès", text: data.message, success: true })
    );
  };

  const filteredCourses = courses.filter((course) => {
    const matchModule = filterModule === "all" || course.module?.id === parseInt(filterModule);
    return matchModule;
  });

  const handleModuleChange = (e) => {
    setFilterModule(e.target.value);
    setErrorFilter(""); 
  };

  return (
    <div className="flex-1 p-8 flex-grow">
      {confirmDelete && (
        <DeleteConfirmCard
          onClose={() => {
            setConfirmDelete(false);
          }}
          onConfirm={() => {
            handleDelete(courseDelete.id);
          }}
          itemName={courseDelete.name}
        />
      )}
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Management courses</h1>
        <ButtonNav text={"Ajouter un cours"} to={"../add-lesson"} />
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <SelectModules
          Value_module_id={filterModule}
          handleChange={handleModuleChange}
          errorNotSelected={errorFilter}
        />
        <div className="relative space-y-4 overflow-auto h-[55svh]">
          {loading ? (
            <Loader />
          ) : filteredCourses.length > 0 ? (
            filteredCourses.map((c, index) => (
              <CoursCard
                key={index}
                course={c}
                setConfirmDelete={setConfirmDelete}
                setcourseDelete={setcourseDelete}
              />
            ))
          ) : (
            <p>aucun cours trouvé pour l'instant</p>
          )}
        </div>
      </div>
    </div>
  );
}

const CoursCard = ({ course, setConfirmDelete, setcourseDelete }) => {
  return (
    <div className="relative border rounded-lg p-4 hover:bg-gray-50">
      <div className="absolute h-[95%] w-[6px] rounded-md left-1 top-0.5 bg-fuchsia-800"></div>
      <div className="ml-3 flex justify-between items-start">
        <div>
          <h3 className="font-semibold">{course.name}</h3>
          <p className="text-sm text-gray-500">{course.module.name}</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => {
              setConfirmDelete(true);
              setcourseDelete(course);
            }}
            className="text-red-600 text-sm hover:text-red-500 rounded-sm p-1.5 hover:bg-gray-300 flex items-center gap-2"
          >
            <Trash2 className="h-5 w-5" />
            <span className="hidden md:block">Supprimer</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export const SelectModules = ({ Value_module_id, handleChange, errorNotSelected }) => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    const fetchModules = async () => {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/adminOnly/getmodules`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
          },
        }
      );
      const data = await res.json();
      setModules(data.modules);
    };
    fetchModules();
  }, []);

  return (
    <div className="w-full flex gap-2 items-center">
      <label className="block text-xs font-medium text-gray-700 my-auto">
        Module
      </label>
      <select
        className="p-1 outline-0"
        name="module_id"
        id="module"
        value={Value_module_id}
        onChange={handleChange}
      >
        <option value="all">Sélectionner un module</option>
        {modules.map((module, index) => (
          <option key={index} value={module.id}>
            {module.name}
          </option>
        ))}
      </select>
      {errorNotSelected && (
        <p className="text-red-500 text-xs mt-1">{errorNotSelected}</p>
      )}
    </div>
  );
};
