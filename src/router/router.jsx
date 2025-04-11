import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import SchedulePage from "../pages/SchedulePage";
import EventsPage from "../pages/EventsPage";
import LessonsPage from "../pages/LessonsPage";
import DashboardPage from "../pages/DashboardPage";
import App from "../App";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import AddCourseForm from "../pages/addLesson";
import AddEventPage from "../pages/addEvents";
import AddSchedulePage from "../pages/addSchedule";

// TODO: Replace with actual auth check
const isAdmin = true; // Temporarily set to true for testing

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index:true,
        element: <HomePage />,
      },
      {
        path: "/schedule",
        element: <SchedulePage />,
      },
      {
        path: "/events",
        element: <EventsPage />,
      },
      {
        path: "/courses",
        element: <LessonsPage />,
      },
      {
        path: "/contact-nous",
        element: <Contact />,
      },
      {
        path: "/dashboard",
        element: isAdmin ? <DashboardPage /> : <Navigate to="/" replace />,
      },
      {
        path: "/add-lesson",
        element: isAdmin ? <AddCourseForm/> : <Navigate to="/" replace />, // Add Lesson Route
      },
      {
        path: "/add-event",
        element: isAdmin ? <AddEventPage /> : <Navigate to="/" replace />, // Add Event Route
      },
      {
        path: "/add-schedule",
        element: isAdmin ? <AddSchedulePage /> : <Navigate to="/" replace />, // Add Schedule Route
      },
    ]},
    {
      path:"/login",
      element: <Login />,
    }
]);


export default router;
