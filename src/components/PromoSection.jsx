import React from "react";

const PromoSection = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl  sm:static  ">
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
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              ></div>

              <a
                // href="#"
                className="inline-block rounded-md border border-transparent bg-black px-8 py-3 text-center font-medium text-white"
              >
                Browse Tasks
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
