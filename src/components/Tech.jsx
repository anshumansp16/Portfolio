import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";
// Import Simple Icons from react-icons for better tech logos
import {
  SiAmazon,
  SiAmazonec2,
  SiAmazoneks,
  SiAmazons3,
  SiAwslambda,
  SiDocker,
  SiKubernetes,
  SiPython,
  SiFastapi,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiThreedotjs,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGooglecloud,
  SiVercel,
  SiGithubactions,
  SiJest,
  SiPytest,
  SiSelenium,
  SiOpenai,
  SiLangchain,
} from "react-icons/si";
import { SiTestinglibrary } from "react-icons/si";
import { FaAws, FaCloud } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

// SVG icons for skills
const SkillSection = ({ title, skills }) => {
  return (
    <div className="mb-10">
      <h3 className="text-white text-lg font-semibold mb-4 border-b border-purple-500/30 pb-2">{title}</h3>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={`${title}-${index}`} name={skill.name} icon={skill.icon} color={skill.color} />
        ))}
      </div>
    </div>
  );
};

// AWS & Cloud Infrastructure skills
const awsCloudSkills = [
  { name: "AWS", icon: SiAmazon, color: "#FF9900" },
  { name: "EC2", icon: SiAmazonec2, color: "#FF9900" },
  { name: "EKS", icon: SiAmazoneks, color: "#FF9900" },
  { name: "S3", icon: SiAmazons3, color: "#569A31" },
  { name: "Lambda", icon: SiAwslambda, color: "#FF9900" },
  { name: "ECR", icon: FaAws, color: "#FF9900" },
  { name: "CloudWatch", icon: FaAws, color: "#FF4F8B" },
  { name: "Kinesis", icon: FaAws, color: "#8C4FFF" },
  { name: "Firehose", icon: FaAws, color: "#FF9900" },
  { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
];

// DevOps & Container Orchestration
const devopsSkills = [
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
  { name: "CI/CD", icon: FaCloud, color: "#00A1E0" },
  { name: "Jest", icon: SiJest, color: "#C21325" },
  { name: "Pytest", icon: SiPytest, color: "#0A9EDC" },
  { name: "Selenium", icon: SiSelenium, color: "#43B02A" },
  { name: "Playwright", icon: SiTestinglibrary, color: "#2EAD33" },
];

// AI & Automation skills
const aiAutomationSkills = [
  { name: "LangChain", icon: SiLangchain, color: "#1C3C3C" },
  { name: "OpenAI", icon: SiOpenai, color: "#412991" },
  { name: "RAG Systems", icon: FaCloud, color: "#8B5CF6" },
  { name: "Vector DBs", icon: FaCloud, color: "#EC4899" },
  { name: "Agentic AI", icon: FaCloud, color: "#6366F1" },
];

// Backend & APIs skills
const backendSkills = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "REST APIs", icon: FaCloud, color: "#61DAFB" },
  { name: "Microservices", icon: FaCloud, color: "#00ADD8" },
];

// Frontend skills
const frontendSkills = [
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Three.js", icon: SiThreedotjs, color: "#000000" },
];

// Database & Storage
const databaseSkills = [
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Vercel", icon: SiVercel, color: "#000000" },
];

const SkillCard = ({ name, icon: Icon, color }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", Math.random() * 0.5, 0.75)}
      className="w-24 sm:w-28 md:w-32 bg-gradient-to-br from-[#2d2d2d] via-[#3a3a3a] to-[#4a4a4a] rounded-xl p-4 flex flex-col items-center justify-center gap-2 border border-[#915eff]/20 shadow-lg shadow-purple-900/5 hover:shadow-purple-900/20 transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className="h-12 w-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <Icon className="w-10 h-10" style={{ color: color }} />
      </div>
      <p className="text-white/90 text-xs font-medium text-center mt-2">
        {name}
      </p>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} my-5`}>My Technology Stack</p>
        <h2 className={`${styles.sectionHeadText} mt-6`}>Skills.</h2>
      </motion.div>

      <div className="mt-8">
        <SkillSection title="AWS & CLOUD INFRASTRUCTURE" skills={awsCloudSkills} />
        <SkillSection title="DEVOPS & CONTAINER ORCHESTRATION" skills={devopsSkills} />
        <SkillSection title="AI & AUTOMATION" skills={aiAutomationSkills} />
        <SkillSection title="BACKEND & APIs" skills={backendSkills} />
        <SkillSection title="FRONTEND DEVELOPMENT" skills={frontendSkills} />
        <SkillSection title="DATABASE & STORAGE" skills={databaseSkills} />
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
