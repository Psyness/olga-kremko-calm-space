import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MessageCircle, Instagram, Clock, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 soft-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Контакты */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Контакты
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Свяжитесь со мной для записи на консультацию
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Основные контакты */}
              <Card className="trust-shadow border-0">
                <CardContent className="p-6">
                  <Phone className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-medium mb-2">Телефон</h3>
                  <a href="tel:+375291234567" className="text-lg text-primary hover:underline">
                    +375 (29) 123-45-67
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Звоните в любое удобное время
                  </p>
                </CardContent>
              </Card>

              <Card className="trust-shadow border-0">
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-medium mb-2">Адрес кабинета</h3>
                  <p className="text-lg">г. Минск</p>
                  <p className="text-muted-foreground">ул. Центральная, 25, офис 12</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Очные консультации по предварительной записи
                  </p>
                </CardContent>
              </Card>

              {/* Социальные сети */}
              <Card className="trust-shadow border-0">
                <CardContent className="p-6">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-medium mb-2">Telegram</h3>
                  <a href="https://t.me/olga_kremko_psy" target="_blank" rel="noopener noreferrer" className="text-lg text-primary hover:underline">
                    @olga_kremko_psy
                  </a>
                </CardContent>
              </Card>

              <Card className="trust-shadow border-0">
                <CardContent className="p-6">
                  <Instagram className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-medium mb-2">Instagram</h3>
                  <a href="https://instagram.com/olga.kremko.psychologist" target="_blank" rel="noopener noreferrer" className="text-lg text-primary hover:underline">
                    @olga.kremko.psychologist
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* График работы */}
            <Card className="trust-shadow border-0 mt-8 max-w-2xl mx-auto">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-medium mb-4">График работы</h3>
                <div className="space-y-2">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;