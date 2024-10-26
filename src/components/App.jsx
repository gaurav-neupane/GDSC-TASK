import React from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Component from "./Dashboard/ChartContainer";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
