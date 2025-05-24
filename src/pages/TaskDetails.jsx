import {
  Clock1,
  Clock10,
  LocateIcon,
  MailIcon,
  MapIcon,
  PencilLine,
  PinIcon,
} from "lucide-react";
import React, { use, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { data, useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { getRemainingTime } from "@/utils/data";
const TaskDetails = () => {
  const { user } = use(AuthContext);
  const [bidsCount, setBidsCount] = useState(20);

  const task = useLoaderData();

  const { deadline } = task;
  const remainingTime = getRemainingTime(deadline);

  const handleBid = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Ready to bid?",
      text: "You won't be able to revert this",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes ",
    }).then((result) => {
      if (result.isConfirmed) {
        setBidsCount((prev) => prev + 1);
      }
    });
  };

  const { requirement, tags, skills } = task;

  const requirementArr = requirement.split(",");
  const skillsArr = skills.split(",");
  return (
    <div>
      <div className="max-w-7xl mx-auto px-2 md:px-0">
        <div className="my-8 grid grid-cols-7  pt-10">
          <h2 className="text-xl md:text-3xl font-bold col-span-5">
            {task?.title}
          </h2>
          <div className="col-span-2  text-right text-xs md:text-xl flex justify-end items-center gap-2 ">
            <span className="font-bold">
              You bid for {bidsCount} opportunities
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
          <div className="md:col-span-3 space-y-14">
            <div className="py-5 px-2 md:px-12 md:py-8 md border border-gray-200 space-y-6 rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="font-bold md:text-xl pl-2 border-l-4 border-red-500 ">
                  Projects details
                </h3>
                <div className="text-right space-y-1">
                  <p className="text-sm font-semibold">{task?.price} Taka</p>
                  <div className="text-[0.6rem] md:text-sm flex items-center gap-2">
                    <Clock10 size={14} />
                    <p>{remainingTime}</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-bold">Title :</p>
                <h2 className="font-semibold">{task?.title}</h2>
              </div>

              <div>
                <p className="font-bold">Description :</p>
                <p>{task?.description}</p>
              </div>
              <div>
                <p className="font-bold">Requirements :</p>
                {requirementArr.map((req, i) => (
                  <p key={i}>{req}</p>
                ))}
              </div>
              <div>
                <p className="font-bold">Duration :</p>
                <p>
                  Short-term (1–2 weeks max) <br />
                  May extend based on performance
                </p>
              </div>
              <div>
                <p className="font-bold">To Apply :</p>
                <p>
                  {task?.to_apply}
                  <br />
                  <br />
                  Let me know if you want a version focused only on Meta or only
                  on Google. This version leaves all business data hidden while
                  still sounding serious and legitimate
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold">Skills Required</h4>
                <div className="flex items-center flex-wrap gap-3">
                  {skillsArr.map((skills, index) => (
                    <div
                      key={index}
                      className="capitalize text-xs md:text-sm px-2 md:px-4 py-1 rounded-full border border-gray-400 cursor-pointer hover:text-slate-700"
                    >
                      {skills}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <form
              onSubmit={handleBid}
              className="space-y-6  bg-white p-8 rounded-lg w-full shadow-md border border-gray-200"
            >
              <h2 className="text-2xl text-black font-semibold  border-l-4 pl-2 border-red-500">
                Place a bid on this project
              </h2>
              <div className="space-y-1 ">
                <p className="text-gray-600">
                  Describe your proposal (min 100 characters)
                </p>
                <textarea
                  name=""
                  id=""
                  className="resize-y w-full border border-gray-200 min-h-28 rounded-md p-2"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="font-semibold w-full  px-4 py-2 rounded-full bg-black text-white cursor-pointer"
              >
                Place a bid
              </button>
            </form>
          </div>
          <div className="space-y-8 ">
            <div className="px-4 py-5 rounded-lg bg-card shadow-md space-y-5 border border-gray-200">
              <h2 className="text-foreground font-semibold text-xl border-l-4 border-red-500 pl-2">
                About the client
              </h2>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <PencilLine size={18} />
                  <p>{user?.displayName}</p>
                </div>
                <div className="flex items-center gap-3">
                  <MailIcon size={18} />
                  <p>{user?.email}</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt size={18} />
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
              <h4 className="text-xl font-semibold ">Total job posted : 3</h4>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md max-w-md mx-auto border border-gray-200">
              <h1 className="text-xl text-black font-bold mb-4">
                How to write a winning bid
              </h1>
              <p className="text-gray-700 mb-4">
                Your best chance of winning this project is writing a great bid
                proposal here!
              </p>
              <p className="text-gray-700 font-semibold mb-2">
                Great bids are ones that:
              </p>
              <ul className="list-disc list-outside pl-6 text-gray-700 mb-4 space-y-2">
                <li>
                  Are engaging and well written without spelling or grammatical
                  errors
                </li>
                <li>
                  Show a clear understanding of what is required for this
                  specific project - personalize your response!
                </li>
                <li>
                  Explain how your skills & experience relate to the project and
                  your approach to working on it
                </li>
                <li>Ask questions to clarify any unclear details</li>
              </ul>
              <p className="text-gray-700 font-semibold mb-4">
                Most of all - don't spam or post cut-and-paste bids. You will be
                penalized or banned if you do so.
              </p>
              <button
                disabled
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 w-full cursor-pointer"
              >
                Learn More
              </button>
            </div>
            {/* <div className='h-full w-'></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
