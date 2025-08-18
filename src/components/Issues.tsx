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
      title: "Депрессия, тревожность, панические атаки"
    },
    {
      icon: Zap,
      title: "Эмоциональное выгорание"
    },
    {
      icon: Clock,
      title: "Хроническая усталость, апатия, астения"
    },
    {
      icon: AlertCircle,
      title: "Резкие смены настроения, плаксивость, агрессия"
    },
    {
      icon: Heart,
      title: "Длительный или острый стресс"
    },
    {
      icon: Shield,
      title: "Проблемы с самооценкой и уверенностью"
    },
    {
      icon: Target,
      title: "Ощущение, что живете не своей жизнью"
    },
    {
      icon: Users,
      title: "Проблемы в отношениях"
    },
    {
      icon: Heart,
      title: "Сложности в романтических отношениях"
    },
    {
      icon: Shield,
      title: "Неумение защищать границы и говорить 'нет'"
    },
    {
      icon: Lightbulb,
      title: "Сложности с пониманием чувств"
    },
    {
      icon: Clock,
      title: "Синдром отложенной жизни"
    },
    {
      icon: AlertCircle,
      title: "Синдром жертвы"
    },
    {
      icon: Smile,
      title: "Отсутствие ощущения счастья"
    },
    {
      icon: Brain,
      title: "Желание лучше понимать себя и других"
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {issues.map((issue, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-card rounded-lg border">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <issue.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-foreground">{issue.title}</span>
              </div>
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