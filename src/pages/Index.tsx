import { Suspense } from 'react';
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import ProjectsSection from '@/components/sections/ProjectsSection';
import TargetCursor from '@/components/ui/TargetCursor';
import InteractiveBackground from '@/components/ui/InteractiveBackground';
import About from '@/components/sections/About';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <InteractiveBackground />
      <TargetCursor />
      <Navigation />

      <main className="relative z-10">
        {/* Hero */}
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-muted-foreground">Loading...</p>
              </div>
            </div>
          }
        >
          <Hero />
        </Suspense>

        {/* About */}
        <About />

        {/* Experience Timeline */}
        <ExperienceSection />

        {/* Skills */}
        <SkillsSection />

        {/* Projects */}
        <ProjectsSection />

        {/* Why Work With Me / Value Props */}
        <TestimonialsSection />

        {/* Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8 text-center text-muted-foreground text-sm">
        <p>
          Built with ❤️ by{' '}
          <span className="text-gradient-primary font-semibold">Adekola Folarin John</span>
          {' '}· {new Date().getFullYear()}
        </p>
        <p className="mt-1 text-xs opacity-60">
          React · TypeScript · Tailwind CSS · Framer Motion
        </p>
      </footer>
    </div>
  );
};

export default Index;