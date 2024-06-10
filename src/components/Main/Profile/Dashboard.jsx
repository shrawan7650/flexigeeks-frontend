import React from "react";
import ProfileDash from "./components/ProfileDash";

import { FaLinkedinIn } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { GrAchievement } from "react-icons/gr";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  function setting() {}
  return (
    <>
      <div className=" max-w-6xl mx-auto ">
        <div className="relative flex flex-col rounded-xl bg-white text-gray-700 lg:mx-4">
          <div className="p-4">
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div className="flex items-center gap-6">
                <img
                  src=""
                  alt="Img"
                  className="h-20 w-20 bg-blue-50 rounded-full"
                />
                <div>
                  <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-1">
                    Person
                  </h5>
                  <p className="flex justify-around antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                    <FaLinkedinIn />
                    <RiGithubLine />
                  </p>
                </div>
                <div className="flex lg:ml-10 flex-wrap gap-4">
                  <div className="text-center">
                    <p className=" font-semibold">Followers</p>
                    <p>100</p>
                  </div>
                  <div className="text-center">
                    <p className=" font-semibold">Following</p>
                    <p>100</p>
                  </div>
                </div>
              </div>
              <div className="w-screen">
                <div className="overflow-hidden block">
                  <nav>
                    <ul
                      role="tablist"
                      className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none mx-0 mt-0 mb-4 flex items-center justify-between gap-4"
                    >
                      <Link to="Profile">
                        <li
                          role="tab"
                          className="flex  text-center h-full relative bg-transparent py-1 px-2 text-blue-gray-900 antialiased font-sans text-base font-normal leading-relaxed select-none cursor-pointer"
                          data-value="settings"
                        >
                          <div
                            onClick={setting}
                            className="z-20 flex flex-wrap justify-center items-center gap-1 text-inherit"
                          >
                            <CgProfile size={20} />
                            Profile
                          </div>
                        </li>
                      </Link>
                      <Link to="Achievment">
                        {" "}
                        <li
                          role="tab"
                          className="flex text-center h-full relative bg-transparent py-1 px-2 text-blue-gray-900 antialiased font-sans text-base font-normal leading-relaxed select-none cursor-pointer"
                          data-value="settings"
                        >
                          <div
                            onClick={setting}
                            className="z-20 flex flex-wrap justify-center items-center gap-1 text-inherit"
                          >
                            <GrAchievement size={20} />
                            Achievments
                          </div>
                        </li>
                      </Link>
                      <Link to="Setting">
                        {" "}
                        <li
                          role="tab"
                          className="flex  text-center h-full relative bg-transparent py-1 px-2 text-blue-gray-900 antialiased font-sans text-base font-normal leading-relaxed select-none cursor-pointer"
                          data-value="settings"
                        >
                          <div
                            onClick={setting}
                            className="z-20 flex flex-wrap justify-center items-center gap-1 text-inherit"
                          >
                            <IoMdSettings size={20} />
                            Settings
                          </div>
                        </li>
                      </Link>
                    </ul>
                  </nav>
                </div>
                <hr className="border-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Outlets */}
      <Outlet />
    </>
  );
}

export default Dashboard;
