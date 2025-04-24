import { useState } from 'react';
import { Search, Book, Download, Filter } from 'lucide-react';


const mockLessons = [
  {
    id: 1,
    title: "Introduction to Web Development",
    subject: "Web",
    instructor: "Mr. Ayoub",
    class: "2nd Year - Web",
    materials: [
      "HTML_Basics.pdf",
      "CSS_Layout_Tutorial.pdf",
      "JavaScript_Essentials.pdf"
    ]
  },
  {
    id: 2,
    title: "Database Fundamentals",
    subject: "Database",
    instructor: "Mrs. Lamia",
    class: "1st Year - Dev",
    materials: [
      "SQL_Queries.pdf",
      "ER_Diagrams_Guide.pdf"
    ]
  },
  {
    id: 3,
    title: "Laravel API Development",
    subject: "Back-end",
    instructor: "Mr. Yassine",
    class: "2nd Year - Fullstack",
    materials: [
      "Laravel_Controllers.pdf",
      "REST_API_Guide.pdf"
    ]
  },
  {
    id: 4,
    title: "React State Management",
    subject: "Front-end",
    instructor: "Miss Salma",
    class: "2nd Year - Web",
    materials: [
      "React_UseState_Hook.pdf",
      "Redux_Toolkit_Basics.pdf"
    ]
  },
  {
    id: 5,
    title: "Networking Basics",
    subject: "Networking",
    instructor: "Mr. Hamza",
    class: "1st Year - General",
    materials: [
      "IP_Addresses_and_Subnetting.pdf",
      "OSI_Model_Explained.pdf"
    ]
  }
];

export default function LessonsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const subjects = ['all', ...new Set(mockLessons.map(lesson => lesson.subject))];
  

  const filteredLessons = mockLessons.filter(lesson => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ;
    const matchesSubject = selectedSubject === 'all' || lesson.subject === selectedSubject;
    
    return matchesSearch && matchesSubject ;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">Course Materials</h1>

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search lessons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="pl-10 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              >
                {subjects.map(subject => 
                  <option key={subject} value={subject}>
                    {subject === 'all' ? 'All Subjects' : subject}
                  </option>
                )}
              </select>
            </div>

          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredLessons.map((lesson) => (
            <div
              key={lesson.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Book className="h-6 w-6 text-blue-700 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {lesson.title}
                    </h3>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-gray-600">
                    <span className="font-medium">Subject:</span> {lesson.subject}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Instructor:</span> {lesson.instructor}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Class:</span> {lesson.class}
                  </p>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-medium text-gray-900 mb-2">Materials:</h4>
                  <div className="space-y-2">
                    {lesson.materials.map((material, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-gray-50 p-2 rounded-lg"
                      >
                        <span className="text-gray-600">{material}</span>
                        <button className="text-blue-700 hover:text-blue-800">
                          <Download className="h-5 w-5" />
                        </button>
                      </div>
                    ))}
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