import { Suspense } from 'react';
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TargetCursor from '@/components/ui/TargetCursor';
import InteractiveBackground from '@/components/ui/InteractiveBackground';
import About from '@/components/sections/About';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';
const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <InteractiveBackground />
      <TargetCursor />
      <Navigation />
      
      <main className="relative z-10">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading...</p>
            </div>
          </div>
        }>
          <Hero />
        </Suspense>
        
        {/* About Section */}
        <About />
        
        {/* Skills Section */}
        <SkillsSection />
        
        {/* Projects Section with ScrollStack */}
        <ProjectsSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;