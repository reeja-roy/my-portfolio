import React from "react";
import profile from "../assets/reeja.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="text-center lg:text-left">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Available for Work
            </span>

            <p className="mt-8 text-blue-400 font-medium">
              👋 Hello, I'm
            </p>

            <h1 className="mt-2 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              Reeja <span className="text-blue-500">Roy</span>
            </h1>

            <h2 className="mt-4 text-2xl lg:text-3xl font-semibold text-gray-300">
              Software Engineer • MERN Stack Developer
            </h2>

            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-gray-400 text-lg leading-8">
              I specialize in building scalable and responsive web applications
              using the MERN stack. I enjoy developing intuitive user
              interfaces, building reliable backend services, and writing clean,
              maintainable code that delivers meaningful user experiences.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <a
                href="#projects"
                className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-8 py-3 rounded-xl border border-slate-600 hover:border-blue-500 hover:bg-blue-500/10 text-white font-semibold transition duration-300"
              >
                Contact Me
              </a>

            </div>

            {/* Stats */}
            <div className="mt-14 flex justify-center lg:justify-start gap-10">

              <div>
                <h3 className="text-3xl font-bold text-white">20+</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">MERN</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Tech Stack
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">Full Stack</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Development
                </p>
              </div>

            </div>

          </div>

          {/* Right */}
          <div className="flex justify-center">

            <div className="relative group">

              {/* Glow */}
              <div className="absolute inset-0 rounded-[36px] bg-blue-500 blur-3xl opacity-20 group-hover:opacity-30 transition"></div>

              {/* Image Card */}
              <div className="relative bg-slate-900 border border-slate-700 rounded-[36px] p-2 shadow-2xl group-hover:border-blue-500/40 transition">

                <img
                  src={profile}
                  alt="Reeja Roy"
                  className="w-72 sm:w-80 md:w-96 lg:w-[390px] rounded-[30px] object-cover transition duration-500 group-hover:scale-[1.02]"
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Home;