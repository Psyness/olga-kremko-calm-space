import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Upload } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const TestimonialsSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

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

  return (
    <section id="testimonials" className="py-20 soft-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Отзывы клиентов
            </h2>
          </div>

          {/* Загрузка отзывов */}
          <div className="mb-8">
            <Card className="trust-shadow border-0">
              <CardContent className="p-6 text-center">
                <Upload className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="text-lg font-medium mb-2">
                  Загрузите скрины отзывов
                </h3>
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

          {/* Слайдер отзывов */}
          {uploadedImages.length > 0 && (
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
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;