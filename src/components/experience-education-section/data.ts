export type TimelineItem = {
  id: number;
  orgName: string;
  roleTitle: string;
  description: string;
  fromTo: string;
  relevantSkills?: string[];
};

export const CurrentEducation: TimelineItem[] = [
  {
    id: 1,
    orgName: "University of Zürich",
    roleTitle: "Bachelor of Science in Computer Science",
    description:
      "Learned to design software systems and understand how businesses actually work.",
    fromTo: "September 2022 - January 2026",
  },
  {
    id: 2,
    orgName: "Kantonsschule Wohlen",
    roleTitle: "Swiss Federal Matura",
    description:
      "Where I built a strong academic foundation and developed critical thinking skills.",
    fromTo: "August 2017 - June 2021",
  },
];

export const CurrentExperience: TimelineItem[] = [
  {
    id: 1,
    orgName: "swrplus AG, Dietikon, Switzerland",
    roleTitle: "IT Support Intern",
    description:
      "Handled device setups, assisted migrations, and performed administrative tasks.",
    fromTo: "July 2021 - December 2021",
  },
  {
    id: 2,
    orgName: "swrplus AG, Dietikon, Switzerland",
    roleTitle: "Assistent Services",
    description:
      "Provided 1st-level support, configured accounts, and created user documentation.",
    fromTo: "January 2022 - August 2022",
  },
  {
    id: 3,
    orgName: "MDS Digital AG, Ziegelbrücke, Switzerland",
    roleTitle: "IT Project Assistant",
    description:
      "Supported IT projects, maintained documentation, and automated tasks with scripts.",
    fromTo: "February 2024 - June 2025",
  },
  {
    id: 4,
    orgName: "Trihow AG, Rotkreuz, Switzerland",
    roleTitle: "Full-Stack Developer 40%",
    description:
      "Built and maintained React/NestJS apps, implemented a visual Drag & Drop builder, and handled testing and deployment.",
    fromTo: "June 2025 - January 2026",
    relevantSkills: [
      "ReactJS",
      "NestJS",
      "TypeScript",
      "JavaScript",
      "Electron",
    ],
  },
  {
    id: 5,
    orgName: "Escola GmbH, Zürich, Switzerland",
    roleTitle: "Applications Developer 100%",
    description:
      "Maintain and enhance a PHP-based school management system, implement new features, and optimise performance.",
    fromTo: "March 2026 - Present",
    relevantSkills: ["PHP"],
  },
];
