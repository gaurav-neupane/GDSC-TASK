import React, { useState } from "react";
import { UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { IoBicycle, IoFitnessSharp } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";
import logo from "../../assets/201062064.png";
import { LuLogOut } from "react-icons/lu";
import Avatar from "react-avatar";
import { useUserAuth } from "../authContext";

export default function Navbar() {

  const { logOut } = useUserAuth();
  const { user } = useUserAuth();
  const [isActiveLink, setIsActiveLink] = useState("dashboard");

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <aside className="max-lg:hidden max-h-screen w-64 bg-gray-800 shadow-md">
      <div className="p-6 border-b border-gray-500">
        <div className="w-full h-20 overflow-clip flex items-center justify-center">
          <img src={logo} alt="Fit N Freak Logo" />
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-col items-center justify-center pr-5 space-x-4 mt-4 mb-6">
          <Avatar  color="#86efac" textSizeRatio={2} fgColor="#030712" name={user.email} size="60" round={true} className="px-2 mb-2"></Avatar>
          <div>
            <p className="text-sm text-gray-400">{user.email}</p>
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
              <button
                className="flex items-center space-x-2 p-2 rounded-lg 
              text-gray-300 hover:text-green-300"
              onClick={handleLogOut}  
              >
                <LuLogOut className="h-5 w-5" />
                <span>Log Out</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
