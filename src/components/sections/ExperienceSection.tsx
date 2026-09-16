import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { experiences } from '@/data/experience';
import { Briefcase, Code2, GitMerge, GraduationCap, Rocket } from 'lucide-react';

const typeConfig: Record<string, { color: string; icon: React.ElementType; bg: string }> = {
  Freelance:        { color: 'text-emerald-400', icon: Briefcase,    bg: 'bg-emerald-500/10 border-emerald-500/30' },
  Contract:         { color: 'text-blue-400',    icon: Briefcase,    bg: 'bg-blue-500/10 border-blue-500/30' },
  'Personal Project':{ color: 'text-purple-400', icon: Rocket,       bg: 'bg-purple-500/10 border-purple-500/30' },
  'Open Source':    { color: 'text-cyan-400',    icon: GitMerge,     bg: 'bg-cyan-500/10 border-cyan-500/30' },
  Education:        { color: 'text-amber-400',   icon: GraduationCap,bg: 'bg-amber-500/10 border-amber-500/30' },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="container relative mx-auto px-6">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="text-primary border-primary/30 mb-4">
              Journey
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Experience &{' '}
              <span className="text-gradient-primary">Timeline</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A chronicle of projects, freelance work, and milestones that shaped my engineering perspective.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const cfg = typeConfig[exp.type] ?? typeConfig['Personal Project'];
                const TypeIcon = cfg.icon;
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    className={`relative flex items-start md:items-center gap-8 ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    } pl-14 md:pl-0`}
                  >
                    {/* Content */}
                    <div className="flex-1">
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-sm hover:border-primary/30 hover:shadow-[var(--shadow-elegant)] transition-all duration-300"
                      >
                        {/* Type badge + period */}
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${cfg.bg} ${cfg.color}`}>
                            <TypeIcon className="w-3 h-3" />
                            {exp.type}
                          </span>
                          <span className="text-xs text-muted-foreground">{exp.period}</span>
                          {exp.current && (
                            <span className="text-xs bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>

                        {/* Title & Company */}
                        <h3 className="text-lg font-bold text-foreground mb-0.5">{exp.title}</h3>
                        <p className="text-primary font-medium text-sm mb-1">{exp.company}</p>
                        <p className="text-xs text-muted-foreground mb-3">{exp.location}</p>

                        {/* Description */}
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        {/* Highlights */}
                        <ul className="space-y-1.5 mb-4">
                          {exp.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                              {h}
                            </li>
                          ))}
                        </ul>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tech.map((t) => (
                            <Badge key={t} variant="secondary" className="text-xs hover:bg-primary/20 transition-colors cursor-default">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-4 md:static md:flex-shrink-0 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.2, type: 'spring', stiffness: 300 }}
                        viewport={{ once: true }}
                        className="w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center shadow-[var(--shadow-neon)]"
                      >
                        <Code2 className="w-3.5 h-3.5 text-primary" />
                      </motion.div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
