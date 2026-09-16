import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import profilePhoto from '@/assets/profile-photo.jpg';
import { Code2, Zap, Brain, Film, Trophy, Lightbulb, MapPin, Calendar } from 'lucide-react';
import { personalInfo, stats } from '@/data/personalInfo';

// Animated counter hook
function useCounter(end: number, duration = 2000, startCounting = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startCounting) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, startCounting]);
  return count;
}

function StatCard({ stat, delay, startCounting }: { stat: typeof stats[0]; delay: number; startCounting: boolean }) {
  const numValue = parseInt(stat.value, 10);
  const count = useCounter(numValue, 1800, startCounting);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="stat-card group"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-1">
        {startCounting ? count : 0}{stat.suffix}
      </div>
      <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
    </motion.div>
  );
}

const About = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="container relative mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="text-primary border-primary/30 mb-4">About Me</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Who I <span className="text-gradient-primary">Am</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A passionate developer obsessed with building things that work beautifully under the hood.
            </p>
          </motion.div>

          {/* Stats row */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} delay={i * 0.1} startCounting={statsInView} />
            ))}
          </div>

          {/* Profile + content */}
          <div className="grid gap-10 md:grid-cols-[220px,1fr] items-start">
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex md:block justify-center"
            >
              <div className="relative">
                <div className="w-44 h-44 rounded-2xl overflow-hidden ring-2 ring-primary/30 shadow-[var(--shadow-elegant)]">
                  <img
                    src={profilePhoto}
                    alt="Portrait of Adekola Folarin John"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Availability badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, type: 'spring' }}
                  viewport={{ once: true }}
                  className="absolute -bottom-3 -right-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  {personalInfo.availability}
                </motion.div>
              </div>

              {/* Meta info below photo */}
              <div className="mt-8 space-y-2 hidden md:block">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{personalInfo.yearsOfExperience} Years Experience</span>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{personalInfo.name}</h3>
              <p className="text-primary font-medium mb-6 text-sm">{personalInfo.tagline}</p>

              {/* Core Description */}
              <div className="space-y-4 mb-8">
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-lg font-medium text-primary italic"
                >
                  "I build smart and seamless experiences that improve user lives over time."
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground leading-relaxed"
                >
                  I am a passionate full-stack developer with <strong className="text-foreground">2+ years</strong> of
                  hands-on experience building real-world applications, scalable infrastructure, and well-designed
                  systems. I am deeply driven by curiosity and a constant desire to learn, improve, and understand how
                  things work under the hood. That obsession with knowledge pushes me to build solutions that are
                  practical, reliable, and easy to use.
                </motion.p>
              </div>

              {/* Backend & Architecture */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-6 p-5 rounded-xl border border-primary/20 bg-primary/5 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Code2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <h4 className="text-lg font-semibold">Backend Engineering & System Design</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  My core strength is in backend development with Node.js, where I architect and build
                  production-ready, scalable APIs. I specialize in scalable architecture, distributed systems,
                  and high-performance solutions — including connection pooling, Redis caching, checkpointing,
                  BASE consistency models, and API testing protocols.
                </p>
              </motion.div>

              {/* AI & LLMs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-8 p-5 rounded-xl border border-secondary/20 bg-secondary/5 hover:border-secondary/40 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Brain className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <h4 className="text-lg font-semibold">AI, LLMs & RAG Systems</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Hands-on experience with LLMs, deep learning, and AI agents. I build Retrieval-Augmented
                  Generation (RAG) systems that combine language models with domain-specific knowledge for
                  intelligent applications, and integrate CI/CD pipelines to automate deployment in production.
                </p>
              </motion.div>

              {/* Traits Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { title: 'Philosophy', desc: 'Code with purpose, design with empathy', icon: Lightbulb },
                  { title: 'Focus', desc: 'Performance, scalability, clean architecture', icon: Zap },
                  { title: 'Drive', desc: 'Innovation through continuous learning', icon: Trophy },
                  { title: 'Passion', desc: 'Elegant solutions with real-world impact', icon: Code2 },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.04, y: -3 }}
                      className="bg-card/60 backdrop-blur-sm rounded-lg p-4 border border-border hover:border-primary/40 transition-all duration-300 cursor-default group"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                        <h5 className="font-semibold text-sm">{item.title}</h5>
                      </div>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Fun Stuff */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="p-5 rounded-xl border border-accent/20 bg-accent/5 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Film className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <h4 className="text-lg font-semibold">When I'm Not Coding</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm mb-2">
                  Deeply inspired by cinema — especially Christopher Nolan's intricate narratives and technical
                  precision. I actively follow AI research, participate in security challenges and bug bounties,
                  and analyze football tactics with the same precision I apply to system design.
                </p>
                <p className="text-muted-foreground text-xs italic">
                  Whether it's unraveling plot twists, discovering security vulnerabilities, or debating football
                  tactics, I bring the same analytical mindset to everything I do.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;