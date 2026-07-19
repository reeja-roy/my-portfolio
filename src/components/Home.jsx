import React from "react";
import profile from "../assets/reeja.jpg";


const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-800 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <p className="text-blue-400 text-lg font-medium mb-3">
              👋 Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Reeja Roy
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mt-4">
              Software Engineer & MERN Stack Developer
            </h2>

            <p className="mt-6 text-lg text-gray-400 leading-8 max-w-2xl">
              I build scalable, responsive, and user-focused web applications
              using React.js, Node.js, Express.js, and MongoDB while creating
              clean and efficient digital experiences.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-slate-500 hover:border-blue-500 px-6 py-3 rounded-lg font-semibold transition"
              >
                Contact Me
              </a>
            </div>

          </div>

          {/* Right */}
          <div className="flex justify-center">

            <div className="relative">

              {/* Gradient Ring */}
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full  p-2">

                <img
                  src={profile}
                  alt="Profile"
                  className="w-80 h-80 border-4 border-red-500"
                />



              </div>

              {/* Decorative Glow */}
              <div className="absolute -z-10 inset-0 rounded-full bg-blue-500 blur-3xl opacity-20"></div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Home;