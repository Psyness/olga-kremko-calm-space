import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Users, Gamepad2, Clock } from 'lucide-react';
import individualTherapyImg from '@/assets/individual-therapy.jpg';
import groupTherapyImg from '@/assets/group-therapy.jpg';
import womensGameImg from '@/assets/womens-happiness-game.jpg';

const ServicesAndPricing = () => {
  const services = [
    {
      icon: User,
      title: "Индивидуальная терапия",
      duration: "50 минут",
      price: "60 BYN",
      description: "Персональная работа с депрессией, тревожностью, стрессом и проблемами в отношениях в безопасной атмосфере.",
      color: "healing-green",
      image: individualTherapyImg
    },
    {
      icon: Users,
      title: "Групповая терапия",
      duration: "90 минут",
      price: "35 BYN",
      description: "Терапевтические группы для людей с похожими запросами. Поддержка единомышленников и обмен опытом.",
      color: "primary",
      image: groupTherapyImg
    },
    {
      icon: Gamepad2,
      title: "Трансформационная игра «Женское счастье»",
      duration: "3-4 часа",
      price: "80 BYN",
      description: "Авторская методика для женщин, желающих обрести внутреннюю гармонию и раскрыть свой потенциал.",
      color: "trust-green",
      image: womensGameImg
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Мои услуги
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Различные форматы работы с прозрачным ценообразованием для качественной помощи
            </p>
          </div>

          {/* Услуги */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="trust-shadow border-0 hover:transform hover:-translate-y-1 smooth-transition overflow-hidden">
                {/* Изображение услуги */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      service.color === 'healing-green' 
                        ? 'bg-healing-green/10' 
                        : service.color === 'trust-green'
                        ? 'bg-trust-green/10'
                        : 'bg-primary/10'
                    }`}>
                      <service.icon className={`w-6 h-6 ${
                        service.color === 'healing-green' 
                          ? 'text-healing-green' 
                          : service.color === 'trust-green'
                          ? 'text-trust-green'
                          : 'text-primary'
                      }`} />
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Clock size={14} />
                      <span className="text-xs">{service.duration}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Button 
                    onClick={scrollToContact}
                    className="w-full"
                    variant="outline"
                  >
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Призыв к действию */}
          <Card className="healing-gradient border-0 text-center">
            <CardContent className="p-8">
              <h3 className="text-2xl font-medium mb-4 text-primary-foreground">
                Готовы начать путь к изменениям?
              </h3>
              <p className="text-primary-foreground/90 mb-6 text-lg max-w-2xl mx-auto">
                Каждый путь исцеления начинается с первого шага. Я буду рядом, 
                чтобы поддержать вас на этом важном пути к внутренней гармонии и благополучию.
              </p>
              <Button 
                onClick={scrollToContact}
                variant="secondary" 
                size="lg"
                className="bg-card hover:bg-card/90 text-foreground"
              >
                Записаться на консультацию
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesAndPricing;