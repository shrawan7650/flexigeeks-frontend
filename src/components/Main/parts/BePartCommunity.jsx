import React from "react";
import { FaGithub, FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

function BePartCommunity() {
  return (
    <div className="container mx-auto">
      <section className=" max-w-6xl lg:pt-10 p-5 -mb-20 rounded-3xl mx-auto">
        <div className=" pt-9">
          <div className="text-center">
            <h1 className="text-3xl">Why be part of FlexiGeeks?</h1>
            <p>
              Accelerate your career, skills and grow your network, while having
              fun!
            </p>
            <div className="flex pt-20 justify-center items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-10">
                <div className="bg-gray-100 p-6 rounded-lg mx-auto w-full flex flex-col justify-center items-center">
                  <Link to="https://discord.gg/eCW3MsRxNE">
                    {" "}
                    <FaDiscord className="text-blue-700" size={40} />
                  </Link>
                  <h1 className="text-xl font-bold p-4">Discord</h1>
                  <div className="flex justify-center items-center"></div>
                  <p>
                    Chat in an inclusive, safe and supportive environment in
                    channels ranging from databases, to public speaking and
                    hackathons.
                  </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg mx-auto w-full flex flex-col justify-center items-center">
                  <Link to="https://www.github.com/flexigeekshub">
                    <FaGithub size={40} />
                  </Link>
                  <h1 className="text-xl font-bold p-4">Github</h1>
                  <div className="flex justify-center items-center"></div>
                  <p>
                    The best way to learn and get experience is on real world
                    projects. With Open Source you can showcase your skills and
                    build your portfolio.
                  </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg mx-auto w-full flex flex-col justify-center items-center">
                  <Link to="https://t.me/flexigeeks">
                    <FaTelegramPlane className="text-[#0088cc]" size={40} />
                  </Link>
                  <h1 className="text-xl font-bold p-4">Telegram</h1>
                  <div className="flex justify-center items-center"></div>
                  <p>
                    Engage in a welcoming, secure, and supportive community with
                    channels covering everything from coding challenges and
                    career advice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BePartCommunity;
