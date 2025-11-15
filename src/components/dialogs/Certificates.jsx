import React from "react";
import { FaFilePdf } from "react-icons/fa";

export default function CertificatesDialog() {
  const certificates = [
    {
      title: "Problem Solving (Intermediate)",
      provider: "HackerRank",
      date: "February 2022",
      logo: "/assets/certificates/problem_solving_intermediate.png",
      pdf: "/assets/certificates/problem_solving_intermediate.pdf",
      description:
        "Certified for advanced problem-solving skills demonstrating logical thinking and algorithmic expertise.",
    },
    {
      title: "Problem Solving (Basic)",
      provider: "HackerRank",
      date: "January 2022",
      logo: "/assets/certificates/problem_solving_basic.png",
      pdf: "/assets/certificates/problem_solving_basic.pdf",
      description:
        "Recognized for foundational programming knowledge and ability to solve beginner-level coding problems.",
    },
  ];

  return (
    <div className="h-full overflow-y-auto bg-[#f9fbff] rounded-md p-6 sm:p-8 flex flex-col items-center space-y-6 sm:space-y-8">
      {/* ---------- Header ---------- */}
      <div className="text-center px-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Certificates of Achievement
        </h2>
        <p className="text-gray-600 text-xs sm:text-sm mt-1">
          Verified recognitions showcasing technical skills and accomplishments.
        </p>
      </div>

      {/* ---------- Certificates List ---------- */}
      <div className="w-full max-w-3xl flex flex-col gap-5 sm:gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white shadow-md border border-gray-200 rounded-xl p-4 sm:p-5 hover:shadow-lg transition"
          >
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
              {/* Left - Logo */}
              <img
                src={cert.logo}
                alt={`${cert.provider} Logo`}
                className="
                  w-14 h-14 sm:w-16 sm:h-16 
                  object-contain shrink-0 mt-1
                "
              />

              {/* Right - Text Section */}
              <div className="flex-1 w-full">
                {/* Title, Provider, and Date Row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 wrap-break-word">
                    {cert.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-gray-500">
                    Date:{" "}
                    <span className="font-medium">{cert.date}</span>
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                  {cert.provider}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed wrap-break-word pr-1">
                  {cert.description}
                </p>

                {/* Button aligned right */}
                <div className="flex sm:justify-end mt-4">
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2 
                      px-3 py-2 sm:px-4 sm:py-2 
                      bg-blue-600 text-white 
                      text-xs sm:text-sm font-medium 
                      rounded-md shadow 
                      hover:bg-blue-700 transition
                    "
                  >
                    <FaFilePdf className="text-white text-sm sm:text-lg" />
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
