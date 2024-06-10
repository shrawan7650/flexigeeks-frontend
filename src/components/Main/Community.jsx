import React, { useState } from "react";
import Img1 from "../../assets/img/open-source.png";
import Img2 from "../../assets/img/webD.png";
import Img3 from "../../assets/img/dsa.png";
import { Link } from "react-router-dom";
import Jobs from "./parts/Jobs";
import CommunitySecond from "./parts/CommunitySecond";
import BePartCommunity from "./parts/BePartCommunity";

export default function Community() {
  return (
    <div>
      <BePartCommunity />
      <div className="container pt-20 lg:max-w-6xl mx-auto">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-10 justify-center">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="text-3xl mb-2 text-center text-gray-600 font-bold">
                  Tech Community
                </h1>
                <hr className="bg-gray-500" />
                <p className="text-black mt-2">
                  We are excited to welcome you to our vibrant community, where
                  tech enthusiasts gather to share knowledge, insights, and
                  experiences. Whether you're a seasoned developer, a passionate
                  tech fan, or just beginning your tech journey, this is the
                  perfect place to connect, learn, and grow.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-100 p-4 md:p-6 rounded-lg mx-auto w-full md:w-3/4 flex flex-col justify-center items-center">
                <div className="w-48 h-48 md:w-60 md:h-60 overflow-hidden flex flex-1 items-center justify-center rounded-lg mb-6">
                  <img
                    alt="coding"
                    className="object-cover object-center"
                    src={Img1}
                  />
                </div>
                <h2 className="text-lg md:text-xl font-medium text-gray-900 mb-2 md:mb-4 text-center">
                  Open Source
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-center">
                  We are thrilled to announce the launch of our brand new
                  WhatsApp community dedicated to all things open source. 🤝
                  Whether you're a seasoned open source contributor or just
                  starting your journey, this group is the perfect platform to
                  connect, collaborate, and learn together. 📚💡
                </p>
                <Link
                  to="https://chat.whatsapp.com/EEvPBUvIeziKx1cnzjPbga"
                  className="bg-blue-700 mt-2 md:mt-4 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
                >
                  Join
                </Link>
              </div>
              <div className="bg-gray-100 p-4 md:p-6 rounded-lg mx-auto w-full md:w-3/4 flex flex-col justify-center items-center">
                <div className="w-48 h-48 md:w-60 md:h-60 overflow-hidden flex flex-1 items-center justify-center rounded-lg mb-6">
                  <img
                    alt="coding"
                    className="object-cover object-center"
                    src={Img2}
                  />
                </div>
                <h2 className="text-lg md:text-xl font-medium text-gray-900 mb-2 md:mb-4 text-center">
                  Full Stack Development
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-center">
                  We are excited to announce the launch of our dedicated
                  community focused on all things Full Stack Development.
                  Whether you're a seasoned developer or just beginning your
                  developer coding journey, this community is the perfect
                  platform to explore, learn, and connect , colloborate and
                  learn together. 📚💡.
                </p>
                <Link
                  to="https://chat.whatsapp.com/EEvPBUvIeziKx1cnzjPbga"
                  className="bg-blue-700 mt-2 md:mt-4 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
                >
                  Join
                </Link>
              </div>
              <div className="bg-gray-100 p-4 md:p-6 rounded-lg mx-auto w-full md:w-3/4 flex flex-col justify-center items-center">
                <div className="w-48 h-48 md:w-60 md:h-60 overflow-hidden flex flex-1 items-center justify-center rounded-lg mb-6">
                  <img
                    alt="coding"
                    loading="lazy"
                    width={120}
                    className="object-cover object-center"
                    src={Img3}
                  />
                </div>
                <h2 className="text-lg md:text-xl font-medium text-gray-900 mb-2 md:mb-4 text-center">
                  Data Structure and Algorithm
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-center">
                  We are excited to announce the launch of our dedicated
                  community focused on all things DSA. Whether you're a seasoned
                  coder or just beginning your coding journey, this community is
                  the perfect platform to explore, learn, and excel in the world
                  of algorithms and problem-solving.
                </p>
                <Link
                  to="https://chat.whatsapp.com/EEvPBUvIeziKx1cnzjPbga"
                  className="bg-blue-700 mt-2 md:mt-4 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
                >
                  Join
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CommunitySecond */}
        <CommunitySecond />
      </div>
    </div>
  );
}
