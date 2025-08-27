import React from 'react';
import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-100 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Условия использования</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Правила и условия использования сайта SweetShop и наших услуг. 
              Пожалуйста, внимательно ознакомьтесь с данными условиями.
            </p>
          </div>
        </div>
      </section>

      {/* Основные принципы */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Основные принципы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Справедливость</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Честные и прозрачные условия для всех пользователей
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Гарантируем высокое качество продукции и сервиса
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Прозрачность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Четкие правила без скрытых условий и доплат
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle>Ответственность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Несем ответственность за качество и своевременность
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Основной текст условий */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold mb-6">1. Общие положения</h2>
                  <p className="mb-4">
                    Настоящие Условия использования (далее – Условия) регулируют отношения между 
                    ООО "SweetShop" (далее – Компания) и пользователями сайта sweetshop.ru 
                    (далее – Сайт) при использовании Сайта и заказе товаров.
                  </p>
                  <p className="mb-6">
                    Использование Сайта означает полное и безоговорочное принятие пользователем 
                    настоящих Условий. Если вы не согласны с какими-либо положениями Условий, 
                    не используйте Сайт.
                  </p>

                  <h2 className="text-2xl font-bold mb-6">2. Определения</h2>
                  <ul className="list-disc pl-6 mb-6">
                    <li><strong>Сайт</strong> – интернет-ресурс sweetshop.ru</li>
                    <li><strong>Пользователь</strong> – физическое или юридическое лицо, использующее Сайт</li>
                    <li><strong>Товар</strong> – кондитерские изделия, представленные на Сайте</li>
                    <li><strong>Заказ</strong> – оформленная пользователем заявка на приобретение товара</li>
                    <li><strong>Договор</strong> – договор купли-продажи товара между Компанией и Пользователем</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-6">3. Использование Сайта</h2>
                  <p className="mb-4">
                    Пользователь обязуется:
                  </p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Предоставлять достоверную информацию при регистрации и оформлении заказов</li>
                    <li>Не использовать Сайт в незаконных целях</li>
                    <li>Не нарушать работу Сайта и не предпринимать попыток несанкционированного доступа</li>
                    <li>Соблюдать права интеллектуальной собственности</li>
                    <li>Не размещать запрещенный контент в отзывах и комментариях</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-6">4. Оформление и выполнение заказов</h2>
                  <p className="mb-4">
                    <strong>4.1. Оформление заказа</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Заказ считается оформленным после получения Компанией заявки от Пользователя</li>
                    <li>Компания вправе отказать в выполнении заказа при отсутствии товара</li>
                    <li>Все цены на Сайте указаны в рублях РФ и включают НДС</li>
                  </ul>

                  <p className="mb-4">
                    <strong>4.2. Изменение и отмена заказа</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Заказ можно изменить или отменить до начала его приготовления</li>
                    <li>Для стандартных товаров – в течение 1 часа после оформления</li>
                    <li>Для индивидуальных заказов – в течение 4 часов после оформления</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-6">5. Цены и оплата</h2>
                  <p className="mb-4">
                    <strong>5.1. Цены</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Цены на товары могут изменяться без предварительного уведомления</li>
                    <li>Цена заказа фиксируется в момент его подтверждения</li>
                    <li>Стоимость доставки рассчитывается отдельно</li>
                  </ul>

                  <p className="mb-4">
                    <strong>5.2. Оплата</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Оплата производится способами, указанными на Сайте</li>
                    <li>При оплате картой средства списываются после подтверждения заказа</li>
                    <li>При оплате наличными – в момент получения товара</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-6">6. Доставка</h2>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Доставка осуществляется в сроки, указанные при оформлении заказа</li>
                    <li>Риск случайной гибели товара переходит к Покупателю в момент передачи товара</li>
                    <li>При отсутствии Покупателя товар может быть возвращен, доставка оплачивается повторно</li>
                    <li>Компания не несет ответственности за задержки, вызванные форс-мажорными обстоятельствами</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-6">7. Качество товара и гарантии</h2>
                  <p className="mb-4">
                    <strong>7.1. Качество</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Компания гарантирует соответствие товара заявленным характеристикам</li>
                    <li>Все товары изготавливаются из качественных ингредиентов</li>
                    <li>Соблюдаются все санитарные нормы и требования</li>
                  </ul>

                  <p className="mb-4">
                    <strong>7.2. Претензии по качеству</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Претензии принимаются в течение 24 часов с момента получения товара</li>
                    <li>Претензии должны быть подтверждены фотографиями</li>
                    <li>Компания рассматривает претензии в течение 24 часов</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-6">8. Возврат и обмен</h2>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Возврат возможен в случаях, предусмотренных законодательством РФ</li>
                    <li>Товар надлежащего качества возврату не подлежит</li>
                    <li>При обнаружении недостатков товар подлежит замене или возврату</li>
                    <li>Возврат денежных средств осуществляется в течение 10 рабочих дней</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-6">9. Ответственность сторон</h2>
                  <p className="mb-4">
                    <strong>9.1. Ответственность Компании</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Компания несет ответственность за качество товара</li>
                    <li>Компания не несет ответственности за ущерб от неправильного хранения товара</li>
                    <li>Ответственность ограничена стоимостью товара</li>
                  </ul>

                  <p className="mb-4">
                    <strong>9.2. Ответственность Пользователя</strong>
                  </p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Пользователь несет ответственность за достоверность предоставленной информации</li>
                    <li>Пользователь обязан оплатить заказ в установленные сроки</li>
                    <li>Пользователь несет ответственность за нарушение настоящих Условий</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-6">10. Интеллектуальная собственность</h2>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Все материалы Сайта защищены авторским правом</li>
                    <li>Использование материалов без согласия Компании запрещено</li>
                    <li>Товарные знаки принадлежат их правообладателям</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-6">11. Персональные данные</h2>
                  <p className="mb-6">
                    Обработка персональных данных осуществляется в соответствии с 
                    Политикой конфиденциальности, размещенной на Сайте.
                  </p>

                  <h2 className="text-2xl font-bold mb-6">12. Разрешение споров</h2>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Споры решаются путем переговоров</li>
                    <li>При невозможности достижения соглашения споры рассматриваются в суде</li>
                    <li>Применяется законодательство Российской Федерации</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-6">13. Заключительные положения</h2>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Условия могут изменяться Компанией в одностороннем порядке</li>
                    <li>Изменения вступают в силу с момента публикации на Сайте</li>
                    <li>При изменении Условий пользователи уведомляются на Сайте</li>
                  </ul>

                  <div className="bg-gray-100 p-4 rounded-lg mt-8">
                    <p className="text-sm text-gray-600">
                      <strong>Дата последнего обновления:</strong> 15 января 2024 года
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      <strong>Контакты:</strong> ООО "SweetShop", г. Москва, ул. Сладкая, д. 123
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Телефон:</strong> +7 (495) 123-45-67, <strong>Email:</strong> info@sweetshop.ru
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;