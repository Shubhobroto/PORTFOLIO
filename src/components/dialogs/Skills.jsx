import React from "react";
import { FaCode, FaCloud, FaVial, FaTools, FaPaintBrush, FaUserTie } from "react-icons/fa";

export default function Skills() {
  const categories = [
    {
      title: "Core Technical",
      icon: <FaCode className="text-blue-600 text-lg" />,
      bg: "from-blue-50 to-blue-100",
      items: [
        "Java", "Spring Boot", "Microservices", "PostgreSQL", "MySQL", "React",
        "JavaScript", "C++", "HTML", "CSS", "REST APIs", "System Design", "OOP",
        "Data Structures", "Algorithms", "Low-Latency Systems", "Multithreading",
        "Performance Tuning", "NodeJS",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud className="text-indigo-600 text-lg" />,
      bg: "from-indigo-50 to-indigo-100",
      items: [
        "Docker", "Kubernetes", "Azure", "GCP", "CI/CD", "Git", "Jenkins",
        "Maven", "Linux", "Shell Scripting", "Gradel", "npm",
      ],
    },
    {
      title: "Testing & Quality",
      icon: <FaVial className="text-purple-600 text-lg" />,
      bg: "from-purple-50 to-purple-100",
      items: [
        "JUnit", "Mockito", "Integration Testing", "Unit Testing",
        "API Testing", "Load Testing",
      ],
    },
    {
      title: "Tools & Architecture",
      icon: <FaTools className="text-green-600 text-lg" />,
      bg: "from-green-50 to-green-100",
      items: [
        "Postman", "IntelliJ", "VS Code", "Swagger", "Grafana",
        "Prometheus", "Kafka", "Redis",
      ],
    },
    {
      title: "Frontend",
      icon: <FaPaintBrush className="text-pink-600 text-lg" />,
      bg: "from-pink-50 to-pink-100",
      items: [
        "React Hooks", "Component Design", "Responsive UI", "TailwindCSS",
      ],
    },
    {
      title: "Soft Skills",
      icon: <FaUserTie className="text-yellow-600 text-lg" />,
      bg: "from-yellow-50 to-yellow-100",
      items: [
        "Teamwork", "Adaptability", "Critical Thinking", "Problem Solving",
        "Analytical", "Communication", "Mentorship", "Continuous Learning",
        "Collaboration", "Project Management", "Organization", "Meeting Deadlines",
      ],
    },
  ];

  return (
    <div className="h-full overflow-y-auto bg-[#f9fbff] p-5 rounded-md space-y-6">

      {categories.map((cat, index) => (
        <div
          key={index}
          className={`
            bg-linear-to-r ${cat.bg}
            p-4 sm:p-5 rounded-xl shadow-sm border border-gray-200
            hover:shadow-md transition-all duration-200
          `}
        >
          {/* Row Heading */}
          <div className="flex items-center gap-2 mb-3">
            {cat.icon}
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
              {cat.title}
            </h3>
          </div>

          {/* Skill Chips in Horizontal Row (wraps on mobile) */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {cat.items.map((skill, i) => (
              <span
                key={i}
                className="
                  px-3 py-1 text-xs sm:text-sm font-medium
                  bg-white border border-gray-300 rounded-md
                  shadow-sm hover:shadow-md
                  text-gray-700
                  hover:scale-105 transition-transform duration-150
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}

    </div>
  );
}
