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
import Contact from "../pages/Contact";
import Entrer from "../pages/Entrer";

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
    ]},
    {
      path: "/entrer",
      element: <Entrer />, // Entrer is the container/layout
      children: [
        {
          path: "join-us", // Relative path inside Entrer
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
