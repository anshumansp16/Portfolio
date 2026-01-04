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
  docker,
  computer,
  threejs,
  sazagLogo,
  freelanceLogo,
} from "../assets";

// Import the project images
import crownkingImg from "../assets/crownking.png";
import kiarosImg from "../assets/kiaros.png";
import pixelizeImg from "../assets/pixelize.png";

// Import testimonial images
import prameyaImg from "../assets/prameya.jpeg";
import sanketImg from "../assets/sanket.jpeg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
    icon: mobile,
  },
  {
    title: "Python Developer",
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company_name: "Thunder Marketing Corporation",
    icon: sazagLogo, // You may need to add Thunder Marketing logo later
    iconBg: "#383E56",
    date: "April 2025 - Present",
    points: [
      "Architected enterprise-scale browser automation platform using Selenium & Playwright, processing 50K+ automated tasks daily with 99.9% reliability.",
      "Built production FastAPI microservices architecture handling 10K+ concurrent requests; reduced API response time by 40% through optimization.",
      "Engineered AI-powered automation systems integrating GPT-4, Claude, and custom LLMs for intelligent decision-making; achieved 85% accuracy in task routing.",
      "Developed Next.js dashboards with real-time monitoring; implemented CI/CD pipelines reducing deployment time by 60% and improving system reliability by 85%.",
    ],
  },
  {
    title: "AI Engineer",
    company_name: "Sazag Infotech Private Limited",
    icon: sazagLogo,
    iconBg: "#E6DEDD",
    date: "April 2024 - March 2025",
    points: [
      "Designed production-grade RAG systems and agentic AI architectures for enterprise clients; improved query accuracy by 40% through vector database optimization.",
      "Built Chrome extensions and browser automation tools generating 30% cost savings; containerized applications using Docker/Kubernetes for seamless scaling.",
      "Developed scalable Python FastAPI backends integrated with AWS/GCP; implemented CI/CD pipelines achieving 99.5% deployment success rate.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Freelance & Contract Work",
    icon: freelanceLogo,
    iconBg: "#383E56",
    date: "August 2022 - March 2024",
    points: [
      "Delivered 25+ production web applications using React.js, Next.js, and modern frontend frameworks; maintained 99% client satisfaction rating.",
      "Migrated 15+ legacy applications to AWS cloud infrastructure; achieved 50% cost reduction and 95+ Google PageSpeed scores through optimization.",
      "Integrated RESTful APIs, payment gateways, and authentication systems; mentored 3 junior developers improving team code quality by 40%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Anshuman for his outstanding contributions as a frontend developer. His proficiency in frontend technologies, ability to design sophisticated interfaces, and expertise in API integration made him an invaluable asset to our team.",
    name: "Prameya Uppalapati",
    designation: "Director",
    company: "New IT Nest Ltd.",
    image: prameyaImg,
  },
  {
    testimonial:
      "I highly recommend Anshuman for their contributions in backend development. Their expertise in creating and optimizing databases greatly helped me in my project.",
    name: "Sanket Ghorpade",
    designation: "Deputy Manager - Business Solutions",
    company: "Axis Bank",
    image: sanketImg,
  },
  {
    testimonial:
      "Working with Anshuman was a game-changer for our startup. His technical expertise and problem-solving skills delivered a robust platform that exceeded our expectations. Highly recommended!",
    name: "Emma Johnson",
    designation: "Founder & CEO",
    company: "TechVenture Inc.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    testimonial:
      "Anshuman's work on our e-commerce platform was exceptional. His attention to detail and innovative solutions significantly improved our user experience and conversion rates.",
    name: "Michael Schmidt",
    designation: "CTO",
    company: "Global Solutions GmbH",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

const projects = [
  {
    name: "Aarambh",
    description:
      "A comprehensive platform for startup founders and entrepreneurs, providing tools and resources to launch and grow their businesses. Features include pitch deck builder, business plan templates, and investor connections.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: crownkingImg, // Placeholder - you may need to add actual image
    webpage_link: "https://aarambh.anshumansp.com",
    source_code_link: "https://github.com/anshumansp16/Aarambh",
  },
  {
    name: "TATVA",
    description:
      "An AI-powered wellness and meditation platform that helps users achieve mental clarity and balance. Includes guided meditation sessions, personalized wellness plans, and progress tracking with modern AI integration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: kiarosImg, // Placeholder - you may need to add actual image
    webpage_link: "https://tatva.anshumansp.com",
    source_code_link: "https://github.com/anshumansp16/TATVA",
  },
  {
    name: "ResumePro",
    description:
      "Professional resume builder with AI-powered content suggestions and ATS optimization. Create stunning resumes with multiple templates, real-time preview, and export to PDF. Includes cover letter generator and LinkedIn profile optimization.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "postgres",
        color: "pink-text-gradient",
      },
    ],
    image: pixelizeImg, // Placeholder - you may need to add actual image
    webpage_link: "https://resume.anshumansp.com",
    source_code_link: "https://github.com/anshumansp16/ResumePro",
  },
  {
    name: "CrownKing",
    description:
      "Full-stack e-commerce platform specializing in premium men's jewelry. Features include seamless shopping experience, secure payment integration, order tracking, and admin dashboard for inventory management.",
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
    image: crownkingImg,
    webpage_link: "https://crownking.anshumansp.com",
    source_code_link:
      "https://github.com/anshumansp16/CrownKing-Premium-Men-s-Jewellery-",
  },
  {
    name: "Kiaros",
    description:
      "Comprehensive suite of productivity tools for professionals including PDF converter, image optimizer, resume builder, and more. Built with performance and user experience in mind with modern responsive UI.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "postgres",
        color: "pink-text-gradient",
      },
    ],
    image: kiarosImg,
    webpage_link: "https://kiaros.vercel.app/",
    source_code_link: "https://github.com/anshumansp16/Kiaros-Tools",
  },
];

const computerImage = {
  img: computer,
};

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  computerImage,
};
