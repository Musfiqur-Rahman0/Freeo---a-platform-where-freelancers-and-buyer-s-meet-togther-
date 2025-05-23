import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { data } from "react-router";
import Swal from "sweetalert2";
import TaskForm from "../components/TaskForm";

const AddTasks = () => {
  const { user } = use(AuthContext);

  const handleAddTask = (e) => {
    e.preventDefault();

    const form = e.target;
    const formdata = new FormData(form);
    const { deadline, ...rest } = Object.fromEntries(formdata.entries());

    const newTask = {
      ...rest,
      deadline: new Date(deadline),
    };

    fetch("https://microjob-server.vercel.app/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Task added",
            icon: "success",
            // draggable: true,
          });
        } else {
          Swal.fire({
            title: "Try again",
            icon: "error",
            // draggable: true,
          });
        }
      });
  };

  return (
    <section>
      <div className="  max-w-7xl mx-auto flex items-center justify-center h-full ">
        <TaskForm
          btnText={"Add Task"}
          handlerFunc={handleAddTask}
          primaryText={"Add New Task"}
        />
      </div>
    </section>
  );
};

export default AddTasks;
