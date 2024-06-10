import React, { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { GrAchievement } from "react-icons/gr";

function ProfileDash() {
  const [hide, setHide] = useState(true);
  function setting() {}
  return (
    <div>
      <div className=" max-w-6xl mx-auto ">
        <div className="relative flex flex-col  rounded-xl bg-white text-gray-700 mb-6 lg:mx-4">
          <div className="p-4">
            <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
              <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none mx-0 mt-0 mb-4 flex items-center justify-between gap-4">
                  <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
                    About me
                  </h6>
                  <img src="" alt="" />
                </div>
                <div className="p-0">
                  <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-500">
                    Hey This is Bio.
                  </p>
                  <hr className="my-8 border-blue-gray-50" />
                  <ul className=" border flex flex-col gap-4 p-0">
                    <li className="flex items-center gap-4">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold capitalize">
                        mobile:
                      </p>
                      <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-500">
                        95083
                      </p>
                    </li>
                    <li className="flex items-center gap-4">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold capitalize">
                        email:
                      </p>
                      <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-500">
                        qwe
                      </p>
                    </li>
                    <li className="flex items-center gap-4">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold capitalize">
                        location:
                      </p>
                      <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-500">
                        sdaf
                      </p>
                    </li>
                    <li className="flex items-center gap-4">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold capitalize">
                        social:
                      </p>
                      <div className="flex items-center gap-4">
                        <i className="fa-brands fa-facebook text-blue-700">
                          <RiGithubLine />
                        </i>
                        <i className="fa-brands fa-twitter text-blue-400">
                          <FaLinkedinIn />
                        </i>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Team members */}
              <div>
                <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-3">
                  Team Members
                </h6>
                <ul className="flex flex-col gap-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src=""
                        alt="Image"
                        className="bg-blue-50 rounded-full h-14"
                      />
                      <div>
                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 mb-1 font-semibold">
                          Name
                        </p>
                        <p className="block antialiased font-sans text-xs font-normal text-blue-gray-400">
                          Bio
                        </p>
                      </div>
                    </div>
                    <button
                      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
                      type="button"
                    >
                      reply
                    </button>
                  </div>
                </ul>
              </div>
            </div>
            <div className="px-4 pb-4">
              <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-2">
                Projects
              </h6>
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-500">
                Topic
              </p>
              <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
                <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                  <div className="relative bg-clip-border rounded-xl overflow-hidden bg-gray-900 text-white shadow-gray-900/20 shadow-lg mx-0 mt-0 mb-4 h-64 xl:h-40">
                    {/* Project image */}
                    <img src="" alt="" />
                  </div>
                  <div className="p-6 py-0 px-1">
                    <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-500">
                      Project #1
                    </p>
                    <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-1 mb-2">
                      Heading
                    </h5>
                    <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-500">
                      Sub Topic
                    </p>
                  </div>
                  <div className="p-6 mt-6 flex items-center justify-between py-0 px-1">
                    <a href="#/dashboard/profile">
                      <button
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
                        type="button"
                      >
                        view project
                      </button>
                    </a>
                  </div>
                </div>

                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDash;
