import { Outlet } from "react-router-dom"; // ✅ Correct import
import Navbar from "./navbar/Navbar.jsx";
import Themes from "./themes/Themes.jsx";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Will now render Home, About, Portfolio, or Contact */}
      <Themes />
    </>
  );
};

export default AppLayout;
