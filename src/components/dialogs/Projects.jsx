// src/components/dialogs/Projects.jsx
import React from "react";
import {
  FaGithub,
  FaRocket,
  FaExchangeAlt,
  FaComments,
  FaFileUpload,
  FaCar,
  FaProjectDiagram,
} from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Real-Time Ride-Matching Service",
      icon: <FaCar className="text-orange-600 text-3xl" />,
      description:
        "A real-time ride-matching backend. Redis GEOSEARCH finds the nearest available drivers, and offers go to one driver at a time over WebSockets with a 10-second deadline. Accept, reject and timeout race on an atomic Redis claim backed by conditional SQL updates, so a ride is never assigned twice. RabbitMQ with idempotent consumers, retries and a dead-letter queue keeps it safe under failures.",
      github: "https://github.com/Shubhobroto/Uber-System",
      live: "https://ride-matching-shubho.netlify.app/",
      date: "2025-03",
    },
    {
      title: "Resilient Order Processing Platform",
      icon: <FaProjectDiagram className="text-teal-600 text-3xl" />,
      description:
        "Three microservices (order, inventory, payment) that place an order, reserve stock and charge a wallet without a distributed transaction. An orchestrated saga over Kafka with compensation and timeouts, a transactional outbox and inbox, and idempotent consumers keep data consistent through duplicates, reordering and failures.",
      github: "https://github.com/Shubhobroto/resilient-order-system",
      live: "https://resilient-order-shubho.netlify.app/",
      date: "2026-11",
    },
    {
      title: "URL Shortener Web App",
      icon: <FaExchangeAlt className="text-blue-600 text-3xl" />,
      description:
        "A lightweight URL-shortening service built using the Shrtco API. The app sends long URLs as parameters to the API and instantly returns a shortened, shareable link. Built with clean API integration and responsive UI.",
      github: "https://github.com/Shubhobroto/url-shortener",
      live: "https://url-shortner-shubho.netlify.app/",
      date: "2022-10",
    },
    {
      title: "Real-Time Chat Application",
      icon: <FaComments className="text-green-600 text-3xl" />,
      description:
        "A real-time chat application built with Node.js and Socket.IO implementing event-driven communication through topic-based subscriptions. Supports instant messaging, presence updates, and live event monitoring.",
      github: "https://github.com/Shubhobroto/Real-Time-Chat-App",
      live: "https://real-time-chat-app-862s.onrender.com/",
      date: "2022-07",
    },
    {
      title: "File Sharing Application",
      icon: <FaFileUpload className="text-purple-600 text-3xl" />,
      description:
        "A seamless file-sharing system where users can upload files and instantly receive a shareable download link. Built with Node.js and Express following a scalable REST architecture for real-time file access.",
      github: "https://github.com/Shubhobroto/File-Sharing-Application",
      live: "https://file-sharing-shubho.onrender.com/",
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
        Backend and distributed-systems projects built to practise real-world
        design problems: concurrency, retries, consistency across services and
        clean API design.
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

              {/* Live Link (only for projects that have one) */}
              {proj.live && (
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-700 transition"
                >
                  <FaRocket /> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
