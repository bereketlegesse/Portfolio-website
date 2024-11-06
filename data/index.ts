import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Experiences", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Final year Software Engineering Student",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern - RideShare",
    desc: "Built a fast, server-rendered application with Next.js, optimizing loading times and SEO, while creating mobile-friendly components using Tailwind CSS for a modern design.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    date: "March 2024 – June 2024",
    link: "https://www.linkedin.com/company/ridesharee/posts/?feedView=all"
  },
  {
    id: 2,
    title: "Backend Developer Intern - Eskalate",
    desc: "Developed an API using ASP.NET Core, PostgreSQL, and Entity Framework with Clean Architecture, achieving 87% test coverage for reliability and performance.",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
    date: "July 2023 – September 2023",
    link: "https://www.linkedin.com/company/theeskalate/posts/?feedView=all"
  },
  {
    id: 3,
    title: "Head of Education - Africa to Silicon Valley",
    desc: "Delivered lectures and organized coding contests on data structures and algorithms for over 90 students from 28 African countries.",
    className: "md:col-span-2", 
    thumbnail: "/exp3.svg",
    date: "Dec 2023 – Oct 2024",
    link: "https://www.linkedin.com/company/a2sv/mycompany/"
  },
  {
    id: 4,
    title: "Machine Learning Intern - iCogLabs",
    desc: "Completed an intensive internship focused on learning and applying supervised and unsupervised machine learning concepts, exploring algorithms like regression, classification, clustering, and dimensionality reduction to solve practical issues.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    date: "May 2023 - Jul 2023",
    link: "https://www.linkedin.com/company/icog-labs/posts/?feedView=all"
  },
];


