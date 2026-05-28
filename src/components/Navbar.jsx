import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import GetQuoteModal from "./GetQuoteModal"; // ✅ ADDED: missing import

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [openQuote, setOpenQuote] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Banks", path: "/banks" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 px-4 py-4">
      <div
        className={`
          mx-auto flex w-full max-w-7xl items-center justify-between
          rounded-full border border-white/20
          bg-white/10 backdrop-blur-xl
          px-6 py-3 text-white shadow-lg
          transition-all duration-300
          ${open ? "rounded-3xl" : "rounded-full"}
        `}
      >
        {/* Logo */}
        <div className="cursor-pointer">
          <img src={logo} alt="Logo" className="h-14 w-auto" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`
                relative transition-all duration-300
                text-gray-600 hover:text-orange-300
                ${location.pathname === link.path ? "text-orange-400 font-semibold" : ""}
              `}
            >
              {link.name}

              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-orange-400 rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button
            onClick={() => setOpenQuote(true)}
            className="rounded-full bg-linear-to-r from-gray-400 to-orange-600 px-5 py-2 font-medium text-white transition-all duration-300 hover:scale-105"
          >
            Get Quote
          </button>

          
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-600 hover:text-orange-300 transition-all duration-300"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"}
        `}
      >
        <div
          className="
            flex flex-col gap-5 rounded-3xl
            border border-white/20
            bg-white/10 backdrop-blur-xl
            p-6 text-white shadow-lg
          "
        >
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`
                text-lg transition-all duration-300
                text-gray-600 hover:text-orange-300
                ${location.pathname === link.path ? "text-orange-400 font-semibold" : ""}
              `}
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={() => {
              setOpen(false); // close mobile menu
              setOpenQuote(true); // open modal
            }}
            className="rounded-full bg-linear-to-r from-gray-400 to-orange-600 px-5 py-3 font-medium transition-all duration-300 hover:scale-105"
          >
            Get Quote
          </button>
        </div>
        
      </div>
      {/* ✅ ADDED: Modal trigger */}
          {openQuote && (
            <GetQuoteModal open={openQuote} setOpen={setOpenQuote} />
          )}
    </nav>
  );
};

export default Navbar;
