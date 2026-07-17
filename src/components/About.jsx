import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-widest font-semibold">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Turning Ideas Into Scalable Web Applications
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left Side */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Software Engineer & MERN Stack Developer
            </h3>

            <p className="text-gray-400 text-lg leading-8">
              I'm passionate about building scalable, responsive, and
              user-friendly web applications using the MERN Stack. I enjoy
              creating clean, efficient solutions that combine great user
              experiences with robust backend architecture. I'm constantly
              learning new technologies and love solving real-world problems
              through software.
            </p>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-5">

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500 transition">
              <h4 className="text-blue-400 text-3xl mb-3">💻</h4>
              <h5 className="text-white font-semibold text-xl">
                Frontend
              </h5>
              <p className="text-gray-400 mt-2">
                React.js, JavaScript, HTML, CSS, Tailwind CSS
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500 transition">
              <h4 className="text-blue-400 text-3xl mb-3">⚙️</h4>
              <h5 className="text-white font-semibold text-xl">
                Backend
              </h5>
              <p className="text-gray-400 mt-2">
                Node.js, Express.js, REST APIs, Authentication
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500 transition">
              <h4 className="text-blue-400 text-3xl mb-3">🗄️</h4>
              <h5 className="text-white font-semibold text-xl">
                Database
              </h5>
              <p className="text-gray-400 mt-2">
                MongoDB, Mongoose, Database Design
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500 transition">
              <h4 className="text-blue-400 text-3xl mb-3">🚀</h4>
              <h5 className="text-white font-semibold text-xl">
                Focus
              </h5>
              <p className="text-gray-400 mt-2">
                Clean Code, Performance, Responsive Design
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;