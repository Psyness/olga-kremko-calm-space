import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Обо мне
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Психолог с глубокой верой в способность каждого человека к исцелению и росту
            </p>
          </div>

          {/* Основной контент */}
          <div className="space-y-8 mb-16">
            <Card className="trust-shadow border-0">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    Меня зовут Ольга Кремко, и я психолог-консультант с более чем 5-летним 
                    опытом работы с людьми, переживающими различные жизненные трудности. 
                    Мой подход основан на глубоком убеждении, что каждый человек несет в себе 
                    огромный потенциал для исцеления и позитивных изменений.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    В своей работе я создаю атмосферу безопасности и принятия, где вы можете 
                    быть собой, не боясь осуждения. Я верю, что психолог работает сердцем, 
                    поэтому каждая наша встреча — это пространство искренности, понимания и 
                    бережной поддержки на пути к вашему внутреннему благополучию.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Специализируюсь на работе с депрессивными состояниями, тревожными расстройствами, 
                    проблемами в отношениях и личностным ростом. Использую интегративный подход, 
                    сочетая различные психотерапевтические методики для достижения наилучших 
                    результатов именно для вас.
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Философия работы */}
          <Card className="healing-gradient border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-medium mb-4 text-primary-foreground">
                Моя философия
              </h3>
              <p className="text-lg text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
                "Каждый человек уникален и заслуживает быть услышанным. Мой долг как психолога — 
                создать пространство, где вы сможете найти свой путь к исцелению, опираясь на 
                собственные ресурсы и внутреннюю мудрость."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;