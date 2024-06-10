import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import signin from "../../../assets/img/login/signin.png";
import { useAuth } from "../../contextApi/authContext";
import Spinner from "../../Spinner/Spinner";

function Signup() {
  const { setLoader,loader } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoader(true)
      console.log(formData);
      const response = await axios.post(
        "/api/users/signup",
        formData
      );
      setLoader(false)
      // Redirect to verify page after successful signup
      navigate(`/verifySignup?email=${response.data.data.email}`);
    } catch (error) {
      console.error(error);
      setError(error.response?.data.msg);
      setLoader(false)
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-around flex-wrap h-screen lg:pb-24 items-center p-6">
        <div className="flex flex-col gap-6 rounded-3xl w-96 shadow-sm p-6 ">
          <div className="flex flex-col gap-1">
            <h4 className="text-xl font-bold">Adventure starts here 🚀</h4>
          </div>
          <h2>Please sign-up to your account and start the adventure</h2>
          {error && <p className="text-red-500">{error}</p>}
          <form
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            className="flex flex-col gap-5"
          >
            <div className="flex justify-between items-center gap-1.5">
              <button
                type="button"
                className="border rounded-lg w-1/2 flex justify-center items-center p-2"
              >
                <FcGoogle size={30} />
              </button>
              <button
                type="button"
                className="border rounded-lg w-1/2 flex justify-center items-center p-2"
              >
                <FaGithub size={30} />
                <span className="MuiTouchRipple-root mui-w0pj6f"></span>
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white dark:bg-gray-700 px-2 text-gray-500 dark:text-white">
                  OR
                </span>
              </div>
            </div>
            <div>
              <div>
                <input
                  aria-invalid="false"
                  placeholder="Enter your username"
                  className="w-full p-1 rounded-lg text-lg border"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div>
                <input
                  aria-invalid="false"
                  placeholder="Enter your email"
                  className="w-full p-1 rounded-lg text-lg border"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between border rounded-md  items-center">
                <input
                  aria-invalid="false"
                  placeholder="············"
                  className="w-full p-1 rounded-lg text-lg border"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {showPassword ? (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
            </div>
            <label>
              <input data-indeterminate="false" type="checkbox" />
              <span className="pl-2">I agree to </span>
              <Link
                className="group text-blue-400 transition-all duration-100 ease-in-out"
                to="/privacy"
              >
                <span className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Privacy &amp; Policy
                </span>
              </Link>
            </label>
            <button className="border flex justify-center gap-2 rounded-xl p-1 bg-blue-400" type="submit">
            {loader&&<Spinner/>} <span> Sign Up</span>
            </button>
            <div className="flex justify-center items-center flex-wrap gap-2">
              <p className="">Already have an account?</p>
              <Link
                className="group text-blue-400 transition-all duration-100 ease-in-out"
                to="/login"
              >
                <span className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Sign in instead
                </span>
              </Link>
            </div>
          </form>
        </div>
        <img src={signin} alt="" className="" />
      </div>
    </div>
  );
}

export default Signup;
