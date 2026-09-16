// ============================================================
// Experience / Timeline Data
// ============================================================

export interface ExperienceEntry {
  id: number;
  title: string;
  company: string;
  type: "Freelance" | "Contract" | "Personal Project" | "Open Source" | "Education";
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tech: string[];
  current?: boolean;
}

export const experiences: ExperienceEntry[] = [
  {
    id: 1,
    title: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    type: "Freelance",
    period: "2024 — Present",
    location: "Remote, Nigeria",
    description:
      "Designing and building scalable web applications for clients across education, fintech, and e-commerce verticals. Delivering end-to-end solutions from architecture to deployment.",
    highlights: [
      "Built 7+ production applications across multiple domains",
      "Architected real-time systems with WebSocket and Redis pub/sub",
      "Integrated AI/LLM features using Google Gemini API",
      "Set up CI/CD pipelines with Docker and GitHub Actions",
    ],
    tech: ["Node.js", "React", "TypeScript", "PostgreSQL", "Docker", "Redis"],
    current: true,
  },
  {
    id: 2,
    title: "AI & Backend Engineer",
    company: "Astral Spark (Personal Project)",
    type: "Personal Project",
    period: "2024",
    location: "Remote",
    description:
      "Led the design and implementation of an AI-powered chatbot platform with real-time response streaming, context-aware conversations, and scalable backend infrastructure.",
    highlights: [
      "Integrated Gemini LLM with RAG pipeline for domain-specific Q&A",
      "Built a PostgreSQL-backed conversation persistence layer",
      "Achieved sub-200ms response latency under load",
    ],
    tech: ["TypeScript", "React", "PostgreSQL", "Node.js", "Gemini API"],
  },
  {
    id: 3,
    title: "Full-Stack Developer",
    company: "EduSphere Platform",
    type: "Personal Project",
    period: "2024",
    location: "Remote",
    description:
      "Built a comprehensive educational platform with real-time collaboration, certificate generation, and community features for students across different schools globally.",
    highlights: [
      "Designed a multi-tenant architecture supporting thousands of concurrent users",
      "Implemented real-time collaboration with Firebase Realtime Database",
      "Built a certificate issuance system with PDF generation",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Express", "Firebase"],
  },
  {
    id: 4,
    title: ".NET Backend Developer",
    company: "Streaming Platform Project",
    type: "Personal Project",
    period: "2023 — 2024",
    location: "Remote",
    description:
      "Designed and implemented a robust .NET backend for a streaming platform with external API integrations, media management, and scalable content delivery.",
    highlights: [
      "Built RESTful API with ASP.NET Core and Entity Framework",
      "Containerized the entire stack with Docker Compose",
      "Integrated third-party streaming APIs for live content",
    ],
    tech: ["C#", ".NET", "TypeScript", "Docker", "HTML", "CSS"],
  },
  {
    id: 5,
    title: "AI Engineer",
    company: "Multi-Agent System",
    type: "Open Source",
    period: "2023",
    location: "Remote",
    description:
      "Designed and built a containerized multi-agent pipeline that autonomously processes documents into structured AI digests using Google Gemini API.",
    highlights: [
      "Orchestrated 4 independent AI agents with sequential pipeline logic",
      "Achieved fully autonomous document-to-digest transformation",
      "Containerized with Docker for reproducible deployments",
    ],
    tech: ["Python", "Shell", "Docker", "Gemini API"],
  },
];
