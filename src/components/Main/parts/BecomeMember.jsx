import React from "react";
import memberImg from "../../../assets/img/memberimage.png";
import { RiContactsFill } from "react-icons/ri";

function BecomeMember() {
  return (
    <div className="max-w-6xl mx-auto">
      <div class="bg-white">
        <div class="flex items-start justify-between p-5 border-b rounded-t">
          <div class="w-full p-5 rounded-3xl bg-blue-50">
            <div className="text-center mt-5">
              <span className=" bg-white items-center rounded-3xl p-3 inline-block">
                Contributor? Making projects? Need Career Advice?
              </span>
              <h1 className="m-6">
                As the top career community for engineers worldwide, we are
                obsessed with providing exceptional support. Whether you need
                guidance advancing your career, help with your profile, or want
                to share suggestions, we have got your back.
              </h1>
            </div>
          </div>
        </div>
        <div class="p-6 ">
          <form action="#">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <input
                  type="text"
                  name="product-name"
                  id="product-name"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Name"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <input
                  type="number"
                  name="year"
                  id="year"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder="Year of Graduation"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <input
                  type="text"
                  name="collage"
                  id="collage"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Collage name and State"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <input
                  type="number"
                  name="wp-no"
                  id="wp-no"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder="Whatsapp Number"
                  required=""
                />
              </div>
              <div class="col-span-full">
                <label
                  for="product-details"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  Message
                </label>
                <textarea
                  id="product-details"
                  rows="6"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                  placeholder="Why do you wants to join FlexiGeeks?"
                ></textarea>
              </div>
            </div>
          </form>
          <button
            class="text-white mt-3 bg-blue-500 hover:bg-blue-300 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 flex justify-center items-center w-full py-2.5 text-center"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default BecomeMember;
