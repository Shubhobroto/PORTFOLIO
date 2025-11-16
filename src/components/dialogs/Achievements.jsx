import React from "react";
import { FaMedal, FaAward, FaBuilding } from "react-icons/fa";
import { SiCodeforces, SiHackerrank } from "react-icons/si";

export default function Achievements() {
  const daimlerCertificates = [
    {
      title:
        "ACE - Trailblazer Award — Connected Traffic Warnings as SW-only Feature (eActros 600) — Awarded by MD & CEO, Daimler Truck India",
      file: "/assets/certificates/ACE-Trailblazer-Award.png",
      thumbnail: "/assets/certificates/ACE-Trailblazer-Award.png",
    },
    {
      title:
        "Consistent Effort & Reliability — Significant Contribution in Project Deliverables",
      file: "/assets/certificates/Consistent-Effort-Deliverables.png",
      thumbnail: "/assets/certificates/Consistent-Effort-Deliverables.png",
    },
    {
      title:
        "Consistent Effort & Reliability — Demonstrated Dedication, Adaptability, and Complex Challenge Delivery",
      file: "/assets/certificates/Consistent-Effort-Dedication.jpg",
      thumbnail: "/assets/certificates/Consistent-Effort-Dedication.jpg",
    },
  ];

  const otherCertificates = [
    {
      title: "Codeforces Educational Round 109 — Global Rank 293",
      file: "/assets/certificates/codeforces-edu109.png",
      thumbnail: "/assets/certificates/codeforces-edu109.png",
    },
    {
      title: "Hackerrank — 6 Star in Problem Solving",
      file: "/assets/certificates/hackerrank-6star.png",
      thumbnail: "/assets/certificates/hackerrank-6star.png",
    },
    {
      title: "Certificate of Appreciation - WINNER — InOut Hackathon",
      file: "/assets/certificates/InOut-Certificate.pdf",
      thumbnail: "/assets/certificates/InOut-Certificate-thumb.png",
    },
    {
      title: "Certificate of Appreciation - WINNER — PES Hackathon",
      file: "/assets/certificates/PES-certificate.pdf",
      thumbnail: "/assets/certificates/PES-certificate-thumb.png",
    },
  ];

  const Card = ({ cert }) => (
    <div
      className="bg-white border border-gray-200 shadow-sm rounded-xl flex items-center p-3 
                 hover:shadow-md hover:scale-[1.01] transition-transform cursor-pointer"
      onClick={() => window.open(cert.file, "_blank")}
    >
      {/* Thumbnail - Fully responsive */}
      <div
        className="
        shrink-0 
        w-24 h-20 
        sm:w-32 sm:h-24 
        md:w-40 md:h-28 
        overflow-hidden 
        rounded-md border border-gray-100 bg-gray-50
      "
      >
        <img
          src={cert.thumbnail || cert.file}
          alt={cert.title}
          className="w-full h-full object-contain"
          onError={(e) =>
            (e.target.src = "/assets/certificates/fallback.png")
          }
        />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center pl-4 flex-1">
        <p
          className="
          text-sm sm:text-[15px] 
          font-semibold text-gray-800 
          leading-tight wrap-break-word
        "
        >
          {cert.title}
        </p>
        <p className="text-xs text-gray-500 mt-1">Click to view certificate</p>
      </div>
    </div>
  );

  return (
    <div className="h-full overflow-y-auto bg-[#f9fbff] p-6 rounded-md space-y-10">

      {/* -------- Highlights -------- */}
      <div className="animate-fadeIn">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4 border-b border-gray-300 pb-2">
          <FaMedal className="text-yellow-500" /> Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Codeforces */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start gap-3 hover:shadow-md transition-all">
            <div className="text-blue-600 text-2xl">
              <SiCodeforces />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800">
                Codeforces Max Rating
              </h3>
              <p className="text-sm text-gray-600">1767</p>
              <p className="text-xs text-gray-500 mt-1">
                Best Global Rank 293 in Educational Round 109
              </p>
            </div>
          </div>

          {/* Hackerrank */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-start gap-3 hover:shadow-md transition-all">
            <div className="text-green-600 text-2xl">
              <SiHackerrank />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800">
                Hackerrank Problem Solving
              </h3>
              <p className="text-sm text-gray-600">6-Star Badge</p>
              <p className="text-xs text-gray-500 mt-1">
                Recognized for excellence in algorithmic challenges
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* -------- Daimler Achievements -------- */}
      <div className="animate-fadeIn">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4 border-b border-gray-300 pb-2">
          <FaBuilding className="text-[#002D62]" /> Achievements in Daimler Truck
        </h2>

        <div className="space-y-4">
          {daimlerCertificates.map((cert, i) => (
            <Card key={i} cert={cert} />
          ))}
        </div>
      </div>

      {/* -------- Other Certificates -------- */}
      <div className="animate-fadeIn">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-4 border-b border-gray-300 pb-2">
          <FaAward className="text-orange-500" /> Certificates of Recognition
        </h2>

        <div className="space-y-4">
          {otherCertificates.map((cert, i) => (
            <Card key={i} cert={cert} />
          ))}
        </div>
      </div>

      {/* Fade Animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
