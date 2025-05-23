import { useLoaderData } from "react-router";
import TaskCard from "../components/TaskCard";

const AllTasks = () => {
  const allTask = useLoaderData();

  return (
    <div className="min-h-[calc(100vh-48px)]">
      <div className="max-w-7xl mx-auto space-y-2 px-3 pt-8 md:pt-20 pb-6 md:pb-10">
        <h2 className="text-4xl md:text-5xl font-bold pl-3 border-l-4 border-red-500">
          Welcome to Freeeo Services!
        </h2>
        <p className="max-w-4xl text-xs md:text-sm">
          Explore our top-rated tasks and projects designed to meet your needs.
          Browse through a variety of professional services, sorted by deadline,
          and find the perfect solution for your business or personal goals.
          Start now
        </p>
      </div>
      <div className="space-y-8 px-2 md:p-0">
        {allTask.map((task) => (
          <TaskCard taskdata={task} key={task._id} />
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
