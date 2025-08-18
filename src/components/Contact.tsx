import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Instagram, Facebook, Clock, MapPin, Heart } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Телефон",
      description: "Звоните в любое удобное время",
      value: "+375 (29) 123-45-67",
      href: "tel:+375291234567",
      primary: true
    },
    {
      icon: MessageCircle,
      title: "Telegram",
      description: "Быстрое сообщение для записи",
      value: "@olga_kremko_psy",
      href: "https://t.me/olga_kremko_psy",
      primary: false
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Полезная информация и записи",
      value: "@olga.kremko.psychologist",
      href: "https://instagram.com/olga.kremko.psychologist",
      primary: false
    },
    {
      icon: Facebook,
      title: "Facebook",
      description: "Профессиональная страница",
      value: "Ольга Кремко - Психолог",
      href: "https://facebook.com/olga.kremko.psychologist",
      primary: false
    }
  ];

  const workingHours = [
    { day: "Понедельник - Пятница", time: "9:00 - 20:00" },
    { day: "Суббота", time: "10:00 - 18:00" },
    { day: "Воскресенье", time: "По договоренности" }
  ];

  return (
    <section id="contact" className="py-20 soft-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Контакты
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь со мной удобным способом для записи на консультацию
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Способы связи */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <Card 
                    key={index} 
                    className={`trust-shadow border-0 hover:transform hover:-translate-y-1 smooth-transition ${
                      method.primary ? 'ring-2 ring-primary/20 bg-primary/5' : ''
                    }`}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          method.primary ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                        }`}>
                          <method.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{method.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <a 
                        href={method.href}
                        className="block group"
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-foreground font-medium group-hover:text-primary smooth-transition">
                            {method.value}
                          </span>
                          <Button 
                            size="sm" 
                            variant={method.primary ? 'default' : 'outline'}
                            className={method.primary ? 'healing-gradient border-0' : ''}
                          >
                            Связаться
                          </Button>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Дополнительная информация */}
              <Card className="trust-shadow border-0">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <MapPin className="w-5 h-5 text-primary" />
                        <h3 className="font-medium">Формат консультаций</h3>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Очные встречи в уютном кабинете</li>
                        <li>• Онлайн-консультации (Zoom, Skype)</li>
                        <li>• Выездные консультации (по договоренности)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <Clock className="w-5 h-5 text-primary" />
                        <h3 className="font-medium">График работы</h3>
                      </div>
                      <ul className="space-y-2">
                        {workingHours.map((schedule, i) => (
                          <li key={i} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{schedule.day}</span>
                            <span className="font-medium">{schedule.time}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Призыв к действию */}
            <div className="space-y-6">
              <Card className="healing-gradient border-0">
                <CardContent className="p-6 text-center">
                  <Heart className="w-12 h-12 mx-auto mb-4 text-primary-foreground" />
                  <h3 className="text-xl font-medium mb-4 text-primary-foreground">
                    Сделайте первый шаг
                  </h3>
                  <p className="text-primary-foreground/90 mb-6 text-sm leading-relaxed">
                    Каждое путешествие к исцелению начинается с одного шага. 
                    Позвольте мне быть вашим спутником на этом важном пути.
                  </p>
                  <a href="tel:+375291234567">
                    <Button 
                      size="lg" 
                      variant="secondary"
                      className="w-full bg-card hover:bg-card/90 text-foreground"
                    >
                      Позвонить сейчас
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="trust-shadow border-0">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-4">Что важно знать:</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Первичная консультация помогает определить план работы</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Отмена возможна за 24 часа без списания средств</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Полная конфиденциальность гарантируется</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Гибкий график, включая вечернее время</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 trust-shadow bg-primary/5">
                <CardContent className="p-6 text-center">
                  <h3 className="font-medium mb-3">Экстренная поддержка</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Если вам нужна срочная помощь, не стесняйтесь обращаться
                  </p>
                  <div className="text-sm space-y-1">
                    <div>Телефон доверия: <strong>8-801-100-16-11</strong></div>
                    <div className="text-muted-foreground">Круглосуточно, бесплатно</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;