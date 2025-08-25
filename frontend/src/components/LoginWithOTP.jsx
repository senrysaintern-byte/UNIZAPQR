import React from "react";
import AuthHeader from "./AuthHeader";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import LoginComp from "./LoginComp";

const BLUE_600 = "#2563eb"; // Tailwind blue-600

const LoginWithOTP = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-full">
      {/* Left Side - Login Form */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white px-10">
        {/* Logo Placeholder */}
       <div className="w-full ml-50 mt-30">
          <AuthHeader firstText="Intern" secondText="Scan" />
        </div>

        {/* Content Wrapper */}
        <div className="w-full max-w-sm space-y-8 mb-30">
          {/* Title + Paragraph */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Log in to your Account
            </h2>
            <p className="text-gray-600 text-sm">
              Access your account to manage orders, track inquiries, and grow
              your business seamlessly.
            </p>
          </div>

          {/* Form Section */}
          <form className="space-y-4">
            {/* Phone Number */}
            <div className="flex items-center bg-gray-100 border border-transparent rounded-md focus-within:ring-2 focus-within:ring-blue-500 px-2 py-2">
              <IoPhonePortraitOutline size={20} className="text-gray-400 mr-2 ml-1" />
              <input
                type="text"
                placeholder="Phone Number"
                className="flex-1 bg-gray-100 outline-none border-none ml-3"
              />
            </div>

            
              <div className="text-right mt-2">
                <button
                  type="button"
                  className="text-blue-600 font-medium hover:underline"
                  onClick={() => navigate("/login-password")}
                >
                  Login with Password
                </button>
              </div>
            {/* </div> */}

            {/* Log in Button */}
            <button
              type="submit"
              className="w-full text-white border py-2 rounded-md font-medium mt-3"
              style={{ backgroundColor: BLUE_600 }} 
            >
              Continue with OTP
            </button>
          </form>

          {/* Create Account */}
          <p className="text-sm text-gray-600 text-center mt-3">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Create an account
            </a>
          </p>
        </div>
      


<div className="w-1/2 bg-black flex justify-center items-center">
        {/* Image/illustration will go here */}
      </div>
    </div>
    </div>
  );
};

export default LoginWithOTP;
