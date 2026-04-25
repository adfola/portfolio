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
              <Badge variant="outline" className="text-primary border-primary/30">About</Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Adekola Folarin John</h2>
            
            <div className="space-y-4 mb-6">
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
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-muted-foreground leading-relaxed"
              >
                My core strength in backend development is with Node.js & .NET, where I build real, accessible, and well-structured APIs that support modern web applications. I also have experience with CI/CD integrations, LLMs, deep learning, and AI agents, and I enjoy combining software engineering with intelligent systems to create products that feel modern and useful. I care about clean architecture, performance, deployment, and building systems that work properly in real environments.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              {[
                { title: 'Philosophy', desc: 'Code with purpose, design with empathy' },
                { title: 'Focus', desc: 'Performance, scalability, user experience' },
                { title: 'Drive', desc: 'Innovation through continuous learning' }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                >
                  <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;