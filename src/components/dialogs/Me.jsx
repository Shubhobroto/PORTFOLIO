import React, { useRef } from "react";
import WorkExperience from "./WorkExperience";
import ContactForm from "./ContactForm";
import Projects from "./Projects";

export default function Me({ openDialogFromElement }) {
  const cards = [
    {
      title: "Location",
      icon: "📍",
      description: "Bengaluru, India",
      clickable: false,
    },
    {
      title: "Languages",
      icon: "🌐",
      description: "English, Hindi, Bengali",
      clickable: false,
    },
    {
      title: "Work Experience",
      icon: "💼",
      description:
        "I build scalable, cloud-native systems with a focus on real-time data, distributed design, performance tuning, and end-to-end ownership, from ingestion to the map UI.",
      dialogComponent: <WorkExperience />,
      clickable: true,
    },
    {
      title: "Projects",
      icon: "💻",
      description:
        "System-design projects (real-time ride matching, saga-based order processing with Kafka) alongside earlier full-stack builds.",
      dialogComponent: <Projects />,
      clickable: true,
    },
    {
      title: "Contact",
      icon: "✉️",
      description:
        "Let’s collaborate or discuss an opportunity. You can reach out through the contact section.",
      dialogComponent: <ContactForm />,
      clickable: true,
    },
  ];

  return (
    <div className="h-full overflow-y-auto bg-[#f9fbff] p-4 sm:p-6 rounded-md flex flex-col items-center space-y-10">
      
      {/* ----------- Intro Section ----------- */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 w-full max-w-5xl">

        {/* Text */}
        <div className="flex-1 space-y-3 text-center lg:text-left px-2">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            Hey! I'm Shubhobroto Mukherjee 👋
          </h1>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
            I’m a Software Engineer who builds real-time, event-driven backend
            systems and the maps and dashboards on top of them. At Daimler Truck
            I own the live truck traffic feature, from Event Hub ingestion and
            map matching to the React + MapLibre view. I care about performance,
            correctness under retries and failures, and measuring before
            optimizing.
          </p>
        </div>

        {/* Avatar */}
        <div className="shrink-0 flex justify-center items-center">
          <div className="relative">
            <img
              src="/assets/github/avvatar.png"
              alt="Shubhobroto Mukherjee"
              className="
                w-36 h-36 
                sm:w-44 sm:h-44 
                lg:w-52 lg:h-52 
                object-cover rounded-full shadow-lg 
                border-4 border-white 
                hover:scale-105 transition-transform
              "
            />
            <div className="absolute inset-0 rounded-full bg-linear-to-tr from-blue-300/40 to-transparent blur-md -z-10"></div>
          </div>
        </div>
      </div>

      {/* ----------- Cards Section ----------- */}
      <div className="flex flex-col items-center w-full max-w-4xl space-y-6">

        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-5">
          {cards.slice(0, 2).map((card, index) => (
            <Card
              key={index}
              card={card}
              openDialogFromElement={openDialogFromElement}
            />
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center gap-5">
          {cards.slice(2, 4).map((card, index) => (
            <Card
              key={index + 2}
              card={card}
              openDialogFromElement={openDialogFromElement}
            />
          ))}
        </div>

        {/* Row 3 */}
        <div className="flex justify-center">
          <Card card={cards[4]} openDialogFromElement={openDialogFromElement} />
        </div>
      </div>
    </div>
  );
}

/* ---------- Card Component ---------- */
function Card({ card, openDialogFromElement }) {
  const ref = useRef(null);

  const handleClick = () => {
    if (card.clickable && card.dialogComponent && openDialogFromElement) {
      openDialogFromElement(ref.current, card.title, card.dialogComponent);
    }
  };

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={`
        bg-white border border-gray-200 shadow-md rounded-lg 
        p-4 sm:p-5 
        w-full max-w-xs 
        flex flex-col items-center text-center
        transition-all duration-200
        ${card.clickable 
          ? "cursor-pointer hover:scale-[1.05] hover:shadow-lg"
          : "hover:scale-[1.03]"
        }
      `}
    >
      <div className="text-3xl mb-1">{card.icon}</div>

      <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
        {card.title}
      </h3>

      <p className="text-xs sm:text-sm text-gray-600 leading-snug wrap-break-word">
        {card.description}
      </p>
    </div>
  );
}
