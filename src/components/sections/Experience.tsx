import React from "react";

const EXPERIENCES: Experience[] = [
  {
    company: "Pondo",
    role: "Lead Product designer",
    description:
      "Health-tech startup transforming toilets into smart health monitors, using advanced vision analysis to deliver personalized health insights through a mobile app.",
    dates: "Nov 2024 - Feb 2025",
  },
  {
    company: "albo",
    role: "Sr. Product designer",
    description:
      "A leading Mexican fintech company providing a digital banking platform with lending, crypto, business tools, real-time tracking, and a Mastercard debit card.",
    dates: "Ma 2022 - Ma 2025",
  },
  {
    company: "Fish + Chips",
    role: "Lead Product designer",
    description:
      "A platform empowering freelancers with tools, resources, and perks to manage their digital businesses.",
    dates: "Jul 2021 - Ma 2022",
  },
  {
    company: "DESPTEK",
    role: "Lead Product designer",
    description: "Strategic Consulting for Technology Deployment and Software",
    dates: "Feb 2021 - Ago 2021",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20">
      <h2 className="text-5xl font-bold mb-20 uppercase">Experience</h2>
      <div className="divide-y divide-snow-base">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.company}
            className="py-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
          >
            <div className="md:col-span-3">
              <div className="font-bold text-2xl  text-snow-base mb-4">
                {exp.company}
              </div>
              <div className="text-2xl font-light text-snow-base">
                {exp.role}
              </div>
            </div>
            <div className="md:col-span-6 text-md text-snow-basee">
              {exp.description}
            </div>
            <div className="md:col-span-3 text-right text-md font-semibold text-white whitespace-nowrap">
              {exp.dates}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
