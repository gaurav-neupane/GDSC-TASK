import React from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Component from "./Dashboard/ChartContainer";
import Hamburger from "./Dashboard/Hamburger";
import AreaProgressChart from "./Dashboard/test";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Signin />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/charts",
    element: <Component />,
  },
  {
    path: "/test",
    element:<AreaProgressChart/>
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
