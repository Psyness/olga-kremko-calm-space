import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Issues = () => {
  return (
    <section id="issues" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Запросы, с которыми я работаю
            </h2>
          </div>

          {/* Запросы - компактный список */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <p className="text-muted-foreground">• Депрессия, повышенная тревожность, панические атаки</p>
              <p className="text-muted-foreground">• Эмоциональное выгорание</p>
              <p className="text-muted-foreground">• Хроническая усталость, апатия, астения</p>
              <p className="text-muted-foreground">• Резкие смены настроения, плаксивость, повышенная агрессия</p>
              <p className="text-muted-foreground">• Длительный или острый стресс</p>
            </div>
            <div className="space-y-3">
              <p className="text-muted-foreground">• Проблемы с самооценкой и уверенностью в себе</p>
              <p className="text-muted-foreground">• Ощущение, что живете не той жизнью, которую хотите</p>
              <p className="text-muted-foreground">• Проблемы в отношениях с близкими людьми, коллегами, начальством</p>
              <p className="text-muted-foreground">• Проблемы в отношениях с партнером</p>
              <p className="text-muted-foreground">• Неумение защищать свои границы и говорить «нет»</p>
            </div>
            <div className="space-y-3">
              <p className="text-muted-foreground">• Сложности с пониманием чувств</p>
              <p className="text-muted-foreground">• Синдром отложенной жизни</p>
              <p className="text-muted-foreground">• Синдром жертвы</p>
              <p className="text-muted-foreground">• Отсутствие ощущения счастья</p>
              <p className="text-muted-foreground">• Желание лучше понимать себя и других</p>
              <p className="text-muted-foreground">• А также другие темы по индивидуальному запросу</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Issues;