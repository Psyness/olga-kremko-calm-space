import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Heart, 
  Zap, 
  Users, 
  Shield, 
  Clock, 
  Smile, 
  Target,
  AlertCircle,
  Lightbulb
} from 'lucide-react';

const Issues = () => {
  const issues = [
    {
      icon: Brain,
      title: "Депрессия, тревожность, панические атаки",
      description: "Помогу справиться с подавленным настроением, навязчивыми тревогами и паническими состояниями"
    },
    {
      icon: Zap,
      title: "Эмоциональное выгорание",
      description: "Восстановление после профессионального и личностного истощения"
    },
    {
      icon: Clock,
      title: "Хроническая усталость, апатия, астения",
      description: "Работа с постоянным чувством усталости и потерей жизненных сил"
    },
    {
      icon: AlertCircle,
      title: "Резкие смены настроения, плаксивость, агрессия",
      description: "Стабилизация эмоционального состояния и развитие навыков саморегуляции"
    },
    {
      icon: Heart,
      title: "Длительный или острый стресс",
      description: "Обучение техникам управления стрессом и восстановления внутреннего равновесия"
    },
    {
      icon: Shield,
      title: "Проблемы с самооценкой и уверенностью",
      description: "Повышение самоценности и развитие здоровой уверенности в себе"
    },
    {
      icon: Target,
      title: "Ощущение, что живете не своей жизнью",
      description: "Поиск истинных желаний, ценностей и жизненного пути"
    },
    {
      icon: Users,
      title: "Проблемы в отношениях",
      description: "Улучшение взаимодействия с близкими, коллегами, партнерами"
    },
    {
      icon: Heart,
      title: "Сложности в романтических отношениях",
      description: "Работа с парными конфликтами, созависимостью, поиском партнера"
    },
    {
      icon: Shield,
      title: "Неумение защищать границы и говорить 'нет'",
      description: "Развитие ассертивности и здоровых личных границ"
    },
    {
      icon: Lightbulb,
      title: "Сложности с пониманием чувств",
      description: "Развитие эмоционального интеллекта и способности к рефлексии"
    },
    {
      icon: Clock,
      title: "Синдром отложенной жизни",
      description: "Обучение навыкам присутствия в моменте и наслаждения жизнью"
    },
    {
      icon: AlertCircle,
      title: "Синдром жертвы",
      description: "Переход от позиции жертвы к активной жизненной позиции"
    },
    {
      icon: Smile,
      title: "Отсутствие ощущения счастья",
      description: "Поиск источников радости и смысла в жизни"
    },
    {
      icon: Brain,
      title: "Желание лучше понимать себя и других",
      description: "Развитие самосознания и эмпатии в отношениях"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="issues" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Запросы, с которыми я работаю
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Каждый человек уникален, как и его переживания. Я готова помочь вам 
              с широким спектром жизненных трудностей и вопросов личностного роста.
            </p>
          </div>

          {/* Список запросов */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {issues.map((issue, index) => (
              <Card 
                key={index} 
                className="trust-shadow border-0 hover:transform hover:-translate-y-1 smooth-transition group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 smooth-transition">
                      <issue.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground mb-2 leading-tight">
                        {issue.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {issue.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Дополнительная информация */}
          <div className="space-y-8">
            <Card className="border-0 trust-shadow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-medium mb-4">
                  А также другие темы по индивидуальному запросу
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6">
                  Если ваш запрос не вошел в список выше, это не значит, что я не смогу вам помочь. 
                  Каждая ситуация индивидуальна, и я всегда готова выслушать ваши потребности 
                  и найти наилучший способ поддержки.
                </p>
              </CardContent>
            </Card>

            <Card className="healing-gradient border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-medium mb-4 text-primary-foreground">
                  Важно помнить
                </h3>
                <p className="text-primary-foreground/90 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                  Обращение за психологической помощью — это проявление мудрости и заботы о себе. 
                  Нет "недостаточно серьезных" проблем. Любые ваши переживания заслуживают внимания и поддержки.
                </p>
                <Button 
                  onClick={scrollToContact}
                  variant="secondary"
                  size="lg"
                  className="bg-card hover:bg-card/90 text-foreground"
                >
                  Обсудить мой запрос
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Issues;