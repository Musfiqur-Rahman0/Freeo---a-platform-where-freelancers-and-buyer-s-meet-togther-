import React from "react";
import { useLoaderData } from "react-router";
import TaskForm from "../components/TaskForm";
import Swal from "sweetalert2";

const UpdateTask = () => {
  const data = useLoaderData();

  const handleUpdate = (e, id) => {
    e.preventDefault();

    const form = e.target;
    const formdata = new FormData(form);
    const formObj = Object.fromEntries(formdata.entries());

    fetch(`https://microjob-server.vercel.app/tasks/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formObj),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Drag me!",
            icon: "success",
          }).then((res) => {
            if (res.isConfirmed) {
              setOpen(false);
            }
          });
        }
      });
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto py-5">
        <TaskForm
          primaryText={"Update Your Task"}
          taskdata={data}
          btnText="Confirm Update"
          handlerFunc={handleUpdate}
        />
      </div>
    </div>
  );
};

export default UpdateTask;
