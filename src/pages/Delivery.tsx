import React from 'react';
import { Truck, Clock, MapPin, CreditCard, Shield, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

const Delivery: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-green-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Доставка и оплата</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы доставляем свежие десерты быстро и бережно. Узнайте все о наших условиях доставки и способах оплаты.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Способы доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-center">Курьерская доставка</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Доставляем по всей Москве и области в удобное для вас время
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>В пределах МКАД:</span>
                    <Badge variant="secondary">300 ₽</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>За МКАД (до 10 км):</span>
                    <Badge variant="secondary">500 ₽</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>За МКАД (свыше 10 км):</span>
                    <Badge variant="secondary">50 ₽/км</Badge>
                  </div>
                </div>
                <p className="text-sm text-green-600 font-semibold">
                  Бесплатно при заказе от 2000 ₽
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-center">Самовывоз</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Забирайте заказы из нашей кондитерской на ул. Сладкая, 123
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Стоимость:</span>
                    <Badge variant="outline" className="text-green-600">Бесплатно</Badge>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>Пн-Вс: 9:00 - 21:00</p>
                    <p>Готовность: через 2-4 часа</p>
                  </div>
                </div>
                <p className="text-sm text-green-600 font-semibold">
                  Скидка 5% при самовывозе
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-center">Экспресс-доставка</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Срочная доставка в течение 2 часов по Москве
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>В пределах МКАД:</span>
                    <Badge variant="secondary">800 ₽</Badge>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>Время: 10:00 - 20:00</p>
                    <p>Только готовые десерты</p>
                  </div>
                </div>
                <p className="text-sm text-purple-600 font-semibold">
                  Доступно при заказе от 1000 ₽
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery Zones */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Зоны доставки</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Мы доставляем в:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-green-600">Бесплатная зона (от 2000 ₽)</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Центральный округ</li>
                    <li>• Северный округ</li>
                    <li>• Южный округ</li>
                    <li>• Восточный округ</li>
                    <li>• Западный округ</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-blue-600">Платная зона</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Подмосковье до 30 км</li>
                    <li>• Красногорск</li>
                    <li>• Одинцово</li>
                    <li>• Химки</li>
                    <li>• Мытищи</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Время доставки</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>В пределах МКАД</span>
                  <Badge>1-3 часа</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Ближнее Подмосковье</span>
                  <Badge>2-4 часа</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Дальнее Подмосковье</span>
                  <Badge>4-6 часов</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Предзаказ на завтра</span>
                  <Badge variant="outline">В любое время</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Способы оплаты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-center">Банковские карты</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm">
                  Visa, MasterCard, МИР. Оплата онлайн или курьеру
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-center">Электронные кошельки</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm">
                  Apple Pay, Google Pay, Samsung Pay, Яндекс.Деньги
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle className="text-center">Наличные</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm">
                  Оплата курьеру при получении заказа
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-center">Банковский перевод</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm">
                  Для корпоративных клиентов и крупных заказов
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery Rules */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Правила доставки</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Условия доставки</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Минимальная сумма заказа для доставки — 500 ₽
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Бесплатная доставка при заказе от 2000 ₽ в пределах МКАД
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Доставка осуществляется с 9:00 до 22:00 ежедневно
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Возможна доставка к определенному времени (+200 ₽)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Курьер ожидает получателя не более 15 минут
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Особые условия</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Торты доставляются в специальных термобоксах
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Многоярусные торты собираются на месте доставки
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Возможна доставка в офисы и на мероприятия
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Предоплата обязательна для заказов свыше 5000 ₽
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Отмена заказа возможна за 2 часа до доставки
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Delivery */}
      <section className="py-16 bg-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Вопросы по доставке?</h2>
          <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
            Наши менеджеры помогут выбрать оптимальный способ доставки и ответят на все вопросы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-pink-600">
              Заказать звонок
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Delivery;