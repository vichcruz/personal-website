// Data about me that's used in different parts of the website
// Could be integrated into a separate CMS system (future project)

export const TechStack: {
  name: string;
  description: string;
  familiarity: number;
  linkToDocs: string;
}[] = [
  {
    name: "React",
    description: "A UI library for building interactive web apps.",
    familiarity: 8,
    linkToDocs: "https://react.dev/",
  },
  {
    name: "Javascript",
    description: "The core language of the web.",
    familiarity: 8,
    linkToDocs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Typescript",
    description: "JS with types for safer, scalable code.",
    familiarity: 8,
    linkToDocs: "https://www.typescriptlang.org/",
  },
  {
    name: "NestJS",
    description:
      "A progressive Node.js framework for building server-side apps.",
    familiarity: 6,
    linkToDocs: "https://nestjs.com/",
  },
  {
    name: "NextJS",
    description: "React framework for production with SSR and SSG.",
    familiarity: 7,
    linkToDocs: "https://nextjs.org/",
  },
  {
    name: "Python",
    description: "A versatile high-level programming language.",
    familiarity: 6,
    linkToDocs: "https://www.python.org/",
  },
  {
    name: "Java",
    description: "A class-based, object-oriented programming language.",
    familiarity: 3,
    linkToDocs: "https://dev.java/",
  },
  {
    name: "Django",
    description: "A high-level Python web framework for rapid development.",
    familiarity: 4,
    linkToDocs: "https://www.djangoproject.com/",
  },
  {
    name: "Go",
    description:
      "A statically typed language designed for simplicity and concurrency.",
    familiarity: 4,
    linkToDocs: "https://go.dev/",
  },
  {
    name: "Svelte",
    description:
      "A compiler that generates highly optimized JS for building UIs.",
    familiarity: 4,
    linkToDocs: "https://svelte.dev/",
  },
];
