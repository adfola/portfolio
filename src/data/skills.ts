// ============================================================
// Skills & Technologies Data
// ============================================================
import {
  SiPython,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMongodb,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTensorflow,
  SiPostgresql,
  SiNodedotjs,
  SiThreedotjs,
  SiFirebase,
  SiDotnet,
  SiDocker,
  SiNextdotjs,
  SiSolidity,
  SiRedis,
  SiGit,
  SiFastapi,
} from "react-icons/si";
import { createElement } from "react";

export type SkillCategory = "Frontend" | "Backend" | "Database" | "AI/ML" | "DevOps" | "Blockchain";

export interface Skill {
  name: string;
  node: React.ReactElement;
  category: SkillCategory;
  proficiency: number; // 0-100
}

export const skills: Skill[] = [
  { name: "JavaScript", node: createElement(SiJavascript, { className: "w-12 h-12 text-yellow-400" }), category: "Frontend", proficiency: 90 },
  { name: "TypeScript", node: createElement(SiTypescript, { className: "w-12 h-12 text-blue-500" }), category: "Frontend", proficiency: 85 },
  { name: "React", node: createElement(SiReact, { className: "w-12 h-12 text-cyan-400" }), category: "Frontend", proficiency: 88 },
  { name: "Next.js", node: createElement(SiNextdotjs, { className: "w-12 h-12" }), category: "Frontend", proficiency: 80 },
  { name: "HTML", node: createElement(SiHtml5, { className: "w-12 h-12 text-orange-500" }), category: "Frontend", proficiency: 95 },
  { name: "CSS", node: createElement(SiCss3, { className: "w-12 h-12 text-blue-400" }), category: "Frontend", proficiency: 90 },
  { name: "Tailwind CSS", node: createElement(SiTailwindcss, { className: "w-12 h-12 text-teal-400" }), category: "Frontend", proficiency: 92 },
  { name: "Node.js", node: createElement(SiNodedotjs, { className: "w-12 h-12 text-green-500" }), category: "Backend", proficiency: 90 },
  { name: "Python", node: createElement(SiPython, { className: "w-12 h-12 text-yellow-500" }), category: "Backend", proficiency: 85 },
  { name: "FastAPI", node: createElement(SiFastapi, { className: "w-12 h-12 text-teal-500" }), category: "Backend", proficiency: 80 },
  { name: "C# / .NET", node: createElement(SiDotnet, { className: "w-12 h-12 text-purple-500" }), category: "Backend", proficiency: 72 },
  { name: "PostgreSQL", node: createElement(SiPostgresql, { className: "w-12 h-12 text-blue-400" }), category: "Database", proficiency: 85 },
  { name: "MongoDB", node: createElement(SiMongodb, { className: "w-12 h-12 text-green-500" }), category: "Database", proficiency: 82 },
  { name: "Redis", node: createElement(SiRedis, { className: "w-12 h-12 text-red-500" }), category: "Database", proficiency: 78 },
  { name: "Firebase", node: createElement(SiFirebase, { className: "w-12 h-12 text-yellow-500" }), category: "Database", proficiency: 80 },
  { name: "TensorFlow", node: createElement(SiTensorflow, { className: "w-12 h-12 text-orange-500" }), category: "AI/ML", proficiency: 70 },
  { name: "Docker", node: createElement(SiDocker, { className: "w-12 h-12 text-blue-500" }), category: "DevOps", proficiency: 78 },
  { name: "Git", node: createElement(SiGit, { className: "w-12 h-12 text-orange-600" }), category: "DevOps", proficiency: 88 },
  { name: "Solidity", node: createElement(SiSolidity, { className: "w-12 h-12 text-gray-400" }), category: "Blockchain", proficiency: 68 },
  { name: "Three.js", node: createElement(SiThreedotjs, { className: "w-12 h-12" }), category: "Frontend", proficiency: 65 },
];

export const skillCategories: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Database",
  "AI/ML",
  "DevOps",
  "Blockchain",
];
