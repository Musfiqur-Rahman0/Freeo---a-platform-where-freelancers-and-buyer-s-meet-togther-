import React, { use, useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";
import Swal from "sweetalert2";

const MyTasks = () => {
  const { user } = use(AuthContext);
  const [taskLoading, setTaskLoading] = useState(false);
  const { email } = user;
  const [myTask, setMyTask] = useState([]);

  // console.log(email);
  const fetchMyTask = async () => {
    try {
      setTaskLoading(true);
      const res = await fetch(
        `https://microjob-server.vercel.app/user/${email}`
      );
      const data = await res.json();
      setMyTask(data);
      setTaskLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  // console.log(myTask);

  useEffect(() => {
    fetchMyTask();
  }, []);

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes delete it.",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://microjob-server.vercel.app/tasks/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainings = myTask.filter((task) => task._id !== id);
              setMyTask(remainings);
              Swal.fire({
                title: "Deleted!",
                icon: "success",
                draggable: true,
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="py-20 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold pl-3 border-l border-red-500 mb-10">
          My Posted Tasks
        </h2>
        <div className="space-y-5">
          {taskLoading ? (
            <Loading />
          ) : (
            myTask.map((task) => (
              <TaskCard
                key={task._id}
                taskdata={task}
                deleteBtn
                handleDelete={handleDelete}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyTasks;
