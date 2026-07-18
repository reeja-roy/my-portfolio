import React from "react";
i
import { MdEmail, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">
          <p className="text-blue-400 uppercase tracking-widest font-semibold">
            Contact
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Let's Build Something Amazing
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-8">
            I'm always open to discussing new opportunities, collaborating on
            exciting projects, or simply connecting with fellow developers.
            Feel free to reach out!
          </p>
        </div>

        <div className="mt-16 bg-slate-900 rounded-2xl p-8 border border-slate-800">

          <div className="space-y-6">

            <a
              href="mailto:reejaj143@gmail.com"
              className="flex items-center gap-4 hover:text-blue-400 transition"
            >
              <MdEmail size={24} />
              <span className="text-lg">reejaj143@gmail.com</span>
            </a>

            <a
              href="tel:+91XXXXXXXXXX"
              className="flex items-center gap-4 hover:text-blue-400 transition"
            >
              <MdPhone size={24} />
              <span className="text-lg">+91 7034489391</span>
            </a>

            <a
              href="https://github.com/reeja-roy"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 hover:text-blue-400 transition"
            >
              <FaGithub size={24} />
              <span className="text-lg">GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/reeja-roy"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 hover:text-blue-400 transition"
            >
              <FaLinkedin size={24} />
              <span className="text-lg">LinkedIn</span>
            </a>

          </div>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="mailto:reejaj143@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              Email Me
            </a>

            <a
              href="/Resume.pdf"
              download
              className="border border-slate-600 hover:border-blue-500 px-6 py-3 rounded-lg font-semibold transition"
            >
              Download Resume
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;