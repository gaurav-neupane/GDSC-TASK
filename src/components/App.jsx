import React from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Component from "./Dashboard/ChartContainer";
import { UserAuthContextProvider } from "./authContext"
import ProtectedRoutes from "./protectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Signin />,
  },
  {
    path: "/register",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <ProtectedRoutes><Dashboard /></ProtectedRoutes>,
  },
  {
    path: "/charts",
    element: <Component />,
  },
]);

function App() {
  return (
    <UserAuthContextProvider>
      <RouterProvider router={router} />
    </UserAuthContextProvider>
  );
}

export default App;
