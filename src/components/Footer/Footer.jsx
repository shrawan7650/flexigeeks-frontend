import React from "react";
import {
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaDiscord,
} from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/flexigeeks.png";

const Footer = () => {


  return (
    <div className=" bg-gray-50 max-w-full ">
      <div className="mx-auto   max-w-6xl py-8 mt-7 px-3 grid lg:grid-cols-3 gap-7 text-gray-500">
        <div>
          <Link to="/">
            <img src={Logo} alt="" width={240} />
          </Link>

          <div>
            <h1 className="mt-3"></h1>
          </div>
          <div className="flex justify-between md:w-[75%] my-6">
            <Link to="https://github.com/flexigeekshub">
              <FaGithubSquare size={30} className="hover:text-black" />
            </Link>
            <Link to="https://discord.gg/eCW3MsRxNE">
              <FaDiscord size={30} className="hover:text-blue-700" />
            </Link>
            <Link to="https://www.instagram.com/flexi.geeks">
              <FaInstagram size={30} className="hover:text-orange-600" />
            </Link>
            <Link to="https://t.me/flexigeeks">
              <FaTelegram size={30} className="hover:text-[#24A1DE]" />
            </Link>
            <Link to="https://www.linkedin.com/groups/14393062/">
              <FaLinkedin size={30} className="hover:text-black" />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-2 text-center flex justify-between lg:ml-20">
          <div>
            <h2 className="font-medium text-gray-400">Solutions</h2>
            <ul>
              <li className="py-1 text-sm hover:text-black lg:hover:font-bold cursor-pointer">
                Analytics
              </li>
              <li className="py-1 text-sm hover:text-black lg:hover:font-bold cursor-pointer">
                Marketing
              </li>
              <li className="py-1 text-sm hover:text-black lg:hover:font-bold cursor-pointer">
                Commerce
              </li>
              <li className="py-1 text-sm hover:text-black lg:hover:font-bold cursor-pointer">
                <Link to="f/Profile">Dash</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-medium text-gray-400">Company</h2>
            <ul className="">
              <li className="py-1 text-sm cursor-pointer lg:hover:font-bold hover:text-black">
                <Link to="/about"> About</Link>
              </li>
              <li className="py-1 text-sm cursor-pointer lg:hover:font-bold hover:text-black">
                Blog
              </li>
              <li className="py-1 text-sm cursor-pointer lg:hover:font-bold hover:text-black">
                Jobs
              </li>
              <li className="py-1 text-sm cursor-pointer lg:hover:font-bold hover:text-black">
                Careers
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-medium text-gray-400">Legal</h2>
            <ul>
              <li className="py-1 text-sm  hover:text-black cursor-pointer">
                <Link to="terms">Terms and Services</Link>
              </li>
              <li className="py-1 text-sm hover:text-black cursor-pointer">
                <Link to="privacy">Privacy Policy</Link>
              </li>
              <li className="py-1 text-sm hover:text-black cursor-pointer">
                <Link to="terms">Cancellation</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-5 text-cyan-700 max-w-6xl border-t-2 border-t-gray-400 mx-auto">
        Copyright &copy; 2024 &nbsp;<Link to="/">FlexiGeeks</Link>&nbsp; | All
        Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
