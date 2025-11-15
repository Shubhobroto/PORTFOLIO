// App.jsx (ANIMATED + RESPONSIVE)
import React, { useRef, useState, useEffect } from "react";
import {
  FaUser,
  FaTools,
  FaUsers,
  FaFolderOpen,
  FaGraduationCap,
  FaMedal,
  FaHeart,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaArrowDown,
  FaPaperPlane,
} from "react-icons/fa";
import { SiGithub, SiMedium } from "react-icons/si";
import { HiShieldCheck } from "react-icons/hi2";

import AnimatedDialog from "./components/AnimatedDialog";
import WorkExperience from "./components/dialogs/WorkExperience";
import Skills from "./components/dialogs/Skills";
import Education from "./components/dialogs/Education";
import Achievements from "./components/dialogs/Achievements";
import Extracurricular from "./components/dialogs/Extracurricular";
import CodingProfiles from "./components/dialogs/CodingProfiles";
import GitHubProfile from "./components/dialogs/GitHubProfile";
import Certificates from "./components/dialogs/Certificates";
import ContactForm from "./components/dialogs/ContactForm";
import Me from "./components/dialogs/Me";
import Projects from "./components/dialogs/Projects";

export default function App() {
  const [dialogData, setDialogData] = useState(null);

  // 🔥 ADDED — trigger animation only on first load
  const [firstLoad, setFirstLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setFirstLoad(false), 900);
    return () => clearTimeout(timer);
  }, []);

  function openDialogFromElement(el, title = "Details", children = null) {
    if (!el || !el.getBoundingClientRect) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const side = centerX < window.innerWidth / 2 ? "left" : "right";
    setDialogData({ originRect: rect, title, side, children });
  }

  return (
    <div className="min-h-screen bg-[#b7d7ff] flex justify-center items-center font-[DM Sans]">
      {/* 🔥 ADDED ANIMATION KEYFRAMES */}
      <style>{`
        @keyframes bubble {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }

        .bubble-card {
          animation: bubble 0.5s infinite ease-in-out;
          transition: transform 0.25s ease, background 0.2s ease;
        }

        .bubble-card:hover {
          animation-play-state: paused;
          transform: scale(1.15);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
        }

        .bubble-only {
          animation: bubble 0.6s infinite ease-in-out;
          transition: none !important;
        }

        .bubble-only:hover {
          transform: none !important;
          animation-play-state: running !important;
        }

        /* 🔥 FIRST LOAD ANIMATION */
        @keyframes fadeSlideIn {
          0% { opacity: 0; transform: translateY(20px) scale(0.97); }
          60% { opacity: 1; transform: translateY(0) scale(1.03); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .fade-slide-in {
          animation: fadeSlideIn 0.7s ease-out forwards;
        }
      `}</style>

      {/* ===== DESKTOP / LARGE SCREENS ===== */}
      <div
        className="
          hidden lg:flex
          w-[calc(100vw-150px)] h-[calc(100vh-160px)]
          bg-white/30 backdrop-blur-md border border-white/50 rounded-xl
          shadow-lg p-6 gap-6
          ${firstLoad ? 'fade-slide-in' : ''}
        "
      >
        {/* ---------------- Left Column ---------------- */}
        <div className="flex-1 flex flex-col gap-5">
          <div className="flex gap-5 flex-1">
            <Box
              firstLoad={firstLoad}
              icon={<FaUser />}
              label="Me"
              onClick={(el) =>
                openDialogFromElement(
                  el,
                  "Me",
                  <Me openDialogFromElement={openDialogFromElement} />
                )
              }
            />
            <Box
              firstLoad={firstLoad}
              icon={<FaTools />}
              label="Skills"
              onClick={(el) => openDialogFromElement(el, "Skills", <Skills />)}
            />
          </div>

          <Box
            firstLoad={firstLoad}
            icon={<FaUsers />}
            label="Work Experience"
            onClick={(el) =>
              openDialogFromElement(el, "Wrork Experience", <WorkExperience />)
            }
          />

          <div className="flex gap-5 flex-1">
            <Box
              firstLoad={firstLoad}
              icon={<FaFolderOpen />}
              label="Projects"
              onClick={(el) =>
                openDialogFromElement(el, "Projects", <Projects />)
              }
            />
            <Box
              firstLoad={firstLoad}
              icon={<FaGraduationCap />}
              label="Education"
              onClick={(el) =>
                openDialogFromElement(el, "Education", <Education />)
              }
            />
          </div>

          <div className="flex gap-5 flex-1">
            <Box
              firstLoad={firstLoad}
              icon={<FaMedal />}
              label="Achievements"
              onClick={(el) =>
                openDialogFromElement(el, "Achievements", <Achievements />)
              }
            />
            <Box
              firstLoad={firstLoad}
              icon={<FaHeart />}
              label="Extracurricular"
              onClick={(el) =>
                openDialogFromElement(
                  el,
                  "Extracurricular",
                  <Extracurricular />
                )
              }
            />
          </div>
        </div>

        {/* ---------------- Center Column ---------------- */}
        <div
          className={`flex-1 flex flex-col gap-5 ${
            firstLoad ? "fade-slide-in" : ""
          }`}
        >
          <div className="flex-3 bubble-only bg-[rgba(210,230,255,0.45)] backdrop-blur-xl border border-white/50 rounded-xl shadow-md flex items-center justify-center overflow-hidden p-12">
            <img
              src="/assets/shubho.png"
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>

          <div className="bubble-only flex-1 bg-[rgba(210,230,255,0.45)] backdrop-blur-xl border border-white/50 rounded-xl shadow-md flex flex-col items-center justify-center text-black font-semibold tracking-wide">
            <span className="text-xl font-bold">Shubhobroto Mukherjee</span>
            <span className="text-md opacity-80">
              Software Engineer @Daimler Trucks
            </span>
          </div>
        </div>

        {/* ---------------- Right Column ---------------- */}
        <div
          className={`flex-1 flex flex-col gap-5 ${
            firstLoad ? "fade-slide-in" : ""
          }`}
        >
          <RightWideBox
            firstLoad={firstLoad}
            icon="{}"
            label="Coding Profiles"
            onClick={(el) =>
              openDialogFromElement(el, "Coding Profiles", <CodingProfiles />)
            }
          />

          <RightWideBox
            firstLoad={firstLoad}
            icon={<SiGithub className="text-3xl" />}
            label="GitHub Profile"
            onClick={(el) =>
              openDialogFromElement(el, "GitHub Profile", <GitHubProfile />)
            }
          />

          <div className="flex gap-5 flex-1">
            <Box
              firstLoad={firstLoad}
              icon={<HiShieldCheck className="text-2xl text-black" />}
              label="Certificates"
              onClick={(el) =>
                openDialogFromElement(el, "Certificates", <Certificates />)
              }
            />

            <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-3">
              <MiniIconBox
                firstLoad={firstLoad}
                icon={<FaLinkedin />}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/shubho-mukherjee-529209193/",
                    "_blank"
                  )
                }
              />

              <MiniIconBox
                firstLoad={firstLoad}
                icon={<SiMedium className="text-black text-[28px]" />}
                onClick={() =>
                  window.open("https://medium.com/@shubhobrotom", "_blank")
                }
              />

              <MiniIconBox
                firstLoad={firstLoad}
                icon={<FaEnvelope />}
                onClick={() => {
                  const gmailComposeUrl =
                    "https://mail.google.com/mail/?view=cm&fs=1&to=shubhobrotom@gmail.com&su=Let's%20Connect&body=Hi%20Shubho,";
                  window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
                }}
              />

              <MiniIconBox
                firstLoad={firstLoad}
                icon={<FaTwitter />}
                onClick={() =>
                  window.open("https://x.com/ShubhoMukherje8", "_blank")
                }
              />
            </div>
          </div>

          <div className="flex gap-5 flex-1">
            <Box
              firstLoad={firstLoad}
              icon={<FaArrowDown />}
              label="Resume"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/assets/resume/shubhoResume.pdf";
                link.download = "ShubhoMukherjee_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            />

            <Box
              firstLoad={firstLoad}
              icon={<FaPaperPlane className="text-2xl" />}
              label="Contact"
              onClick={(el) =>
                openDialogFromElement(el, "Contact", <ContactForm />)
              }
            />
          </div>
        </div>
      </div>

      {/* ===== MOBILE / TABLET LAYOUT ===== */}
      <div
        className={`flex lg:hidden justify-center items-start w-full py-6 px-3 ${
          firstLoad ? "fade-slide-in" : ""
        }`}
      >
        <div className="w-full max-w-md mx-auto bg-white/30 backdrop-blur-md border border-white/50 rounded-xl shadow-lg p-4 flex flex-col gap-4">
          {/* Row 0 */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bubble-only bg-[rgba(210,230,255,0.55)] rounded-xl border border-white/60 shadow-md flex items-center justify-center">
              <img
                src="/assets/shubho.png"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>

            <div className="col-span-2 bubble-only bg-[rgba(210,230,255,0.55)] rounded-xl border border-white/60 shadow-md flex flex-col justify-center items-center text-center px-2">
              <span className="text-base font-bold text-gray-900">
                Shubhobroto Mukherjee
              </span>
              <span className="text-xs text-gray-700 mt-1">
                Software Engineer @Daimler Trucks
              </span>
            </div>
          </div>

          {/* Mobile grids below — unchanged except animation injected */}
          <div className="grid grid-cols-3 gap-3">
            <MobileBox
              firstLoad={firstLoad}
              icon={<FaUser />}
              label="Me"
              onClick={(el) =>
                openDialogFromElement(
                  el,
                  "Me",
                  <Me openDialogFromElement={openDialogFromElement} />
                )
              }
            />
            <MobileBox
              firstLoad={firstLoad}
              icon={<FaFolderOpen />}
              label="Projects"
              onClick={(el) =>
                openDialogFromElement(el, "Projects", <Projects />)
              }
            />
            <MobileBox
              firstLoad={firstLoad}
              icon={<FaTools />}
              label="Skills"
              onClick={(el) => openDialogFromElement(el, "Skills", <Skills />)}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <MobileBox
              firstLoad={firstLoad}
              icon={<FaGraduationCap />}
              label="Education"
              onClick={(el) =>
                openDialogFromElement(el, "Education", <Education />)
              }
            />
            <MobileBox
              firstLoad={firstLoad}
              icon={<FaUsers />}
              label="Work Experience"
              onClick={(el) =>
                openDialogFromElement(
                  el,
                  "Wrork Experience",
                  <WorkExperience />
                )
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <MobileBox
              firstLoad={firstLoad}
              icon={<FaMedal />}
              label="Achievements"
              onClick={(el) =>
                openDialogFromElement(el, "Achievements", <Achievements />)
              }
            />
            <MobileBox
              firstLoad={firstLoad}
              icon={<FaHeart />}
              label="Extracurricular"
              onClick={(el) =>
                openDialogFromElement(
                  el,
                  "Extracurricular",
                  <Extracurricular />
                )
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <MobileBox
              firstLoad={firstLoad}
              icon={<span className="text-xl">{`{}`}</span>}
              label="Coding Profiles"
              onClick={(el) =>
                openDialogFromElement(el, "Coding Profiles", <CodingProfiles />)
              }
            />
            <MobileBox
              firstLoad={firstLoad}
              icon={<SiGithub className="text-xl" />}
              label="GitHub Profile"
              onClick={(el) =>
                openDialogFromElement(el, "GitHub Profile", <GitHubProfile />)
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <MobileBox
              firstLoad={firstLoad}
              icon={<HiShieldCheck className="text-xl" />}
              label="Certificates"
              onClick={(el) =>
                openDialogFromElement(el, "Certificates", <Certificates />)
              }
            />
            <MobileBox
              firstLoad={firstLoad}
              icon={<FaArrowDown className="text-xl" />}
              label="Resume"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/assets/resume/shubhoResume.pdf";
                link.download = "ShubhoMukherjee_Resume.pdf";
                link.click();
              }}
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div
              className="col-span-2 
                bg-[rgba(210,230,255,0.55)] 
                rounded-xl border border-white/60 shadow-md 
                p-2 

                grid grid-cols-2 gap-2
                auto-rows-[1fr]

                /* ENSURES PERFECT SQUARE RATIO PER CELL */
                *:aspect-square

                /* Centers the icons nicely */
                place-items-center
                "
            >
              <MiniIconBox
                firstLoad={firstLoad}
                icon={<FaLinkedin />}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/shubho-mukherjee-529209193/",
                    "_blank"
                  )
                }
              />
              <MiniIconBox
                firstLoad={firstLoad}
                icon={<SiMedium className="text-black text-[22px]" />}
                onClick={() =>
                  window.open("https://medium.com/@shubhobrotom", "_blank")
                }
              />
              <MiniIconBox
                firstLoad={firstLoad}
                icon={<FaEnvelope />}
                onClick={() => window.open("mailto:shubhobrotom@gmail.com")}
              />
              <MiniIconBox
                firstLoad={firstLoad}
                icon={<FaTwitter />}
                onClick={() =>
                  window.open("https://x.com/ShubhoMukherje8", "_blank")
                }
              />
            </div>

            <MobileBox
              firstLoad={firstLoad}
              icon={<FaPaperPlane className="text-xl" />}
              label="Contact"
              onClick={(el) =>
                openDialogFromElement(el, "Contact", <ContactForm />)
              }
            />
          </div>
        </div>
      </div>

      {dialogData?.originRect && (
        <AnimatedDialog
          originRect={dialogData.originRect}
          isOpen={true}
          title={dialogData.title}
          side={dialogData.side}
          onClose={() => setTimeout(() => setDialogData(null), 80)}
        >
          {dialogData.children ?? (
            <PlaceholderContent title={dialogData.title} />
          )}
        </AnimatedDialog>
      )}
    </div>
  );
}

