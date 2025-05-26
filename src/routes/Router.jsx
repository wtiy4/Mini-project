import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../pages/Main";
import Sign from "../pages/Signup";
import Log from "../pages/Login";

const router = createBrowserRouter([
  { path: "/", element: <Sign></Sign> },
  { path: "/login", element: <Log /> },
  { path: "/home", element: <Main /> },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
