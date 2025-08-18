import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '#about', label: 'Обо мне' },
    { href: '#education', label: 'Образование' },
    { href: '#services', label: 'Услуги' },
    { href: '#pricing', label: 'Стоимость' },
    { href: '#issues', label: 'Запросы' },
    { href: '#testimonials', label: 'Отзывы' },
    { href: '#faq', label: 'Вопросы' },
    { href: '#contact', label: 'Контакты' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 trust-gradient border-b border-border/20 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-medium text-foreground">
              Кремко Ольга
            </h1>
            <span className="text-sm text-muted-foreground hidden sm:block">
              Психолог
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary smooth-transition text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Phone Button */}
          <div className="hidden md:flex items-center space-x-4">
              <a 
                href="tel:+375259688144" 
                className="flex items-center space-x-2 text-primary hover:text-trust-green smooth-transition"
              >
                <Phone size={16} />
                <span className="text-sm font-medium">+375 25 968 8144</span>
              </a>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/20">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left py-2 px-2 text-muted-foreground hover:text-primary hover:bg-accent/20 rounded-md smooth-transition"
                >
                  {item.label}
                </button>
              ))}
                <a 
                  href="tel:+375259688144" 
                  className="flex items-center space-x-2 py-2 px-2 text-primary hover:bg-accent/20 rounded-md smooth-transition"
                >
                  <Phone size={16} />
                  <span>+375 25 968 8144</span>
                </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;