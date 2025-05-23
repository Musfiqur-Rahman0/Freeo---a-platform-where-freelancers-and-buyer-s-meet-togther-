import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";

const TaskForm = ({ handlerFunc, btnText, primaryText, taskdata }) => {
  const { user } = use(AuthContext);

  return (
    <form
      onSubmit={taskdata ? (e) => handlerFunc(e, taskdata._id) : handlerFunc}
      className="py-5 px-3 md:px-20 md:py-12 rounded-lg shadow-md h-full w-full my-10 space-y-10 border border-gray-100"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold">{primaryText}</h2>
      </div>

      <div className="w-full space-y-8">
        <h4 className="text-xl font-bold pl-2 border-l border-red-500">
          Task details
        </h4>
        {/* title field */}
        <div className="space-y-1 flex flex-col">
          <label htmlFor="title" className="font-bold">
            Task Title
          </label>
          <input
            type="text"
            name="title"
            defaultValue={taskdata?.title || ""}
            required
            placeholder="Enter your title"
            className="py-3 outline-none w-full rounded-md shadow-sm border border-gray-500 px-3"
          />
        </div>
        {/* category field  with budget*/}
        <div className="grid grid-cols-2 gap-5 items-center">
          <div className="space-y-1 flex flex-col">
            <label htmlFor="category" className="font-bold">
              Category
            </label>
            <input
              type="text"
              name="category"
              defaultValue={taskdata?.category || ""}
              required
              placeholder="Enter your category"
              className="py-3 outline-none w-full rounded-md shadow-sm border border-gray-500 px-3"
            />
          </div>
          <div className="space-y-1 flex flex-col">
            <label htmlFor="budget" className="font-bold">
              Budget
            </label>
            <input
              type="number"
              name="budget"
              defaultValue={taskdata?.budget || ""}
              required
              min="100"
              placeholder="Enter your budget"
              className="py-3 outline-none w-full rounded-md shadow-sm border border-gray-500 px-3"
            />
          </div>
        </div>
        {/* tags filed with deadline */}
        <div className="grid grid-cols-2 gap-5 items-center">
          <div className="space-y-1 flex flex-col ">
            <label htmlFor="tags" className="font-bold">
              Tags
            </label>
            <input
              type="text"
              name="tags"
              defaultValue={taskdata?.tags || ""}
              placeholder="Separate tags by commas ( , )"
              className="py-3 outline-none w-full rounded-md shadow-sm border border-gray-500 px-3"
            />
          </div>
          <div className="space-y-1 flex flex-col">
            <label htmlFor="deadline" className="font-bold">
              Deadline
            </label>
            <input
              type="datetime-local"
              name="deadline"
              defaultValue={taskdata?.deadline || ""}
              required
              placeholder="Enter your deadline"
              className="py-3 outline-none w-full rounded-md shadow-sm border border-gray-500 px-3"
            />
          </div>
        </div>
        <div className="space-y-1 flex flex-col">
          <label htmlFor="skills" className="font-bold">
            Skill Required
          </label>
          <input
            type="text"
            name="skills"
            defaultValue={taskdata?.skills || ""}
            placeholder="Seperate your skills required by commas ( , )"
            required
            className="py-3 outline-none w-full rounded-md shadow-sm border border-gray-500 px-3"
          />
        </div>

        <div className="space-y-1 flex flex-col">
          <label htmlFor="description" className="font-bold">
            Task description
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={taskdata?.description || ""}
            required
            className="resize-y  py-3 outline-none w-full rounded-md shadow-sm border border-gray-500 px-3"
          ></textarea>
        </div>
        <div className="space-y-1 flex flex-col">
          <label htmlFor="requirement" className="font-bold">
            Task Requirement
          </label>
          <textarea
            id="requirement"
            name="requirement"
            placeholder="Seperate your requirement by commas ( , )"
            defaultValue={taskdata?.description || ""}
            required
            className="resize-y  py-3 outline-none w-full rounded-md shadow-sm border border-gray-500 px-3"
          ></textarea>
        </div>

        <div className="space-y-1 flex flex-col ">
          <label htmlFor="to_apply" className="font-bold">
            Must Apply
          </label>
          <textarea
            type="text"
            name="to_apply"
            defaultValue={taskdata?.to_apply || ""}
            className="py-3 outline-none w-full rounded-md shadow-sm border border-gray-500 px-3"
          />
        </div>

        {/* email */}
        <div className="space-y-1 flex flex-col">
          <label htmlFor="email" className="font-bold">
            Your Email
          </label>
          <input
            type="text"
            name="userEmail"
            value={user?.email}
            readOnly
            placeholder="Enter your email"
            className="py-3 outline-none w-full rounded-md shadow-sm border border-gray-500 px-3"
          />
        </div>

        {/* name */}
        <div className="space-y-1 flex flex-col">
          <label htmlFor="user_name" className="font-bold">
            Your Name
          </label>
          <input
            type="text"
            name="userName"
            value={user?.displayName}
            readOnly
            placeholder="Enter your user_name"
            className="py-3 outline-none w-full rounded-md shadow-sm border border-gray-500 px-3"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="bg-black dark:border dark:border-white rounded-full w-full text-white py-3 cursor-pointer"
        >
          {btnText}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
