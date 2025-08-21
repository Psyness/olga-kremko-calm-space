import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Issues = () => {
  return (
    <section id="issues" className="py-20 soft-gradient">
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
              <p className="text-muted-foreground">• Депрессия, повышенная тревожность, панические атаки, внутреннее напряжение</p>
              <p className="text-muted-foreground">• Одиночество, нехватка близости и поддержки</p>
              <p className="text-muted-foreground">• Эмоциональное выгорание, хроническая усталость, апатия, негативные мысли</p>
              <p className="text-muted-foreground">• Частые смены настроения, плаксивость, повышенная агрессия</p>
              <p className="text-muted-foreground">• Длительный или острый стресс, переживание сложных жизненных ситуаций</p>
            </div>
            <div className="space-y-3">
              <p className="text-muted-foreground">• Неуверенность в себе, заниженная самооценка</p>
              <p className="text-muted-foreground">• Мысль, что живете не той жизнью, которую хотите, отсутствие ощущения счастья </p>
              <p className="text-muted-foreground">• Трудности в отношениях с близкими людьми, родителями, коллегами, начальством</p>
              <p className="text-muted-foreground">• Проблемы в отношениях с партнером</p>
              <p className="text-muted-foreground">• Неумение защищать свои границы и говорить «нет»</p>
            </div>
            <div className="space-y-3">
              <p className="text-muted-foreground">• Работа с обидами, чувством вины и стыда</p>
              <p className="text-muted-foreground">• Синдром отложенной жизни, неумение наслаждаться моментом здесь и сейчас</p>
              <p className="text-muted-foreground">• Повторяющиеся сценарии в жизни и отношениях</p>
              <p className="text-muted-foreground">• Трудности в принятии решений</p>
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
