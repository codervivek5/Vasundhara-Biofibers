import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // For icons
import logo from "/src/assets/logo/logo.png"; // Ensure the path is correct

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#EAF5DB] shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
          <span className="text-2xl font-bold text-green-900 ml-2">
            Vasundhara Biofibers
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-green-900 font-medium">
          <Link to="/" className="hover:text-green-700">Home</Link>
          <Link to="/about" className="hover:text-green-700">About</Link>
          <Link to="/technology" className="hover:text-green-700">Technology</Link>
          <Link to="/team" className="hover:text-green-700">Team</Link>
          <Link to="/news" className="hover:text-green-700">News</Link>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-green-700 text-white px-5 py-2 rounded-full font-medium hover:bg-green-800 transition"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-[#EAF5DB] py-4 space-y-4 items-center">
          <Link to="/" className="hover:text-green-700" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-green-700" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/technology" className="hover:text-green-700" onClick={() => setIsOpen(false)}>Technology</Link>
          <Link to="/team" className="hover:text-green-700" onClick={() => setIsOpen(false)}>Team</Link>
          <Link to="/news" className="hover:text-green-700" onClick={() => setIsOpen(false)}>News</Link>
          <Link
            to="/contact"
            className="bg-green-700 text-white px-5 py-2 rounded-full font-medium hover:bg-green-800 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact us
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
