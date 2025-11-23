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
      answer: "На первой консультации мы знакомимся: я рассказываю о себе и отвечаю на ваши вопросы. Вы делитесь тем, что привело вас на консультацию, и мы формируем запрос на работу.\n" +
        "Все встречи проходят в форме беседы: я слушаю, задаю вопросы, разбираем проблему, ориентируемся на ваши чувства и эмоции, ищем пути решения.\n" +
        "При желании я могу предложить упражнения — например, что-то представить или нарисовать; вы всегда можете отказаться.\n" +
        "На консультациях вы получаете понимание, искренний интерес и поддержку, без осуждения и критики."
    },
    {
      id: "item-2",
      question: "Сколько раз в неделю нужно ходить к психологу?",
      answer: "Частота встреч зависит от вашего запроса и ситуации. " +
        "Обычно оптимальным вариантом является одна консультация в неделю. " +
        "Если состояние или жизненные обстоятельства сложные, можно увеличить до двух встреч в неделю. " +
        "Иногда встреч бывает меньше — например, из-за личного графика или финансовых возможностей, " +
        "тогда встречи проводятся раз в две недели. Точный график согласуется на первой консультации " +
        "и при необходимости корректируется по мере ваших потребностей.\n" +
        "Регулярность встреч важна, так как она обеспечивает более стабильный и стойкий результат."
    },
    {
      id: "item-3",
      question: "Сколько времени длится терапия?",
      answer: "Длительность терапии индивидуальна. С точечными вопросами можно справиться за несколько встреч, " +
        "но действительно серьёзные изменения не происходят быстро — то, что вы хотите изменить, вы формировали годами," +
        " и за пару встреч этого не сделать. Более глубокие изменения могут потребовать месяцы работы; например, " +
        "работа с депрессией или тревожными расстройствами обычно занимает от 6 месяцев и больше.\n" +
        "Помните, что психике нужно время для изменений. Это похоже на рост дерева: мы сеем зернышко, поливаем, " +
        "ухаживаем и подкармливаем. Даже если пытаться торопить рост, дерево не вырастет быстрее, чем может. " +
        "Так и с внутренними изменениями — дайте себе время и заботу.\n" +
        ""
    },
    {
      id: "item-4",
      question: "Гарантируется ли конфиденциальность?",
      answer: "Абсолютно да. Конфиденциальность — основа психологической работы. " +
        "Вся информация, которую вы делите со мной, строго конфиденциальна и защищена профессиональной этикой психолога. " +
        "Исключения составляют лишь случаи, когда речь идет о преступлении или есть угроза жизни вам или другим людям — " +
        "в таких ситуациях я обязана предпринять необходимые меры безопасности."
    },
    {
      id: "item-5",
      question: "Как записаться на консультацию или игру?",
      answer: "Вы можете выбрать любой удобный способ записи: позвонить по телефону или написать в Telegram или Instagram.\n" +
        "Я предложу свободные окошки на ближайшую неделю и уточню формат работы — онлайн или очно. Если встреча очная, подскажу, как удобнее добраться до офиса.\n" +
        "Оплата производится после консультации на расчётный счёт. " +
        ""
    },
    {
      id: "item-6",
      question: "Можно ли отменить консультацию?",
      answer: "Да, консультацию можно отменить или перенести при условии уведомления за 24 часа до её начала."
    },
     {
      id: "item-7",
      question: "Поставят ли меня на учет?",
      answer: "Нет, я не врач и не ставлю диагнозы, а тем более не могу ставить на учёт.\n" +
        "Если я замечаю, что у клиента есть проблемы, требующие помощи психиатра, " +
        "могу только предложить обратиться к соответствующему специалисту. " +
        "Принудительно направить кого-либо я не могу."
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
              Ответы на популярные вопросы о консультациях и процессе работы
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
                  <h3 className="text-xl mb-3 text-primary-foreground">
                    Готовы начать?
                  </h3>
                  <p className="text-primary-foreground/90 mb-6 text-sm">
                    Первый шаг самый важный — решившись на него, вы уже начинаете менять свою жизнь..
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
