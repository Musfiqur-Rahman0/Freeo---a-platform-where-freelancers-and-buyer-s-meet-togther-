import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import MyTasks from "../pages/MyTasks";
import AllTasks from "../pages/AllTasks";
import AddTasks from "../pages/AddTasks";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
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
        path: "/my-tasks",
        Component: MyTasks,
      },
      {
        path: "/browse-tasks",
        Component: AllTasks,
      },
      {
        path: "/add-task",
        Component: AddTasks,
      },
    ],
  },
]);

export default router;
