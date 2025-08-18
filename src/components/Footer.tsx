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
      href: "tel:+375259688144",
      label: "Телефон"
    },
    {
      icon: MessageCircle,
      href: "https://t.me/kremko_olga",
      label: "Telegram"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/olga_kremko",
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
        {/* Копирайт */}
        <div className="text-center">
          <p className="text-sm text-background/70">
            2025 Ольга Кремко. Все права защищены. Психологические консультации | Минск, Беларусь.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;