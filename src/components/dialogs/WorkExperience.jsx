import React from "react";
import codeSpeedyLogo from "/assets/WorkExperience/codeSpeedyLogo.png";
import girlCodeItLogo from "/assets/WorkExperience/girlCodeItLogo.png";
import doSelectLogo from "/assets/WorkExperience/doSelectLogo.png";
import prepJunctionLogo from "/assets/WorkExperience/prepJunction.png";
import daimlerLogo from "/assets/WorkExperience/daimlerLogo.png";

export default function WorkExperience() {
  const experiences = [
    {
      company: "Daimler Truck Innovation Center India",
      role: "Software Engineer",
      duration: "August 2023 - Present",
      logo: daimlerLogo,
      details: [
        "Built the live truck traffic feature end to end: truck GPS events from Azure Event Hub are matched to road segments, aggregated per road and direction in a Redis-compatible store (Dragonfly), and served as GeoJSON to a React + MapLibre map that colours every road by congestion.",
        "Handled about 114 map-matching lookups per second at peak using batched requests (100 points per call), bounded concurrency, strict timeouts, retry with jittered backoff on rate limits, and an in-memory road cache keyed by ~5.5 m cells and heading.",
        "Diagnosed consumer lag of ~286 s (almost the whole 5-minute data window) from metrics, sized the fix with Little's Law, and raised per-partition parallelism from 1 to 64; added lag, uplink-delay and matching-latency metrics to keep tuning from data.",
        "Designed a read-optimised data model of rolling 15-second buckets per road segment and direction, so a read costs a fixed 12 lookups instead of scanning every sample; direction is derived from segment bearing with a 60° tolerance.",
        "Served map viewports from a Web-Mercator tile index (zoom 12) with hard limits on tiles, candidates, features and a 5-second deadline, so requests fail fast instead of returning an incomplete map or flooding the store.",
        "Added cache memory, eviction and key-count monitoring with health checks after an incident where live segments were silently evicted.",
        "Built the live traffic React + MapLibre layer: high-contrast congestion colours, side offsets so both directions of a road are visible, smooth colour transitions, a compact mobile legend and a segment-details popup; fixed parking-lot icons that swapped sides on zoom with a screen-space push-apart algorithm and unit tests.",
        "Investigating storing truck speed limits (OSM maxspeed data dropped during the road import) in the map-matching database, so live speeds are judged against the real limit of each road instead of a generic road-class value.",
        "Optimized geospatial data-processing pipelines using spatial indexing and clustering algorithms, improving query performance by more than 40% on a telemetry platform processing 60M+ events per day.",
        "Engineered distributed event-management APIs with concurrency-safe updates, lifecycle tracking, and real-time data consistency.",
        "Built scalable ingestion and synchronization systems with OAuth 2.0/JWT auth, idempotent processing, fault-tolerant retries (99.9%+ reliability), and schema validation via Azure Event Hub and API Management.",
        "Engineered an on-demand spatial data pipeline (Planetiler and Azure Blob Storage) for Europe-wide OSM data, and fixed SQLite connection crashes with a Dockerized TileServer GL proxy, cutting vector tile API latency from about 200 ms to 10-20 ms.",
        "Designed a high-load simulation framework (100,000+ concurrent clients) to benchmark throughput and auto-scaling strategies in Kubernetes.",
        "Tuned JVM and container buildpacks, cutting microservice startup time ≈ 50% and enhancing elasticity under peak workloads.",
        "Developed full-stack geospatial visualization tools (React + MapLibre + PostGIS backend) for real-time system analytics and debugging.",
      ],
      link: "https://www.daimlertruck.com/en",
    },
    {
      company: "Daimler Truck Innovation Center India",
      role: "Software Engineer Intern",
      duration: "Feb 2023 - July 2023",
      logo: daimlerLogo,
      details: [
        "Engineered an in-house Java utility library, adopted across 10+ Spring Boot microservices, that removed about 30% of duplicated logic and unified backend development.",
        "Developed optimized packages — StringUtil, CollectionUtil, ConversionUtil, Base64Util, DateUtil, CertificateUtil.",
        "Implemented cryptographic modules for RSA/EC keys and secure encoding.",
        "Delivered Maven-packaged utilities with 90%+ JUnit coverage, so dependent services could integrate with less regression risk.",
        "Benchmarked Apache Commons/Guava replacements with improved performance.",
      ],
      link: "https://www.daimlertruck.com/en",
    },
    {
      company: "CodeSpeedy",
      role: "C++ Developer Intern",
      duration: "May 2022 – Sep 2022",
      logo: codeSpeedyLogo,
      details: [
        "Wrote technical articles on Data Structures & Algorithms using C++ and Java.",
        "Created code samples and visual explanations.",
        "Improved content accuracy and educational clarity.",
      ],
      link: "https://www.codespeedy.com/",
    },
    {
      company: "Girl Code It",
      role: "DSA & Competitive Programming Mentor Intern",
      duration: "Mar 2022 – Sep 2022",
      logo: girlCodeItLogo,
      details: [
        "Mentored students in DSA and problem-solving.",
        "Conducted sessions on recursion, dynamic programming.",
        "Guided learners on debugging and clean coding.",
      ],
      link: "https://www.linkedin.com/company/girl-code-it/posts/?feedView=all",
    },
    {
      company: "DoSelect",
      role: "Problem Setter Intern",
      duration: "Dec 2021 – Jan 2022",
      logo: doSelectLogo,
      details: [
        "Created algorithmic challenges for assessments.",
        "Designed test cases ensuring fairness.",
        "Checked edge cases, time complexity & correctness.",
      ],
      link: "https://doselect.com/",
    },
    {
      company: "PrepJunction",
      role: "Web Development Intern",
      duration: "Feb 2021 – Mar 2021",
      logo: prepJunctionLogo,
      details: [
        "Created WordPress-based websites using HTML/CSS/JS.",
        "Improved responsiveness and load performance.",
        "Enhanced SEO and user experience.",
      ],
      link: "https://www.linkedin.com/company/prepjunction/",
    },
  ];

  return (
    <div className="h-full overflow-y-auto px-4 py-5 bg-[#f9fbff] rounded-md">
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="
              bg-white border border-gray-200 shadow-md rounded-xl 
              p-4 sm:p-5 
              hover:shadow-lg transition-all duration-200
              flex flex-col sm:flex-row gap-4
            "
          >
            {/* Logo */}
            <div
              className="shrink-0 w-20 h-20 sm:w-16 sm:h-16 mx-auto sm:mx-0 
                            flex items-center justify-center 
                            bg-gray-50 border border-gray-200 
                            rounded-md overflow-hidden"
            >
              <img
                src={exp.logo}
                alt="Company Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-base font-semibold text-gray-900 text-center sm:text-left">
                {exp.company}
              </h3>

              <p className="text-sm text-gray-600 mb-1 text-center sm:text-left">
                {exp.role}
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm leading-relaxed mt-2">
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>

              {/* Footer */}
              <div className="mt-3 text-xs text-gray-500 border-t pt-2 flex justify-between items-center">
                <span>{exp.duration}</span>
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline"
                >
                  About Employer
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
