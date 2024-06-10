import React from "react";

export default function Jobs() {
  return (
    <div className="overflow-hidden max-w-6xl  mx-auto">
      <div className="flex lg:p-4 justify-center">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-col md:flex-row items-center md:mt-10">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
              <div className="flex flex-col items-center justify-center">
                <h1 className="title-font mt-28 text-3xl md:text-5xl mb-6 md:mb-10 text-gray-900 font-bold text-center">
                  Explore More Than
                  <span className="text-red-500 font-bold ml-2 md:ml-3">
                    5,000
                  </span>
                  <span className="text-blue-500"> Jobs &amp; Internships</span>
                </h1>
                <p className="mb-4 md:mb-8 mr-4 leading-relaxed text-sm md:text-base text-center">
                  You Have the Talent. We Have the Opportunity.
                  <br />
                  Advance your career with top-tier management positions at
                  renowned firms.
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center">
                <input
                  type="text"
                  placeholder="Enter your email"
                  class="border border-gray-300 bg-white h-10 xx-4 md:px-5 pr-14 rounded-lg text-sm md:text-base focus:outline-none mb-2 md:mb-0"
                />

                <button className="ml-0 md:ml-4 inline-flex items-center text-white bg-green-500 border-0 py-2 px-5 md:px-6 focus:outline-none hover:bg-indigo-600 rounded-lg text-base md:text-lg">
                  Get Email
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                alt="hero"
                width="500"
                height="500"
                class="object-cover object-center rounded"
                src="https://static.vecteezy.com/system/resources/previews/024/280/310/non_2x/businessman-come-up-with-an-idea-businessman-climbing-ladder-from-light-bulb-idea-concept-free-png.png"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
