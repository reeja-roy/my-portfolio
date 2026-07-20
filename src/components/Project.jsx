import React from "react";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A full-stack e-commerce application with authentication, shopping cart, Razorpay payment integration, and admin dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: "https://placehold.co/600x400/1e293b/ffffff?text=E-Commerce",
    github: "#",
    demo: "#",
  },
  {
    title: "DVR Monitoring System",
    description:
      "A web application for monitoring DVR devices with real-time camera management, user authentication, and device configuration.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    image: "https://placehold.co/600x400/1e293b/ffffff?text=DVR+System",
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio showcasing projects, skills, and contact information with a modern UI built using React.",
    tech: ["React", "Tailwind CSS"],
    image: "https://placehold.co/600x400/1e293b/ffffff?text=Portfolio",
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-900 py-20 lg:py-28 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14 lg:mb-20">
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm font-semibold">
            Portfolio
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-8">
            A selection of projects that showcase my experience in building
            scalable, responsive, and user-focused web applications.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 sm:h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">

                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-7 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center border border-slate-700 hover:border-blue-500 text-white py-3 rounded-lg transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;