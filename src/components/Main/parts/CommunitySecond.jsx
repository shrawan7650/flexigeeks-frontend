import React from "react";
import Img1 from "../../../assets/img/worldConnect.png";
import linkdin from "../../../assets/img/Linkdin.png";
import git from "../../../assets/img/git.webp";
import resume from "../../../assets/img/resume.webp";
import portfolio from "../../../assets/img/portfolio.png";
import { Link } from "react-router-dom";

function CommunitySecond() {
  return (
    <div>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto rounded-lg lg:mt-10 flex flex-col md:flex-row items-center p-8 w-full">
            {" "}
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
              <img alt="hero" src={Img1} />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="text-3xl mb-4 font-medium text-gray-900">RGPL</h1>
              <p className="mb-8 leading-relaxed">
                Stand out with the complete engineer's brand toolkit - RGPL by
                FlexiGeeks.
              </p>
              <p className="mb-8 leading-relaxed">
                Fast-track your career by unlocking potential across LinkedIn,
                GitHub, Resumes and Portfolios. Build your professional presence
                with our coaching and resources.
              </p>
              <p className="mb-8 leading-relaxed">
                Join thousands of engineers accelerating success through LGRP.
              </p>
              <p className="mb-8 leading-relaxed">
                Take your profile to the next level today!
              </p>
              <div className="flex justify-center w-full">
                {" "}
                <Link to="/memberform">
                  <button className="inline-flex text-white  border-0 py-2 px-4 focus:outline-none rounded text-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-300">
                    Join Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Second */}
      <div className="container mx-auto">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-12 md:py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-12 md:mb-20 justify-center">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="text-2xl md:text-3xl mb-2 text-center text-gray-600 font-bold">
                  RGPL
                </h1>
                <hr className="bg-gray-500" />
              </div>
            </div>
            <div className="grid grid-rows-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-gray-100 p-6 rounded-lg mx-auto w-full flex flex-col justify-center items-center">
                <img alt="coding" width="400" height="400" src={resume} />
                <h2 className="text-lg font-medium text-gray-900 mb-4 text-center">
                  Resume
                </h2>
                <p className="text-base leading-relaxed text-center">
                  Investing in our resume review service is a wise choice for
                  anyone looking to optimize their job search and make a strong
                  impression on hiring managers. Let us help you unlock your
                  full potential and accelerate your career growth..
                </p>
                <Link to="">
                  <button className="bg-blue-700 mt-2 md:mt-4 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
                    Join Now
                  </button>
                </Link>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg mx-auto w-full flex flex-col justify-center items-center">
                <img
                  alt="coding"
                  loading="lazy"
                  width="400"
                  height="400"
                  className="w-full h-50 object-cover object-center mb-6 rounded-lg"
                  src={git}
                />
                <h2 className="text-lg font-medium text-gray-900 mb-4 text-center">
                  Github
                </h2>
                <p className="text-base leading-relaxed text-center">
                  Your GitHub profile is like your tech resume but cooler. It's
                  where you can show off the awesome coding projects you've
                  worked on, prove you know your stuff, and even demonstrate how
                  well you play with others in the coding world. It's not just a
                  bunch of code; it's a living, breathing showcase of what you
                  can do. .
                </p>
                <Link to="">
                  <button className="bg-blue-700 mt-2 md:mt-4 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
                    Join Now
                  </button>
                </Link>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg mx-auto w-full flex flex-col justify-center items-center">
                <img
                  alt="coding"
                  loading="lazy"
                  width="400"
                  height="400"
                  decoding="async"
                  data-nimg="1"
                  className="w-full h-50 object-cover object-center mb-6 rounded-lg"
                  src={portfolio}
                />
                <h2 className="text-lg font-medium text-gray-900 mb-4 text-center">
                  Portfolio
                </h2>
                <p className="text-base leading-relaxed text-center">
                  A portfolio website is a unique way to showcase your work and
                  let others know about yourself. It's like an evergreen
                  platform for your projects, case studies, and information
                  about you. .
                </p>
                <Link to="">
                  <button className="bg-blue-700 mt-2 md:mt-4 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
                    Join Now
                  </button>
                </Link>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg mx-auto w-full flex flex-col justify-center items-center">
                <img alt="Img" width="400" height="400" src={linkdin} />
                <h2 className="text-lg font-medium text-gray-900 mb-4 text-center">
                  Linkedin
                </h2>
                <p className="text-base leading-relaxed text-center">
                  Looking to enhance your LinkedIn presence and unlock new
                  opportunities? Look no further! Our LinkedIn profile
                  optimization service is designed to maximize your visibility,
                  credibility, and engagement on the world's premier
                  professional networking platform.
                </p>
                <Link to="">
                  <button className="bg-blue-700 mt-2 md:mt-4 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
                    Join Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CommunitySecond;
