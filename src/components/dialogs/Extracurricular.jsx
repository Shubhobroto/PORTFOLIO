import React from "react";
import {
  FaRunning,
  FaFutbol,
  FaMicrophoneAlt,
  FaBookOpen,
} from "react-icons/fa";

export default function Extracurricular() {
  const sections = [
    {
      title: "Academic Achievements",
      icon: <FaBookOpen className="text-blue-600 text-lg" />,
      items: [
        {
          title:
            "National Level Talent Search Examination 2015 — AIR 3012, 84%",
          file: "/assets/extracurricular/National-Talent-Search-2015.pdf",
          thumbnail: "/assets/extracurricular/National-Talent-Search-2015.png",
          date: "2015",
        },
        {
          title: "Participation — National Science Olympiad 2015",
          file: "/assets/extracurricular/National-Science-Olympiad-2015.pdf",
          thumbnail:
            "/assets/extracurricular/National-Science-Olympiad-2015.png",
          date: "2015",
        },
        {
          title: "Participation — International Maths Olympiad 2013",
          file: "/assets/extracurricular/Maths-Olympiad-2013.pdf",
          thumbnail: "/assets/extracurricular/Maths-Olympiad-2013.png",
          date: "2013",
        },
        {
          title: "Participation — International Maths Olympiad 2012",
          file: "/assets/extracurricular/Maths-Olympiad-2012.pdf",
          thumbnail: "/assets/extracurricular/Maths-Olympiad-2012.png",
          date: "2012",
        },
      ],
    },
    {
      title: "Sports Events",
      icon: <FaFutbol className="text-green-600 text-lg" />,
      items: [
        {
          title: "Runners-up — Inter House Badminton Tournament",
          file: "/assets/extracurricular/InHouse-Badminton-2018.pdf",
          thumbnail: "/assets/extracurricular/InHouse-Badminton-2018.png",
          date: "16.11.2018",
        },
        {
          title: "Third — Football Tournament Inter House 2015",
          file: "/assets/extracurricular/Football-Tournament-2015.pdf",
          thumbnail: "/assets/extracurricular/Football-Tournament-2015.png",
          date: "2015",
        },
      ],
    },
    {
      title: "Athletics",
      icon: <FaRunning className="text-orange-600 text-lg" />,
      items: [
        {
          title: "4x100m Relay — Inter House Athletic Meet (Second)",
          file: "/assets/extracurricular/Relay-2011.pdf",
          thumbnail: "/assets/extracurricular/Relay-2011.png",
          date: "2011",
        },
        {
          title: "4x100m Relay — Inter House Athletic Meet (Third)",
          file: "/assets/extracurricular/Relay-2010.pdf",
          thumbnail: "/assets/extracurricular/Relay-2010.png",
          date: "2010",
        },
      ],
    },
    {
      title: "Cultural Activities",
      icon: <FaMicrophoneAlt className="text-purple-600 text-lg" />,
      items: [
        {
          title: "Josephest Qawwali Competition — Third Place",
          file: "/assets/extracurricular/Josephest-Qawwali-2015.pdf",
          thumbnail: "/assets/extracurricular/Josephest-Qawwali-2015.png",
          date: "03.10.2015",
        },
        {
          title: "Josephest Group Dance — Third Place",
          file: "/assets/extracurricular/Group-Dance-2015.pdf",
          thumbnail: "/assets/extracurricular/Group-Dance-2015.png",
          date: "2015",
        },
        {
          title: "Solo Singing Inter House — Outstanding Performance",
          file: "/assets/extracurricular/Solo-Singing-2010.pdf",
          thumbnail: "/assets/extracurricular/Solo-Singing-2010.png",
          date: "2010",
        },
      ],
    },
  ];

  // Ensure descending order
  sections.forEach((section) => {
    section.items.sort((a, b) => new Date(b.date) - new Date(a.date));
  });

  return (
    <div className="h-full overflow-y-auto bg-[#f9fbff] p-6 sm:p-8 rounded-md space-y-10">
      {sections.map((section, sIndex) => (
        <div key={sIndex} className="space-y-4">
          {/* ---- Section Heading ---- */}
          <div className="flex items-center gap-2 border-b pb-2 border-gray-300">
            {section.icon}
            <h2 className="text-base sm:text-lg font-semibold text-gray-800">
              {section.title}
            </h2>
          </div>

          {/* ---- Certificates List ---- */}
          <div className="space-y-4">
            {section.items.map((cert, i) => (
              <div
                key={i}
                className="
                  bg-white border border-gray-200 shadow-sm rounded-xl 
                  flex flex-col sm:flex-row items-center 
                  p-3 sm:p-4 
                  hover:shadow-md hover:scale-[1.01] 
                  transition-transform cursor-pointer
                "
                onClick={() => window.open(cert.file, "_blank")}
              >
                {/* Left Image */}
                <div
                  className="
                    w-full sm:w-40 
                    h-32 sm:h-28 
                    shrink-0 
                    overflow-hidden rounded-md 
                    border border-gray-100 bg-gray-50
                  "
                >
                  <img
                    src={cert.thumbnail}
                    alt={cert.title}
                    className="w-full h-full object-contain"
                    onError={(e) =>
                      (e.target.src = "/assets/extracurricular/fallback.png")
                    }
                  />
                </div>

                {/* Right Text */}
                <div className="flex flex-col justify-center sm:pl-4 mt-3 sm:mt-0 flex-1 w-full">
                  <p className="text-sm sm:text-[15px] font-semibold text-gray-800 leading-tight wrap-break-word">
                    {cert.title}
                  </p>
                  <p className="text-xs sm:text-[13px] text-gray-500 mt-1">
                    {cert.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
