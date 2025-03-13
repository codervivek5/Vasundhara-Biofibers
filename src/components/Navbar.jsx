import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // For icons
import logo from "/src/assets/logo/logo.png"; // Ensure the path is correct

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#EAF5DB] drop-shadow-lg">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto drop-shadow-md" />
          <span className="text-2xl font-bold text-green-900 ml-2 drop-shadow-md">
            Vasundhara Biofibers
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-green-900 font-medium">
          <Link to="/" className="hover:text-green-700 drop-shadow-sm">Home</Link>
          <Link to="/about" className="hover:text-green-700 drop-shadow-sm">About</Link>
          <Link to="/technology" className="hover:text-green-700 drop-shadow-sm">Technology</Link>
          <Link to="/team" className="hover:text-green-700 drop-shadow-sm">Team</Link>
          <Link to="/news" className="hover:text-green-700 drop-shadow-sm">News</Link>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-green-700 text-white px-5 py-2 rounded-full font-medium hover:bg-green-800 transition drop-shadow-lg"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-900 drop-shadow-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-[#EAF5DB] py-4 space-y-4 items-center shadow-lg">
          <Link to="/" className="hover:text-green-700 drop-shadow-sm" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-green-700 drop-shadow-sm" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/technology" className="hover:text-green-700 drop-shadow-sm" onClick={() => setIsOpen(false)}>Technology</Link>
          <Link to="/team" className="hover:text-green-700 drop-shadow-sm" onClick={() => setIsOpen(false)}>Team</Link>
          <Link to="/news" className="hover:text-green-700 drop-shadow-sm" onClick={() => setIsOpen(false)}>News</Link>
          <Link
            to="/contact"
            className="bg-green-700 text-white px-5 py-2 rounded-full font-medium hover:bg-green-800 transition drop-shadow-lg"
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
