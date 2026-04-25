import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Calendar, User } from 'lucide-react';
import ScrollStack, { ScrollStackItem } from '@/components/ui/ScrollStack';
import VariableProximity from '@/components/ui/VariableProximity';
import ScrollFloat from '@/components/ui/ScrollFloat';
import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "Astral Spark Chat",
      description: "A powerful AI-driven chatbot application that delivers intelligent, real-time conversations. Built with modern web technologies and powered by Gemini's advanced LLM capabilities, this platform provides seamless chat experiences with instant response generation and intelligent context understanding.",
      image: project1,
      tech: ["TypeScript", "React", "PostgreSQL", "Node.js", "Gemini API", "Tailwind CSS"],
      role: "Full-Stack Developer",
      duration: "2 weeks",
      github: "https://github.com/adfola",
      live: "https://example.com",
      featured: true
    },
    {
      id: 2,
      title: "EduSphere",
      description: "A comprehensive educational platform empowering students to learn online, earn recognized certificates, and connect with peers globally. Features real-time collaboration tools, structured learning paths, and a vibrant community across different schools and regions worldwide.",
      image: project2,
      tech: ["React", "Node.js", "PostgreSQL", "Express", "Firebase", "Tailwind CSS"],
      role: "Full-Stack Developer",
      duration: "1.5 months",
      github: "https://github.com/adfola",
      live: "https://example.com"
    },
    {
      id: 3,
      title: "AI-Powered Chess Game",
      description: "An intelligent chess game featuring advanced AI opponents with machine learning-driven decision making. The engine adapts to player strategies using neural networks, providing challenging gameplay at multiple difficulty levels with beautiful UI and smooth animations.",
      image: project3,
      tech: ["Python", "TensorFlow", "React", "FastAPI", "D3.js", "Three.js"],
      role: "AI Engineer & Full-Stack Developer",
      duration: "1 month",
      github: "https://github.com/adfola",
      live: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div ref={containerRef} className="container mx-auto px-6 py-20">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <Badge variant="outline" className="text-primary border-primary/30 mb-4">
              Featured Work
            </Badge>
          </motion.div>

          <ScrollFloat 
            containerClassName="text-4xl md:text-6xl font-bold text-gradient-primary mb-6 cursor-target"
            scrollStart="top bottom-=20%"
            scrollEnd="bottom top+=30%"
          >
            Projects & Creations
          </ScrollFloat>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A showcase of innovative projects that blend creativity with cutting-edge technology
          </motion.p>
        </div>

        {/* Projects Stack */}
        <ScrollStack
          className="max-w-4xl mx-auto"
          itemDistance={150}
          itemScale={0.05}
          itemStackDistance={40}
          stackPosition="25%"
          scaleEndPosition="15%"
          baseScale={0.9}
          rotationAmount={2}
          blurAmount={1}
        >
          {projects.map((project, index) => (
            <ScrollStackItem key={project.id} itemClassName="cursor-target">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: 20 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                <Card className="glass border-primary/20 overflow-hidden group hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(var(--primary)/0.3)]">
                  <div className="relative">
                    {/* Project Image */}
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.7 }}
                      />
                      
                      {/* Featured Badge */}
                      {project.featured && (
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          className="absolute top-4 left-4 z-20"
                        >
                          <Badge className="bg-primary text-primary-foreground animate-pulse">
                            Featured
                          </Badge>
                        </motion.div>
                      )}

                      {/* Quick Actions */}
                      <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.a
                          href={project.github}
                          className="p-2 bg-black/80 rounded-full text-white hover:bg-primary transition-colors cursor-target"
                          whileHover={{ scale: 1.15, rotate: 180 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github size={16} />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          className="p-2 bg-black/80 rounded-full text-white hover:bg-primary transition-colors cursor-target"
                          whileHover={{ scale: 1.15, rotate: -180 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink size={16} />
                        </motion.a>
                      </div>
                    </div>

                  <CardContent className="p-8">
                    {/* Project Title */}
                    <VariableProximity
                      label={project.title}
                      fromFontVariationSettings="'wght' 600"
                      toFontVariationSettings="'wght' 800"
                      containerRef={containerRef}
                      radius={100}
                      falloff="linear"
                      className="text-2xl font-bold text-foreground mb-4 cursor-target"
                    />

                    {/* Project Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project Meta */}
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User size={14} />
                        <span>{project.role}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{project.duration}</span>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="cursor-target hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="cursor-target flex-1 hover:bg-primary hover:text-primary-foreground"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          View Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="cursor-target flex-1"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </ScrollStackItem>
          ))}
        </ScrollStack>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Button size="lg" variant="outline" className="cursor-target group">
            <VariableProximity
              label="View All Projects"
              fromFontVariationSettings="'wght' 500"
              toFontVariationSettings="'wght' 700"
              containerRef={containerRef}
              radius={80}
              falloff="linear"
              className="inline-block"
            />
            <motion.span
              className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
            >
              →
            </motion.span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;