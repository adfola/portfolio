import { motion } from 'framer-motion';
import ScrollFloat from '@/components/ui/ScrollFloat';
import DecryptedText from '@/components/ui/DecryptedText';
import { Badge } from '@/components/ui/badge';
import profilePhoto from '@/assets/profile-photo.jpg';
import { Code2, Zap, Brain, Film, Trophy, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="container relative mx-auto px-6">
        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-[220px,1fr] items-start">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex md:block justify-center"
          >
            <div className="w-40 h-40 rounded-full overflow-hidden ring-2 ring-primary/30 shadow-[var(--shadow-elegant)]">
              <img
                src={profilePhoto}
                alt="Portrait of Adekola Folarin John"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <div className="mb-4">
              <Badge variant="outline" className="text-primary border-primary/30">About Me</Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Adekola Folarin John</h2>
            
            {/* Core Description */}
            <div className="space-y-4 mb-8">
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg font-medium text-primary"
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
                I am a passionate full-stack developer with 1 year of hands-on experience building real-world applications, scalable infrastructure, and well-designed systems. I am deeply driven by curiosity and a constant desire to learn, improve, and understand how things work under the hood. That obsession with knowledge pushes me to build solutions that are practical, reliable, and easy to use.
              </motion.p>
            </div>

            {/* Backend & Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8 p-6 rounded-lg border border-primary/20 bg-primary/5"
            >
              <div className="flex items-start gap-3 mb-4">
                <Code2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <h3 className="text-xl font-semibold">Backend Engineering & System Design</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                My core strength is in backend development with Node.js, where I architect and build production-ready, scalable APIs. I specialize in system design patterns including scalable architecture, distributed systems, and high-performance solutions. I have deep expertise in connection pooling, caching strategies with Redis, checkpointing mechanisms, BASE consistency models, and API testing protocols. I build systems that handle real-world demands with optimized database queries, efficient resource management, and clean code principles.
              </p>
            </motion.div>

            {/* AI & Advanced Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-8 p-6 rounded-lg border border-secondary/20 bg-secondary/5"
            >
              <div className="flex items-start gap-3 mb-4">
                <Brain className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <h3 className="text-xl font-semibold">AI, LLMs & RAG Systems</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I have hands-on experience with LLMs, deep learning, and AI agents. I build Retrieval-Augmented Generation (RAG) systems that combine language models with domain-specific knowledge for intelligent applications. I also work with CI/CD integrations to automate deployment pipelines and ensure robust system performance in production environments.
              </p>
            </motion.div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { title: 'Philosophy', desc: 'Code with purpose, design with empathy', icon: Lightbulb },
                { title: 'Focus', desc: 'Performance, scalability, clean architecture', icon: Zap },
                { title: 'Drive', desc: 'Innovation through continuous learning', icon: Trophy },
                { title: 'Passion', desc: 'Building elegant solutions with real impact', icon: Code2 }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <Icon className="w-4 h-4 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold text-primary">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Fun Stuff Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg border border-accent/20 bg-accent/5"
            >
              <div className="flex items-start gap-3 mb-4">
                <Film className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <h3 className="text-xl font-semibold">When I'm Not Coding</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Beyond the keyboard, I'm deeply inspired by cinema, particularly the visionary works of Christopher Nolan—his intricate narratives and technical precision fuel my creative problem-solving. I actively follow AI trends and cutting-edge research, participate in bug bounties and security challenges, conduct deep research on emerging technologies, and I'm a passionate football enthusiast who loves analyzing team strategies and performance metrics.
              </p>
              <p className="text-muted-foreground text-sm italic">
                Whether it's unraveling plot twists, discovering security vulnerabilities, or debating football tactics, I bring the same analytical mindset to everything I do.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;