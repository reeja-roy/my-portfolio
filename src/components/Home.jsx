import React from "react";

const Home = () => {
  return (
    <section  id="home" className="min-h-[90vh] bg-gradient-to-br from-slate-950 via-gray-900 to-slate-800 flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl">

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
            I build fast, scalable, and user-focused web applications using
            React.js, Node.js, Express.js, and MongoDB. Passionate about
            creating clean, efficient, and impactful digital experiences.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg text-white font-semibold">
              View Projects
            </button>

            <button className="border border-gray-500 hover:border-white hover:text-white transition px-6 py-3 rounded-lg text-gray-300 font-semibold">
              Contact Me
            </button>
          </div>

          <div className="flex gap-8 mt-12 text-gray-400">
            <div>
              <h3 className="text-3xl font-bold text-white">20+</h3>
              <p>Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">MERN</h3>
              <p>Tech Stack</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">100%</h3>
              <p>Passion</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;