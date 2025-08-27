import React from 'react';
import { Phone, Mail, MessageCircle, Clock, User, Headphones } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const Support: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Служба поддержки</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы всегда готовы помочь! Свяжитесь с нами любым удобным способом, 
              и наши специалисты решат любую проблему.
            </p>
          </div>
        </div>
      </section>

      {/* Способы связи */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как с нами связаться</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-600 mb-2">+7 (495) 123-45-67</p>
                <p className="text-gray-600 mb-4">Ежедневно с 9:00 до 21:00</p>
                <Button className="w-full">Позвонить</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-blue-600 mb-2">support@sweetshop.ru</p>
                <p className="text-gray-600 mb-4">Ответим в течение 2 часов</p>
                <Button variant="outline" className="w-full">Написать</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Онлайн-чат</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Быстрые ответы в реальном времени</p>
                <Button variant="outline" className="w-full">Открыть чат</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Время работы */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Время работы службы поддержки</h2>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-green-600 mr-3" />
                      <span className="font-semibold">Понедельник - Воскресенье</span>
                    </div>
                    <span className="text-green-600 font-semibold">9:00 - 21:00</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center">
                      <MessageCircle className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="font-semibold">Онлайн-чат</span>
                    </div>
                    <span className="text-blue-600 font-semibold">24/7</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-purple-600 mr-3" />
                      <span className="font-semibold">Email поддержка</span>
                    </div>
                    <span className="text-purple-600 font-semibold">24/7</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Форма обращения */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Написать в службу поддержки</h2>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя *</label>
                      <Input placeholder="Ваше имя" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <Input placeholder="+7 (___) ___-__-__" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input type="email" placeholder="your@email.com" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Тип обращения *</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип обращения" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="order">Вопрос по заказу</SelectItem>
                        <SelectItem value="delivery">Проблема с доставкой</SelectItem>
                        <SelectItem value="payment">Вопрос по оплате</SelectItem>
                        <SelectItem value="quality">Качество товара</SelectItem>
                        <SelectItem value="return">Возврат товара</SelectItem>
                        <SelectItem value="technical">Техническая проблема</SelectItem>
                        <SelectItem value="suggestion">Предложение</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Номер заказа</label>
                    <Input placeholder="SW-123456" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Тема обращения *</label>
                    <Input placeholder="Кратко опишите суть вопроса" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Подробное описание *</label>
                    <Textarea 
                      placeholder="Опишите вашу проблему или вопрос подробно..."
                      rows={5}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Приложить файлы</label>
                    <Input type="file" multiple accept="image/*,.pdf,.doc,.docx" />
                    <p className="text-sm text-gray-500 mt-1">
                      Поддерживаемые форматы: JPG, PNG, PDF, DOC, DOCX (до 10 МБ)
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Приоритет</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите приоритет" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Низкий</SelectItem>
                        <SelectItem value="normal">Обычный</SelectItem>
                        <SelectItem value="high">Высокий</SelectItem>
                        <SelectItem value="urgent">Срочный</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Отправить обращение
                  </Button>
                  
                  <p className="text-sm text-gray-600 text-center">
                    * Обязательные поля. Мы ответим в течение 2 часов в рабочее время.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Популярные вопросы */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные вопросы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Как отследить заказ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  После оформления заказа вы получите SMS с номером заказа. 
                  По этому номеру можно отследить статус на сайте или по телефону.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Что делать, если товар не подошел?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Свяжитесь с нами в течение 24 часов после получения. 
                  Мы организуем возврат или обмен товара.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Можно ли изменить адрес доставки?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Да, адрес можно изменить до начала приготовления заказа. 
                  Свяжитесь с нами как можно скорее.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Как получить чек?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Чек отправляется на email после оплаты. Также можно получить 
                  бумажный чек у курьера при доставке.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Команда поддержки */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наша команда поддержки</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Анна Смирнова</h3>
                <p className="text-pink-600 mb-3">Руководитель службы поддержки</p>
                <p className="text-gray-600 text-sm">
                  5 лет опыта в клиентском сервисе. Решает сложные вопросы и жалобы.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Михаил Петров</h3>
                <p className="text-blue-600 mb-3">Специалист по заказам</p>
                <p className="text-gray-600 text-sm">
                  Помогает с оформлением заказов, изменениями и отслеживанием.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Елена Иванова</h3>
                <p className="text-green-600 mb-3">Консультант онлайн-чата</p>
                <p className="text-gray-600 text-sm">
                  Отвечает на вопросы в чате и помогает выбрать подходящие товары.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Экстренная связь */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Экстренная связь</h2>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Если у вас срочная проблема с заказом в день мероприятия, 
            звоните по горячей линии
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              +7 (495) 123-45-99
            </Button>
            <p className="text-red-100 self-center">
              Работает 24/7 для экстренных случаев
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;