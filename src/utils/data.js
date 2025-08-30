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
  { name: "Dashboard", pathName: "/add-task" },
  { name: "Coin", pathName: "/browse-tasks" },
  { name: "My Task", pathName: "/my-tasks" },
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

export const getRemainingTime = (date) => {
  const time = new Date(date);
  const now = new Date();
  const diff = time - now;

  const diffMins = Math.round(diff / 60000);
  if (diffMins < 1) {
    return "About to finish";
  } else if (diffMins < 60) {
    const newTime = `${diffMins} minute${diffMins !== 1 ? "s" : ""} remaining`;
    return newTime;
  } else if (diffMins < 1440) {
    const diffHours = Math.floor(diffMins / 60);
    const newTime = `${diffHours} hour${diffHours !== 1 ? "s" : ""} remaining`;
    return newTime;
  } else {
    const diffDays = Math.floor(diffMins / 1440);
    const newtime = `${diffDays} day${diffDays !== 1 ? "s" : ""} remaining`;
    return newtime;
  }
};
