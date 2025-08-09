import React from "react";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/about/About.jsx";
import Portfolio from "./pages/portfolio/portfolio.jsx";
import Contact from "./pages/contact/Contact.jsx";
import AppLayout from "./components/AppLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "portfolio",
          element: <Portfolio />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
