import { Link } from "react-router-dom";
import logo from "/src/assets/logo/logo.png"; // Use absolute path



function Navbar() {
  return (
    <nav className="bg-[#EAF5DB] flex items-center justify-between px-8 py-4 shadow-md">
      {/* Logo */}

      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 w-auto" />
        <span className="text-2xl font-bold text-green-900 ml-2">
          Vasundhara Biofibers
        </span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 text-green-900 font-medium">
        <Link to="/" className="hover:text-green-700">Home</Link>
        <Link to="/about" className="hover:text-green-700">About</Link>
        <Link to="/technology" className="hover:text-green-700">Technology</Link>
        <Link to="/team" className="hover:text-green-700">Team</Link>
        <Link to="/news" className="hover:text-green-700">News</Link>
      </div>

      {/* Contact Button */}
      <Link
        to="/contact"
        className="bg-green-700 text-white px-5 py-2 rounded-full font-medium hover:bg-green-800 transition"
      >
        Contact us
      </Link>
    </nav>
  );
}

export default Navbar;
