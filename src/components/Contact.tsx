import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MessageCircle, Instagram, Clock, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 healing-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Контакты */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-primary-foreground">
              Контакты
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Свяжитесь со мной для записи на консультацию
            </p>
          </div>

          <Card className="trust-shadow border-0 bg-card/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Основные контакты */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Контакты</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <a href="tel:+375259688144" className="text-primary hover:underline">
                        +375 25 968 8144
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5 text-primary" />
                      <a href="https://t.me/olga_kremko_psy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Telegram: @olga_kremko_psy
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Instagram className="w-5 h-5 text-primary" />
                      <a href="https://instagram.com/olga.kremko.psychologist" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        Instagram: @olga.kremko.psychologist
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>г. Минск, ул. Центральная, 25, офис 12</span>
                    </div>
                  </div>
                </div>

                {/* График работы */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">График работы</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Понедельник - Пятница</span>
                      <span className="font-medium">9:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Суббота</span>
                      <span className="font-medium">10:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Воскресенье</span>
                      <span className="font-medium">По договоренности</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;