import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, FileCheck, BookOpen, Award } from 'lucide-react';
import diplomasImage from '@/assets/diplomas.jpg';

const Education = () => {
  const education = [
    {
      icon: GraduationCap,
      title: "Высшее психологическое образование",
      institution: "Белорусский государственный университет",
      year: "2018",
      description: "Факультет философии и социальных наук, специальность 'Психология'",
      type: "diploma"
    },
    {
      icon: FileCheck,
      title: "Психологическое консультирование",
      institution: "Институт психологии и психотерапии",
      year: "2019",
      description: "Сертификат специалиста по психологическому консультированию",
      type: "certificate"
    },
    {
      icon: BookOpen,
      title: "Когнитивно-поведенческая терапия",
      institution: "Центр КПТ",
      year: "2020",
      description: "Углубленный курс по методам когнитивно-поведенческой терапии",
      type: "certificate"
    },
    {
      icon: Award,
      title: "Травматерапия",
      institution: "Международный институт травматерапии",
      year: "2021",
      description: "Специализация в работе с травматическими переживаниями",
      type: "certificate"
    },
    {
      icon: FileCheck,
      title: "Семейная психотерапия",
      institution: "Институт системной семейной терапии",
      year: "2022",
      description: "Методы работы с семейными и парными отношениями",
      type: "certificate"
    },
    {
      icon: BookOpen,
      title: "Групповая терапия",
      institution: "Центр групповой психотерапии",
      year: "2023",
      description: "Сертификат ведущего групповой терапии и трансформационных игр",
      type: "certificate"
    }
  ];

  const getIconColor = (type: string) => {
    return type === 'diploma' ? 'text-trust-green' : 'text-primary';
  };

  const getBadgeVariant = (type: string) => {
    return type === 'diploma' ? 'default' : 'secondary';
  };

  return (
    <section id="education" className="py-20 trust-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-primary-foreground">
              Образование и квалификация
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Непрерывное обучение и профессиональное развитие для качественной помощи
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Список образования */}
            <div className="space-y-6">
              {education.map((item, index) => (
                <Card key={index} className="border-0 trust-shadow bg-card/95 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full bg-background flex items-center justify-center ${getIconColor(item.type)}`}>
                          <item.icon size={20} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                        </div>
                      </div>
                      <Badge variant={getBadgeVariant(item.type)} className="ml-4">
                        {item.year}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <p className="font-medium text-primary">
                        {item.institution}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Изображение дипломов */}
            <div className="relative">
              <Card className="border-0 trust-shadow bg-card/95 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <img
                      src={diplomasImage}
                      alt="Дипломы и сертификаты психолога Кремко Ольги"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-medium mb-2">
                      Документы об образовании
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Все дипломы и сертификаты подтверждают высокую квалификацию 
                      и право на ведение психологической практики
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Дополнительная информация */}
              <Card className="mt-6 border-0 trust-shadow bg-primary/10 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">
                    Непрерывное развитие
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Регулярно прохожу супервизии и повышаю квалификацию, 
                    чтобы предоставлять вам самую современную и эффективную помощь
                  </p>
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