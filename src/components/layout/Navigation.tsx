import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, Home, User, Briefcase, Zap, Mail,
  Sun, Moon, Clock, Download,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useTheme } from '@/context/ThemeContext';
import { personalInfo } from '@/data/personalInfo';

const navItems = [
  { name: 'Home',       href: '#home',         icon: Home },
  { name: 'About',      href: '#about',        icon: User },
  { name: 'Experience', href: '#experience',   icon: Clock },
  { name: 'Skills',     href: '#skills',       icon: Zap },
  { name: 'Projects',   href: '#projects',     icon: Briefcase },
  { name: 'Contact',    href: '#contact',      icon: Mail },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section detection
      const sections = navItems.map((item) => item.href.slice(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="text-xl font-bold text-gradient-primary cursor-pointer select-none"
            onClick={() => scrollToSection('#home')}
          >
            {personalInfo.initials}
            <span className="hidden sm:inline text-foreground/60 font-normal text-sm ml-2">
              — {personalInfo.shortName}
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    isActive
                      ? 'text-primary'
                      : 'text-foreground/70 hover:text-primary'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavItem"
                      className="absolute inset-0 bg-primary/15 rounded-md"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right side — Theme Toggle + CTA */}
          <div className="hidden md:flex items-center gap-2">
            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative w-10 h-10 flex items-center justify-center rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Light mode' : 'Dark mode'}
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="h-4 w-4 text-amber-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="h-4 w-4 text-primary" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Resume download */}
            <a
              href={personalInfo.resumePath}
              download={personalInfo.resumeFileName}
              className="hidden lg:flex"
            >
              <Button variant="outline" size="sm" className="border-primary/40 hover:bg-primary/10 gap-1.5">
                <Download className="h-3.5 w-3.5" />
                Resume
              </Button>
            </a>

            <Button
              onClick={() => scrollToSection('#contact')}
              className="btn-neon"
              size="sm"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile: Theme toggle + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border hover:border-primary/50 transition-all"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div key="sun-m" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <Sun className="h-4 w-4 text-amber-400" />
                  </motion.div>
                ) : (
                  <motion.div key="moon-m" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <Moon className="h-4 w-4 text-primary" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 glass">
                <div className="flex flex-col space-y-2 mt-8">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.href.slice(1);
                    return (
                      <motion.button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                          isActive ? 'bg-primary/20 text-primary' : 'hover:bg-muted text-foreground/80'
                        }`}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="font-medium">{item.name}</span>
                      </motion.button>
                    );
                  })}

                  <div className="pt-4 mt-2 border-t border-border space-y-2">
                    <a href={personalInfo.resumePath} download={personalInfo.resumeFileName} className="block">
                      <Button variant="outline" className="w-full gap-2">
                        <Download className="h-4 w-4" />
                        Download Resume
                      </Button>
                    </a>
                    <Button onClick={() => scrollToSection('#contact')} className="w-full btn-neon">
                      Get in Touch
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}