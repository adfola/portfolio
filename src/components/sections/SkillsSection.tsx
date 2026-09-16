import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoLoop from '@/components/ui/LogoLoop';
import ScrollFloat from '@/components/ui/ScrollFloat';
import { Badge } from '@/components/ui/badge';
import { skills, skillCategories, type SkillCategory } from '@/data/skills';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'All'>('All');

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="container relative mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <Badge variant="outline" className="text-primary border-primary/30 mb-4">
            Tech Stack
          </Badge>
        </motion.div>

        <ScrollFloat
          containerClassName="text-3xl md:text-5xl font-bold text-center mb-4"
          scrollStart="top bottom-=20%"
          scrollEnd="bottom top+=30%"
        >
          Skills & Technologies
        </ScrollFloat>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground text-center mb-10"
        >
          Technologies I work with to build amazing digital experiences
        </motion.p>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {(['All', ...skillCategories] as (SkillCategory | 'All')[]).map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground border-primary shadow-[var(--shadow-neon)]'
                  : 'border-border text-muted-foreground hover:border-primary/50 hover:text-primary'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Logo Loop (all skills marquee) */}
        <div className="mb-16">
          <LogoLoop
            logos={skills}
            speed={100}
            direction="left"
            logoHeight={60}
            gap={60}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="hsl(var(--background))"
            ariaLabel="Technology skills"
            className="mb-8"
          />
        </div>

        {/* Filtered Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
          >
            {filtered.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                whileHover={{
                  scale: 1.12,
                  y: -6,
                  transition: { duration: 0.2 },
                }}
                className="flex flex-col items-center group cursor-default"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-card border border-border group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-[0_0_24px_rgba(var(--primary)/0.3)] mb-3 relative overflow-hidden">
                  {/* Shimmer on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/10 to-secondary/10" />
                  <div className="text-muted-foreground group-hover:text-primary transition-colors text-3xl relative z-10">
                    {skill.node}
                  </div>
                </div>
                <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                  {skill.name}
                </span>
                {/* Proficiency bar */}
                <div className="w-12 h-1 bg-border rounded-full mt-1.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, delay: index * 0.04 }}
                    viewport={{ once: true }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsSection;