import React from "react";
import Img1 from "../../../assets/logo/blog.webp";
import Img2 from "../../../assets/logo/interview.png";
import Img3 from "../../../assets/logo/network.png";
import Img4 from "../../../assets/logo/group-chat.png";

// Framer
import { easeIn, easeInOut, motion } from "framer-motion";
import fadeIn from "../Framer";

export default function Features() {
  return (
    <div className="overflow-hidden bg-blue-50 ">
      <div class=" mx-auto py-24 max-w-6xl">
        <div class="mx-auto max-w-6xl px-4 -mt-5 lg:px-8">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            class="mx-auto max-w-2xl lg:text-center"
          >
            <h2 class=" text-3xl font-semibold leading-7 text-indigo-600">
              Features
            </h2>
            <p class="mt-4  font-bold  text-gray-900 sm:text-4xl"></p>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Elevate your career with elite job listings, personalized matches,
              expert advice, seamless applications, real-time notifications,
              networking opportunities, customized alerts, and top-notch
              security.
            </p>
          </motion.div>
          <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <motion.div
                variants={fadeIn("down", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                class="relative pl-16"
              >
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                    <img src={Img1} alt="" />
                  </div>
                  Elite Job Listings
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">
                  Discover exclusive opportunities with leading companies across
                  various industries. Our platform curates high-quality job
                  postings tailored to your expertise and career aspirations.
                </dd>
              </motion.div>
              <motion.div
                variants={fadeIn("down", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                class="relative pl-16"
              >
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                    <img src={Img2} alt="" />
                  </div>
                  Expert Career Advice
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">
                  Access a wealth of resources, including industry insights,
                  resume tips, and interview preparation guides. Our expert
                  advice helps you navigate the job market with confidence.
                </dd>
              </motion.div>
              <motion.div
                variants={fadeIn("down", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                class="relative pl-16"
              >
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                    <img src={Img3} alt="" />
                  </div>
                  Networking Opportunities
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">
                  Connect with industry professionals, join exclusive groups,
                  and participate in events to expand your professional network.
                  Build relationships that can lead to exciting career
                  advancements.
                </dd>
              </motion.div>
              <motion.div
                variants={fadeIn("down", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                class="relative pl-16"
              >
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                    <img src={Img4} alt="" />
                  </div>
                  1:1 Career Guidance
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">
                  Unlock your potential and receive tailored coaching, expert
                  resume reviews, interview preparation, career development
                  plans, ongoing support, networking and job search strategies,
                  and confidence building.
                </dd>
              </motion.div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
