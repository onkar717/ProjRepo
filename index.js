import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/home";
import Service from "./components/Service";
import Projects from "./components/project";
import { createBrowserRouter , RouterProvider } from "react-router-dom";

const Applayout = () => {
  return (
    <>
      <Home />
    </>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/services",
    element: <Service />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