/* ---------- Reusable Components ---------- */

function Box({ icon, label, onClick, firstLoad }) {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      onClick={() => onClick && onClick(ref.current)}
      className={`
        flex-1 bubble-card bg-[rgba(210,230,255,0.50)] cursor-pointer 
        backdrop-blur-xl border border-white/50 rounded-xl shadow-md 
        flex flex-col items-center justify-center text-black font-medium gap-2
        ${firstLoad ? "fade-slide-in" : ""}
      `}
    >
      <span className="text-3xl">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function RightWideBox({ icon, label, onClick, firstLoad }) {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      onClick={() => onClick && onClick(ref.current)}
      className={`
        flex-1 bubble-card bg-[rgba(210,230,255,0.50)] cursor-pointer 
        backdrop-blur-xl border border-white/50 rounded-xl shadow-md 
        flex flex-col items-center justify-center text-black font-medium gap-2
        ${firstLoad ? "fade-slide-in" : ""}
      `}
    >
      <div className="text-3xl">{icon}</div>
      <span>{label}</span>
    </div>
  );
}

function MiniIconBox({ icon, onClick, firstLoad }) {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      onClick={() => onClick && onClick(ref.current)}
      className={`
        bubble-card bg-[rgba(210,230,255,0.55)] cursor-pointer 
        backdrop-blur-xl border border-white/50 rounded-xl shadow-md
        flex items-center justify-center text-black 
        text-xl w-14 h-14 sm:w-16 sm:h-16 lg:w-auto lg:h-auto lg:px-4 lg:py-3
        ${firstLoad ? "fade-slide-in" : ""}
      `}
    >
      {icon}
    </div>
  );
}

function MobileBox({ icon, label, onClick, firstLoad }) {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      onClick={() => onClick && onClick(ref.current)}
      className={`
        bubble-card bg-[rgba(210,230,255,0.55)] cursor-pointer 
        backdrop-blur-xl border border-white/60 rounded-xl shadow-md 
        flex flex-col items-center justify-center 
        text-black text-xs font-medium gap-1 py-3
        ${firstLoad ? "fade-slide-in" : ""}
      `}
    >
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

/* ---------- Dialog Placeholder Content ---------- */
function PlaceholderContent({ title }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
    </div>
  );
}
