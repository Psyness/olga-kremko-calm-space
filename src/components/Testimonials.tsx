import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, Heart } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Анна К.",
      age: "32 года",
      issue: "Работа с тревожностью",
      text: "Ольга помогла мне справиться с паническими атаками, которые мучили меня несколько лет. Ее мягкий подход и искренняя забота создали атмосферу полного доверия. Сейчас я могу контролировать свою тревожность и чувствую себя намного увереннее.",
      rating: 5
    },
    {
      name: "Марина В.",
      age: "28 лет",
      issue: "Проблемы в отношениях",
      text: "После развода я потеряла веру в себя и в возможность быть счастливой. Работа с Ольгой помогла мне вернуть самоуважение, научиться устанавливать границы и строить здоровые отношения. Сейчас я в счастливом браке и благодарна за этот путь исцеления.",
      rating: 5
    },
    {
      name: "Елена С.",
      age: "35 лет",
      issue: "Эмоциональное выгорание",
      text: "Профессиональное выгорание довело меня до депрессии. Ольга не только помогла мне справиться с этим состоянием, но и научила техникам самопомощи. Ее поддержка и профессионализм были неоценимы в тот трудный период моей жизни.",
      rating: 5
    },
    {
      name: "Виктория Л.",
      age: "41 год",
      issue: "Трансформационная игра 'Женское счастье'",
      text: "Игра 'Женское счастье' стала для меня настоящим открытием. За несколько часов я смогла проработать глубокие блоки и получить ответы на вопросы, которые мучили меня годами. Ольга мастерски ведет процесс, создавая безопасное пространство для трансформации.",
      rating: 5
    },
    {
      name: "Светлана М.",
      age: "29 лет",
      issue: "Низкая самооценка",
      text: "Я всегда считала себя 'не достаточно хорошей'. Работа с Ольгой помогла мне увидеть свою ценность и научиться любить себя. Ее теплота и принятие стали основой для моего внутреннего исцеления. Рекомендую всем, кто борется с самоприятием.",
      rating: 5
    },
    {
      name: "Ирина Б.",
      age: "38 лет",
      issue: "Групповая терапия",
      text: "Групповые сессии с Ольгой показали мне, что я не одинока в своих переживаниях. Поддержка группы и мудрое руководство Ольги помогли мне не только проработать свои проблемы, но и научиться поддерживать других. Это был очень ценный опыт роста.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < rating 
                ? 'text-yellow-400 fill-yellow-400' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 soft-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Истории людей, которые смогли изменить свою жизнь к лучшему
            </p>
          </div>

          {/* Отзывы */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="trust-shadow border-0 hover:transform hover:-translate-y-1 smooth-transition relative"
              >
                <CardContent className="p-6">
                  {/* Иконка кавычек */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Quote className="w-4 h-4 text-primary-foreground" />
                  </div>
                  
                  {/* Рейтинг */}
                  <div className="mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {/* Текст отзыва */}
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Информация о клиенте */}
                  <div className="border-t border-border pt-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-muted-foreground mb-1">
                          {testimonial.age}
                        </p>
                        <p className="text-xs text-primary font-medium">
                          {testimonial.issue}
                        </p>
                      </div>
                      <Heart className="w-5 h-5 text-primary/60" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center trust-shadow border-0">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">
                  положительных отзывов
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center trust-shadow border-0">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-sm text-muted-foreground">
                  помогли клиентам
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center trust-shadow border-0">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <div className="text-sm text-muted-foreground">
                  лет практики
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center trust-shadow border-0">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">
                  поддержка
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Призыв к действию */}
          <Card className="healing-gradient border-0 text-center">
            <CardContent className="p-8">
              <h3 className="text-2xl font-medium mb-4 text-primary-foreground">
                Станьте следующим, кто изменит свою жизнь
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Каждая история успеха начинается с первого шага. Позвольте мне 
                стать вашим проводником на пути к внутренней гармонии и благополучию.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;