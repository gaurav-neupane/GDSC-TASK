import React, { useState } from "react";
import { UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { IoBicycle, IoFitnessSharp } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";
import logo from "../../assets/201062064.png";
import { LuLogOut } from "react-icons/lu";
import Avatar  from "react-avatar";

export default function Navbar() {
  const [isActiveLink, setIsActiveLink] = useState("dashboard");

  return (
    <aside className="max-lg:hidden max-h-screen w-64 bg-gray-800 shadow-md">
      <div className="p-4">
        <div className="w-full h-20 overflow-clip flex items-center justify-center">
          <img src={logo} alt="Fit N Freak Logo" />
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-col items-center justify-center pr-5 space-x-4 mb-6">
          <Avatar  color="#4b5563" textSizeRatio={2} name="F" size="60" round={true} className="px-2 mb-2"></Avatar>
          <div>
            <p className="text-sm text-gray-400">Hey, There!</p>
          </div>
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                to="/dashboard"
                onClick={(e) => {
                  e.preventDefault();
                  setIsActiveLink("dashboard");
                }}
                className={`flex items-center space-x-2 p-2 rounded-lg 
                    ${
                      isActiveLink === "dashboard"
                        ? "bg-gray-950 text-green-300"
                        : "text-gray-300 hover:bg-gray-950 hover:text-gray-300"
                    }`}
              >
                <LuLayoutDashboard className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to=""
                onClick={(e) => {
                  e.preventDefault();
                  setIsActiveLink("profile");
                }}
                className={`flex items-center space-x-2 p-2 rounded-lg 
                    ${
                      isActiveLink === "profile"
                        ? "bg-gray-950 text-green-300"
                        : "text-gray-300 hover:bg-gray-950 hover:text-gray-300"
                    }`}
              >
                <UserRound className="h-5 w-5" />
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link
                to=""
                onClick={(e) => {
                  e.preventDefault();
                  setIsActiveLink("activity");
                }}
                className={`flex items-center space-x-2 p-2 rounded-lg 
                    ${
                      isActiveLink === "activity"
                        ? "bg-gray-950 text-green-300"
                        : "text-gray-300 hover:bg-gray-950 hover:text-gray-300"
                    }`}
              >
                <IoBicycle className="h-5 w-5" />
                <span>Activity</span>
              </Link>
            </li>
            <li>
              <Link
                to=""
                onClick={(e) => {
                  e.preventDefault();
                  setIsActiveLink("health");
                }}
                className={`flex items-center space-x-2 p-2 rounded-lg 
                    ${
                      isActiveLink === "health"
                        ? "bg-gray-950 text-green-300"
                        : "text-gray-300 hover:bg-gray-950 hover:text-gray-300"
                    }`}
              >
                <IoFitnessSharp className="h-5 w-5" />
                <span>Health</span>
              </Link>
            </li>
            <li>
              <Link
                to=""
                onClick={(e) => {
                  e.preventDefault();
                  setIsActiveLink("goals");
                }}
                className={`flex items-center space-x-2 p-2 rounded-lg 
                    ${
                      isActiveLink === "goals"
                        ? "bg-gray-950 text-green-300"
                        : "text-gray-300 hover:bg-gray-950 hover:text-gray-300"
                    }`}
              >
                <TbTargetArrow className="h-5 w-5" />
                <span>Goals</span>
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="flex items-center space-x-2 p-2 rounded-lg 
              text-gray-300 hover:bg-gray-950 hover:text-gray-300"
              >
                <LuLogOut className="h-5 w-5" />
                <span>Log Out</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
