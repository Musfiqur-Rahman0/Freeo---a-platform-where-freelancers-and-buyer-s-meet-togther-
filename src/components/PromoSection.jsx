import React from "react";
import { Link } from "react-router";

const PromoSection = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="grid  md:grid-cols-2 gap-8 items-center  mx-auto max-w-7xl">
        <div className=" flex flex-col items-center md:block text-center md:text-start ">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Made on Freeo
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new summer collection will shelter you from the
              harsh elements of a world that doesn't care if you live or die.
            </p>
          </div>
          <div>
            <div className="mt-10">
              <Link
                to={"/allTasks"}
                className="inline-block text-white rounded-md bg-black px-8 py-3 text-center font-medium "
              >
                Browse tasks
              </Link>
            </div>
          </div>
        </div>
        <div className="columns-2 md:columns-3  space-y-5 justify-between px-3 sm:px-0">
          <img
            className="rounded-lg"
            src="/src/assets/17352575-152b-453d-ad45-aaa817668241.jpeg"
            alt=""
          />
          <img
            className="rounded-lg"
            src="/src/assets/9125ec81-ba28-4b70-81ee-af4f14e7085b.jpeg"
            alt=""
          />
          <img
            className="rounded-lg"
            src="/src/assets/Adobe Illustrator Typography Poster Guide.jpeg"
            alt=""
          />
          <img
            className="rounded-lg"
            src="/src/assets/c100ce76-f0fb-4da5-9f73-ca81efed4170.jpeg"
            alt=""
          />
          <img
            className="rounded-lg"
            src="/src/assets/e5648414-d487-460d-aaf9-02eaebc550bb.jpeg"
            alt=""
          />
          <img
            className="rounded-lg"
            src="/src/assets/fa570a9a-e922-4d19-969c-fcd747153d00.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
