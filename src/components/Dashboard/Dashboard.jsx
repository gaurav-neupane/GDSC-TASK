import React , {useState} from "react";
import Navbar from "./Navbar";
import Charts from "./ChartContainer";
import Hamburger from "./Hamburger";

export default function Dashboard() {
  
  return (
    <div className="flex h-screen w-screen">
      <Navbar />
          <div className="w-screen overflow-scroll">
            <div>
                 <Hamburger/> 
            </div>
            <div>
                <Charts />
            </div>
      </div>
    </div>
  );
}
