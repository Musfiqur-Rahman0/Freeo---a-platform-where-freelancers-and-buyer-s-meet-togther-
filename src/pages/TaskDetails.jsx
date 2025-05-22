import {
  Clock1,
  Clock10,
  LocateIcon,
  MailIcon,
  MapIcon,
  PencilLine,
  PinIcon,
} from "lucide-react";
import React, { use } from "react";
import { FaTimes } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";
const TaskDetails = () => {
  const { user } = use(AuthContext);

  const task = useLoaderData();

  const handleBid = (e) => {
    e.preventDefault();

    // console.log("submited");
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="my-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold ">
            Urgent Fundraiser Ad Campaign Setup & Management{" "}
            <span className="ml-2  px-2 py-1 rounded-full text-[0.7rem] bg-green-100">
              Open
            </span>
          </h2>
          <div className="text-right text-xl">
            <p>Total Bids</p>
            <p className="font-bold">21</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 ">
          <div className="col-span-3 space-y-14">
            <div className="px-12 py-8 md border border-gray-200 space-y-6 rounded-lg">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-xl pl-2 border-l-4 border-red-500 ">
                  Projects details
                </h3>
                <div className="text-right space-y-1">
                  <p className="text-sm font-semibold">$30.00 – 250.00 USD</p>
                  <div className="text-sm flex items-center gap-2">
                    <Clock10 size={16} />
                    <p>Bidding ends in 6 days, 23 hours</p>
                  </div>
                </div>
              </div>
              <div>
                <p>Title :</p>
                <h2 className="font-semibold">
                  Ad Campaign Setup & Management for Urgent Fundraiser Launch
                </h2>
              </div>

              <div>
                <p>Description :</p>
                <p>
                  We’re looking for an experienced digital advertising
                  professional to help us quickly launch and manage a short-term
                  campaign across Facebook, Instagram, and Google. This project
                  is urgent and needs to go live within 24–48 hours. We already
                  have all creative assets ready (including flyer, logo, and key
                  messaging) — we simply need a reliable expert to execute the
                  technical setup and ensure smooth delivery of the ads.
                </p>
              </div>
              <div>
                <p>Requirements :</p>
                <p>
                  Proven experience with Meta Ads Manager and Google Ads <br />
                  Can begin immediately and deliver within 24–48 hours <br />
                  Communicates clearly and efficiently <br />
                  Attention to detail and ad quality <br />
                  Bonus if you’re familiar with campaign urgency and
                  impact-focused messaging
                </p>
              </div>
              <div>
                <p>Duration :</p>
                <p>
                  Short-term (1–2 weeks max) <br />
                  May extend based on performance
                </p>
              </div>
              <div>
                <p>To Apply :</p>
                <p>
                  Please share relevant examples of campaigns you’ve
                  successfully launched. Speed, professionalism, and ability to
                  execute under pressure will be prioritized.
                  <br />
                  <br />
                  Let me know if you want a version focused only on Meta or only
                  on Google. This version leaves all business data hidden while
                  still sounding serious and legitimate
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold">Skills Required</h4>
                <div className="flex items-center gap-3">
                  {[
                    "Graphic Design",
                    "Internet Marketing",
                    "Google Adwords",
                    "Facebook Marketing",
                    "Advertising",
                  ].map((skills, index) => (
                    <div
                      key={index}
                      className="px-4 py-1 rounded-full border border-gray-400 cursor-pointer hover:text-slate-700"
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
              <h2 className="text-2xl font-semibold  border-l-4 pl-2 border-red-500">
                Place a bid on this project
              </h2>
              <div className="space-y-1">
                <p>Describe your proposal (min 100 characters)</p>
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
          <div className="space-y-8">
            <div className="px-4 py-5 rounded-lg bg-white shadow-md space-y-5 border border-gray-200">
              <h2 className="font-semibold text-xl border-l-4 border-red-500 pl-2">
                About the client
              </h2>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <PencilLine size={18} />
                  <p>{user.displayName}</p>
                </div>
                <div className="flex items-center gap-3">
                  <MailIcon size={18} />
                  <p>{user.email}</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt size={18} />
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
              <h4 className="text-xl font-semibold ">Total job posted : 3</h4>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md max-w-md mx-auto border border-gray-200">
              <h1 className="text-xl font-bold mb-4">
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
