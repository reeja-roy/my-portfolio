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
    <section id="about" className="bg-slate-950 py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-widest font-semibold">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Turning Ideas Into Scalable Web Applications
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Software Engineer & MERN Stack Developer
            </h3>

            <p className="text-gray-400 text-lg leading-8">
              I'm a Software Engineer specializing in MERN Stack development,
              passionate about building scalable, responsive, and user-friendly
              web applications. I enjoy transforming ideas into reliable digital
              solutions using MongoDB, Express.js, React.js, and Node.js, with a
              strong focus on clean architecture, performance, and intuitive
              user experiences. I'm committed to continuous learning and enjoy
              solving real-world problems through modern web technologies.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">

              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                <h4 className="text-3xl font-bold text-blue-400">MERN</h4>
                <p className="text-gray-400 mt-2">Primary Tech Stack</p>
              </div>

              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                <h4 className="text-3xl font-bold text-blue-400">Full Stack</h4>
                <p className="text-gray-400 mt-2">
                  Frontend & Backend Development
                </p>
              </div>

            </div>
          </div>

          {/* Right */}
          <div>

            <h3 className="text-3xl font-bold text-white mb-8">
              Technical Skills
            </h3>

            <div className="space-y-8">

              {Object.entries(skills).map(([category, techs]) => (
                <div key={category}>
                  <h4 className="text-blue-400 font-semibold text-lg mb-4">
                    {category}
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {techs.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-gray-300 hover:border-blue-500 hover:text-white transition duration-300 cursor-default"
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