import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import MyTasks from "../pages/MyTasks";
import AllTasks from "../pages/AllTasks";
import AddTasks from "../pages/AddTasks";
import Loading from "../components/Loading";
import Errorpage from "../pages/Errorpage";
import PrivetRoute from "./PrivetRoute";
import TaskDetails from "../pages/TaskDetails";
import UpdateTask from "../pages/UpdateTask";
import DashboardLayout from "@/Layouts/DashboardLayout";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Coin from "@/pages/AvailableCoin/Coin";
import ProfilePage from "@/pages/Profile/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <Loading />,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        loader: () => fetch("https://microjob-server.vercel.app/recent-task"),
        Component: Home,
      },
      {
        path: "/my-tasks",
        element: (
          <PrivetRoute>
            <MyTasks />
          </PrivetRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: Signup,
      },
      {
        path: "/browse-tasks",
        loader: () => fetch("https://microjob-server.vercel.app/tasks"),
        Component: AllTasks,
      },
      {
        path: "/tasks/:id",
        loader: ({ params }) =>
          fetch(`https://microjob-server.vercel.app/tasks/${params.id}`),
        element: (
          <PrivetRoute>
            <TaskDetails />
          </PrivetRoute>
        ),
      },
      {
        path: "/update-task/:id",
        loader: ({ params }) =>
          fetch(`https://microjob-server.vercel.app/tasks/${params.id}`),
        element: (
          <PrivetRoute>
            <UpdateTask />
          </PrivetRoute>
        ),
      },
      {
        path: "/add-task",
        element: (
          <PrivetRoute>
            <AddTasks />
          </PrivetRoute>
        ),
      },
      {
        path: "/coin",
        element: <Coin />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    hydrateFallbackElement: <Loading />,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
