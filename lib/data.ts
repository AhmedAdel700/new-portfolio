export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string;
  image: string;
  link?: string;
  github?: string;
  category?: string;
  catagory?: string[];
}

export const dataOfProjects: Project[] = [
  {
    id: 0,
    title: "Koia Constructions",
    description:
      "KOIA specializes in performance driven commercial environments corporate offices, medical facilities, and retail commercial spaces where compliance, precision, and operational readiness are critical We Deliver with Confidence",
    tech: "Next.js | TypeScript | RTK Query | Tailwind CSS | CSS(3) | Figma | Next-Intl",
    image: "/assets/kola.png",
    link: "https://kola-contractions.netlify.app/en",
    category: "Landing Page",
  },
  {
    id: 1,
    title: "Be Training",
    description:
      "Be Training is one of the companies under Be Group (كن الرقمية), and is regarded as one of the pioneering initiatives in the Kingdom of Saudi Arabia in the field of professional and personal competency development, contributing to enhancing the performance of both individuals and institutions alike",
    tech: "HTML(5) | CSS(3) | JavaScript | Jquery | Bootstrap | Figma",
    image: "/assets/betraining.png",
    link: "https://betraining.com.sa/ar",
    category: "Platform",
  },
  // {
  //   id: 2,
  //   title: "Be Tech",
  //   description:
  //     "Leading software house in the Middle East, delivering innovative digital solutions and technology services for businesses across sectors.",
  //   tech: "Next.js | JavaScript | RTK Query | Tailwind CSS | CSS(3) | Figma",
  //   image: "/assets/BeTech.png",
  //   link: "https://betech.com.sa/",
  //   category: "Website",
  // },
  {
    id: 3,
    title: "Itqan",
    description:
      "Itqan School Management System simplifies the management of student data, grades, attendance, schedules, and communication. It empowers schools to efficiently track performance and enhance collaboration between teachers, students, and parents.",
    tech: "Next.js | TypeScript | RTK Query | Tailwind CSS | CSS(3) | Figma",
    image: "/assets/Itqan.png",
    link: "https://itqan-landing.vercel.app/",
    category: "Landing Page",
  },
  {
    id: 6,
    title: "Se-University",
    description:
      "Learn, develop, and achieve anytime, anywhere with accredited e-diploma programs from Saudi Electronic University.",
    tech: "Next.js | TypeScript | RTK Query | Tailwind CSS | CSS(3) | Figma",
    image: "/assets/Se-University.png",
    link: "https://se-university.vercel.app/en",
    category: "Platform",
  },
  {
    id: 7,
    title: "eCommerce",
    description:
      "A fully functional eCommerce platform built with React, Redux, and Material UI.",
    tech: "React.js | Redux ToolKit | React Router | Material Ui | CSS(3) | HTML(5) | React Slick | AOS | Vite js",
    image: "/assets/ecommerce.png",
    github: "https://github.com/AhmedAdel700/eCommerce",
    link: "https://web-e-commerce-web.netlify.app/",
    category: "E-Commerce",
  },
  {
    id: 8,
    title: "Vanlife",
    description:
      "Vanlife App is about renting vans for any kind of trips, built with React and Bootstrap.",
    tech: "React.js | React Router | Bootstrap | CSS(3) | Postman | Mirage js | Vite js",
    image: "/assets/Vanlife.png",
    github: "https://github.com/AhmedAdel700/Vanlife",
    link: "https://main--the-vanlife-project.netlify.app/",
    category: "Website",
  },
  {
    id: 9,
    title: "Admin Dashboard",
    description:
      "A responsive admin dashboard built with React, Material UI, and Nivo charts.",
    tech: "React.js | React Router | React Hook Form | Material Ui | CSS(3) | Nivo | Vite js",
    image: "/assets/AdminDashboard.png",
    github: "https://github.com/AhmedAdel700/React-Dashboard",
    link: "https://react-admin-dashboard-project1.netlify.app/",
    category: "Platform",
  },
  {
    id: 10,
    title: "Weather App",
    description:
      "A weather app that provides real-time weather updates using React and APIs.",
    tech: "React.Js | CSS(3) | React Select | AOS | Vite js",
    image: "/assets/weatherApp.png",
    github: "https://github.com/AhmedAdel700/weather-app",
    link: "https://my-weather-app-a.netlify.app/",
    category: "Website",
  },
  {
    id: 11,
    title: "Kasper",
    description:
      "A clean and modern landing page template built with HTML, CSS, and JavaScript.",
    tech: "HTML(5) | CSS(3) | JavaScript",
    image: "/assets/Kasper.jpg",
    github: "https://github.com/AhmedAdel700/Kasper",
    link: "https://ahmedadel700.github.io/Kasper/",
    category: "Landing Page",
  },
  // {
  //   id: 12,
  //   title: "E-Commerce",
  //   description:
  //     "A simple e-commerce website built with HTML, CSS, and JavaScript.",
  //   tech: "HTML(5) | CSS(3) | JavaScript",
  //   image: "/assets/HomePageCart.png",
  //   github: "https://github.com/AhmedAdel700/week_3_cart",
  //   link: "https://ahmedadel700.github.io/week_3_cart/",
  //   category: "E-Commerce",
  // },
  {
    id: 13,
    title: "Dashboard",
    description:
      "A minimalistic dashboard interface built with HTML, CSS, and JavaScript.",
    tech: "HTML(5) | CSS(3) | JavaScript",
    image: "/assets/Dashboard.png",
    github: "https://github.com/AhmedAdel700/Dashboard",
    link: "https://ahmedadel700.github.io/Dashboard/",
    category: "Platform",
  },
  {
    id: 14,
    title: "Leon",
    description:
      "A corporate website template showcasing services and portfolios.",
    tech: "HTML(5) | CSS(3) | JavaScript",
    image: "/assets/leon.png",
    github: "https://github.com/AhmedAdel700/Leon",
    link: "https://ahmedadel700.github.io/Leon/",
    category: "Landing Page",
  },
  {
    id: 15,
    title: "Bondi",
    description:
      "A stylish business website built with Bootstrap for responsiveness.",
    tech: "HTML(5) | CSS(3) | JavaScript | Bootstrap",
    image: "/assets/bondi.png",
    github: "https://github.com/AhmedAdel700/Bondi",
    link: "https://ahmedadel700.github.io/Bondi",
    category: "Landing Page",
  },
  {
    id: 16,
    title: "VivaDecor",
    description: "An elegant interior design website built with Bootstrap.",
    tech: "HTML(5) | CSS(3) | JavaScript | Bootstrap",
    image: "/assets/VivaDecor.png",
    github: "https://github.com/AhmedAdel700/Week_Two_Task_1",
    link: "https://ahmedadel700.github.io/Week_Two_Task_1/",
    category: "Landing Page",
  },
  {
    id: 17,
    title: "FS.",
    description: "A minimalist website showcasing creative works.",
    tech: "HTML(5) | CSS(3)",
    image: "/assets/FS.png",
    github: "https://github.com/AhmedAdel700/FS",
    link: "https://ahmedadel700.github.io/FS/",
    category: "Landing Page",
  },
  {
    id: 18,
    title: "One Page Portfolio",
    description:
      "A single-page portfolio website built with React and Bootstrap.",
    tech: "React.js | Vite Js | Bootstrap | CSS(3)",
    image: "/assets/Screenshot.png",
    github: "https://github.com/AhmedAdel700/5D",
    link: "https://5d-task.netlify.app/",
    category: "Landing Page",
  },
  {
    id: 20,
    title: "To Do List",
    description:
      "A simple to-do list application built with vanilla JavaScript.",
    tech: "HTML(5)| CSS(3) | JavaScript",
    image: "/assets/ToDoList.png",
    github: "https://github.com/AhmedAdel700/To-Do-List",
    link: "https://ahmedadel700.github.io/To-Do-List/",
    category: "Landing Page",
  },
  {
    id: 21,
    title: "Chemia",
    description:
      "A Responsive Web Site powered by Next.js and AntD For Managing Chemical products",
    tech: "Next.js | Next Auth | Ant Design | CSS(3)",
    image: "/assets/chemia.png",
    link: "https://chemia-website-git-staging-mostafamahgoubs-projects.vercel.app",
    category: "Website",
  },
  {
    id: 22,
    title: "Kitchen Up",
    description: "Kitchen Up is a Dashboard for meals and meals recipes",
    tech: "Next.js | Next Auth | Ant Design | CSS(3)",
    image: "/assets/kitchen.png",
    category: "Platform",
  },
  {
    id: 23,
    title: "Prayer Timings",
    description:
      "A prayer timings app built with React and Material UI for daily schedules.",
    tech: "React.js | Vite Js | Material Ui | CSS(3)",
    image: "/assets/Prayer-Timing.png",
    github: "https://github.com/AhmedAdel700/Prayer-Timings",
    link: "https://prayer-timings-project.netlify.app/",
    category: "Website",
  },
  {
    id: 4,
    title: "Anas Grills",
    description:
      "Anas Grills is a popular restaurant and butchery known for its delicious grilled meats and high-quality products, offering a unique dining experience for meat lovers.",
    tech: "Next.js | TypeScript | Tailwind CSS | CSS(3) | Figma | Next-Intl",
    image: "/assets/anas.png",
    link: "https://anasgrills.com/en",
    category: "Landing Page",
  },
  {
    id: 5,
    title: "Halal Center",
    description:
      "It is one of the leading centers specializing in offering Halal-related courses in particular, as well as scientific and practical training programs in general.",
    tech: "HTML(5) | CSS(3) | JavaScript | Jquery | Tailwind CSS | CSS(3) | Figma",
    image: "/assets/halalCenter.png",
    link: "https://halalcenter.sa/en",
    category: "Platform",
  },
];

export const projects = dataOfProjects.map((p) => ({
  id: p.id,
  title: p.title,
  category: p.category || (Array.isArray(p.catagory) ? p.catagory[0] : "Development"),
  description: p.description,
  image: p.image,
  skills: Array.from(new Set(p.tech.split("|").map((s) => s.trim()))),
  link: p.link || "#",
  github: p.github
}));
