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
        path: "/lessons",
        element: <LessonsPage />,
      },
      {
        path: "/dashboard",
        element: isAdmin ? <DashboardPage /> : <Navigate to="/" replace />,
      },
    ]},
    {
      path:"/login",
      element: <Login />,
    }
]);


export default router;
