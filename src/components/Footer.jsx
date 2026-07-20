import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const year = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Branding */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Reeja <span className="text-blue-500">Roy</span>
            </h2>

            <p className="mt-2 text-gray-400 text-sm md:text-base">
              Software Engineer 
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-gray-400 text-sm md:text-base">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blue-400 transition"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-5">

            <a
              href="https://github.com/reeja-roy"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 transition"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/in/reeja-roy"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500 transition"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="mailto:reejaj143@gmail.com"
              className="w-11 h-11 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-gray-400 hover:text-red-400 hover:border-red-400 transition"
            >
              <MdEmail size={20} />
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center text-gray-500 text-sm">

          <p>© {year} Reeja Roy. All rights reserved.</p>

          

        </div>

      </div>
    </footer>
  );
};

export default Footer;