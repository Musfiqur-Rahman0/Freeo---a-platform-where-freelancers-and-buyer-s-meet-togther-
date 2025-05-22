import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import UpdateModal from "./UpdateModal";

const TaskCard = ({
  btnText = "View Details",
  taskdata,
  deleteBtn,
  handleDelete,
}) => {
  const { title, budget, description, tags, deadline, _id } = taskdata;

  const [time, setTime] = useState(null);
  const [open, setOpen] = useState(false);

  const now = new Date();
  const diff = new Date(deadline) - now;

  const diffMins = Math.round(diff / 60000);
  const navigate = useNavigate();

  const tagsArr = tags.split(",");

  useEffect(() => {
    if (diffMins < 1) {
      setTime("About to finish");
    } else if (diffMins < 60) {
      const newTime = `${diffMins} minute${
        diffMins !== 1 ? "s" : ""
      } remaining`;
      setTime(newTime);
    } else if (diffMins < 1440) {
      const diffHours = Math.floor(diffMins / 60);
      const newTime = `${diffHours} hour${
        diffHours !== 1 ? "s" : ""
      } remaining`;
      setTime(newTime);
    } else {
      const diffDays = Math.floor(diffMins / 1440);
      const newtime = `${diffDays} day${diffDays !== 1 ? "s" : ""} remaining`;
      setTime(newtime);
    }
  }, []);

  return (
    <div class="max-w-7xl mx-auto  bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:bg-[#fbfefb] cursor-pointer transition-colors duration-300">
      <div class="flex justify-between items-center">
        <h2 class="text-lg font-bold  ">{title}</h2>
        <div class="text-right">
          <p class="text-gray-700 font-semibold">Price : {budget} Taka</p>
        </div>
      </div>

      <p class="mt-4 text-gray-600 text-sm">{description}</p>

      <div class="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {tagsArr?.map((tag, index) => (
            <span
              key={index}
              className=" px-3 text-[0.7rem] py-1 rounded-full text-green-500 font-semibold bg-green-50 "
            >
              {tag}
            </span>
          ))}
        </div>
        <p class="text-gray-500 text-sm">{time}</p>
      </div>

      <div class="mt-4 flex justify-between items-center">
        <div class="flex items-center">
          <div class="flex text-orange-500">★★★★★</div>
          {/* <span class="ml-2 text-gray-700 font-semibold">5.0</span> */}

          {/* <span class="ml-1 text-gray-500 text-sm">(5 reviews)</span> */}
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(`/tasks/${_id}`)}
            className="px-5 py-2 rounded-full border bg-black text-white border-gray-200  cursor-pointer"
          >
            See Details
          </button>
          {deleteBtn && (
            <>
              <button
                onClick={() => handleDelete(_id)}
                className="px-5 py-2 rounded-full border bg-orange-500 text-white border-gray-200  cursor-pointer"
              >
                Delete
              </button>
              <button
                // onClick={() => handleDelete(_id)}
                // onClick={() => setOpen(!open)}
                onClick={() => navigate(`/update-task/${_id}`)}
                className="px-5 py-2 rounded-full border bg-green-500 text-white border-gray-200  cursor-pointer"
              >
                Update
              </button>
            </>
          )}
        </div>
      </div>
      {/* {open && (
        <UpdateModal open={open} setOpen={setOpen} taskdata={taskdata} />
      )} */}
    </div>
  );
};

export default TaskCard;
