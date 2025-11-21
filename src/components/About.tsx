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
              Практикующий психолог
            </p>
          </div>

          {/* Основной контент */}
          <div className="space-y-8 mb-16">
            <Card className="trust-shadow border-0">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    Меня зовут Ольга Кремко, я психолог с более чем 5-летним
                    опытом работы с людьми, переживающими жизненные трудности. У меня высшее психологическое образование,
                    а также дополнительные курсы по психологии и терапии. Я постоянно расширяю свои профессиональные знания.

                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    В терапии для меня очень важно создать атмосферу доверия, тепла и безопасности.
                    Психологическая работа бывает непростой, поэтому моя задача сделать её максимально бережной.
                    Я никогда не осуждаю клиента! Каждый человек приходит со своей историей, своими переживаниями
                    и своим опытом — и я ко всем отношусь с уважением, принятием и поддержкой. Я считаю, что психолог
                    работает сердцем!
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
