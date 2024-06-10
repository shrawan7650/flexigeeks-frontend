import React from "react";
import Sider from "../../../assets/img/HomeSider.png";
// Framer
import { easeIn, easeInOut, motion } from "framer-motion";
import fadeIn from "../Framer";

export default function HeaderSection() {
  return (
    <div className="bg-[#edf6ff]">
      <div className=" overflow-hidden max-w-6xl mx-auto">
        <section className="mt-1 max-w-6xl mx-auto overflow-hidden">
          <section className="text-gray-600  lg:pb-4 body-font">
            <div className="container mx-auto flex px-4 py-20 md:flex-row flex-col items-center">
              <motion.div
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:flex-grow overflow-hidden  md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-black"
              >
                <div>
                  <h1 className="text-2xl title-display max-w-5xl tracking-tight sm:text-5xl mx-auto lg:text-4xl mb-5 font-semibold text-blue-800">
                    The Ultimate Hub for Aspiring Engineers.
                  </h1>
                </div>
                <div>
                  <p className="mb-8 leading-relaxed">
                    At Flexigeeks, we recognize the critical need to keep pace
                    with the rapidly changing technology landscape. That’s why
                    we meticulously curate and deliver an extensive range of
                    study materials on diverse tech subjects, from programming
                    languages and web development to data science and artificial
                    intelligence. Our primary focus is on the educational
                    success of our users, guiding them towards achieving their
                    career aspirations. We offer the right resources and expert
                    advice to help you land your dream job and excel in the tech
                    industry.
                  </p>
                </div>
                <div className="flex">
                  <a href="/login">
                    <button className=" inline-flex text-blue-800 bg-blue-100 border- shadow-sm shadow-blue-500 border-blue-600 py-2 px-6  hover:bg-blue-300 rounded lg:text-lg">
                      Get Started
                    </button>
                  </a>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className=" relative overflow-hidden lg:max-w-lg lg:ml-3 md:w-1/2 w-5/6"
              >
                <img src={Sider} alt="Sider" />
              </motion.div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
