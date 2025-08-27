import React from 'react';
import { Package, Truck, Calculator, Users, Award, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const Wholesale: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Оптовые продажи</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Специальные условия для кафе, ресторанов, отелей и других предприятий. 
              Качественные кондитерские изделия по выгодным ценам с доставкой.
            </p>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Преимущества оптового сотрудничества</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Выгодные цены</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Скидки до 40% при заказе от 50 000 ₽. Чем больше заказ, тем выгоднее цена.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Бесплатная доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Бесплатная доставка по Москве и области при заказе от 30 000 ₽.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Все сертификаты качества, соблюдение ГОСТ и санитарных норм.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle>Широкий ассортимент</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Более 100 видов кондитерских изделий: торты, пирожные, конфеты.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle>Персональный менеджер</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Индивидуальный подход, консультации и поддержка на всех этапах.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-pink-600" />
                </div>
                <CardTitle>Быстрая обработка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Обработка заказов в течение 2 часов, оперативная связь.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Условия сотрудничества */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Условия сотрудничества</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Скидочная система</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span>От 10 000 ₽</span>
                    <span className="font-semibold text-blue-600">5% скидка</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span>От 30 000 ₽</span>
                    <span className="font-semibold text-green-600">15% скидка</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span>От 50 000 ₽</span>
                    <span className="font-semibold text-purple-600">25% скидка</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                    <span>От 100 000 ₽</span>
                    <span className="font-semibold text-pink-600">40% скидка</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Условия оплаты</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Безналичный расчет с НДС</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Отсрочка платежа до 14 дней для постоянных клиентов</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Предоплата 50% для новых клиентов</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Полный пакет документов</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Работаем с НДС и без НДС</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Категории товаров */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Категории товаров</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg"
                  alt="Торты"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-lg mb-2">Торты</h3>
                <p className="text-gray-600 text-sm">
                  Бисквитные, муссовые, чизкейки
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg"
                  alt="Пирожные"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-lg mb-2">Пирожные</h3>
                <p className="text-gray-600 text-sm">
                  Эклеры, профитроли, тарталетки
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg"
                  alt="Конфеты"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-lg mb-2">Конфеты</h3>
                <p className="text-gray-600 text-sm">
                  Трюфели, пралине, шоколад
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg"
                  alt="Макаруны"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-lg mb-2">Макаруны</h3>
                <p className="text-gray-600 text-sm">
                  Французские макаруны разных вкусов
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Форма заявки */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Оставить заявку на сотрудничество</h2>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Название компании *</label>
                      <Input placeholder="ООО 'Название'" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">ИНН</label>
                      <Input placeholder="1234567890" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Контактное лицо *</label>
                      <Input placeholder="Иван Иванов" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Должность</label>
                      <Input placeholder="Директор" />
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
                    <label className="block text-sm font-medium mb-2">Тип бизнеса *</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип бизнеса" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cafe">Кафе</SelectItem>
                        <SelectItem value="restaurant">Ресторан</SelectItem>
                        <SelectItem value="hotel">Отель</SelectItem>
                        <SelectItem value="catering">Кейтеринг</SelectItem>
                        <SelectItem value="retail">Розничная торговля</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Планируемый объем заказов в месяц</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите объем" />
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
                    <label className="block text-sm font-medium mb-2">Интересующие категории товаров</label>
                    <Textarea 
                      placeholder="Торты, пирожные, конфеты..."
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Дополнительная информация</label>
                    <Textarea 
                      placeholder="Особые требования, пожелания, вопросы..."
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

      {/* Контакты для оптовиков */}
      <section className="py-16 bg-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Контакты отдела оптовых продаж</h2>
          <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для получения подробной информации о сотрудничестве
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-pink-100">+7 (495) 123-45-67 доб. 2</p>
            </div>
            <div>
              <Package className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-pink-100">wholesale@sweetshop.ru</p>
            </div>
            <div>
              <Users className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Менеджер</h3>
              <p className="text-pink-100">Елена Петрова</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wholesale;