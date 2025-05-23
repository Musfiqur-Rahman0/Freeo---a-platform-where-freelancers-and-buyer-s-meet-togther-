import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import { useLoaderData } from "react-router";

const FeaturedTask = () => {
  const initialTask = useLoaderData();
  const [recentTask, setRecentTask] = useState(initialTask);

  return (
    <div className="space-y-10 px-3 lg:px-0">
      <div className="space-y-1">
        <p className=" text-foreground/70 border-l border-red-500 pl-2">
          Freeo jobs
        </p>
        <h2 className="text-foreground text-4xl md:text-5xl font-bold">
          Most Recent jobs
        </h2>
      </div>
      <div className="w-full space-y-5 ">
        {recentTask?.map((task) => (
          <TaskCard key={task._id} taskdata={task} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedTask;
