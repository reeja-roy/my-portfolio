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
      className="bg-slate-900 text-white py-24 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-widest font-semibold">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            A selection of projects that demonstrate my experience in building
            scalable, responsive, and user-focused web applications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center border border-slate-700 hover:border-blue-500 py-3 rounded-lg transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center bg-blue-600 hover:bg-blue-700 py-3 rounded-lg transition"
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