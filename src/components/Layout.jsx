import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <>
    <Navbar />
    <Outlet /> {/* This will render the child routes */}
    <Footer />
  </>
  );
}

export default Layout;
