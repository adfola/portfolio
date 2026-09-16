import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Calendar, User, Lock } from 'lucide-react';
import ScrollStack, { ScrollStackItem } from '@/components/ui/ScrollStack';
import VariableProximity from '@/components/ui/VariableProximity';
import ScrollFloat from '@/components/ui/ScrollFloat';
import { projects } from '@/data/projects';
import { personalInfo } from '@/data/personalInfo';

// Import all project images
import chatbotImage from '@/assets/chatbot.png';
import schoolImage from '@/assets/school.png';
import chessImage from '@/assets/chess.png';
import campusImage from '@/assets/campus.png';
import StreamImage from '@/assets/Stream.png';
import ChatImage from '@/assets/Chat.png';

const imageMap: Record<string, string> = {
  chatbot: chatbotImage,
  school:  schoolImage,
  chess:   chessImage,
  campus:  campusImage,
  stream:  StreamImage,
  chat:    ChatImage,
};

// Placeholder gradient when no image key provided
const gradientFallback = (id: number) => {
  const gradients = [
    'from-purple-500/20 to-cyan-500/20',
    'from-blue-500/20 to-green-500/20',
    'from-pink-500/20 to-amber-500/20',
    'from-indigo-500/20 to-teal-500/20',
    'from-orange-500/20 to-purple-500/20',
    'from-cyan-500/20 to-rose-500/20',
    'from-emerald-500/20 to-blue-500/20',
  ];
  return gradients[id % gradients.length];
};

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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
          {projects.map((project, index) => {
            const projectImage = project.imageKey ? imageMap[project.imageKey] : null;
            const hasGithub = project.github && project.github.trim() !== '';
            const hasLive = project.live && project.live.trim() !== '';

            return (
              <ScrollStackItem key={project.id} itemClassName="cursor-target">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: 15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                >
                  <Card className="glass border-primary/20 overflow-hidden group hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(var(--primary)/0.2)]">
                    <div className="relative">
                      {/* Project Image / Fallback */}
                      <div className={`aspect-video bg-gradient-to-br ${gradientFallback(project.id)} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                        {projectImage ? (
                          <motion.img
                            src={projectImage}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.06 }}
                            transition={{ duration: 0.6 }}
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-4xl font-black text-foreground/20 select-none">
                              {project.title.charAt(0)}
                            </span>
                          </div>
                        )}

                        {/* Featured Badge */}
                        {project.featured && (
                          <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="absolute top-4 left-4 z-20"
                          >
                            <Badge className="bg-primary text-primary-foreground">
                              ⭐ Featured
                            </Badge>
                          </motion.div>
                        )}

                        {/* Quick Action Overlays */}
                        <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {hasGithub && (
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-black/80 rounded-full text-white hover:bg-primary transition-colors cursor-target"
                              whileHover={{ scale: 1.15, rotate: 360 }}
                              whileTap={{ scale: 0.9 }}
                              transition={{ duration: 0.4 }}
                            >
                              <Github size={14} />
                            </motion.a>
                          )}
                          {hasLive && (
                            <motion.a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-black/80 rounded-full text-white hover:bg-primary transition-colors cursor-target"
                              whileHover={{ scale: 1.15 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <ExternalLink size={14} />
                            </motion.a>
                          )}
                        </div>
                      </div>

                      <CardContent className="p-8">
                        {/* Title */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <VariableProximity
                            label={project.title}
                            fromFontVariationSettings="'wght' 600"
                            toFontVariationSettings="'wght' 800"
                            containerRef={containerRef}
                            radius={100}
                            falloff="linear"
                            className="text-2xl font-bold text-foreground mb-4 cursor-target"
                          />
                        </motion.div>

                        {/* Description */}
                        <motion.p
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.15 }}
                          className="text-muted-foreground mb-6 leading-relaxed text-sm"
                        >
                          {project.description}
                        </motion.p>

                        {/* Meta */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="flex flex-wrap gap-4 mb-5 text-xs text-muted-foreground"
                        >
                          <div className="flex items-center gap-1.5">
                            <User size={12} />
                            <span>{project.role}</span>
                          </div>
                          {project.duration && (
                            <div className="flex items-center gap-1.5">
                              <Calendar size={12} />
                              <span>{project.duration}</span>
                            </div>
                          )}
                        </motion.div>

                        {/* Tech Tags */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.25 }}
                          className="flex flex-wrap gap-2 mb-6"
                        >
                          {project.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="cursor-default hover:bg-primary/20 hover:text-primary transition-colors text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="flex gap-3"
                        >
                          {hasGithub ? (
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 hover:bg-primary hover:text-primary-foreground cursor-target transition-all"
                              asChild
                            >
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github size={14} className="mr-2" />
                                View Code
                              </a>
                            </Button>
                          ) : (
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 opacity-50 cursor-not-allowed"
                              disabled
                            >
                              <Lock size={14} className="mr-2" />
                              Private Repo
                            </Button>
                          )}
                          {hasLive ? (
                            <Button size="sm" className="flex-1 cursor-target" asChild>
                              <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <ExternalLink size={14} className="mr-2" />
                                Live Demo
                              </a>
                            </Button>
                          ) : (
                            <Button size="sm" className="flex-1 opacity-50 cursor-not-allowed" disabled>
                              <ExternalLink size={14} className="mr-2" />
                              Coming Soon
                            </Button>
                          )}
                        </motion.div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>

        {/* View All Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Button size="lg" variant="outline" className="cursor-target group gap-2" asChild>
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">
              <Github size={16} />
              <VariableProximity
                label="View All on GitHub"
                fromFontVariationSettings="'wght' 500"
                toFontVariationSettings="'wght' 700"
                containerRef={containerRef}
                radius={80}
                falloff="linear"
                className="inline-block"
              />
              <motion.span
                className="group-hover:translate-x-1 transition-transform duration-200"
              >
                →
              </motion.span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;