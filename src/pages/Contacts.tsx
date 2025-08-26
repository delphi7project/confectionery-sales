import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, Metro } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

const Contacts: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Контакты</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Свяжитесь с нами любым удобным способом. Мы всегда рады помочь и ответить на ваши вопросы.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Как с нами связаться</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-pink-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Телефон</h3>
                        <p className="text-gray-600 mb-1">+7 (495) 123-45-67</p>
                        <p className="text-gray-600 mb-1">+7 (495) 123-45-68</p>
                        <p className="text-sm text-gray-500">Ежедневно с 9:00 до 21:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Email</h3>
                        <p className="text-gray-600 mb-1">info@sweetshop.ru</p>
                        <p className="text-gray-600 mb-1">orders@sweetshop.ru</p>
                        <p className="text-sm text-gray-500">Отвечаем в течение 2 часов</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Адрес</h3>
                        <p className="text-gray-600 mb-1">г. Москва, ул. Сладкая, д. 123</p>
                        <p className="text-gray-600 mb-1">ТЦ "Сладкий рай", 2 этаж</p>
                        <p className="text-sm text-gray-500">Кондитерская и пункт самовывоза</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Режим работы</h3>
                        <p className="text-gray-600 mb-1">Понедельник - Воскресенье: 9:00 - 21:00</p>
                        <p className="text-gray-600 mb-1">Без выходных и праздников</p>
                        <p className="text-sm text-gray-500">Доставка до 22:00</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Напишите нам</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Имя</label>
                        <Input placeholder="Ваше имя" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Телефон</label>
                        <Input placeholder="+7 (___) ___-__-__" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Тема</label>
                      <Input placeholder="Тема сообщения" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <Textarea 
                        placeholder="Расскажите, чем мы можем помочь..."
                        rows={5}
                      />
                    </div>
                    <Button className="w-full">
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как нас найти</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Metro className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-center">Метро</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-2">Станция "Сладкая"</p>
                <p className="text-sm text-gray-500">5 минут пешком от выхода №3</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-center">На автомобиле</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-2">Парковка в ТЦ</p>
                <p className="text-sm text-gray-500">Первые 2 часа бесплатно</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-center">Ориентиры</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-2">Рядом с кинотеатром</p>
                <p className="text-sm text-gray-500">2 этаж, секция 2.15</p>
              </CardContent>
            </Card>
          </div>

          {/* Map placeholder */}
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Интерактивная карта</p>
              <p className="text-sm text-gray-400">г. Москва, ул. Сладкая, д. 123</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contacts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Специализированные отделы</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Отдел продаж</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-pink-600" />
                    +7 (495) 123-45-67 доб. 1
                  </p>
                  <p className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-pink-600" />
                    sales@sweetshop.ru
                  </p>
                  <p className="text-sm text-gray-500">
                    Консультации по товарам и оформление заказов
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Корпоративные заказы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-blue-600" />
                    +7 (495) 123-45-67 доб. 2
                  </p>
                  <p className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-blue-600" />
                    corporate@sweetshop.ru
                  </p>
                  <p className="text-sm text-gray-500">
                    Оптовые заказы и корпоративные мероприятия
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Служба поддержки</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-green-600" />
                    +7 (495) 123-45-67 доб. 3
                  </p>
                  <p className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-green-600" />
                    support@sweetshop.ru
                  </p>
                  <p className="text-sm text-gray-500">
                    Вопросы по доставке и качеству продукции
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Мы в социальных сетях</h2>
          <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
            Следите за новинками, акциями и закулисьем нашей кондитерской в социальных сетях
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="secondary" size="lg">
              Instagram
            </Button>
            <Button variant="secondary" size="lg">
              ВКонтакте
            </Button>
            <Button variant="secondary" size="lg">
              Telegram
            </Button>
            <Button variant="secondary" size="lg">
              YouTube
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;