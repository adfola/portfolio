// ============================================================
// Projects Data
// ============================================================

export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string; // imported asset path handled in component
  imageKey: string; // maps to asset imports in component
  tech: string[];
  role: string;
  duration?: string;
  github?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Astral Spark Chat",
    imageKey: "chatbot",
    description:
      "A powerful AI-driven chatbot application that delivers intelligent, real-time conversations. Built with modern web technologies and powered by Gemini's advanced LLM capabilities, this platform provides seamless chat experiences with instant response generation and intelligent context understanding.",
    tech: ["TypeScript", "React", "PostgreSQL", "Node.js", "Gemini API", "Tailwind CSS"],
    role: "Full-Stack Developer",
    duration: "2 weeks",
    github: "https://github.com/adfola/Chatbot.git",
    live: "https://chatbot-snowy-delta-85.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "EduSphere",
    imageKey: "school",
    description:
      "A comprehensive educational platform empowering students to learn online, earn recognized certificates, and connect with peers globally. Features real-time collaboration tools, structured learning paths, and a vibrant community across different schools and regions worldwide.",
    tech: ["React", "Node.js", "PostgreSQL", "Express", "Firebase", "Tailwind CSS"],
    role: "Full-Stack Developer",
    duration: "1.5 months",
    github: "https://github.com/adfola/School-platform.git",
    live: "https://school-platform-2z9h.vercel.app/",
  },
  {
    id: 3,
    title: "AI-Powered Chess Game",
    imageKey: "chess",
    description:
      "An intelligent chess game featuring advanced AI opponents with machine learning-driven decision making. The engine adapts to player strategies using neural networks, providing challenging gameplay at multiple difficulty levels with beautiful UI and smooth animations.",
    tech: ["Python", "TensorFlow", "React", "FastAPI", "D3.js", "Three.js"],
    role: "AI Engineer & Full-Stack Developer",
    duration: "1 month",
    github: "https://github.com/adfola/Chess-Game.git",
    live: "https://chess-game-jade-six.vercel.app/",
  },
  {
    id: 4,
    title: "E-Commerce for Students",
    imageKey: "campus",
    description:
      "A modern student-focused e-commerce platform with integrated voice search capabilities powered by Python. Enables seamless product browsing, secure transactions, and intelligent product discovery. Features a robust backend API with real-time inventory management and scalable architecture.",
    tech: ["JavaScript", "TypeScript", "HTML", "CSS", "Node.js", "Tailwind CSS", "Docker", "Python"],
    role: "Full-Stack Developer",
    duration: "1.5 months",
    github: "https://github.com/adfola/stud-mart-loop.git",
    live: "https://stud-mart-loop.vercel.app/",
  },
  {
    id: 5,
    title: "Streaming Platform",
    imageKey: "stream",
    description:
      "An online streaming platform for sports, content, and entertainment — connected to external APIs and built with a fully scalable, modernized .NET backend and a functional REST API.",
    tech: ["TypeScript", "C#", "CSS", ".NET", "Docker", "HTML", "Bash"],
    role: "Full-Stack & .NET Developer",
    duration: "3 weeks",
    github: "",
    live: "",
  },
  {
    id: 6,
    title: "Multi-Agent AI Digest",
    imageKey: "",
    description:
      "A containerized multi-agent system that processes documents into a daily AI digest using Google Gemini API. Four independent agents work in sequence: Ingestor combines all input files, Summarizer condenses content, Critic evaluates quality, and Formatter generates the final digest.",
    tech: ["Python", "Shell", "Dockerfile", "Gemini API"],
    role: "AI Engineer",
    duration: "2 weeks",
    github: "https://github.com/adfola/Multi-Agent.git",
  },
  {
    id: 7,
    title: "Secure Chat App",
    imageKey: "chat",
    description:
      "A real-time secure messaging application with end-to-end encrypted conversations, friend requests, online presence indicators, and media sharing. Built on a scalable backend architecture with WebSocket support.",
    tech: ["Vue", "Python", "JavaScript", "Docker", "HTML", "CSS"],
    role: "Full-Stack & Backend Developer",
    duration: "2 months",
    github: "",
    live: "https://message-app-ivory.vercel.app/",
  },
];
