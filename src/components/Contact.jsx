import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-20 lg:py-28 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-400 uppercase tracking-[0.3em] font-semibold">
            Contact
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            Let's Build Something Amazing
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-base md:text-lg leading-8">
            I'm always open to discussing new opportunities, collaborating on
            exciting projects, or simply connecting with fellow developers.
            Feel free to reach out.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-xl">

          {/* Contact Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <a
              href="mailto:reejaj143@gmail.com"
              className="flex items-center gap-4 bg-slate-950 p-5 rounded-xl border border-slate-800 hover:border-blue-500 transition"
            >
              <MdEmail className="text-blue-400 text-3xl flex-shrink-0" />

              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white break-all">
                  reejaj143@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+917034489391"
              className="flex items-center gap-4 bg-slate-950 p-5 rounded-xl border border-slate-800 hover:border-blue-500 transition"
            >
              <MdPhone className="text-blue-400 text-3xl flex-shrink-0" />

              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white">
                  +91 70344 89391
                </p>
              </div>
            </a>

            <a
              href="https://github.com/reeja-roy"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-slate-950 p-5 rounded-xl border border-slate-800 hover:border-blue-500 transition"
            >
              <FaGithub className="text-blue-400 text-3xl flex-shrink-0" />

              <div>
                <p className="text-gray-400 text-sm">GitHub</p>
                <p className="text-white">
                  github.com/reeja-roy
                </p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/reeja-roy"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-slate-950 p-5 rounded-xl border border-slate-800 hover:border-blue-500 transition"
            >
              <FaLinkedin className="text-blue-400 text-3xl flex-shrink-0" />

              <div>
                <p className="text-gray-400 text-sm">LinkedIn</p>
                <p className="text-white">
                  linkedin.com/in/reeja-roy
                </p>
              </div>
            </a>

          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="mailto:reejaj143@gmail.com"
              className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Email Me
            </a>

            <a
              href="/Resume.pdf"
              download
              className="w-full sm:w-auto text-center border border-slate-600 hover:border-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition"
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