import React from "react";
import { easeIn, easeInOut, motion } from "framer-motion";
import fadeIn from "../Framer";

const Testinomial = () => {
  return (
    <div>
      <div className=" mx-auto bg-white max-w-6xl border-gray-200 px-5 py-16 md:py-24 text-gray-800">
        <div className="w-full max-w-6xl mx-auto">
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="text-center max-w-xl mx-auto"
          >
            <h1 className="lg:text-4xl md:text-4xl sm:text-3xl font-bold mb-5 text-gray-600">
              Here From Our Awesome Users.
            </h1>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1 mr-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
            </div>
          </motion.div>
          <div className="-mx-3 md:flex items-start">
            <div className="px-3 md:w-1/3">
              <motion.div
                variants={fadeIn("down", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="w-full mx-auto shadow-lg  rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
              >
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    {/* Img */}
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Sujal
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p>
                    The quality and quantity of information you're sharing are
                    truly impressive. Your efforts are incredibly valuable,
                    especially for those like me who prefer efficiency over
                    extensive browsing. Your work is greatly appreciated! Thank
                    you for your dedication and contribution.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("down", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="w-full mx-auto  rounded-lg shadow-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
              >
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    {/* Img */}
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Surbhi
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p>
                    Thank you for the extensive preparatory materials and
                    job/internship updates you provide. It's invaluable, as it
                    keeps us informed about industry openings that might
                    otherwise go unnoticed. Your efforts are highly
                    appreciated—please keep up the good work!
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="px-3 md:w-1/3">
              <motion.div
                variants={fadeIn("down", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="w-full mx-auto  rounded-lg shadow-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
              >
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    {/* Img */}
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Digant
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p>
                    Your overall material is very good. But can you also provide
                    data science interview questions like what GoComet and Miq
                    companies ask for this role. Just to get an idea.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("down", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="w-full mx-auto  rounded-lg shadow-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
              >
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    {/* Img */}
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Riya
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p>
                    FlexiGeeks provided invaluable 1:1 career guidance, refining
                    my skills and boosting my confidence. Tailored coaching,
                    expert resume reviews, and strategic planning were
                    instrumental in my career advancement.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="px-3 md:w-1/3">
              <motion.div
                variants={fadeIn("down", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="w-full mx-auto  rounded-lg shadow-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
              >
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    {/* Img */}
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Abhinav
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p>
                    I can confidently say it's a game-changer. The elite job
                    listings and personalized matches perfectly aligned with my
                    career aspirations. The seamless application process and
                    real-time notifications made job hunting effortless. Thank
                    you for revolutionizing my job search experience!
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("down", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="w-full mx-auto  rounded-lg shadow-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
              >
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    {/* Image */}
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Ankit
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className=" text-sm">
                    I extend my heartfelt gratitude to every member of the
                    FlexiGeeks. Your unwavering support and dedication have been
                    instrumental in providing me access to invaluable technical
                    resources, nurturing my growth in the field of computer
                    science. Thank you for everything!
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testinomial;
