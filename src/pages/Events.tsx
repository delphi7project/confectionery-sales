import React from 'react';
import { Calendar, Gift, Heart, Users, Star, Cake, PartyPopper, Crown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const Events: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Праздничные мероприятия</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Создаем незабываемые сладкие моменты для ваших особых событий. 
              От детских дней рождения до свадеб - мы сделаем ваш праздник по-настоящему сладким!
            </p>
          </div>
        </div>
      </section>

      {/* Типы мероприятий */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Мероприятия, которые мы организуем</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <CardTitle>Свадьбы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Многоярусные торты, candy bar, сладкий стол для гостей
                </p>
                <p className="text-pink-600 font-semibold">От 15 000 ₽</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PartyPopper className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Дни рождения</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Тематические торты, капкейки, праздничное оформление
                </p>
                <p className="text-blue-600 font-semibold">От 5 000 ₽</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Детские праздники</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Яркие торты с персонажами, сладкие подарки, анимация
                </p>
                <p className="text-green-600 font-semibold">От 8 000 ₽</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Юбилеи</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Элегантные торты, классические десерты, торжественное оформление
                </p>
                <p className="text-purple-600 font-semibold">От 12 000 ₽</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle>Корпоративы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Фуршетные столы, брендированные торты, кофе-брейки
                </p>
                <p className="text-yellow-600 font-semibold">От 10 000 ₽</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle>Выпускные</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Торты для выпускников, сладкие столы, памятные десерты
                </p>
                <p className="text-red-600 font-semibold">От 7 000 ₽</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-indigo-600" />
                </div>
                <CardTitle>Крестины</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Нежные торты, тематическое оформление, семейные десерты
                </p>
                <p className="text-indigo-600 font-semibold">От 6 000 ₽</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cake className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle>Другие события</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Помолвки, годовщины, семейные торжества
                </p>
                <p className="text-orange-600 font-semibold">От 4 000 ₽</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Что входит в организацию */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Что входит в организацию</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Базовый пакет</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Консультация и планирование мероприятия</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Главный торт по индивидуальному дизайну</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Ассорти пирожных и капкейков</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Доставка и установка в день мероприятия</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Базовое оформление сладкого стола</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center text-purple-600">Премиум пакет</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Все услуги базового пакета</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Candy bar с разнообразными сладостями</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Персонализированные подарки гостям</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Профессиональное оформление зоны</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Координатор мероприятия</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Фотосъемка процесса и результата</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Процесс организации */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как мы организуем ваш праздник</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Консультация</h3>
              <p className="text-gray-600">
                Обсуждаем детали мероприятия, ваши пожелания и бюджет
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Планирование</h3>
              <p className="text-gray-600">
                Создаем концепцию, выбираем дизайн и составляем план
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Подготовка</h3>
              <p className="text-gray-600">
                Изготавливаем все десерты и готовим оформление
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Реализация</h3>
              <p className="text-gray-600">
                Доставляем, устанавливаем и координируем в день события
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Галерея мероприятий */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши работы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg', title: 'Свадьба Анны и Михаила', type: 'Свадьба' },
              { image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg', title: 'День рождения Софии (5 лет)', type: 'Детский праздник' },
              { image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg', title: 'Юбилей 50 лет', type: 'Юбилей' },
              { image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg', title: 'Корпоратив IT-компании', type: 'Корпоратив' },
              { image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg', title: 'Выпускной в детском саду', type: 'Выпускной' },
              { image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg', title: 'Крестины малыша', type: 'Крестины' }
            ].map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-white/90 text-xs px-2 py-1 rounded-full font-medium">
                      {event.type}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{event.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Форма заявки */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Заказать организацию мероприятия</h2>
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
                    <label className="block text-sm font-medium mb-2">Тип мероприятия *</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип мероприятия" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Свадьба</SelectItem>
                        <SelectItem value="birthday">День рождения</SelectItem>
                        <SelectItem value="children">Детский праздник</SelectItem>
                        <SelectItem value="anniversary">Юбилей</SelectItem>
                        <SelectItem value="corporate">Корпоратив</SelectItem>
                        <SelectItem value="graduation">Выпускной</SelectItem>
                        <SelectItem value="christening">Крестины</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Дата мероприятия *</label>
                      <Input type="date" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Количество гостей</label>
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
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Место проведения</label>
                    <Input placeholder="Адрес или название заведения" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Бюджет</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите бюджет" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5-15">5 000 - 15 000 ₽</SelectItem>
                        <SelectItem value="15-30">15 000 - 30 000 ₽</SelectItem>
                        <SelectItem value="30-50">30 000 - 50 000 ₽</SelectItem>
                        <SelectItem value="50+">50 000+ ₽</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Пожелания к мероприятию</label>
                    <Textarea 
                      placeholder="Опишите ваши пожелания: тематика, цветовая гамма, особые требования..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                  
                  <p className="text-sm text-gray-600 text-center">
                    * Обязательные поля. Мы свяжемся с вами в течение 2 часов для обсуждения деталей.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Отзывы о наших мероприятиях</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Наша свадьба была просто сказочной! Торт превзошел все ожидания, 
                  а candy bar стал настоящим украшением праздника. Спасибо за волшебство!"
                </p>
                <div className="font-semibold">Анна и Михаил</div>
                <div className="text-sm text-gray-500">Свадьба, 150 гостей</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "День рождения дочки прошел идеально! Торт с принцессами привел 
                  всех детей в восторг. Организация на высшем уровне!"
                </p>
                <div className="font-semibold">Елена Петрова</div>
                <div className="text-sm text-gray-500">День рождения, 25 детей</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Корпоративное мероприятие прошло отлично! Сотрудники были в восторге 
                  от разнообразия десертов. Обязательно обратимся еще!"
                </p>
                <div className="font-semibold">ООО 'ТехноСофт'</div>
                <div className="text-sm text-gray-500">Корпоратив, 80 человек</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Организация мероприятий</h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нашими специалистами по организации мероприятий
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Calendar className="w-5 h-5 mr-2" />
              +7 (495) 123-45-67 доб. 4
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-purple-600">
              events@sweetshop.ru
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;