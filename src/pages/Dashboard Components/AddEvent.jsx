import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoBackBtn from "../../components/GoBackBtn";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../sotre/slices/EventSlice";
import Loader from "../../Loader";
import { FileImage } from "lucide-react";
import { showNotify } from "../../sotre/slices/NotificationToast";

export default function AddEventPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorsForm, setErrorsForm] = useState({});
  const { loading } = useSelector((state) => state.EventsData);
  const [event, setEvent] = useState({
    title: "",
    description: "",
    details: "",
    date: "",
    time: "",
    location: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setEvent({ ...event, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", event.title);
    formData.append("description", event.description);
    formData.append("details", event.details);
    formData.append("date", event.date);
    formData.append("time", event.time);
    formData.append("location", event.location);
    formData.append("image", event.image);

    const res = await dispatch(
      fetchEvents({
        urlApi: "adminOnly/addnewEvent",
        eventInfo: formData,
        methodHTTP: "POST",
        isFormData: true,
      })
    );
    console.log(res);
    if (res.payload.data.errors) {
      setErrorsForm(res.payload.data.errors);
      dispatch(
        showNotify({
          title: "avertissement",
          text: "les valeurs que vous avez envoyées ne sont pas valides",
          success: false,
        })
      );
    } else if (res.payload.data.success) {
      setEvent({
        title: "",
        description: "",
        details: "",
        date: "",
        time: "",
        location: "",
        image: null,
      });
      navigate(-1);
      dispatch(
        showNotify({
          title: "succès",
          text: "Événement ajouté avec succès",
          success: true,
        })
      );
    }
  };

  function formatFileSize(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  }

  return (
    <div className="min-h-fit bg-gray-50 w-full py-2 px-1 sm:py-3 sm:px-2 md:py-4 md:px-4 lg:px-6">
  <div>
    <GoBackBtn />
  </div>

  <div className="w-full max-w-2xl mx-auto relative">
    <form
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-lg p-3 sm:p-4"
    >
      <div className="mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-blue-600">
          Create Event
        </h2>
        <p className="text-center text-gray-600 mt-1 text-xs sm:text-sm">
          Enter event details below
        </p>
      </div>

      <div className="space-y-4">
        {/* Title */}
        <div>
          <label className="text-xs font-medium text-gray-700">
            Event Title
          </label>
          <input
            type="text"
            name="title"
            required
            onChange={handleChange}
            value={event.title}
            className="mt-1 block w-full px-2 py-1 text-xs bg-gray-50 border border-gray-300 outline-0 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Title"
          />
          {errorsForm.title && (
            <p className="text-red-500 text-xs mt-1">{errorsForm.title}</p>
          )}
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <label className="text-xs font-medium text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              required
              onChange={handleChange}
              value={event.date}
              className="mt-1 block w-full px-2 py-1 text-xs bg-gray-50 border border-gray-300 outline-0 focus:ring-2 focus:ring-blue-500"
            />
            {errorsForm.date && (
              <p className="text-red-500 text-xs mt-1">{errorsForm.date}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-medium text-gray-700">Time</label>
            <input
              type="time"
              name="time"
              required
              onChange={handleChange}
              value={event.time}
              className="mt-1 block w-full px-2 py-1 text-xs bg-gray-50 border border-gray-300 outline-0 focus:ring-2 focus:ring-blue-500"
            />
            {errorsForm.time && (
              <p className="text-red-500 text-xs mt-1">{errorsForm.time}</p>
            )}
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="text-xs font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            required
            onChange={handleChange}
            value={event.location}
            className="mt-1 block w-full px-2 py-1 text-xs bg-gray-50 border border-gray-300 outline-0 focus:ring-2 focus:ring-blue-500"
            placeholder="Location"
          />
          {errorsForm.location && (
            <p className="text-red-500 text-xs mt-1">{errorsForm.location}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="text-xs font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            onChange={handleChange}
            value={event.description}
            className="mt-1 block w-full px-2 py-1 text-xs bg-gray-50 border border-gray-300 outline-0 focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Event description"
          />
          {errorsForm.description && (
            <p className="text-red-500 text-xs mt-1">{errorsForm.description}</p>
          )}
        </div>

        {/* Details */}
        <div>
          <label className="text-xs font-medium text-gray-700">Details</label>
          <textarea
            name="details"
            onChange={handleChange}
            value={event.details}
            rows="3"
            className="mt-1 block w-full px-2 py-1 text-xs bg-gray-50 border border-gray-300 outline-0 focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Event details"
          />
          {errorsForm.details && (
            <p className="text-red-500 text-xs mt-1">{errorsForm.details}</p>
          )}
        </div>

        {/* Image Upload */}
        <div>
          <label className="text-xs font-medium text-gray-700">Image</label>
          <label
            htmlFor="imageEvent"
            className="cursor-pointer mt-1 flex justify-center items-center px-3 pt-3 pb-4 border-2 border-dashed border-gray-300 rounded hover:border-blue-500 transition"
          >
            <div className="text-center text-xs text-gray-600 space-y-1">
              <FileImage size={30} className="mx-auto text-gray-400" />
              <span className="block">
                {event.image ? event.image.name : "Upload or drag image"}
              </span>
              {event.image && (
                <p className="text-gray-500 text-[10px]">
                  {formatFileSize(event.image.size)}
                </p>
              )}
              {!event.image && (
                <p className="text-gray-400 text-[10px]">PNG, JPG, 10MB max</p>
              )}
              {errorsForm.image && (
                <p className="text-red-500 text-xs mt-1">
                  {errorsForm.image[0]}
                </p>
              )}
              <input
                id="imageEvent"
                type="file"
                name="image"
                className="sr-only"
                multiple
                onChange={handleChange}
              />
            </div>
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 text-sm font-semibold outline-0 hover:bg-blue-700 transition"
        >
          Create
        </button>
      </div>
    </form>
  </div>
</div>

  );
}
