import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Briefcase, Calendar, Users, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { key: 'nav.home', href: '#home', icon: Home },
    { key: 'nav.services', href: '#services', icon: Briefcase },
    { key: 'nav.booking', href: '#booking', icon: Calendar },
    { key: 'nav.about', href: '#about', icon: Users },
    { key: 'nav.contact', href: '#contact', icon: Phone },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">M</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-foreground">MiCasa</span>
              <span className="text-primary font-medium ml-1">MultiService</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {t(item.key)}
              </button>
            ))}
          </div>

          {/* Language Toggle & CTA */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="font-semibold"
            >
              {language === 'es' ? '🇺🇸 EN' : '🇪🇸 ES'}
            </Button>
            <Button
              onClick={() => scrollToSection('#booking')}
              className="hidden sm:inline-flex gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              {t('hero.cta.book')}
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-3 w-full py-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <item.icon size={20} />
                  <span className="font-medium">{t(item.key)}</span>
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('#booking')}
                className="w-full mt-4 gradient-primary text-primary-foreground"
              >
                {t('hero.cta.book')}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
