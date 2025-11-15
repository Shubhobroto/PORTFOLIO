import React from "react";
import { FaGithub, FaCodeBranch, FaStar, FaRegClock } from "react-icons/fa";

export default function GitHubProfile() {
  const contributionGraph = "/assets/github/contribution-graph.png";
  const avatar = "/assets/github/avvatar.png";
  const profileLink = "https://github.com/Shubhobroto";

  return (
    <div className="h-full overflow-y-auto bg-[#f9fbff] rounded-md p-8 flex flex-col items-center space-y-10">
      {/* ---------- Header Row (Title + Avatar) ---------- */}
      <div className="w-full max-w-5xl flex flex-row flex-wrap justify-center items-center gap-1">
        {/* Left side: Title + Tagline */}
        <div className="flex-1 min-w-[250px]">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <FaGithub className="text-black" /> GitHub Profile
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            Building impactful software, one commit at a time.
          </p>
        </div>

        {/* Right side: Avatar Card */}
        <div className="bg-white border border-gray-200 shadow-md rounded-xl p-3 flex flex-col items-center justify-center w-48 hover:shadow-lg transition-all">
          <img
            src={avatar}
            alt="GitHub Avatar"
            className="w-14 h-14 rounded-full border-2 border-gray-300 object-cover mb-2"
          />
          <h3 className="text-sm font-semibold text-gray-800 text-center">
            Shubho Mukherjee
          </h3>
          <a
            href={profileLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-600 hover:underline flex items-center justify-center gap-1"
          >
            <FaGithub className="text-gray-700" /> @Shubhobroto
          </a>
        </div>
      </div>

      {/* ---------- Contribution Graph ---------- */}
      <div className="w-full max-w-5xl bg-[#0d1117] rounded-lg border border-gray-700 shadow-lg p-4 flex justify-center items-center min-h-[220px]">
        <img
          src={contributionGraph}
          alt="GitHub Contribution Graph"
          className="w-full h-auto object-contain border border-gray-600 rounded-md"
          style={{
            filter: "brightness(1.15) contrast(1.1)",
          }}
        />
      </div>

      {/* ---------- Stat Cards Row ---------- */}
      <div className="w-full max-w-5xl flex flex-wrap justify-center lg:flex-nowrap gap-4 mt-2">
        {/* Card 1 - Repositories */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col items-center justify-center w-56 py-6 hover:shadow-lg hover:scale-[1.03] transition-all">
          <FaCodeBranch className="text-blue-600 text-3xl mb-2" />
          <h3 className="text-sm font-semibold text-gray-800">Repositories</h3>
          <p className="text-sm text-gray-500 mt-1">15+ Projects Hosted</p>
        </div>

        {/* Card 2 - Stars */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col items-center justify-center w-56 py-6 hover:shadow-lg hover:scale-[1.03] transition-all">
          <FaStar className="text-yellow-500 text-3xl mb-2" />
          <h3 className="text-sm font-semibold text-gray-800">Stars Earned</h3>
          <p className="text-sm text-gray-500 mt-1">Across Open Projects</p>
        </div>

        {/* Card 3 - Years Active */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col items-center justify-center w-56 py-6 hover:shadow-lg hover:scale-[1.03] transition-all">
          <FaRegClock className="text-green-600 text-3xl mb-2" />
          <h3 className="text-sm font-semibold text-gray-800">Years Active</h3>
          <p className="text-sm text-gray-500 mt-1">Since 2020</p>
        </div>
      </div>

      {/* ---------- Highlight Section ---------- */}
      <div className="bg-linear-to-r from-blue-100 via-indigo-50 to-purple-100 p-4 rounded-lg shadow-inner border border-white/70 text-center w-full max-w-5xl">
        <p className="text-gray-700 text-sm leading-relaxed">
          <span className="font-semibold text-gray-800">
            ✨ 120,000+ lines of production code
          </span>{" "}
          written across multiple projects — from scalable backend APIs to rich
          React-based visualizations.
        </p>
      </div>

      {/* ---------- About Me Section ---------- */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-5 w-full max-w-5xl space-y-3">
        <h3 className="text-lg font-semibold text-gray-800">About Me</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          I'm a <strong>Full Stack Software Engineer @ Daimler Truck AG</strong>,
          currently contributing to the{" "}
          <strong>Connected Traffic Warnings</strong> project — developing
          real-time systems that enhance driver safety and vehicle intelligence.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          Skilled in <code>Java Spring Boot</code>, <code>PostgreSQL</code>, and{" "}
          <code>React</code>, I love building production-grade systems that
          merge robust backends with dynamic, interactive frontends.
        </p>
      </div>

      {/* ---------- Visit Profile Button ---------- */}
      <a
        href={profileLink}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2.5 bg-black text-white rounded-md shadow-md hover:bg-gray-800 transition-all"
      >
        Visit GitHub Profile
      </a>

      {/* ---------- Footer Quote ---------- */}
      <p className="text-xs text-gray-500 text-center italic">
        “Code is never just code — it’s how we translate ideas into impact.”
      </p>
    </div>
  );
}
