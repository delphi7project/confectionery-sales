import React from 'react';
import { Building, Users, Calendar, Gift, Award, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const Corporate: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Корпоративные заказы</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Организуем сладкий стол для ваших корпоративных мероприятий. 
              Специальные условия, индивидуальный подход и гарантия качества.
            </p>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши услуги для бизнеса</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-center">Корпоративные мероприятия</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Сладкий стол для конференций, презентаций, тимбилдингов
                </p>
                <p className="text-blue-600 font-semibold">От 500 ₽/чел</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-center">Офисные праздники</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Дни рождения сотрудников, профессиональные праздники
                </p>
                <p className="text-green-600 font-semibold">От 300 ₽/чел</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-center">Регулярные поставки</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Ежедневные поставки свежей выпечки в офис
                </p>
                <p className="text-purple-600 font-semibold">Скидка до 20%</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-center">Корпоративные подарки</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Подарочные наборы для партнеров и клиентов
                </p>
                <p className="text-red-600 font-semibold">От 1000 ₽/набор</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle className="text-center">VIP обслуживание</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Персональный менеджер и эксклюзивные условия
                </p>
                <p className="text-yellow-600 font-semibold">Индивидуально</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-pink-600" />
                </div>
                <CardTitle className="text-center">Консультации</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Помощь в планировании и организации мероприятий
                </p>
                <p className="text-pink-600 font-semibold">Бесплатно</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Преимущества сотрудничества</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Скидки до 25%</strong> при заказе от 50 000 ₽</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Персональный менеджер</strong> для каждого корпоративного клиента</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Отсрочка платежа</strong> до 30 дней для постоянных клиентов</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Бесплатная доставка</strong> по Москве при заказе от 20 000 ₽</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Работа с НДС</strong> и полный пакет документов</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Гибкие условия</strong> оплаты и доставки</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg"
                alt="Корпоративный торт"
                className="rounded-lg"
              />
              <img
                src="https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg"
                alt="Сладкий стол"
                className="rounded-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Тарифы */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Тарифные планы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-2xl">Стартовый</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold">5%</span>
                  <span className="text-gray-600"> скидка</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Заказы от 10 000 ₽
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Стандартная доставка
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Email поддержка
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Базовый ассортимент
                  </li>
                </ul>
                <Button className="w-full">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-600">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-blue-600">Бизнес</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold text-blue-600">15%</span>
                  <span className="text-gray-600"> скидка</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Заказы от 30 000 ₽
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Приоритетная доставка
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Персональный менеджер
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Расширенный ассортимент
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Отсрочка платежа 14 дней
                  </li>
                </ul>
                <Button className="w-full">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center text-2xl text-purple-600">Премиум</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold text-purple-600">25%</span>
                  <span className="text-gray-600"> скидка</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Заказы от 100 000 ₽
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    VIP доставка
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Выделенный менеджер
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Эксклюзивные товары
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Отсрочка платежа 30 дней
                  </li>
                </ul>
                <Button className="w-full">Выбрать план</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Форма заявки */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Оставить заявку</h2>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Название компании *</label>
                      <Input placeholder="ООО 'Название'" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Сфера деятельности</label>
                      <Input placeholder="IT, Финансы, Производство..." />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Контактное лицо *</label>
                      <Input placeholder="Иван Иванов" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Должность</label>
                      <Input placeholder="Менеджер по закупкам" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон *</label>
                      <Input placeholder="+7 (___) ___-__-__" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input type="email" placeholder="company@email.com" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Тип мероприятия *</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип мероприятия" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="conference">Конференция</SelectItem>
                        <SelectItem value="presentation">Презентация</SelectItem>
                        <SelectItem value="teambuilding">Тимбилдинг</SelectItem>
                        <SelectItem value="birthday">День рождения сотрудника</SelectItem>
                        <SelectItem value="holiday">Корпоративный праздник</SelectItem>
                        <SelectItem value="meeting">Деловая встреча</SelectItem>
                        <SelectItem value="regular">Регулярные поставки</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Количество человек</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите количество" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10-20">10-20 человек</SelectItem>
                          <SelectItem value="20-50">20-50 человек</SelectItem>
                          <SelectItem value="50-100">50-100 человек</SelectItem>
                          <SelectItem value="100+">100+ человек</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Дата мероприятия</label>
                      <Input type="date" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Бюджет</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите бюджет" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10-30">10 000 - 30 000 ₽</SelectItem>
                        <SelectItem value="30-50">30 000 - 50 000 ₽</SelectItem>
                        <SelectItem value="50-100">50 000 - 100 000 ₽</SelectItem>
                        <SelectItem value="100+">100 000+ ₽</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Пожелания к заказу</label>
                    <Textarea 
                      placeholder="Опишите ваши пожелания: тип десертов, диетические ограничения, оформление..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                  
                  <p className="text-sm text-gray-600 text-center">
                    * Обязательные поля. Наш менеджер свяжется с вами в течение 2 часов.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Отдел корпоративных продаж</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нашими специалистами для получения персонального предложения
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-blue-100">+7 (495) 123-45-67 доб. 2</p>
            </div>
            <div>
              <Building className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-blue-100">corporate@sweetshop.ru</p>
            </div>
            <div>
              <Users className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Менеджер</h3>
              <p className="text-blue-100">Михаил Петров</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Corporate;