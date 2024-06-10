import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import login from "../../../assets/img/login/login.png";
import Cookies from "js-cookie";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../contextApi/authContext";
import Spinner from "../../Spinner/Spinner";

function Login() {
  const { setIsLogged, setLoader, loader } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    identifier: "", // This field can be either email or username
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
      setLoader(true);
      const { identifier, password } = formData;
   
      const isEmail = identifier.includes("@");
      const data = isEmail
        ? { email: identifier, password }
        : { username: identifier, password };
      const response = await axios.post(
        "/api/users/login",
        data
      );

      Cookies.set("token", response.data.token, { expires: 7 });
      setIsLogged(true);
      setLoader(false);
      navigate("/");
    } catch (error) {
      console.error(error.data);
      setError(error.response?.data.msg);
      setLoader(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-around flex-wrap h-screen lg:pb-24 items-center p-6">
        <div className="hidden lg:block">
          <img src={login} alt="Login illustration" />
        </div>
        <div className="flex flex-col gap-6 w-96 rounded-3xl p-6 sm:auto md:full sm:max-[400px]">
          <div className="flex flex-col gap-1">
            <h4 className="text-2xl font-bold text-center">Welcome Back</h4>
          </div>

          <div className="flex flex-col gap-2">
            <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
              <BsGithub size={22} />
              Continue with GitHub
            </button>

            <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
              <FcGoogle size={23} />
              Continue with Google
            </button>
          </div>

          <div className="flex w-full items-center gap-2 text-sm text-slate-600">
            <div className="h-px w-full bg-slate-200"></div>
            OR
            <div className="h-px w-full bg-slate-200"></div>
          </div>

          {error && <p className="text-red-500">{error}</p>}
          <form
            noValidate=""
            onSubmit={handleSubmit}
            autoComplete="off"
            className="flex flex-col gap-6"
          >
            <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root mui-57f8gj">
              <div>
                <input
                  aria-invalid="false"
                  id="identifier"
                  name="identifier"
                  value={formData.identifier}
                  onChange={handleChange}
                  placeholder="Username or Email"
                  className="w-full p-1 rounded-lg text-lg border"
                  type="text"
                />
              </div>
            </div>
            <div>
              <div className="border flex rounded-lg justify-center items-center">
                <input
                  aria-invalid="false"
                  id="password"
                  name="password"
                  placeholder="*************"
                  className="w-full p-1 rounded-lg text-lg border"
                  value={formData.password}
                  onChange={handleChange}
                  type={!showPassword ? "password" : "text"}
                />
                {showPassword ? (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <label>
                <input data-indeterminate="false" type="checkbox" />
                <span className="pl-2">Remember me </span>
              </label>
              <Link
                className="group text-blue-400 transition-all duration-100 ease-in-out"
                to="/forgot"
              >
                <span className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Forgot password
                </span>
              </Link>
            </div>
            <button
              className="border flex justify-center gap-2 rounded-xl p-1 bg-blue-400"
              type="submit"
            >
              {loader && <Spinner />}
              <span> Login</span>
            </button>
            <div className="flex justify-center items-center flex-wrap gap-2">
              <p>New on our Platform?</p>
              <Link
                className="group text-blue-400 transition-all duration-100 ease-in-out"
                to="/signup"
              >
                <span className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Create an account
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
