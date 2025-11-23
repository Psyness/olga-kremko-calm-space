import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, FileCheck, BookOpen, Award } from 'lucide-react';
import diplomasImage from '@/assets/diplomas.jpg';

const Education = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const education = [
    {
      icon: GraduationCap,
      title: "Высшее психологическое образование",
      institution: "МФПУ \"Синергия\" Квалификация \"Психолог\" ",
      description: "Факультет философии и социальных наук, специальность 'Психология'",
      type: "diploma",
      image: diplomasImage
    },
    {
      icon: GraduationCap,
      title: "Психологическое консультирование",
      institution: "Столичный институт профессионального образования",
      description: "Сертификат специалиста по психологическому консультированию",
      type: "diploma",
      image: diplomasImage
    },
    {
      icon: BookOpen,
      title: "Когнитивно-поведенческая терапия",
      institution: "Высшая Школа \"Среда Обучения\"",
      description: "Углубленный курс по методам когнитивно-поведенческой терапии",
      type: "certificate",
      image: diplomasImage
    },
    {
      icon: Award,
      title: "1 ступень Гештальт-терапии",
      institution: "Московский Гештальт Институт",
      description: "Специализация в работе с травматическими переживаниями",
      type: "certificate",
      image: diplomasImage
    },
    {
      icon: FileCheck,
      title: "Семейная психотерапия",
      institution: "СПбШТ Федеральный образовательный проект",
      description: "Методы работы с семейными и парными отношениями",
      type: "certificate",
      image: diplomasImage
    },
    {
      icon: BookOpen,
      title: "Психология отношений",
      institution: "СПбШТ Федеральный образовательный проект",
      description: "Сертификат ведущего групповой терапии и трансформационных игр",
      type: "certificate",
      image: diplomasImage
    }
  ];

  const getIconColor = (type: string) => {
    return type === 'diploma' ? 'text-trust-green' : 'text-primary';
  };

  const getBadgeVariant = (type: string) => {
    return type === 'diploma' ? 'default' : 'secondary';
  };

  return (
    <section id="education" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-primary-foreground">
              Образование
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Список образования */}
            <div className="grid gap-4">
              {education.map((item, index) => (
                <div key={item.title}>
                  <Card 
                    className={`border-0 backdrop-blur-sm cursor-pointer transition-all duration-300 ${
                      selectedIndex === index 
                        ? 'bg-card/95 trust-shadow ring-2 ring-primary shadow-lg shadow-primary/20' 
                        : 'bg-card/95 trust-shadow hover:bg-card/80'
                    }`}
                    onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full bg-background flex items-center justify-center ${getIconColor(item.type)}`}>
                            <item.icon size={16} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-sm">{item.title}</h3>
                            <p className="text-xs text-primary">{item.institution}</p>
                          </div>
                        </div>
                        <Badge variant={getBadgeVariant(item.type)} className="text-xs">
                          {item.type === 'diploma' ? 'Диплом' : 'Сертификат'}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  {selectedIndex === index && (
                    <div className="lg:hidden mt-4 animate-in fade-in duration-300">
                      <Card className="border-0 trust-shadow bg-card/95 backdrop-blur-sm overflow-hidden">
                        <CardContent className="p-6">
                          <div className="relative w-full rounded-lg overflow-hidden mb-4" style={{ paddingBottom: '75%' }}>
                            <img
                              key={`${index}-mobile`}
                              src={item.image}
                              alt={item.title}
                              className="absolute inset-0 w-full h-full object-cover"
                              loading="eager"
                            />
                          </div>
                          <div className="text-center">
                            <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                            <p className="text-primary text-sm">{item.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Изображение дипломов - карусель (только на больших экранах) */}
            <div className="relative hidden lg:block">
              <Card className="border-0 trust-shadow bg-card/95 backdrop-blur-sm overflow-hidden transition-all duration-300">
                <CardContent className="p-6">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <img
                      key={selectedIndex ?? 'default'}
                      src={selectedIndex !== null ? education[selectedIndex].image : diplomasImage}
                      alt={selectedIndex !== null ? education[selectedIndex].title : "Дипломы и сертификаты психолога Кремко Ольги"}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>
                  <div className="text-center min-h-[80px] flex flex-col justify-center">
                    <h3 className="text-lg font-medium mb-2 transition-all duration-300">
                      {selectedIndex !== null ? education[selectedIndex].title : 'Документы об образовании'}
                    </h3>
                    <p className="text-primary text-sm transition-all duration-300">
                      {selectedIndex !== null 
                        ? education[selectedIndex].description
                        : 'Все дипломы и сертификаты подтверждают право на ведение психологической практики'
                      }
                    </p>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
