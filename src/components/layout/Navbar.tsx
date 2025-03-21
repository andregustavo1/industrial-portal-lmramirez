
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Projetos', href: '#projetos' },
  { name: 'Contato', href: '#contato' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "py-3 bg-white/80 border-b border-gray-200 nav-blur shadow-sm" : "py-5 bg-transparent"
    )}>
      <Container>
        <nav className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center z-50">
            <span className="font-bold text-xl text-primary-700">LM Ramirez</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-secondary-800 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-secondary-900" />
            ) : (
              <Menu className="h-6 w-6 text-secondary-900" />
            )}
          </button>
          
          {/* Mobile Navigation */}
          {isOpen && (
            <div className="fixed inset-0 bg-white flex flex-col items-center justify-center">
              <div className="flex flex-col items-center space-y-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-medium text-secondary-800 hover:text-primary-600 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
