import React from 'react';
import { Heart, Phone, MessageCircle, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  const socialLinks = [
    {
      icon: Phone,
      href: "tel:+375291234567",
      label: "Телефон"
    },
    {
      icon: MessageCircle,
      href: "https://t.me/olga_kremko_psy",
      label: "Telegram"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/olga.kremko.psychologist",
      label: "Instagram"
    },
    {
      icon: Facebook,
      href: "https://facebook.com/olga.kremko.psychologist",
      label: "Facebook"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Основная информация */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-medium">Кремко Ольга</h3>
            </div>
            <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              Психолог-консультант с сердечным подходом к каждому клиенту. 
              Создаю безопасное пространство для исцеления и личностного роста.
            </p>
            <div className="text-sm text-background/70">
              <p className="mb-2">
                <strong>Девиз:</strong> "Психолог работает сердцем"
              </p>
              <p>
                Помогаю людям обрести внутреннюю гармонию и построить здоровые отношения с собой и окружающими.
              </p>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="font-medium mb-4">Навигация</h4>
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block text-background/80 hover:text-primary smooth-transition text-sm"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="font-medium mb-4">Связаться со мной</h4>
            <div className="space-y-3">
              <a 
                href="tel:+375291234567" 
                className="flex items-center space-x-2 text-background/80 hover:text-primary smooth-transition text-sm"
              >
                <Phone size={16} />
                <span>+375 (29) 123-45-67</span>
              </a>
              <div className="flex space-x-3 pt-2">
                {socialLinks.slice(1).map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-background/10 hover:bg-primary/20 flex items-center justify-center smooth-transition"
                    aria-label={social.label}
                  >
                    <social.icon size={16} className="text-background hover:text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Разделитель */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Копирайт */}
            <div className="text-sm text-background/70 text-center md:text-left">
              <p>© {currentYear} Кремко Ольга. Все права защищены.</p>
              <p className="mt-1">
                Психологические консультации | Минск, Беларусь
              </p>
            </div>

            {/* Кнопка наверх */}
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="text-background/80 hover:text-primary hover:bg-background/10"
            >
              <ArrowUp size={16} className="mr-2" />
              Наверх
            </Button>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-8 pt-6 border-t border-background/10">
          <div className="text-center">
            <p className="text-xs text-background/60 leading-relaxed">
              Данный сайт не является офертой. Вся информация носит ознакомительный характер.
              <br />
              Психологическая помощь не заменяет медицинское лечение при необходимости.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;