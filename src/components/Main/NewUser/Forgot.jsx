import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Forgot() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigat = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post("/api/users/forgot", { email });
      console.log(response.data.success)
      if (response.data.success) {
        setMessage("OTP sent to your email. Check your inbox.");
        // Redirect the user to the OTP verification page
        navigat(`/forgotVerify?email=${email}`);
      } else {
        setError("Failed to send OTP. Please try again.");
      }
    } catch (error) {
 
      setError(error.response?.data.msg);
    }
  };

  return (
    <div className="max-w-6xl h-screen mx-auto">
      <div className="flex justify-center h-screen lg:pb-24 items-center p-6">
        <div className="flex flex-col gap-6 w-96 rounded-3xl p-6 shadow-xl">
          <div className="flex flex-col gap-1">
            <h4 className="text-lg">Forgot Password</h4>
          </div>
          <div>
            <h2>{`Enter your email and we'll send you instructions to reset your password`}</h2>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label>Email</label>
              <div>
                <input
                  aria-invalid="false"
                  placeholder="Enter your email"
                  className="w-full p-1 rounded-lg text-lg border"
                  type="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <Link
                className="group text-blue-400 transition-all duration-100 ease-in-out"
                to="/login"
              >
                <span className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Back to login
                </span>
              </Link>
            </div>
            <button className="border rounded-xl p-1 bg-blue-400" type="submit">
              Send Otp
            </button>
            {message && <p className="text-green-500">{message}</p>}
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
