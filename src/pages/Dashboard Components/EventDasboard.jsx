import React from "react";
import ButtonNav from "../../components/ButtonNav";
import { useSelector } from "react-redux";
import { Edit, Trash2 } from "lucide-react";
import Loader from "../../Loader";
export default function EventDasboard() {
  const { events ,loading} = useSelector((state) => state.EventsData);
  return (
    <div className="flex-1 p-2 md:p-8 flex-grow">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="sm:text-xl md:text-2xl font-bold text-gray-900">
          Management Events
        </h1>
        <ButtonNav text={"Add Event"} to={"../add-event"} />
      </div>
      <div className="relative overflow-auto h-[70svh] w-[480px] md:w-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
            {events && !loading && events.length > 0 ? (
              events.map((event) => (
                <tr key={event.id}>
                  <td className="px-6 py-4 whitespace-nowrap ">
                    <div className="overflow-x-auto w-42 md:w-fit">
                      <div className="text-sm font-medium text-gray-900">
                      {event.title}
                    </div>
                    <div className="text-sm text-gray-500">
                      {event.description}
                    </div>
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
              ))
            ) : (
              <tr>
                <td colSpan={4}>
                  {"il n'y a aucun événement pour cette période"}
                </td>
              </tr>
            )}
            {loading && (<Loader />)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
