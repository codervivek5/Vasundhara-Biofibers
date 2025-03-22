import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "/src/assets/logo/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Reset mobile menu state when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  // Toggle menu function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Close menu function
  const closeMenu = () => {
    setIsOpen(false);
  };

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
          {/* <Link to="/technology" className="hover:text-green-700 drop-shadow-sm">Technology</Link> */}
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
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-[#EAF5DB] py-4 space-y-4 items-center shadow-lg">
          <Link to="/" className="hover:text-green-700 drop-shadow-sm" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="hover:text-green-700 drop-shadow-sm" onClick={closeMenu}>About</Link>
          {/* <Link to="/technology" className="hover:text-green-700 drop-shadow-sm" onClick={closeMenu}>Technology</Link> */}
          <Link to="/team" className="hover:text-green-700 drop-shadow-sm" onClick={closeMenu}>Team</Link>
          <Link to="/news" className="hover:text-green-700 drop-shadow-sm" onClick={closeMenu}>News</Link>
          <Link
            to="/contact"
            className="bg-green-700 text-white px-5 py-2 rounded-full font-medium hover:bg-green-800 transition drop-shadow-lg"
            onClick={closeMenu}
          >
            Contact us
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;