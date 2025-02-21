import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Heder";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestoDetailes from "./components/RestoDetailes";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Outlet,
} from "react-router";

const Applayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resid",
        element: <RestoDetailes />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={BrowserRouter} />);
