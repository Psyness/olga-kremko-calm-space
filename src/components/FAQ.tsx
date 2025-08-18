import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HelpCircle, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      id: "item-1",
      question: "Как проходит консультация?",
      answer: "Консультация проходит в комфортной и безопасной атмосфере. В начале мы обсуждаем ваши потребности и цели, затем работаем с вашими переживаниями, используя различные психотерапевтические техники. Каждая сессия адаптируется под ваши индивидуальные потребности. Консультации могут проходить как очно в уютном кабинете, так и онлайн в удобное для вас время."
    },
    {
      id: "item-2",
      question: "Сколько раз в неделю нужно ходить к психологу?",
      answer: "Частота встреч определяется индивидуально в зависимости от ваших потребностей и запроса. Обычно это 1 раз в неделю для регулярной работы или 1 раз в две недели для поддерживающей терапии. В кризисных ситуациях может потребоваться более частая поддержка. Мы всегда найдем оптимальный ритм работы именно для вас."
    },
    {
      id: "item-3",
      question: "Сколько времени длится терапия?",
      answer: "Длительность терапии очень индивидуальна. Некоторые вопросы можно проработать за несколько встреч, для более глубоких изменений может потребоваться несколько месяцев. Важно помнить, что каждый человек движется в своем темпе, и я буду поддерживать вас на каждом этапе этого пути. Мы регулярно оцениваем прогресс и корректируем план работы."
    },
    {
      id: "item-4",
      question: "Гарантируется ли конфиденциальность?",
      answer: "Абсолютно да. Конфиденциальность — основа психологической работы. Вся информация, которую вы делите со мной, строго конфиденциальна и защищена профессиональной этикой психолога. Исключения составляют лишь случаи, когда есть угроза жизни вам или другим людям — в таких ситуациях я обязана предпринять необходимые меры безопасности."
    },
    {
      id: "item-5",
      question: "Можно ли работать онлайн?",
      answer: "Конечно! Онлайн-консультации так же эффективны, как и очные встречи. Это удобно, если у вас нет возможности приехать лично, вы находитесь в другом городе или просто предпочитаете домашнюю обстановку. Для онлайн-сессий мы используем безопасные платформы с защищенным соединением."
    },
    {
      id: "item-6",
      question: "Что если я не готов говорить о своих проблемах?",
      answer: "Это абсолютно нормально и понятно. Мы будем двигаться в вашем темпе, без принуждения. В начале работы мы создаем безопасное пространство доверия, где вы сможете постепенно открываться. Никто не будет заставлять вас делиться тем, к чему вы не готовы. Ваш комфорт и безопасность — мой главный приоритет."
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ответы на основные вопросы о психологической помощи и процессе работы
            </p>
          </div>

          {/* FAQ */}
          <Card className="trust-shadow border-0 mb-12">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className="border-border/50">
                    <AccordionTrigger className="text-left hover:text-primary hover:no-underline smooth-transition">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Дополнительная помощь */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="trust-shadow border-0">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-medium mb-3">
                  Остались вопросы?
                </h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  Если у вас есть вопросы, которые не вошли в этот список, 
                  я буду рада ответить на них лично.
                </p>
                <Button 
                  onClick={scrollToContact}
                  variant="outline"
                  className="w-full"
                >
                  Задать вопрос
                </Button>
              </CardContent>
            </Card>

            <Card className="healing-gradient border-0">
              <CardContent className="p-6 text-center">
                <div className="text-primary-foreground">
                  <h3 className="text-xl font-medium mb-3">
                    Готовы начать?
                  </h3>
                  <p className="text-primary-foreground/90 mb-6 text-sm">
                    Первый шаг — самый важный. Позвольте мне помочь вам 
                    на пути к внутренней гармонии и благополучию.
                  </p>
                  <Button 
                    onClick={scrollToContact}
                    variant="secondary"
                    size="lg"
                    className="bg-card hover:bg-card/90 text-foreground w-full"
                  >
                    Записаться на консультацию
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;