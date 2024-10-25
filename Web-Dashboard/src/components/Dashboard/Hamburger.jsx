import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { UserRound } from 'lucide-react';
import { Link } from "react-router-dom";
import { IoBicycle, IoFitnessSharp } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";
import logo from "../../assets/201062064.png"


export default function Hamburger() {
    const [isActiveLink, setIsActiveLink] = useState("dashboard");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen)
    }

    return <div className="lg:hidden max-h-screen">
    {/* Navigation bar */}
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className='flex items-center'>
        <button onClick={toggleSidebar} className="focus:outline-none">
          <Menu size={24} />
        </button>
      </div>
        <div className="w-20 m-0 p-0">
        <img src={logo} alt="Fit N Freak Logo" />
      </div>
    </nav>

    {/* Sidebar */}
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? '-translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-4">
        <button onClick={toggleSidebar} className="float-left focus:outline-none">
          <X size={24} />
        </button>
        <div className="flex items-center space-x-4 mt-16">
                  <UserRound></UserRound>
            <div>
              <h2 className="text-xl font-semibold">John Doe</h2>
              <p className="text-sm text-gray-500">Premium Member</p>
            </div>
          </div>
        <ul className="space-y-2 mt-12">
        <li>
                    <Link to="/dashboard" 
                    onClick={(e)=>{
                        e.preventDefault();
                        setIsActiveLink("dashboard")
                    }}
                    className={`flex items-center space-x-2 p-2 rounded-lg 
                    ${isActiveLink === "dashboard"
                        ? 'bg-gray-950 text-green-300' : "text-gray-300 hover:bg-gray-950 hover:text-gray-300"}`}>
                  <LuLayoutDashboard className="h-5 w-5" />
                  <span>Dashboard</span>
                   </Link>
                </li>
                <li>
                <Link to="" 
                    onClick={(e)=>{
                        e.preventDefault();
                        setIsActiveLink("profile")
                    }}
                    className={`flex items-center space-x-2 p-2 rounded-lg 
                    ${isActiveLink === "profile"
                        ? 'bg-gray-950 text-green-300' : "text-gray-300 hover:bg-gray-950 hover:text-gray-300"}`}>
                   <UserRound className="h-5 w-5" />
                  <span>Profile</span>
                   </Link>
                </li>
                <li>
                <Link to="" 
                    onClick={(e)=>{
                        e.preventDefault();
                        setIsActiveLink("activity")
                    }}
                    className={`flex items-center space-x-2 p-2 rounded-lg 
                    ${isActiveLink === "activity"
                        ? 'bg-gray-950 text-green-300' : "text-gray-300 hover:bg-gray-950 hover:text-gray-300"}`}>
                    <IoBicycle className="h-5 w-5" />
                  <span>Activity</span>
                   </Link>
                </li>
                <li>
                <Link to="" 
                    onClick={(e)=>{
                        e.preventDefault();
                        setIsActiveLink("health")
                    }}
                    className={`flex items-center space-x-2 p-2 rounded-lg 
                    ${isActiveLink === "health"
                        ? 'bg-gray-950 text-green-300' : "text-gray-300 hover:bg-gray-950 hover:text-gray-300"}`}>
                    <IoFitnessSharp className="h-5 w-5" />
                  <span>Health</span>
                   </Link>
                </li>
                <li>
                <Link to="" 
                    onClick={(e)=>{
                        e.preventDefault();
                        setIsActiveLink("goals")
                    }}
                    className={`flex items-center space-x-2 p-2 rounded-lg 
                    ${isActiveLink === "goals"
                        ? 'bg-gray-950 text-green-300' : "text-gray-300 hover:bg-gray-950 hover:text-gray-300"}`}>
                    <TbTargetArrow className="h-5 w-5" />
                  <span>Goals</span>
                   </Link>
                </li>
        </ul>
      </div>
        </div>
    </div>
}
