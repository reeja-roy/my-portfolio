import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-white tracking-wide"
        >
          Reeja roy
        </a>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <a
            href="#home"
            className="hover:text-blue-400 transition duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-blue-400 transition duration-300"
          >
            About
          </a>

          <a
            href="#projects"
            className="hover:text-blue-400 transition duration-300"
          >
            Projects
          </a>


          <a
            href="#contact"
            className="hover:text-blue-400 transition duration-300"
          >
            Contact
          </a>
        </div>

       
      </div>
    </nav>
  );
};

export default Navbar;