import React, { useState } from "react";
import logo from "../assets/200516190.png";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "./authContext";
// import { EyeIcon, EyeOffIcon, UserIcon } from 'lucide-react'

function Signup() {

  const { SignUp } = useUserAuth();  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confiPassword, setConfiPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (confiPassword !== password) {
      toast.error("Passwords do not Match!");
    } else {
      try {
          await SignUp(email, password);
        toast.success("Registered Successfuly!");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-[#243642] flex items-center justify-center m-0 p-0 text-white">
          <img
            src={logo}
            className="object-contain w-52"
            alt="Fit N Freak Logo"
          />
        </div>
        <h2 className="text-2xl font-bold text-center py-6 mb-6 text-gray-800">
          Join our community today!
        </h2>
        <form autoComplete="off" onSubmit={handleRegister}>
          <div className="relative mx-6 mb-5">
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="w-full pr-10 pl-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="you@example.com"
                required
              />
              <div>{/* //User Icon */}</div>
            </div>
          </div>
          <div className="relative mx-6 mb-5">
            <label
              htmlFor="Password"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
                placeholder="Enter your password"
              />
              <button type="button"></button>
            </div>
          </div>
          <div className="relative mx-6 mb-5">
            <label
              htmlFor="Confirm-Password"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="Confirm-Password"
                name="Confirm-Password"
                type="password"
                onChange={(e) => {
                  setConfiPassword(e.target.value);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
                placeholder="Confirm your password"
              />
              <button type="button"></button>
            </div>
          </div>
          <div className="relative mx-6">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="relative my-5">
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              className="font-medium text-green-600 hover:text-green-500"
              to="/"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Signup;
