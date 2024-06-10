import React from "react";
import { Link } from "react-router-dom";
// import Img from "../../assets/img/coming-soon.png";

function Services() {
  return (
    <div>
      {/* First start */}
      <div className="">
        <section className="text-gray-600 body-font max-w-6xl mx-auto">
          <div className="container px-5 md:py-24 pb-10 mx-auto">
            <div className="flex flex-col text-center mt-14 w-full mb-10 md:mb-20">
              <button className="flex mx-auto mt-5 text-gray-500 bg-white rounded-lg border-0 py-1 px-2 text-xl md:text-2xl">
                Lets Learn Together, Grow Together
              </button>
              <h1 className="mt-6 font-bold text-4xl md:text-5xl title-font mb-4 text-gray-900">
                Loved by <span className="text-red-500">40,000+</span> Students{" "}
                <br />
                <span className="text-blue-500 md:mt-7">around the World</span>
              </h1>
              <p className="text-gray-500 text-base md:text-lg">
                Be a part of the most exclusive <br />
                community of India
              </p>
            </div>
            <Link to="/memberform">
              <button className="flex mx-auto mt-12 md:mt-16 text-blue-800 border-2 border-blue-500 outline-2 py-2 px-8 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-50 duration-300">
                Become a member
              </button>
            </Link>
          </div>
        </section>
      </div>
      {/* First end */}

      {/* Second Start */}
      <div className="lg:mb-9">
        <div className="container relative py-5 lg:rounded-3xl flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
          <h2 className="mb-1 text-3xl font-extrabold leading-tight text-center p-10 text-gray-900">
            Here is a few of the awesome Services we provide.
          </h2>
          <div className="w-full lg:ml-4">
            <div className="flex flex-col w-full mb-5 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Webinar
                      </h3>
                    </div>

                    <p className="mb-2 text-gray-600">
                      Attend our live webinars to learn from industry experts,
                      stay updated on the latest trends, and gain valuable
                      insights on various tech topics.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Community
                      </h3>
                    </div>

                    <p className="mb-2 text-gray-600">
                      Join our vibrant community where tech enthusiasts connect,
                      share knowledge, and collaborate on exciting projects and
                      discussions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Providing jobs resources
                      </h3>
                    </div>

                    <p className="mb-2 text-gray-600">
                      Access a wide range of job resources, including listings,
                      career advice, and resume-building tips to help you land
                      your dream job in tech.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mb-10 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  {/* <span  className="absolute top-0 left-0 w-full h-full mt-1 ml-1  rounded-lg"></span> */}
                  <div className="relative h-full p-5 bg-white border-2 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        1:1 Sessions (Comming Soon)
                      </h3>
                    </div>

                    <p className="mb-2 text-gray-600">
                      Get personalized guidance and mentorship through our
                      one-on-one sessions with experienced professionals,
                      tailored to your specific needs and goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1  rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2  rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Freelancing (Comming soon)
                      </h3>
                    </div>

                    <p className="mb-2 text-gray-600">
                      Explore freelancing opportunities through our platform,
                      connect with clients, and build a successful freelance
                      career with our support and resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* First End */}

      {/* Second Part */}
    </div>
  );
}

export default Services;
