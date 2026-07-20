import React from "react";

const skills = {
  Frontend: [
    "React.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "Redux",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT",
    "Authentication",
    "MVC",
  ],
  Database: [
    "MongoDB",
    "Mongoose",
    "MySQL",
    "PostgreSQL",
  ],
  "Tools & UI/UX": [
    "Git",
    "GitHub",
    "Postman",
    "Figma",
    "Penpot",
    "VS Code",
    "npm",
    "OpenAPI",
    "AsyncAPI",
  ],
};

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-950 py-20 lg:py-28 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14 lg:mb-20">
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm font-semibold">
            About Me
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Turning Ideas Into
            <span className="text-blue-400"> Scalable Web Applications</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

          {/* Left */}
          <div>

            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Software Engineer 
      
            </h3>

            <p className="mt-6 text-gray-400 leading-8 text-base md:text-lg">
              I'm a Software Engineer specializing in MERN Stack development,
              passionate about building scalable, responsive, and user-friendly
              web applications. I enjoy transforming ideas into reliable digital
              solutions using MongoDB, Express.js, React.js, and Node.js while
              focusing on clean architecture, performance, and intuitive user
              experiences.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-blue-500 transition">
                <h4 className="text-3xl font-bold text-blue-400">
                  MERN
                </h4>
                <p className="text-gray-400 mt-2 text-sm">
                  Primary Tech Stack
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-blue-500 transition">
                <h4 className="text-3xl font-bold text-blue-400">
                  Full Stack
                </h4>
                <p className="text-gray-400 mt-2 text-sm">
                  Frontend & Backend
                </p>
              </div>

            </div>

          </div>

          {/* Right */}
          <div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Technical Skills
            </h3>

            <div className="space-y-8">

              {Object.entries(skills).map(([category, techs]) => (
                <div key={category}>

                  <h4 className="text-blue-400 font-semibold mb-4 text-lg">
                    {category}
                  </h4>

                  <div className="flex flex-wrap gap-3">

                    {techs.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-4
                          py-2
                          rounded-full
                          text-sm
                          md:text-base
                          bg-slate-900
                          border
                          border-slate-700
                          text-gray-300
                          hover:border-blue-500
                          hover:text-white
                          hover:-translate-y-1
                          transition-all
                          duration-300
                          cursor-default
                        "
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;