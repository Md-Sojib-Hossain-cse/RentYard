import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar.js";
import Footer from "../components/shared/Footer.js";

const GeneralLayout = () => {
  return (
    <div className="fustat-font text-[#272B35]">
      <Navbar></Navbar>
      <div className="w-full max-w-[1440px] mx-auto px-4 py-2 md:px-8 md:py-3 lg:px-20 lg:py-4 min-h-[calc(100vh-158px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default GeneralLayout;
