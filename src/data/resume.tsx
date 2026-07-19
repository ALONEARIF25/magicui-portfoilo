import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";

export const DATA = {
  name: "Arif",
  initials: "AR",
  url: "https://reun.org",
  location: "Rajshahi, Bangladesh",
  locationLink: "https://www.google.com/maps/place/rajshahi",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people.",
  summary:
    "At the beinning of 2021, I started to explore all sorts of exciting things including digital art, coding, web development, entrepreneurship, music, video editing, motion graphics and more. I have a passion for creating and building things that make a difference in people's lives Hit me up on [Instagram](https://www.instagram.com/arf.env).",
  avatarUrl: "/founder.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "msg.alone.arif@gmail.com",
    tel: "+8801935693305",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/alonearif25",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: false,
      },
      X: {
        name: "X",
        url: "https://instagram.com/arf.env",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/alonearif",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "alonearif inc.",
      href: "https://alonearif.reun.org",
      badges: [],
      location: "Remote",
      title: "Founder",
      logoUrl: "/alonearif.jpeg",
      start: "Mar 2021",
      end: "Today",
      description:
        "alonearif inc. is a wider ecosystem of Atiqur Rahman Arif, it offers a wide range of subsidiary services and products in both offline and online areas.",
    },
    {
      company: "Reun.org",
      href: "https://reun.org",
      badges: [],
      location: "Remote",
      title: "Founder & Developer",
      logoUrl: "/reun.png",
      start: "Apr 2024",
      end: "Today",
      description:
        "Reun.org is a non-profit organization passionate about preserving your memories. From ambitions to hobbies, goals to quotes, and more, we believe in keeping your data safe for that nostalgic feel. Though we don't ask you for money but we still need cash to run this organization, so consider donating. Managed by Loco Organization & owned by alonearif Inc.",
    },
    {
      company: "Discord",
      href: "https://discord.com",
      badges: [],
      location: "Remote",
      title: "Verified Bot Developer",
      logoUrl: "/discord.jpg",
      start: "Jun 2021",
      end: "May 2024",
      description:
        "Thicc Boi - A Discord bot that provides a variety of features and commands for server management, entertainment, and utility. As a verified bot developer, I have created and maintained this bot to enhance the Discord experience for users.",
    },
    {
      company: "LumetriTees",
      href: "https://reun.org",
      badges: [],
      location: "Remote",
      title: "Founder & Designer",
      logoUrl: "/lume.jpg",
      start: "Apr 2024",
      end: "Jul 2025",
      description:
        "LumetriTees is a custom t-shirt printing business that offers high-quality, personalized apparel for individuals and businesses. As the founder and developer, I manage the online store, handle customer orders, and ensure that each product meets our quality standards.",
    },
    {
      company: "Orno Bangladesh",
      href: "https://ornobd.com",
      badges: [],
      location: "Remote",
      title: "Designer",
      logoUrl: "/orno.jpg",
      start: "Dec 2023",
      end: "Jan 2024",
      description:
        "Welcome to Orno BangladeshWhere imagination meets fashion.At Orno Bangladesh, we believe clothing should tell your story. Founded in 2019, we specialize in tshirts.",
    },
  ],
  education: [
    {
      school: "New Govt. Degree College, Rajshahi",
      href: "https://www.ngdc.ac.bd/",
      degree: "Class 11 - Class 12",
      logoUrl: "/govbd.webp",
      start: "2025",
      end: "2027",
    },
    {
      school: "Govt. Laboratory High School, Rajshahi",
      href: "https://www.rglhs.edu.bd/",
      degree: "Class 3 - Class 10",
      logoUrl: "/govbd.webp",
      start: "2017",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Reun.org",
      href: "https://reun.org",
      dates: "Apr 2024 - Today",
      active: true,
      description:
        "With the release of the [reun.org](https://reun.org), I decided to build a SaaS which allows users to store their high school memories. This is a great way to be nostalgic and organise reunion in future.",
      technologies: ["Next.js", "Typescript", "Tailwind", "Shadcn"],
      links: [
        {
          type: "Website",
          href: "https://reun.org",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://github.com/ALONEARIF25/rs-jsFiles/raw/refs/heads/main/reun-org.mp4",
    },
  ],
  hackathons: [
    {
      title: "Tomorrow Reunion",
      dates: "Since 2024",
      location: "Bangladesh & Remote",
      description:
        "The next vision of reun.org is to build the most futuristic reunion platform in Bangladesh.",
      image: "/reun.png",
      links: [
        {
          title: "tomorrow.reunion",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://alonearif25.github.io/tomorrow.reunion/",
        },
        {
          title: "reun.org",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://reun.org",
        },
      ],
    },
    {
      title: "MatrixOMR",
      dates: "2026",
      location: "Remote",
      description:
        "Lightning fast OMR scanning and publishing platform. Ensures 99.9% accuracy. Flexible with any scanner. Developer API support.",
      image: "/alonearif.jpeg",
      links: [
        {
          title: "Learn more",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://matrixomr.vercel.app",
        },
      ],
    },
    {
      title: "Cambrian Int School",
      dates: "2026",
      location: "Rajshahi",
      description:
        "Full-stack SaaS platform to excute everything a school could ever need.",
      image: "/cam.svg",
      links: [],
    },
    {
      title: "Edtech SaaS",
      dates: "Since 2025",
      location: "Remote",
      description:
        "Full-stack SaaS platform to excute everything an education center could ever need. Manage students, attendance, fees, exams, results, reports, notices and more with ease.",
      image: "/alonearif.jpeg",
      links: [
        {
          title: "Chanchal Physics Clinic",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://chanchalphysics.com",
        },
        {
          title: "Debasish Physics Care",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://debasishphysics.com",
        },
        {
          title: "Arif Chemistry",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://arifchemistry.com",
        },
        {
          title: "Anik Science",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://anikscience.com",
        },
        {
          title: "Gonit Niketan",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://gonitniketan.com",
        },
        {
          title: "English Nurture",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://englishnurture.com",
        },
        {
          title: "Nahid Biology",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://nahidbiology.com",
        },
        {
          title: "Ripon Unique Math",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://riponuniquemath.com",
        },
        {
          title: "Bangla Koshghor",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://banglakoshghor.com",
        },
        {
          title: "Bimal Chemistry",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://bimalchemistry.com",
        },
        {
          title: "Achinta English Garden",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://englishgardenacademy.com",
        },
      ],
    },

    {
      title: "Discord Bot",
      dates: "2024 - 2026",
      location: "Remote",
      description:
        "Multi-functional Discord bot for server automation and engagement.",
      image: "/discord.jpg",
      links: [
        {
          title: "Open Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ALONEARIF25/ThiccBoi",
        },
        {
          title: "Tog.gg",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://top.gg/bot/863351223587438622",
        },
        {
          title: "Status",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://alonearif25.github.io/thiccboi-status/",
        },
        {
          title: "Invite to server",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://dsc.gg/thiccboi",
        },
      ],
    },
  ],
} as const;
