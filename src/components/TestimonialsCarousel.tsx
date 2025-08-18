import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote, Heart, ChevronLeft, ChevronRight, Upload } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const TestimonialsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

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
    }
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages: string[] = [];
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            newImages.push(e.target.result as string);
            if (newImages.length === files.length) {
              setUploadedImages(prev => [...prev, ...newImages]);
            }
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

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

          {/* Загрузка скринов отзывов */}
          <div className="mb-12">
            <Card className="trust-shadow border-0">
              <CardContent className="p-6 text-center">
                <Upload className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-medium mb-3">
                  Скрины реальных отзывов
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Загрузите фотографии отзывов и переписок с клиентами
                </p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="testimonial-upload"
                />
                <label htmlFor="testimonial-upload">
                  <Button variant="outline" className="cursor-pointer">
                    Добавить изображения
                  </Button>
                </label>
              </CardContent>
            </Card>
          </div>

          {/* Карусель загруженных изображений */}
          {uploadedImages.length > 0 && (
            <div className="mb-12">
              <div className="relative">
                <div className="overflow-hidden" ref={emblaRef}>
                  <div className="flex">
                    {uploadedImages.map((image, index) => (
                      <div key={index} className="flex-none w-full md:w-1/2 lg:w-1/3 px-4">
                        <Card className="trust-shadow border-0">
                          <CardContent className="p-4">
                            <img
                              src={image}
                              alt={`Отзыв ${index + 1}`}
                              className="w-full h-64 object-cover rounded-lg"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
                
                {uploadedImages.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                      onClick={scrollPrev}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                      onClick={scrollNext}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Отзывы */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;