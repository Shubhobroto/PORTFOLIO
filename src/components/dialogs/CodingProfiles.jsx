import React from "react";


export default function CodingProfiles() {
  const profiles = [
    {
      name: "Codeforces",
      logo: "/assets/codingProfiles/codeforces.png",
      title: "585+ Problems Solved",
      problems: 585,
      links: [
        { label: "shubh_958", url: "https://codeforces.com/profile/shubh_958" },
        { label: "Shubhobroto", url: "https://codeforces.com/profile/Shubhobroto" },
      ],
    },
    {
      name: "LeetCode",
      logo: "/assets/codingProfiles/leetcode.png",
      title: "503+ Problems Solved",
      problems: 503,
      links: [{ label: "brototypee", url: "https://leetcode.com/u/brototypee/" }],
    },
    {
      name: "CodeChef",
      logo: "/assets/codingProfiles/codechef.png",
      title: "100+ Problems Solved",
      problems: 100,
      links: [{ label: "brototype", url: "https://www.codechef.com/users/brototype" }],
    },
    {
      name: "TakeUForward",
      logo: "/assets/codingProfiles/takeuforward.png",
      title: "133+ Problems Solved",
      problems: 133,
      links: [
        {
          label: "Shubhobroto Mukherjee",
          url: "https://takeuforward.org/plus/profile/Shubhobroto%20Mukherjee",
        },
      ],
    },
    {
      name: "HackerRank",
      logo: "/assets/codingProfiles/hackerrank.png",
      title: "Problem Solving: 6 Stars",
      problems: 163,
      links: [
        { label: "shubhobrotom", url: "https://www.hackerrank.com/profile/shubhobrotom" },
      ],
    },
  ];

  const totalSolved = profiles.reduce((acc, p) => acc + p.problems, 0);

  return (
    <div className="h-full overflow-y-auto bg-[#f9fbff] p-6 rounded-md flex flex-col items-center justify-between space-y-6">
      {/* ---------- Total Solved ---------- */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Total Problems Solved:{" "}
        <span className="text-blue-700 font-bold">{totalSolved}</span>
      </h2>

      {/* ---------- Profile Cards Row ---------- */}
      <div className="flex flex-wrap justify-center gap-5">
        {profiles.map((profile, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 shadow-md rounded-lg p-4 w-48 flex flex-col items-center hover:shadow-lg hover:scale-[1.04] transition-all cursor-default"
          >
            {/* Logo */}
            <img
              src={profile.logo}
              alt={profile.name}
              className="w-12 h-12 object-contain mb-2"
            />

            {/* Platform Info */}
            <h3 className="text-sm font-bold text-gray-800">{profile.name}</h3>
            <p className="text-xs text-gray-600 mt-1">
              {/* <span className="font-semibold">Rating:</span> {profile.rating} */}
            </p>
            <p className="text-xs text-gray-600">{profile.title}</p>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-1 mt-2">
              {profile.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-0.5 bg-blue-500 text-white text-[10px] rounded-md hover:bg-blue-600 transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ---------- Codolio Profile Image ---------- */}
      <a
        href="https://codolio.com/profile/brototype"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full max-w-5xl"
      >
        <img
          src="/assets/codingProfiles/codolio-bg.png"
          alt="Codolio Profile"
          className="rounded-lg shadow-md w-full object-contain hover:scale-[1.01] transition-transform"
        />
      </a>
    </div>
  );
}
