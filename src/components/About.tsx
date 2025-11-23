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
                    Меня зовут Ольга Кремко. У меня высшее психологическое образование. Помимо базового образования, я прошла
                    дополнительные курсы и программы повышения квалификации. Регулярно обучаюсь новым методам
                    и подходам в психотерапии, чтобы поддерживать качество своей работы и развиваться как специалист.


                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Я работаю в интегративном подходе, сочетая методы нескольких направлений. В своей практике опираюсь
                    на доказательный подход КПТ (РЭПТ), а также использую элементы гештальт-подхода и эмоционально-образной
                    терапии. Дополнительно работаю с МАК-картами — они помогают мягко работать с эмоциями и тем,
                    что сложно проговорить напрямую.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    В терапии для меня очень важно создать атмосферу доверия,
                    тепла и безопасности.
                    Психологическая работа бывает непростой, поэтому моя задача сделать её максимально бережной.
                    Я никогда не осуждаю клиента! Каждый человек приходит со своей историей, своими переживаниями
                    и своим опытом — и я ко всем отношусь с уважением, принятием и поддержкой. Я считаю, что психолог
                    работает сердцем!
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Философия работы */}
          <Card className="healing-gradient border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-medium mb-4 text-foreground">
                Моя философия
              </h3>
              <p className="text-lg text-muted-foreground/90 leading-relaxed max-w-2xl mx-auto">
                Я не даю готовых советов! Вместо этого я помогаю человеку разобраться в своих эмоциях,
                потребностях и внутренних опорах, чтобы он мог самостоятельно принимать решения.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
