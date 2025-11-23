import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Users, Gamepad2, Clock } from 'lucide-react';
import individualTherapyImg from '@/assets/individual-therapy.jpg';
import groupTherapyImg from '@/assets/group-therapy.jpg';
import womensGameImg from '@/assets/womens-happiness-game.jpg';
import transformationGameImg from '@/assets/transformation-game.jpg';

const ServicesAndPricing = () => {
  const [visibleServices, setVisibleServices] = useState<Record<string, boolean>>({});
  const services = [
    {
      icon: User,
      title: "Личная консультация",
      duration: "60-80 минут",
      price: "100 руб",
      description: "Формат работы — онлайн и офлайн. Продолжительность 60–80 минут. Даты и время согласуются индивидуально.",
      fullDescription: "Личная консультация проходит онлайн — на платформе Google Meet (или другой по договоренности)," +
        " а также офлайн в уютном кабинете. Встреча длится 60 минут, но при необходимости может быть продлена " +
        "до 80 минут без доплат. Вы можете выбрать регулярный график встреч или приходить точечно — " +
        "в этом случае я предложу вам свободные окошки на ближайшую неделю.",
      color: "healing-green",
      image: individualTherapyImg
    },
    {
      icon: User,
      title: "Абонемент на 4 сессии",
      duration: "1 месяц",
      price: "350 руб",
      description: "Абонемент на 4 личные консультации. Действует один месяц с момента покупки.",
      fullDescription: "Абонемент на месяц дает возможность регулярно посещать психолога и выстраивать " +
        "последовательный процесс работы. Такой формат особенно эффективен, потому что регулярные встречи" +
        " помогают глубже прорабатывать запросы, видеть динамику изменений и получать более стойкие результаты.",
      color: "primary",
      image: individualTherapyImg
    },
    {
      icon: Users,
      title: "Групповые встречи",
      duration: "3 часа",
      price: "350 руб (за месяц)",
      description: "Мы встречаемся по вторникам с 18:00 до 21:00\n" +
        "В уютном кабинете в формате живого общения",
      fullDescription: "Групповая терапия — это формат, где 6–10 участников вместе с психологом работают " +
        "над своими запросами в безопасной и поддерживающей атмосфере. Здесь вы можете делиться опытом, " +
        "лучше понимать себя через общение с другими и находить новые способы решения трудностей. " +
        "В группе каждый участник имеет возможность быть услышанным и принятым. " +
        "Это время для снижения тревожности, укрепления самооценки, поиска опоры и поддержки. ",
      color: "trust-green",
      image: groupTherapyImg
    },
    {
      icon: Gamepad2,
      title: "Женский круг",
      duration: "3-4 часа",
      price: "100 руб",
      description: "Встречи в кругу женщин, где можно быть собой. График уточняйте по телефону или в Instagram." ,
      fullDescription: "Мы собираемся в уютной атмосфере, пьем чай, знакомимся и создаем теплое дружеское пространство," +
        " где каждая девушка может чувствовать себя комфортно. В зависимости от темы встречи мы используем МАК-карты, " +
        "практикуем медитации и дыхательные техники, рисуем мандалы, делимся мыслями и переживаниями. Это больше, " +
        "чем просто девичник — это время для себя, для восстановления и перезагрузки.",
      color: "healing-green",
      image: womensGameImg
    },
     {
      icon: Gamepad2,
      title: "Трансформационная игра \"Женское счастье\"",
      duration: "3-4 часа",
      price: "150 руб",
      description: "Игровая практика проходит в уютном кабинете.\n" +
        "Записаться и уточнить даты можно по телефону или в Instagram.",
      fullDescription: "На этой игре вы ответите на вопросы: \"Что мешает мне быть счастливой?\" " +
        "и \"Как я могу изменить свою жизнь к лучшему?\"" +
        " Глубокая игра которая поможет освободиться от страхов, чувства вины, ощутить поддержку в " +
        "теплой женской компании." +
        " (до 4 участниц)",
      color: "healing-green",
       image: transformationGameImg
    }
  ];

  const toggleVisible = (title: string) => {
    if (visibleServices[title]) {
      const visibleKeys = Object.keys(visibleServices)
        .filter(key => key !== title)
        .filter(key => visibleServices[key])
      setVisibleServices(visibleKeys.reduce((acc, key) => ({ ...acc, [key]: true }), {}))
    } else {
      setVisibleServices({...visibleServices, [title]: true})
    }
  }

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
              Стоимость услуг и формат работы
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
                  {visibleServices[service.title] && (
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.fullDescription}
                    </p>
                  )}
                  <div className="cursor-pointer text-primary underline underline-offset-2 mb-6" onClick={() => toggleVisible(service.title)}>
                    {visibleServices[service.title] ? 'Скрыть' : 'Подробнее'}
                  </div>
                  
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
              <h3 className="text-2xl font-medium mb-4 text-foreground">
                Готовы начать путь к изменениям?
              </h3>
              <p className="text-muted-foreground/90 mb-6 text-lg max-w-2xl mx-auto">
                Я буду рядом,
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
