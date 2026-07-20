import React from "react";
import profile from "../assets/reeja.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-800 flex items-center pt-24 lg:pt-0"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            <p className="text-blue-400 text-base md:text-lg font-medium mb-3">
              👋 Hello, I'm
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Reeja Roy
            </h1>

            <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300">
              Software Engineer 
            </h2>

            <p className="mt-6 text-gray-400 text-base md:text-lg leading-8 max-w-2xl mx-auto lg:mx-0">
              I build scalable, responsive, and user-focused web applications
              using React.js, Node.js, Express.js, and MongoDB while creating
              clean, efficient, and impactful digital experiences.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">

              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-slate-500 hover:border-blue-500 hover:bg-blue-500/10 text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Contact Me
              </a>

            </div>

          </div>

          {/* Right */}
          <div className="order-1 lg:order-2 flex justify-center">

            <div className="relative">

              <div className="bg-slate-800 p-3 rounded-3xl shadow-2xl border border-slate-700">

                <img
                  src={profile}
                  alt="Reeja Roy"
                  className="w-64 sm:w-72 md:w-80 lg:w-[430px] rounded-2xl object-cover"
                />

              </div>

              {/* Glow */}
              <div className="absolute -z-10 inset-0 bg-blue-500 blur-3xl opacity-20 rounded-3xl"></div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Home;