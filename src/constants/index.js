import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cloudregiment,
  internshala,
  upsale
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Design UI",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Development Training",
    company_name: "Intershala",
    icon: internshala,
    iconBg: "#00a5ec",
    date: "July 2022 - Aug 2022",
    points: [
      " Developed a strong understanding of MongoDB, Express.js, React.js, and Node.js for full-stack web development.",
      "Completed practical projects to apply the learned concepts and gain practical skills in building web applications.",
      "Acquired skills in managing MongoDB databases, including data storage, querying, indexing, and CRUD operations.",
      " Gained experience in collaborative development using tools like Git, along with exposure to industry best practices for enhanced productivity and code quality.",
    ],
  },
  {
    title: "Java Backend Developer Internship",
    company_name: "Cloud Regiment | Pune, India",
    icon: cloudregiment,
    iconBg: "#fff",
    date: "May 2022 - Oct 2022",
    points: [
      "Developed and maintained the backend of the company website using Java Springboot, ensuring that it was highly scalable, secure, and efficient.",
      "Worked on a live project, gaining hands-on experience in building complex web applications and integrating various APIs.",
      "Optimized the website’s performance by identifying and resolving issues related to database queries, network latency, and serverload balancing.",
      "Integrated various third-party services such as payment gateways, social media APIs, and email providers into the website",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "UpSale Suite | Indore, India",
    icon: upsale,
    iconBg: "#fff",
    date: "March 2023 - May 2023",
    points: [
      "Responsible for developing robust web applications using the React.js and Redux.",
      "Involved in both front-end and back-end development tasks, leveraging React for creating dynamic user interfaces and implementing business logic using Node.js and Express.js.",
      "Integrated various APIs into web applications, ensuring seamless communication between different systems and services.",
      "Deploying web applications on AWS servers, ensuring scalability, security, and high availability for optimal performance.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
