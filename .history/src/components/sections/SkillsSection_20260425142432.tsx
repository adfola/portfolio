import { motion } from 'framer-motion';
import ScrollFloat from '@/components/ui/ScrollFloat';
import LogoLoop from '@/components/ui/LogoLoop';
import { 
  SiPython, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiMongodb, 
  SiReact, 
  SiJavascript, 
  SiTensorflow, 
  SiPostgresql, 
  SiNodedotjs, 
  SiThreedotjs,
  SiFirebase,
  SiDotnet,
  SiSharp,
  SiDocker,
  SiNextdotjs,
  SiSolidity,
  SiRedis
} from 'react-icons/si';
import { Badge } from '@/components/ui/badge';

const skills = [
  { name: 'Python', node: <SiPython className="w-12 h-12" />, icon: '/icons/python.svg' },
  { name: 'HTML', node: <SiHtml5 className="w-12 h-12" />, icon: '/icons/html5.svg' },
  { name: 'CSS', node: <SiCss3 className="w-12 h-12" />, icon: '/icons/css3.svg' },
  { name: 'JavaScript', node: <SiJavascript className="w-12 h-12" />, icon: '/icons/javascript.svg' },
  { name: 'React', node: <SiReact className="w-12 h-12" />, icon: '/icons/react.svg' },
  { name: 'Next.js', node: <SiNextdotjs className="w-12 h-12" />, icon: '/icons/nextdotjs.svg' },
  { name: 'Tailwind CSS', node: <SiTailwindcss className="w-12 h-12" />, icon: '/icons/tailwindcss.svg' },
  { name: 'Node.js', node: <SiNodedotjs className="w-12 h-12" />, icon: '/icons/nodedotjs.svg' },
  { name: 'PostgreSQL', node: <SiPostgresql className="w-12 h-12" />, icon: '/icons/postgresql.svg' },
  { name: 'MongoDB', node: <SiMongodb className="w-12 h-12" />, icon: '/icons/mongodb.svg' },
  { name: 'Firebase', node: <SiFirebase className="w-12 h-12" />, icon: '/icons/firebase.svg' },
  { name: '.NET', node: <SiDotnet className="w-12 h-12" />, icon: '/icons/dotnet.svg' },
  { name: 'C#', node: <SiSharp className="w-12 h-12" />, icon: '/icons/csharp.svg' },
  { name: 'Docker', node: <SiDocker className="w-12 h-12" />, icon: '/icons/docker.svg' },
  { name: 'FastAPI', node: <SiTensorflow className="w-12 h-12" />, icon: '/icons/fastapi.svg' },
  { name: 'TensorFlow', node: <SiTensorflow className="w-12 h-12" />, icon: '/icons/tensorflow.svg' },
  { name: 'Solidity', node: <SiSolidity className="w-12 h-12" />, icon: '/icons/solidity.svg' },
  { name: 'Three.js', node: <SiThreedotjs className="w-12 h-12" />, icon: '/icons/threedotjs.svg' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="container relative mx-auto px-6">
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
          className="text-lg text-muted-foreground text-center mb-12"
        >
          Technologies I work with to build amazing digital experiences
        </motion.p>

        {/* Logo Loop */}
        <div className="mb-16">
          <LogoLoop
            logos={skills}
            speed={120}
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

        {/* Static Grid for Reference */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ 
                scale: 1.15, 
                rotateZ: 360,
                transition: { duration: 0.6 }
              }}
              className="flex flex-col items-center group cursor-target"
              style={{ perspective: 1000 }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-card border border-border group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(var(--primary)/0.4)] mb-3 relative">
                <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="text-muted-foreground group-hover:text-primary transition-colors text-3xl"
                  style={{ perspective: 1000 }}
                >
                  {skill.node}
                </motion.div>
              </div>
              <span className="text-sm font-medium text-center group-hover:text-primary transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;