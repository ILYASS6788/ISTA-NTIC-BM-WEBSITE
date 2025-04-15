import {
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import SchedulePage from "../pages/SchedulePage";
import EventsPage from "../pages/EventsPage";
import LessonsPage from "../pages/LessonsPage";
import DashboardPage from "../pages/DashboardPage";
import App from "../App";
import Login from "../pages/Login";
import Entrer from "../pages/Entrer"; // Entrer is the container/layout
import Contact from "../pages/Contact";
import AddEventPage from "../pages/AddEvent";
import AddSchedulePage from "../pages/addSchedule";
import EventDasboard from "../pages/Dashboard Components/EventDasboard";
import ShedulesDashboard from "../pages/Dashboard Components/ShedulesDashboard";
import LessonDashboard from "../pages/Dashboard Components/LessonDashboard";
import AddCourseForm from "../pages/addLesson";

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
        element: isAdmin ? <DashboardPage /> : <Navigate to="/"/>,
        children: [
          {
            index: true, 
            path: "events",
            element: <EventDasboard />
          },
          {
            path: "add-event",
            element: <AddEventPage />
          },
          {
            path: "schedule",
            element: <ShedulesDashboard/>
          },
          {
            path: "add-schedule",
            element: <AddSchedulePage />
          },
          {
            path: "lessons",
            element: <LessonDashboard/>
          },
          {
            path: "add-lesson",
            element: <AddCourseForm/>
          }
        ]
      },
     
    ]},
    {
      path: "/entrer",
      element: <Entrer />, // Entrer is the container/layout
      children: [
        {
          path: ":entrer_type", // Relative path inside Entrer
          element: <Login />, // Renders Login page inside Entrer
        },
        // {
        //   path: "forgot-password", // Relative path inside Entrer
        //   element: <ForgotPassword />, // Renders ForgotPassword inside Entrer
        // },
      ],
    }
]);


export default router;
