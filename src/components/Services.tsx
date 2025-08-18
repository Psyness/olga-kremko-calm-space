import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Users, Gamepad2, Clock, Heart, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Индивидуальная терапия",
      duration: "50 минут",
      description: "Персональная работа с депрессией, тревожностью, стрессом и проблемами в отношениях. Создаем безопасное пространство для глубокой работы с вашими переживаниями.",
      benefits: [
        "Конфиденциальность и безопасность",
        "Индивидуальный подход к вашим потребностям",
        "Работа в комфортном для вас темпе",
        "Глубокое понимание ваших особенностей"
      ],
      color: "healing-green"
    },
    {
      icon: Users,
      title: "Групповая терапия",
      duration: "90 минут",
      description: "Терапевтические группы для людей с похожими запросами. Поддержка единомышленников и возможность учиться на опыте других участников.",
      benefits: [
        "Поддержка группы единомышленников",
        "Осознание, что вы не одиноки в своих переживаниях",
        "Возможность получить обратную связь",
        "Развитие навыков общения"
      ],
      color: "primary"
    },
    {
      icon: Gamepad2,
      title: "Трансформационная игра «Женское счастье»",
      duration: "3-4 часа",
      description: "Уникальная авторская методика для женщин, желающих обрести внутреннюю гармонию, раскрыть свой потенциал и найти путь к истинному счастью.",
      benefits: [
        "Раскрытие женского потенциала",
        "Работа с самооценкой и уверенностью",
        "Поиск баланса в различных сферах жизни",
        "Исцеление женских травм и комплексов"
      ],
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
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Мои услуги
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Различные форматы работы для максимально эффективной помощи именно вам
            </p>
          </div>

          {/* Услуги */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="trust-shadow border-0 hover:transform hover:-translate-y-1 smooth-transition">
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
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground flex items-center">
                      <Heart size={16} className="mr-2 text-primary" />
                      Преимущества:
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-sm text-muted-foreground">
                          <Shield size={12} className="mr-2 mt-1 text-primary flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
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

export default Services;