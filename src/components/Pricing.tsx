import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, Users, Gamepad2, Clock, CheckCircle } from 'lucide-react';

const Pricing = () => {
  const services = [
    {
      icon: User,
      title: "Индивидуальная консультация",
      price: "60",
      currency: "BYN",
      duration: "50 минут",
      description: "Персональная работа с вашими запросами в комфортной и безопасной атмосфере",
      features: [
        "Полная конфиденциальность",
        "Индивидуальный подход",
        "Гибкий график встреч",
        "Поддержка между сессиями",
        "Домашние задания при необходимости"
      ],
      popular: false,
      color: "primary"
    },
    {
      icon: Users,
      title: "Групповая терапия",
      price: "35",
      currency: "BYN",
      duration: "90 минут",
      description: "Работа в малой группе единомышленников с похожими запросами",
      features: [
        "Поддержка группы",
        "Обмен опытом",
        "Развитие коммуникативных навыков",
        "Осознание общности проблем",
        "Более доступная стоимость"
      ],
      popular: true,
      color: "healing-green"
    },
    {
      icon: Gamepad2,
      title: "Трансформационная игра «Женское счастье»",
      price: "80",
      currency: "BYN",
      duration: "3-4 часа",
      description: "Глубокая работа с женской природой, самооценкой и внутренней гармонией",
      features: [
        "Авторская методика",
        "Глубокая трансформация",
        "Работа с женскими архетипами",
        "Исцеление женских травм",
        "Материалы для домашней работы"
      ],
      popular: false,
      color: "trust-green"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 soft-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Стоимость услуг
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачное ценообразование для качественной психологической помощи
            </p>
          </div>

          {/* Тарифы */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`relative trust-shadow border-0 hover:transform hover:-translate-y-2 smooth-transition ${
                  service.popular ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Популярно
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    service.color === 'healing-green' 
                      ? 'bg-healing-green/10' 
                      : service.color === 'trust-green'
                      ? 'bg-trust-green/10'
                      : 'bg-primary/10'
                  }`}>
                    <service.icon className={`w-8 h-8 ${
                      service.color === 'healing-green' 
                        ? 'text-healing-green' 
                        : service.color === 'trust-green'
                        ? 'text-trust-green'
                        : 'text-primary'
                    }`} />
                  </div>
                  
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-4xl font-bold text-foreground">
                        {service.price}
                      </span>
                      <span className="text-lg text-muted-foreground">
                        {service.currency}
                      </span>
                    </div>
                    <div className="flex items-center justify-center space-x-1 mt-2 text-muted-foreground">
                      <Clock size={14} />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={scrollToContact}
                    className={`w-full ${
                      service.popular 
                        ? 'healing-gradient border-0 text-primary-foreground hover:opacity-90' 
                        : ''
                    }`}
                    variant={service.popular ? 'default' : 'outline'}
                  >
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Дополнительная информация */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <Card className="border-0 trust-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Условия работы
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Оплата производится перед началом сессии</li>
                  <li>• Возможна отмена за 24 часа без списания средств</li>
                  <li>• Консультации проводятся онлайн или очно</li>
                  <li>• Гибкий график, включая вечернее время</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 trust-shadow bg-primary/5">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-4">
                  Инвестиция в ваше благополучие
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Психологическая помощь — это инвестиция в качество вашей жизни, 
                  отношения и внутренний покой. Каждая сессия приближает вас к 
                  желаемым изменениям и более глубокому пониманию себя.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;