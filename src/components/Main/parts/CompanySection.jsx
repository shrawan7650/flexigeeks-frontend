import React from "react";

import { easeIn, easeInOut, motion } from "framer-motion";
import fadeIn from "../Framer";

import MS from "../../../assets/logo/company-name/asset 1.png";
import orac from "../../../assets/logo/company-name/asset 3.png";
import google from "../../../assets/logo/company-name/asset 4.png";
import adobe from "../../../assets/logo/company-name/adobe.png";
import godaddy from "../../../assets/logo/company-name/asset 8.svg";
import asana from "../../../assets/logo/company-name/asset 9.png";
import air from "../../../assets/logo/company-name/asset 6.png";
import cisco from "../../../assets/logo/company-name/cisco.png";

export default function CompanySection() {
  return (
    <div className="max-w-6xl py-16 mx-auto">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <h2 class="lg:text-4xl sm:text-lg py-10 font-bold text-blue-900 text-center">
          Connect with Professionals who are at top Companies
        </h2>
      </motion.div>
      <div class=" w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <img alt="" class="h-20  mx-auto" src={MS} />
          </li>
          <li>
            <img alt="" class="h-20  mx-auto" src={orac} />
          </li>
          <li>
            <img alt="" class="h-10 lg:-ml-2 mx-auto" src={google} />
          </li>
          <li>
            <img alt="" class="h-6  mx-auto" src={adobe} />
          </li>
          <li>
            <img alt="" class="h-9  mx-auto" src={cisco} />
          </li>
          <li>
            <img alt="" class="h-7 lg:-ml-2 mx-auto" src={godaddy} />
          </li>
          <li>
            <img alt="" class="h-12 mx-auto" src={asana} />
          </li>
          <li>
            <img alt="" class="h-10  mx-auto" src={air} />
          </li>
        </ul>
        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          <li>
            <img alt="" class="h-20  mx-auto" src={MS} />
          </li>
          <li>
            <img alt="" class="h-20  mx-auto" src={orac} />
          </li>
          <li>
            <img alt="" class="h-10 lg:-ml-2 mx-auto" src={google} />
          </li>
          <li>
            <img alt="" class="h-6  mx-auto" src={adobe} />
          </li>
          <li>
            <img alt="" class="h-9  mx-auto" src={cisco} />
          </li>
          <li>
            <img alt="" class="h-7 lg:-ml-2 mx-auto" src={godaddy} />
          </li>
          <li>
            <img alt="" class="h-12 mx-auto" src={asana} />
          </li>
          <li>
            <img alt="" class="h-10  mx-auto" src={air} />
          </li>
        </ul>
      </div>
    </div>
  );
}
