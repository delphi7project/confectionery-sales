import React from 'react';
import { RotateCcw, Clock, CheckCircle, AlertCircle, Phone, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const Returns: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-100 to-pink-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Возврат товаров</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы заботимся о качестве наших изделий, но если что-то пошло не так, 
              мы готовы решить любую проблему и вернуть вам деньги.
            </p>
          </div>
        </div>
      </section>

      {/* Условия возврата */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Условия возврата</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Срок возврата</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  В течение 24 часов с момента получения заказа
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Состояние товара</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Товар должен быть в оригинальной упаковке и не поврежден
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RotateCcw className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Возврат денег</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Деньги возвращаются в течение 3-5 рабочих дней
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle>Документы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Необходим чек или номер заказа для оформления возврата
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Основания для возврата */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Основания для возврата</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Полный возврат средств</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Товар не соответствует заказу</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Нарушение сроков доставки по нашей вине</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Товар поврежден при транспортировке</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Обнаружен брак или дефект</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Нарушение температурного режима</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Возврат невозможен</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Товар частично или полностью употреблен</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Прошло более 24 часов с момента получения</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Товар изготовлен по индивидуальному заказу</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Нарушена упаковка без уважительной причины</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Отсутствует чек или номер заказа</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Процедура возврата */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как оформить возврат</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Свяжитесь с нами</h3>
              <p className="text-gray-600">
                Позвоните или напишите в течение 24 часов после получения заказа
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Опишите проблему</h3>
              <p className="text-gray-600">
                Расскажите, что не так с заказом, приложите фото при необходимости
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Передайте товар</h3>
              <p className="text-gray-600">
                Курьер заберет товар или привезите его в наш магазин
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Получите возврат</h3>
              <p className="text-gray-600">
                Деньги вернутся на карту в течение 3-5 рабочих дней
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Форма возврата */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Заявка на возврат</h2>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Номер заказа *</label>
                      <Input placeholder="SW-123456" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Дата заказа *</label>
                      <Input type="date" required />
                    </div>
                  </div>
                  
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
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input type="email" placeholder="your@email.com" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Причина возврата *</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите причину" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wrong-order">Товар не соответствует заказу</SelectItem>
                        <SelectItem value="damaged">Товар поврежден</SelectItem>
                        <SelectItem value="quality">Проблемы с качеством</SelectItem>
                        <SelectItem value="delivery">Нарушение сроков доставки</SelectItem>
                        <SelectItem value="temperature">Нарушение температурного режима</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Описание проблемы *</label>
                    <Textarea 
                      placeholder="Подробно опишите, что не так с заказом..."
                      rows={5}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Фотографии товара</label>
                    <Input type="file" accept="image/*" multiple />
                    <p className="text-sm text-gray-500 mt-1">
                      Приложите фото товара для быстрого рассмотрения заявки
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Способ возврата товара</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите способ" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="courier">Заберет курьер</SelectItem>
                        <SelectItem value="pickup">Привезу сам в магазин</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку на возврат
                  </Button>
                  
                  <p className="text-sm text-gray-600 text-center">
                    * Обязательные поля. Мы рассмотрим заявку в течение 2 часов.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="py-16 bg-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Нужна помощь с возвратом?</h2>
          <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нашей службой поддержки, и мы поможем решить любую проблему
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-pink-600">
              <Mail className="w-5 h-5 mr-2" />
              support@sweetshop.ru
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Returns;