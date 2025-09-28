import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: " Vamshik Patela ES",
  initials: "VP",
  url: "https://vamshik.tech",
  location: "Mysore, India",
  locationLink: "https://www.google.com/maps/place/mysore",
  description:
    "19 year old something guy, Very active on Twitter(X)",
  summary:
    "a strong passion for technology. Outside academics, I love exploring history, following football, and reading great books.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/VamshikPatel",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vamshik-patela-es-686151327/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Vamshiktwt",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:iamvamshik7@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      Discord: {
        name: "Discord",
        url: "https://discord.com/users/1277205781732659320",
        icon: Icons.discord,
        navbar: true,
      },
    },
  },

  education: [
    {
      school: "Vidyavardhaka College Of Engineering",
      href: "https://www.vvce.ac.in",
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      logoUrl: "/vvce.png",
      start: "2024",
      end: "2028",
    },
  ],

  projects: [
    {
      title: "Researchpal",
      href: "https://researchpal.vercel.app",
      dates: "Sep 2025 - Present",
      active: true,
      description:
        "AI Research Assistant using Perplexity API.",
      technologies: [
        "React",
        "Javascript",
        "Node.js",
        "Vite",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://researchpal.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/researchpal.png",
      video: "",
    },
    ], 
  }
