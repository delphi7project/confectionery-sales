import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, HelpCircle, Phone, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'Как оформить заказ?',
    answer: 'Вы можете оформить заказ несколькими способами: через наш сайт, по телефону +7 (495) 123-45-67 или в нашем магазине. Для заказа через сайт добавьте товары в корзину, заполните контактные данные и выберите способ доставки.',
    category: 'Заказы'
  },
  {
    id: '2',
    question: 'Какие способы оплаты вы принимаете?',
    answer: 'Мы принимаем оплату банковскими картами (Visa, MasterCard, МИР), электронными кошельками (Apple Pay, Google Pay, Яндекс.Деньги), наличными курьеру и банковским переводом для корпоративных клиентов.',
    category: 'Оплата'
  },
  {
    id: '3',
    question: 'Сколько стоит доставка?',
    answer: 'Доставка по Москве в пределах МКАД стоит 300 ₽. За МКАД до 10 км - 500 ₽, свыше 10 км - 50 ₽/км. Доставка бесплатная при заказе от 2000 ₽. Экспресс-доставка в течение 2 часов - 800 ₽.',
    category: 'Доставка'
  },
  {
    id: '4',
    question: 'Как долго готовится заказ?',
    answer: 'Стандартные товары из каталога готовятся 2-4 часа. Индивидуальные торты - от 24 часов до 3 дней в зависимости от сложности. Срочные заказы возможны за доплату 50% к стоимости.',
    category: 'Заказы'
  },
  {
    id: '5',
    question: 'Можно ли вернуть товар?',
    answer: 'Да, вы можете вернуть товар в течение 24 часов с момента получения, если он не соответствует заказу, поврежден при доставке или имеет дефекты. Товар должен быть в оригинальной упаковке.',
    category: 'Возврат'
  },
  {
    id: '6',
    question: 'Есть ли у вас торты без сахара?',
    answer: 'Да, у нас есть специальная линейка диетических тортов без сахара, с заменителями сахара и для диабетиков. Также мы можем приготовить торт по индивидуальному заказу с учетом ваших диетических требований.',
    category: 'Продукция'
  },
  {
    id: '7',
    question: 'Делаете ли вы торты для аллергиков?',
    answer: 'Да, мы готовим торты без глютена, без молочных продуктов, без яиц и без орехов. При заказе обязательно укажите все аллергены, которые нужно исключить.',
    category: 'Продукция'
  },
  {
    id: '8',
    question: 'Можно ли заказать торт на завтра?',
    answer: 'Стандартные торты из каталога можно заказать на завтра до 18:00 текущего дня. Индивидуальные торты требуют больше времени. Для срочных заказов действует доплата 50%.',
    category: 'Заказы'
  },
  {
    id: '9',
    question: 'Работаете ли вы с корпоративными клиентами?',
    answer: 'Да, у нас есть специальные условия для корпоративных клиентов: скидки от 10%, отсрочка платежа, работа с НДС, персональный менеджер. Свяжитесь с нами по телефону +7 (495) 123-45-67 доб. 2.',
    category: 'Корпоративным'
  },
  {
    id: '10',
    question: 'Как хранить торты?',
    answer: 'Торты с кремом нужно хранить в холодильнике при температуре +2...+6°C не более 3 дней. Бисквитные торты без крема можно хранить при комнатной температуре 1-2 дня. Подробные рекомендации указаны на упаковке.',
    category: 'Хранение'
  },
  {
    id: '11',
    question: 'Можно ли изменить или отменить заказ?',
    answer: 'Заказ можно изменить или отменить не позднее чем за 2 часа до начала приготовления. Для стандартных товаров - в течение 1 часа после оформления, для индивидуальных - в течение 4 часов.',
    category: 'Заказы'
  },
  {
    id: '12',
    question: 'Проводите ли вы мастер-классы?',
    answer: 'Да, мы регулярно проводим мастер-классы по приготовлению тортов, декорированию, работе с мастикой и шоколадом. Расписание и запись на сайте в разделе "Мастер-классы".',
    category: 'Мастер-классы'
  }
];

const categories = ['Все', 'Заказы', 'Доставка', 'Оплата', 'Продукция', 'Возврат', 'Корпоративным', 'Хранение', 'Мастер-классы'];

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const filteredFAQ = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Все' || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Часто задаваемые вопросы</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Здесь вы найдете ответы на самые популярные вопросы о наших услугах, 
              доставке, оплате и продукции.
            </p>
          </div>
        </div>
      </section>

      {/* Поиск и фильтры */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Поиск по вопросам..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 text-lg py-3"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQ.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFAQ.map((item) => (
                  <AccordionItem key={item.id} value={item.id} className="bg-white rounded-lg border">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <div className="flex items-start space-x-4">
                        <HelpCircle className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                        <span className="font-semibold">{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="pl-9">
                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Вопросы не найдены</h3>
                <p className="text-gray-600">
                  Попробуйте изменить поисковый запрос или выбрать другую категорию
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Популярные категории */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные темы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedCategory('Заказы')}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="w-5 h-5 text-pink-600 mr-2" />
                  Заказы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Как оформить заказ, изменить или отменить его
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedCategory('Доставка')}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="w-5 h-5 text-blue-600 mr-2" />
                  Доставка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Стоимость, сроки и зоны доставки
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedCategory('Продукция')}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="w-5 h-5 text-green-600 mr-2" />
                  Продукция
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Состав, аллергены, диетические варианты
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedCategory('Оплата')}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="w-5 h-5 text-purple-600 mr-2" />
                  Оплата
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Способы оплаты и возврат средств
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedCategory('Корпоративным')}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="w-5 h-5 text-yellow-600 mr-2" />
                  Корпоративным
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Условия для корпоративных клиентов
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedCategory('Мастер-классы')}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircle className="w-5 h-5 text-red-600 mr-2" />
                  Мастер-классы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Обучение кондитерскому мастерству
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Не нашли ответ */}
      <section className="py-16 bg-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Не нашли ответ на свой вопрос?</h2>
          <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нашей службой поддержки, и мы с радостью поможем вам
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-pink-600">
              <Mail className="w-5 h-5 mr-2" />
              Написать нам
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;