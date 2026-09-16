import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { personalInfo } from '@/data/personalInfo';
import {
  Cpu, Shield, Globe, Layers, Zap, MessageSquare,
  Star, GitFork, Code2, TrendingUp,
} from 'lucide-react';

const valueProps = [
  {
    icon: Cpu,
    title: 'Performance-First',
    description:
      'Every system I build is optimized for speed — sub-200ms APIs, efficient database queries, and smart caching strategies.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    description:
      'I design for growth from day one — microservice-ready backends, horizontal scaling, and clean separation of concerns.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
  },
  {
    icon: Shield,
    title: 'Security-Minded',
    description:
      'Security isn\'t an afterthought. I implement JWT auth, input validation, rate limiting, and follow OWASP best practices.',
    color: 'text-green-400',
    bg: 'bg-green-500/10 border-green-500/20',
  },
  {
    icon: Globe,
    title: 'Full-Stack Versatility',
    description:
      'From pixel-perfect UIs to database schemas, I own the entire stack — reducing handoff friction and shipping faster.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description:
      'I ship working software quickly. Clean architecture, reusable components, and strong DevOps instincts keep velocity high.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10 border-pink-500/20',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communicator',
    description:
      'I translate technical complexity into plain language. Stakeholders always know what\'s being built and why.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
];

const githubStats = [
  { icon: Star,       label: 'GitHub Stars',   value: '50+' },
  { icon: GitFork,    label: 'Repositories',   value: '15+' },
  { icon: Code2,      label: 'Commits (2024)', value: '500+' },
  { icon: TrendingUp, label: 'PRs Merged',     value: '30+' },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      {/* Accent blobs */}
      <div className="pointer-events-none absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="text-primary border-primary/30 mb-4">
              Why Work With Me
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What I <span className="text-gradient-secondary">Bring</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The engineering values and soft skills that make working with me a smooth, high-output experience.
            </p>
          </motion.div>

          {/* GitHub Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {githubStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.a
                  key={stat.label}
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="stat-card cursor-pointer group"
                >
                  <Icon className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-gradient-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.a>
              );
            })}
          </div>

          {/* Value Props Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {valueProps.map((vp, i) => {
              const Icon = vp.icon;
              return (
                <motion.div
                  key={vp.title}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={`group rounded-2xl border p-6 transition-all duration-300 cursor-default ${vp.bg} hover:shadow-[var(--shadow-elegant)]`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${vp.bg} group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 ${vp.color}`} />
                  </div>
                  <h3 className="text-base font-bold mb-2">{vp.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{vp.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <p className="text-muted-foreground mb-4">
              Interested in working together?
            </p>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 btn-neon rounded-full font-semibold text-sm"
            >
              Let's Build Something Great →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
