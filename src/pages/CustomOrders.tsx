import React from 'react';
import { Cake, Heart, Star, Clock, Users, Gift } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const CustomOrders: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-100 to-purple-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Индивидуальные заказы</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Создаем уникальные десерты по вашим пожеланиям. Торты на заказ, 
              персонализированные сладости и эксклюзивные композиции для особых моментов.
            </p>
          </div>
        </div>
      </section>

      {/* Типы заказов */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Что мы можем создать для вас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cake className="w-8 h-8 text-pink-600" />
                </div>
                <CardTitle className="text-center">Свадебные торты</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Многоярусные торты для самого важного дня в вашей жизни
                </p>
                <p className="text-pink-600 font-semibold">От 5000 ₽</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-center">Детские торты</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Яркие и веселые торты с любимыми персонажами
                </p>
                <p className="text-pink-600 font-semibold">От 2500 ₽</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-center">Корпоративные торты</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Торты для корпоративных мероприятий и праздников
                </p>
                <p className="text-pink-600 font-semibold">От 3000 ₽</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-center">Романтические десерты</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Изысканные десерты для романтических свиданий
                </p>
                <p className="text-pink-600 font-semibold">От 1500 ₽</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle className="text-center">Тематические торты</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Торты в стиле любимых фильмов, игр или хобби
                </p>
                <p className="text-pink-600 font-semibold">От 3500 ₽</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-center">Срочные заказы</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Готовим торты за 24 часа (доплата 50%)
                </p>
                <p className="text-pink-600 font-semibold">+50% к стоимости</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Процесс заказа */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как мы работаем</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Консультация</h3>
              <p className="text-gray-600">
                Обсуждаем ваши пожелания, размер, дизайн и бюджет
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Эскиз</h3>
              <p className="text-gray-600">
                Создаем эскиз будущего торта и согласовываем детали
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Изготовление</h3>
              <p className="text-gray-600">
                Готовим ваш торт с любовью и вниманием к деталям
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Доставка</h3>
              <p className="text-gray-600">
                Доставляем готовый торт точно в срок
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Форма заказа */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Оформить индивидуальный заказ</h2>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя *</label>
                      <Input placeholder="Ваше имя" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон *</label>
                      <Input placeholder="+7 (___) ___-__-__" required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Тип торта *</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип торта" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Свадебный торт</SelectItem>
                        <SelectItem value="birthday">День рождения</SelectItem>
                        <SelectItem value="children">Детский торт</SelectItem>
                        <SelectItem value="corporate">Корпоративный</SelectItem>
                        <SelectItem value="romantic">Романтический</SelectItem>
                        <SelectItem value="themed">Тематический</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Количество порций *</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите количество" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10">10-15 порций</SelectItem>
                          <SelectItem value="20">20-25 порций</SelectItem>
                          <SelectItem value="30">30-35 порций</SelectItem>
                          <SelectItem value="50">50+ порций</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Дата мероприятия *</label>
                      <Input type="date" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Бюджет</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите бюджет" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2000-5000">2 000 - 5 000 ₽</SelectItem>
                        <SelectItem value="5000-10000">5 000 - 10 000 ₽</SelectItem>
                        <SelectItem value="10000-20000">10 000 - 20 000 ₽</SelectItem>
                        <SelectItem value="20000+">20 000+ ₽</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Описание заказа *</label>
                    <Textarea 
                      placeholder="Опишите ваши пожелания: дизайн, цвета, тематика, особые требования..."
                      rows={5}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Дополнительная информация</label>
                    <Textarea 
                      placeholder="Аллергии, диетические ограничения, особые пожелания..."
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                  
                  <p className="text-sm text-gray-600 text-center">
                    * Обязательные поля. Мы свяжемся с вами в течение 2 часов для уточнения деталей.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Галерея работ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши работы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative group overflow-hidden rounded-lg">
                <img
                  src={`https://images.pexels.com/photos/${1126359 + i}/pexels-photo-${1126359 + i}.jpeg`}
                  alt={`Торт ${i}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary">Подробнее</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomOrders;