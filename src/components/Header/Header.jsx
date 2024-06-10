import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo/flexigeeks.png";

import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import useScroll from "../../Hooks/useScroll";
import { useAuth } from "../contextApi/authContext";


const Header = () => {
  const { isLogged,logout} = useAuth();
 

  let Links = [
    { name: "Home", link: "/" },
    { name: "Project", link: "projects" },
    { name: "Community", link: "community" },
    { name: "Service", link: "service" },
    { name: "About us", link: "about" },
  ];
  const [open, setOpen] = useState(false);

  // Scroll
  const complete = useScroll();

  //logout handler



  return (
    <nav className="mx-auto shadow-sm lg:max-w-full fixed bg-white pb-1 border-b-2 pt-2 left-0 right-0 z-40 text-lg">
      <div className="max-w-6xl mx-auto top-0  left-0">
        <div className="md:flex items-center justify-between  py-4 md:px-10 px-7">
          {/* logo section */}
          <div className="font-bold text-2xl cursor-pointer lg:-ml-6 flex items-center gap-1">
            <Link to="/">
              <img src={Logo} alt="" width={200} />
            </Link>{" "}
          </div>

          {/* Menu icon */}
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
          >
            {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
          </div>
          {/* link items */}
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 rounded-xl  absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-12" : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link} className="md:ml-8 md:my-0 my-7 font-medium ">
                <Link
                  to={link.link}
                  className="text-gray-800 hover:text-blue-400 duration-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {!isLogged ? (
              <Link to="/login">
                <button className="btn border-2 border-blue-400 hover:bg-blue-50 text-blue-800 md:ml-8 font-semibold px-3 py-0.5 rounded-3xl duration-500 md:static">
                  Get Started
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button
                  onClick={()=>logout()}
                  className="btn border-2 border-blue-400 hover:bg-blue-50 text-blue-800 md:ml-8 font-semibold px-3 py-0.5 rounded-3xl duration-500 md:static"
                >
                  Logout
                </button>
              </Link>
            )}
          </ul>
          {/* button */}
        </div>
      </div>
      <span
        style={{ transform: `translateX(${complete - 100}%)` }}
        className="absolute bg-blue-400 rounded h-1 w-full shadow-md bottom-0"
      />
    </nav>
  );
};

export default Header;
