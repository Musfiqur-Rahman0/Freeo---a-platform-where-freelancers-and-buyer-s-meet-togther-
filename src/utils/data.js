import {
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaPenNib,
  FaVideo,
  FaRobot,
  FaMusic,
  FaBriefcase,
  FaUserTie,
} from "react-icons/fa";

export const navigation = [
  { name: "Home", pathName: "/" },
  { name: "Add Task", pathName: "/add-task" },
  { name: "Browse Tasks", pathName: "/browse-tasks" },
  { name: "My Posted Tasks", pathName: "/my-tasks" },
  { name: "Login", pathName: "/login" },
];

export const featuredCategories = [
  {
    title: "Programming & Tech",
    icon: FaCode,
  },
  {
    title: "Graphics & Design",
    icon: FaPaintBrush,
  },
  {
    title: "Digital Marketing",
    icon: FaBullhorn,
  },
  {
    title: "Writing & Translation",
    icon: FaPenNib,
  },
  {
    title: "Video & Animation",
    icon: FaVideo,
  },
  {
    title: "AI Services",
    icon: FaRobot,
  },
];
