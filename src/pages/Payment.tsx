import React from 'react';
import { CreditCard, Smartphone, Banknote, Building, Shield, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Payment: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Способы оплаты</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы принимаем все популярные способы оплаты для вашего удобства. 
              Все платежи защищены современными системами безопасности.
            </p>
          </div>
        </div>
      </section>

      {/* Способы оплаты */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Доступные способы оплаты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Банковские карты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Visa, MasterCard, МИР
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="w-full">Онлайн оплата</Badge>
                  <Badge variant="outline" className="w-full">Оплата курьеру</Badge>
                </div>
                <p className="text-sm text-green-600 mt-2">Без комиссии</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Мобильные платежи</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Быстрая оплата телефоном
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="w-full">Apple Pay</Badge>
                  <Badge variant="outline" className="w-full">Google Pay</Badge>
                  <Badge variant="outline" className="w-full">Samsung Pay</Badge>
                </div>
                <p className="text-sm text-green-600 mt-2">Мгновенно</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Banknote className="w-8 h-8 text-yellow-600" />
                </div>
                <CardTitle>Наличные</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Оплата курьеру при получении
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="w-full">При доставке</Badge>
                  <Badge variant="outline" className="w-full">В магазине</Badge>
                </div>
                <p className="text-sm text-blue-600 mt-2">Точная сумма</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Безналичный расчет</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Для юридических лиц
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="w-full">С НДС</Badge>
                  <Badge variant="outline" className="w-full">Без НДС</Badge>
                </div>
                <p className="text-sm text-purple-600 mt-2">Отсрочка до 14 дней</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Безопасность платежей */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Безопасность платежей</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Ваши платежи защищены</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>SSL-шифрование</strong>
                    <p className="text-gray-600">Все данные передаются в зашифрованном виде</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>PCI DSS сертификация</strong>
                    <p className="text-gray-600">Соответствие международным стандартам безопасности</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="w-6 h-6 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>3D Secure</strong>
                    <p className="text-gray-600">Дополнительная защита банковских карт</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="w-6 h-6 text-red-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <strong>Мониторинг транзакций</strong>
                    <p className="text-gray-600">Автоматическое выявление подозрительных операций</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg"
                alt="Безопасные платежи"
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Процесс оплаты */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как происходит оплата</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <CardTitle className="text-center">Выбор способа</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  При оформлении заказа выберите удобный способ оплаты
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <CardTitle className="text-center">Безопасная оплата</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Введите данные в защищенной форме или оплатите при получении
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <CardTitle className="text-center">Подтверждение</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Получите SMS и email с подтверждением оплаты и статусом заказа
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Условия оплаты */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Условия оплаты</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Что можно оплачивать
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Все товары из каталога</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Индивидуальные заказы</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Доставку</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Мастер-классы</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Организацию мероприятий</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <Clock className="w-6 h-6 mr-2" />
                  Сроки списания средств
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Онлайн оплата:</strong> сразу после подтверждения</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Наличные:</strong> при получении заказа</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Безналичный:</strong> по договору</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Предоплата:</strong> для заказов от 5000 ₽</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Детали по каждому способу */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Подробности по способам оплаты</h2>
          
          <div className="space-y-8">
            {/* Банковские карты */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <CreditCard className="w-8 h-8 text-blue-600 mr-3" />
                  Банковские карты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">Принимаем карты:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Visa (все типы)
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        MasterCard (все типы)
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        МИР
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Дебетовые и кредитные карты
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Особенности:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Shield className="w-4 h-4 text-blue-600 mr-2" />
                        3D Secure защита
                      </li>
                      <li className="flex items-center">
                        <Clock className="w-4 h-4 text-blue-600 mr-2" />
                        Мгновенное списание
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Без комиссии для покупателя
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Возврат на карту при отмене
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Электронные кошельки */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Smartphone className="w-8 h-8 text-green-600 mr-3" />
                  Электронные кошельки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">Доступные сервисы:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Яндекс.Деньги
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        WebMoney
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        QIWI Кошелек
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        PayPal (для иностранных клиентов)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Преимущества:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Clock className="w-4 h-4 text-blue-600 mr-2" />
                        Мгновенная оплата
                      </li>
                      <li className="flex items-center">
                        <Shield className="w-4 h-4 text-blue-600 mr-2" />
                        Высокий уровень защиты
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Удобство использования
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        История всех операций
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Наличные */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Banknote className="w-8 h-8 text-yellow-600 mr-3" />
                  Оплата наличными
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">Где можно оплатить:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        При доставке курьеру
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        В нашем магазине при самовывозе
                      </li>
                      <li className="flex items-center">
                        <AlertCircle className="w-4 h-4 text-yellow-600 mr-2" />
                        Требуется точная сумма
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Выдается чек
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Ограничения:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <AlertCircle className="w-4 h-4 text-yellow-600 mr-2" />
                        Максимум 100 000 ₽ за заказ
                      </li>
                      <li className="flex items-center">
                        <AlertCircle className="w-4 h-4 text-yellow-600 mr-2" />
                        Предоплата для заказов от 10 000 ₽
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        Скидка 3% при оплате наличными
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Возврат средств */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Возврат средств</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Сроки возврата</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Clock className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <strong>На банковскую карту:</strong>
                          <p className="text-gray-600">3-5 рабочих дней</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Clock className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <strong>В электронный кошелек:</strong>
                          <p className="text-gray-600">1-3 рабочих дня</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Clock className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <strong>Наличными:</strong>
                          <p className="text-gray-600">В день обращения</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Условия возврата</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span>Возврат на тот же способ оплаты</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span>Без комиссии для покупателя</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span>Уведомление о возврате по SMS и email</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span>Стоимость доставки не возвращается</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Вопросы по оплате?</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Наши специалисты помогут выбрать удобный способ оплаты и ответят на все вопросы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center">
              <CreditCard className="w-5 h-5 mr-2" />
              <span>+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center justify-center">
              <Building className="w-5 h-5 mr-2" />
              <span>payment@sweetshop.ru</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;