import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SplitText from '@/components/ui/split-text';
import NeonText3D from '@/components/3d/NeonText3D';
import VariableProximity from '@/components/ui/VariableProximity';
import DecryptedText from '@/components/ui/DecryptedText';
import RotatingText from '@/components/ui/RotatingText';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Animated background gradient */}
      <div className="absolute inset-0 gradient-animation opacity-20" />
      
      {/* 3D Text Background */}
      <div className="absolute inset-0 opacity-30">
        <NeonText3D text="ADEKOLA" size={2} />
      </div>

      {/* Blended accent blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-[480px] h-[480px] rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-120px] right-[-120px] w-[560px] h-[560px] rounded-full bg-secondary/20 blur-3xl" />

      <div ref={containerRef} className="relative z-10 container mx-auto px-4 py-20">
        <h1 className="sr-only">Adekola Folarin John — Full-Stack Developer, Blockchain Enthusiast, and AI Engineer</h1>
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30">
                👋 Hello, I'm Adekola Folarin John
              </span>
          </motion.div>

          {/* Main Heading with Variable Proximity */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <RotatingText
                texts={['Full-Stack Developer', 'Problem Solver', 'Code Craftsman', 'Tech Innovator']}
                mainClassName="px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20"
                staggerFrom="center"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
                className="text-4xl md:text-6xl lg:text-7xl font-bold cursor-target"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
            </div>
            <VariableProximity
              label="Blockchain Enthusiast & AI Engineer"
              fromFontVariationSettings="'wght' 500"
              toFontVariationSettings="'wght' 800"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-gradient-secondary cursor-target block"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Full-Stack Developer | Node.js Backend Engineer | AI & LLM Enthusiast. Building real-world applications, scalable systems, and accessible APIs with clean architecture and modern engineering practices.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button 
              size="lg" 
              className="btn-neon group cursor-target"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <VariableProximity
                label="View My Work"
                fromFontVariationSettings="'wght' 500"
                toFontVariationSettings="'wght' 800"
                containerRef={containerRef}
                radius={80}
                falloff="linear"
                className="inline-block"
              />
              <motion.div
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 cursor-target"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="mr-2 h-4 w-4" />
              <VariableProximity
                label="Download Resume"
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 700"
                containerRef={containerRef}
                radius={80}
                falloff="linear"
                className="inline-block"
              />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Github, href: 'https://github.com/adfola', label: "Github" },
              { icon: Linkedin, href: 'https://linkedin.com/in/adekola-folarin', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:adekolafolarin62@gmail.com', label: 'Email' },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all duration-300 group cursor-target"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                >
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}