import { useState } from 'react';
import { Search, Book, Download, Filter } from 'lucide-react';
import { useSelector } from 'react-redux';


export default function LessonsPage() {
  const { courses, loading } = useSelector((state) => state.CoursesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModule, setSelectedModule] = useState('all');

  const modules = ['all', ...new Set(courses.map(course => course.module?.name))];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesModule = selectedModule === 'all' || course.module?.name === selectedModule;
    return matchesSearch && matchesModule;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">Matériels de Cours</h1>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Rechercher des cours..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>


            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={selectedModule}
                onChange={(e) => setSelectedModule(e.target.value)}
                className="pl-10 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              >
                {modules.map(module => (
                  <option key={module} value={module}>
                    {module === 'all' ? 'Tous les modules' : module}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Book className="h-6 w-6 text-blue-700 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {course.name}
                    </h3>
                  </div>
                </div>



                <div className="mb-4">
                  <p className="text-gray-600">
                    <span className="font-medium">Module :</span> {course.module?.name || 'Inconnu'}
                  </p>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-medium text-gray-900 mb-2">Document :</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                      <span className="text-gray-600">Télécharger le PDF</span>
                      <a
                        href={`${import.meta.env.VITE_WEB_URL}/storage/${course.course_pdf}`}
                        download
                        className="text-blue-700 hover:text-blue-800"
                      >
                        <Download className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
