import React from "react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Branding */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Reeja <span className="text-blue-500">Roy</span>
            </h2>

            <p className="text-gray-400 mt-2">
              Software Engineer • MERN Stack Developer
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-6 text-gray-400">
            <a href="#home" className="hover:text-blue-400 transition">
              Home
            </a>

            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>

            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-5">

            <a
              href="https://github.com/reeja-roy"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="mailto:reejaj143@gmail.com"
              className="text-gray-400 hover:text-red-400 transition"
            >
              <MdEmail size={24} />
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-3">

          <p>© {year} Reeja Roy. All rights reserved.</p>

          <p className="flex items-center gap-2">
            Built with React & Tailwind CSS
            <FaHeart className="text-red-500" />
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;