import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#030817] text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
