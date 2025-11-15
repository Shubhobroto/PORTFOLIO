// src/components/dialogs/Projects.jsx
import React from "react";
import {
  FaLink,
  FaGithub,
  FaCode,
  FaRocket,
  FaExchangeAlt,
  FaComments,
  FaFileUpload,
} from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "URL Shortener Web App",
      icon: <FaExchangeAlt className="text-blue-600 text-3xl" />,
      description:
        "A lightweight URL-shortening service built using the Shrtco API. The app sends long URLs as parameters to the API and instantly returns a shortened, shareable link. Built with clean API integration and responsive UI.",
      github: "https://github.com/Shubhobroto/url-shortener",
      live: "#", // placeholder
      date: "2022-10",
    },
    {
      title: "Real-Time Chat Application",
      icon: <FaComments className="text-green-600 text-3xl" />,
      description:
        "A real-time chat application built with Node.js and Socket.IO implementing event-driven communication through topic-based subscriptions. Supports instant messaging, presence updates, and live event monitoring.",
      github: "https://github.com/Shubhobroto/Real-Time-Chat-App",
      live: "#", // placeholder
      date: "2022-07",
    },
    {
      title: "File Sharing Application",
      icon: <FaFileUpload className="text-purple-600 text-3xl" />,
      description:
        "A seamless file-sharing system where users can upload files and instantly receive a shareable download link. Built with Node.js and Express following a scalable REST architecture for real-time file access.",
      github: "https://github.com/Shubhobroto/File-Sharing-Application",
      live: "#", // placeholder
      date: "2022-07",
    },
  ];

  // Sort latest → oldest
  const sortedProjects = projects.sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="h-full overflow-y-auto bg-[#f9fbff] p-8 rounded-md flex flex-col items-center space-y-8">
      {/* ---------- Header ---------- */}
      <h2 className="text-2xl font-semibold text-gray-800">
        Projects & Builds 🚀
      </h2>
      <p className="text-sm text-gray-600 text-center max-w-xl">
        A collection of production-grade projects showcasing backend engineering,
        real-time systems, and clean API design.
      </p>

      {/* ---------- Project Cards ---------- */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-5xl">
        {sortedProjects.map((proj, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 shadow-md rounded-lg p-5 w-64 flex flex-col items-center hover:shadow-lg hover:scale-[1.04] transition duration-200"
          >
            {/* Icon */}
            <div className="mb-3">{proj.icon}</div>

            {/* Title */}
            <h3 className="text-sm font-bold text-gray-800 text-center">
              {proj.title}
            </h3>

            {/* Date */}
            <p className="text-[11px] text-gray-500 mt-1">
              Date: <span className="font-medium">{proj.date}</span>
            </p>

            {/* Description */}
            <p className="text-xs text-gray-600 mt-2 text-center leading-relaxed">
              {proj.description}
            </p>

            {/* Buttons */}
            <div className="flex gap-2 mt-4">
              {/* GitHub */}
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-md hover:bg-black transition"
              >
                <FaGithub /> Code
              </a>

              {/* Live Link */}
              <a
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 transition"
              >
                <FaRocket /> Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
