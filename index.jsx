import React from "react";

import { createRoot } from "react-dom/client";
import App from "./App";
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children :[
      {
        path: '/home',
        element : <Home/>
      },
      {
        path: '/contact',
        element : <Contact/>
      },
    ]
  },
]);

const root = createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={router} />);
