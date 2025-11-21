import React from 'react';
import { Heart, Phone, MessageCircle, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
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
