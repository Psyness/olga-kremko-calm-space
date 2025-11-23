import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud, Heart, Zap, Flame, AlertCircle, HelpCircle, Frown, Users, HeartOff, Shield, Scale, PauseCircle, RefreshCw, Lightbulb, Sparkles, GitFork } from 'lucide-react';

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

          {/* Запросы - компактный список с иконками */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Cloud className="w-6 h-6 text-healing-green flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">Депрессия, повышенная тревожность, панические атаки, внутреннее напряжение</p>
              </div>
              <div className="flex items-start gap-2">
                <Heart className="w-6 h-6 text-healing-green flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">Одиночество, нехватка близости и поддержки</p>
              </div>
              <div className="flex items-start gap-2">
                <Zap className="w-6 h-6 text-healing-green flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">Эмоциональное выгорание, хроническая усталость, апатия, негативные мысли</p>
              </div>
              <div className="flex items-start gap-2">
                <Flame className="w-6 h-6 text-healing-green flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">Частые смены настроения, плаксивость, повышенная агрессия</p>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="w-6 h-6 text-healing-green flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">Длительный или острый стресс, переживание сложных жизненных ситуаций</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <HelpCircle className="w-6 h-6 text-healing-green flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">Неуверенность в себе, заниженная самооценка</p>
              </div>
              <div className="flex items-start gap-2">
                <Frown className="w-6 h-6 text-healing-green flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">Мысль, что живете не той жизнью, которую хотите, отсутствие ощущения счастья </p>
              </div>
              <div className="flex items-start gap-2">
                <Users className="w-6 h-6 text-healing-green flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">Трудности в отношениях с близкими людьми, родителями, коллегами, начальством</p>
              </div>
              <div className="flex items-start gap-2">
                <HeartOff className="w-6 h-6 text-healing-green flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">Проблемы в отношениях с партнером</p>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="w-6 h-6 text-healing-green flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">Неумение защищать свои границы и говорить «нет»</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Scale className="w-6 h-6 text-healing-green flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">Работа с обидами, чувством вины и стыда</p>
              </div>
              <div className="flex items-start gap-2">
                <PauseCircle className="w-6 h-6 text-healing-green flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">Синдром отложенной жизни, неумение наслаждаться моментом здесь и сейчас</p>
              </div>
              <div className="flex items-start gap-2">
                <RefreshCw className="w-6 h-6 text-healing-green flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">Повторяющиеся сценарии в жизни и отношениях</p>
              </div>
              <div className="flex items-start gap-2">
                <GitFork className="w-6 h-6 text-healing-green flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">Трудности в принятии решений</p>
              </div>
              <div className="flex items-start gap-2">
                <Lightbulb className="w-6 h-6 text-healing-green flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">Желание лучше понимать себя и других</p>
              </div>
              <div className="flex items-start gap-2">
                <Sparkles className="w-6 h-6 text-healing-green flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">А также другие темы по индивидуальному запросу</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Issues;
