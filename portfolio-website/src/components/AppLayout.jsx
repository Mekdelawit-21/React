import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar.jsx";
import Themes from "./themes/Themes.jsx";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Themes />
    </>
  );
};

export default AppLayout;
