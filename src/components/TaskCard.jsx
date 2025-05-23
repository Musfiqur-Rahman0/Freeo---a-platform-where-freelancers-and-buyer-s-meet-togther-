import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import UpdateModal from "./UpdateModal";
import { getRemainingTime } from "@/utils/data";

const TaskCard = ({
  btnText = "View Details",
  taskdata,
  deleteBtn,
  handleDelete,
}) => {
  const { title, budget, description, tags, deadline, _id } = taskdata;
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const tagsArr = tags.split(",");
  const remainingTime = getRemainingTime(deadline);

  return (
    <div class="bg-background  max-w-7xl mx-auto  bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:bg-[#fbfefb] cursor-pointer transition-colors duration-300">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-bold  text-black">{title}</h2>
        <div class="text-right hidden md:block">
          <p class="text-gray-700 font-semibold">Price : {budget} Taka</p>
        </div>
      </div>

      <p class="mt-4 text-gray-600 ">{description}</p>

      <div class="mt-5 flex items-center justify-between">
        <div className="flex items-center flex-wrap gap-1 md:gap-3">
          {tagsArr?.map((tag, index) => (
            <span
              key={index}
              className=" px-3 text-[0.7rem] py-1 rounded-full text-green-500 font-semibold bg-green-50 "
            >
              {tag}
            </span>
          ))}
        </div>
        <p class="text-gray-500 text-sm hidden md:block">{remainingTime}</p>
      </div>

      <div class="mt-4 flex justify-between items-center">
        <div class="flex items-center">
          <div class="flex text-orange-500">★★★★★</div>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          {deleteBtn ? (
            <>
              <button
                onClick={() => handleDelete(_id)}
                className="md:px-5 md:py-2 px-3 py-1 text-xs md:text-sm rounded-full border bg-orange-500 text-white border-gray-200  cursor-pointer"
              >
                Delete
              </button>
              <button
                onClick={() => navigate(`/update-task/${_id}`)}
                className="md:px-5 md:py-2 px-3 py-1 text-xs md:text-sm rounded-full border bg-green-500 text-white border-gray-200  cursor-pointer"
              >
                Update
              </button>
              <button className="md:px-5 md:py-2 px-3 py-1 text-xs md:text-sm rounded-full border bg-black text-white border-gray-200  cursor-pointer">
                Bids
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate(`/tasks/${_id}`)}
              className="md:px-5 md:py-2 px-3 py-1 text-xs md:text-sm rounded-full border bg-black text-white border-gray-200  cursor-pointer"
            >
              See Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
