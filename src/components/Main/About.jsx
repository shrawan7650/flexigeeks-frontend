import React from "react";
import { Link } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
import Img1 from "../../assets/img/img1.png";
import Faq from "./parts/Faq";

export default function About() {
  return (
    <div   className="lg:pb-4">
      <section  className=" mx-auto bg-blue-50 lg:rounded-3xl lg:mt-4 max-w-6xl px-10">
        <section  className="text-gray-600 body-font">
          <div   className="text-center w-full font-bold text-3xl pt-16 pb-3">
            <h1>About Us</h1>
          </div>
          <div  className="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center">
            <div  className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1  className=" text-lg mb-4  text-gray-900">
                At FlexiGeeks , we are dedicated to empowering individuals in
                their tech journey by providing free study materials and job
                updates. Our mission is to make quality tech education
                accessible to everyone, regardless of their background or
                financial constraints.
                <br  className="hidden lg:inline-block" />
                <p>
                  <br />
                  We understand the importance of staying up-to-date with the
                  ever-evolving technology landscape. That's why we curate and
                  provide comprehensive study materials on various tech topics,
                  ranging from programming languages and web development to data
                  science, artificial intelligence, and beyond.
                </p>
              </h1>
              <p  className="text-lg mb-4  text-gray-900">
                <b>
                  We also help students improve their resumes, LinkedIn
                  profiles, and GitHub profiles. So don't wait, reach out to us
                  for any help!
                </b>
              </p>
            </div>
            <div   className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                alt="hero"
                width="500"
                  className="object-cover object-center rounded w-full "
                src={Img1}
              />
            </div>
          </div>
        </section>
        <div   className="flex flex-col items-center justify-center">
          <div   className="flex flex-col items-center gap-y-4 pb-20 md:flex-row">
            <div   className="space-y-6 text-center md:text-left">
              <span   className="text-xlbold text-3xl flex justify-center items-center mb-16">
                Become a contibuter &nbsp;
                <Link to="https://github.com/flexigeekshub">
                  <IoLogoGithub />
                </Link>
              </span>

              <p  className="text-sm font-semibold md:text-base">Join our team →</p>
              <p  className="text-3xl font-bold md:text-4xl">
                We're just getting started
              </p>
              <p  className="text-base text-gray-600 md:text-lg">
                Our philosophy is simple — hire a team of diverse, passionate
                people and foster a culture that empowers you to do your best
                work.
              </p>
              <Link to="/contact">
                <button
                  type="button"
                   className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 mt-3 focus-visible:outline-black"
                >
                  Coming Soon
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <Faq/>
    </div>
  );
}
