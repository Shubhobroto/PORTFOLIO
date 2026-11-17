import React from "react";
import {
  FaCode,
  FaServer,
  FaStream,
  FaDatabase,
  FaCloud,
  FaChartLine,
  FaVial,
  FaPaintBrush,
  FaTools,
  FaUserTie,
} from "react-icons/fa";

export default function Skills() {
  const categories = [
    {
      title: "Languages",
      icon: <FaCode className="text-blue-600 text-lg" />,
      bg: "from-blue-50 to-blue-100",
      items: ["Java", "JavaScript", "C++", "SQL", "HTML", "CSS"],
    },
    {
      title: "Backend & Architecture",
      icon: <FaServer className="text-sky-600 text-lg" />,
      bg: "from-sky-50 to-sky-100",
      items: [
        "Spring Boot", "Microservices", "REST APIs", "System Design",
        "Distributed Systems", "Event-Driven Architecture", "Concurrency & Multithreading",
        "Low-Latency Systems", "Performance Tuning", "OOP", "Data Structures",
        "Algorithms", "NodeJS",
      ],
    },
    {
      title: "Messaging & Reliability Patterns",
      icon: <FaStream className="text-teal-600 text-lg" />,
      bg: "from-teal-50 to-teal-100",
      items: [
        "Kafka", "RabbitMQ", "Azure Event Hub", "WebSockets", "Saga Pattern",
        "Transactional Outbox", "Idempotent Consumers", "Retry & Backoff",
        "Dead-Letter Queues", "Compare-and-Set Updates",
      ],
    },
    {
      title: "Data & Geospatial",
      icon: <FaDatabase className="text-emerald-600 text-lg" />,
      bg: "from-emerald-50 to-emerald-100",
      items: [
        "PostgreSQL", "PostGIS", "MySQL", "Redis (GEO, sorted sets)", "Flyway",
        "SQL Optimization", "Spatial Indexing", "OpenStreetMap", "Planetiler",
        "MapLibre",
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud className="text-indigo-600 text-lg" />,
      bg: "from-indigo-50 to-indigo-100",
      items: [
        "Docker", "Kubernetes", "Azure (Event Hub, API Management, AKS, Blob Storage)",
        "GCP", "CI/CD", "Jenkins", "Git", "Maven", "Gradle", "Linux",
        "Shell Scripting", "npm",
      ],
    },
    {
      title: "Observability",
      icon: <FaChartLine className="text-orange-600 text-lg" />,
      bg: "from-orange-50 to-orange-100",
      items: ["Prometheus", "Grafana", "Micrometer", "Metrics & Alerting", "Load Testing"],
    },
    {
      title: "Testing & Quality",
      icon: <FaVial className="text-purple-600 text-lg" />,
      bg: "from-purple-50 to-purple-100",
      items: [
        "JUnit", "Mockito", "Unit Testing", "Integration Testing", "API Testing",
        "Load Testing",
      ],
    },
    {
      title: "Frontend",
      icon: <FaPaintBrush className="text-pink-600 text-lg" />,
      bg: "from-pink-50 to-pink-100",
      items: [
        "React", "React Hooks", "MapLibre GL", "Component Design",
        "Responsive UI", "TailwindCSS",
      ],
    },
    {
      title: "Tools",
      icon: <FaTools className="text-green-600 text-lg" />,
      bg: "from-green-50 to-green-100",
      items: ["Postman", "Swagger", "IntelliJ", "VS Code"],
    },
    {
      title: "Soft Skills",
      icon: <FaUserTie className="text-yellow-600 text-lg" />,
      bg: "from-yellow-50 to-yellow-100",
      items: [
        "Ownership", "Teamwork", "Adaptability", "Critical Thinking", "Problem Solving",
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
