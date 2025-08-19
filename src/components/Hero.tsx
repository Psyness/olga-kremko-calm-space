import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Shield, Lock, Monitor } from 'lucide-react';
import olgaPhoto from '@/assets/olga-kremko-photo.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-16 soft-gradient">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Содержимое */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Heart size={24} />
                <span className="text-sm font-medium">Психолог работает сердцем</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight">
                Кремко Ольга
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
                Ваш личный психолог
              </h2>
              
              <p className="text-lg leading-relaxed max-w-2xl">
                Создаю безопасное пространство, где вы будете услышаны и приняты. 
                Помогаю обрести внутреннюю гармонию, справиться с тревожностью и 
                построить здоровые отношения с собой и окружающими.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                  <Shield size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Безопасность</div>
                  <div className="text-sm text-muted-foreground">без осуждения</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                  <Lock size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Конфиденциальность</div>
                  <div className="text-sm text-muted-foreground">сохранение врачебной тайны</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                  <Monitor size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Онлайн и очно</div>
                  <div className="text-sm text-muted-foreground">удобный формат на выбор</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="healing-gradient border-0 text-primary-foreground hover:opacity-90 smooth-transition"
              >
                Записаться на консультацию
              </Button>
              
            </div>
          </div>

          {/* Фото */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden trust-shadow">
                <img
                  src={olgaPhoto}
                  alt="Кремко Ольга - психолог"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Декоративные элементы */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-primary/10 -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-accent/20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;