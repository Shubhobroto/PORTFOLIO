import React from "react";

export default function Skills() {
  const skills = [
    // Core Technical
    "Java", "Spring Boot", "Microservices", "PostgreSQL", "MySQL", "React", "JavaScript", "C++", "HTML", "CSS", "REST APIs",
    "System Design", "OOP", "Data Structures", "Algorithms", "Low-Latency Systems", "Multithreading", "Performance Tuning",

    // Cloud + DevOps
    "Docker", "Kubernetes", "Azure", "GCP", "CI/CD", "Git", "Jenkins", "Maven", "Linux", "Shell Scripting", "Gradel",

    // Testing + Quality
    "JUnit", "Mockito", "Integration Testing", "Unit Testing", "API Testing", "Load Testing",

    // Tools + Architecture
    "Postman", "IntelliJ", "VS Code", "Swagger", "Grafana", "Prometheus", "Kafka", "Redis",

    // Frontend
    "React Hooks", "Component Design", "Responsive UI", "TailwindCSS",

    // Soft Skills
    "Teamwork", "Adaptability", "Critical Thinking", "Problem Solving", "Analytical", "Communication", "Mentorship",
    "Continuous Learning", "Collaboration", "Project Management", "Organization", "Meeting Deadlines",
  ];

  const colors = [
    "border-blue-700 text-blue-700",
    "border-sky-600 text-sky-600",
    "border-indigo-700 text-indigo-700",
    "border-cyan-700 text-cyan-700",
    "border-teal-700 text-teal-700",
  ];

  return (
    <div className="h-full overflow-y-auto bg-[#f9fbff] p-4 sm:p-6 rounded-md flex flex-wrap justify-center gap-2 sm:gap-3">
      {skills.map((skill, i) => {
        const color = colors[i % colors.length];
        return (
          <span
            key={i}
            className={`
              px-2 py-1 sm:px-3 sm:py-1.5 
              border ${color} 
              rounded-md font-medium 
              text-xs sm:text-sm 
              whitespace-normal wrap-break-word 
              bg-white/70 backdrop-blur-sm 
              shadow-sm 
              hover:scale-105 transition-transform duration-150 ease-out
            `}
          >
            {skill}
          </span>
        );
      })}
    </div>
  );
}
