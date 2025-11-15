import React from "react";
import sjsLogo from "/assets/education/sjs.png";
import cuLogo from "/assets/education/cu.png";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology",
      institution: "CHRIST (Deemed to be University), Bangalore",
      specialization: "Computer Science and Engineering",
      result: "8.72 CGPA",
      year: "2019 - 2023",
      logo: cuLogo,
      icon: <FaGraduationCap />,
    },
    {
      degree: "Intermediate",
      institution: "St. Joseph's Senior Secondary School, Rihand Nagar",
      specialization: "PCM with Computer Science",
      result: "83.2%",
      year: "2019",
      logo: sjsLogo,
      icon: <FaSchool />,
    },
    {
      degree: "High School",
      institution: "St. Joseph's Senior Secondary School, Rihand Nagar",
      specialization: "",
      result: "9.2 CGPA",
      year: "2017",
      logo: sjsLogo,
      icon: <FaSchool />,
    },
  ];

  return (
    <div className="h-full overflow-y-auto bg-[#f9fbff] p-6 rounded-md">
      <div className="space-y-6">
        {education.map((edu, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-white shadow-md rounded-lg p-5 border border-gray-200 hover:shadow-lg transition-all duration-200"
          >
            {/* Institution Logo - Rectangular */}
            <div className="shrink-0 w-16 h-16 flex items-center justify-center bg-gray-50 border border-gray-200 rounded-md overflow-hidden">
              <img
                src={edu.logo}
                alt={`${edu.institution} logo`}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Education Content */}
            <div className="flex-1">
              <h3 className="text-base font-semibold text-gray-800">
                {edu.degree}
              </h3>
              <p className="text-sm text-gray-600 font-medium">
                {edu.institution}
              </p>

              {edu.specialization && (
                <p className="text-sm text-gray-700 mt-1">
                  {edu.specialization}
                </p>
              )}

              <div className="flex justify-between items-center mt-2">
                <p className="text-sm text-gray-700 font-medium">
                  {edu.result}
                </p>
                <p className="text-xs text-gray-500">{edu.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
