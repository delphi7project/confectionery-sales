import React from 'react';
import { Shield, Lock, Eye, UserCheck, FileText, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-green-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Политика конфиденциальности</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы серьезно относимся к защите ваших персональных данных и соблюдаем 
              все требования законодательства РФ о персональных данных.
            </p>
          </div>
        </div>
      </section>

      {/* Основные принципы */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши принципы защиты данных</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Безопасность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Используем современные методы шифрования и защиты данных
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Конфиденциальность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Не передаем ваши данные третьим лицам без согласия
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Прозрачность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Четко объясняем, какие данные собираем и зачем
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Основной текст политики */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold mb-6">1. Общие положения</h2>
                  <p className="mb-4">
                    Настоящая Политика конфиденциальности персональных данных (далее – Политика) 
                    действует в отношении всей информации, которую ООО "SweetShop" (далее – Компания) 
                    может получить о пользователе во время использования им сайта sweetshop.ru.
                  </p>
                  <p className="mb-6">
                    Использование сайта означает безоговорочное согласие пользователя с настоящей 
                    Политикой и указанными в ней условиями обработки его персональной информации.
                  </p>

                  <h2 className="text-2xl font-bold mb-6">2. Персональная информация пользователей</h2>
                  <p className="mb-4">
                    Персональная информация пользователей, которую получает и обрабатывает Компания:
                  </p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Фамилия, имя, отчество</li>
                    <li>Номер телефона</li>
                    <li>Адрес электронной почты</li>
                    <li>Адрес доставки</li>
                    <li>Данные о заказах и покупках</li>
                    <li>IP-адрес и данные о браузере</li>
                    <li>Информация о посещенных страницах сайта</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-6">3. Цели обработки персональной информации</h2>
                  <p className="mb-4">
                    Компания обрабатывает персональную информацию пользователей в следующих целях:
                  </p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Обработка и выполнение заказов</li>
                    <li>Связь с пользователем для уточнения деталей заказа</li>
                    <li>Доставка товаров по указанному адресу</li>
                    <li>Информирование о статусе заказа</li>
                    <li>Предоставление клиентской поддержки</li>
                    <li>Улучшение качества обслуживания</li>
                    <li>Проведение маркетинговых исследований</li>
                    <li>Рассылка информационных материалов (при согласии)</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-6">4. Способы и сроки обработки персональной информации</h2>
                  <p className="mb-4">
                    Обработка персональных данных осуществляется с использованием средств автоматизации 
                    и без использования таких средств. Персональные данные обрабатываются в течение 
                    срока, необходимого для достижения целей обработки.
                  </p>
                  <p className="mb-6">
                    Персональные данные уничтожаются при достижении целей обработки или в случае 
                    утраты необходимости в достижении этих целей, если иное не предусмотрено 
                    федеральным законом.
                  </p>

                  <h2 className="text-2xl font-bold mb-6">5. Защита персональной информации</h2>
                  <p className="mb-4">
                    Компания принимает необходимые и достаточные организационные и технические меры 
                    для защиты персональной информации пользователя от неправомерного или случайного 
                    доступа, уничтожения, изменения, блокирования, копирования, распространения.
                  </p>
                  <p className="mb-6">
                    Меры защиты включают:
                  </p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Шифрование данных при передаче (SSL-сертификат)</li>
                    <li>Ограничение доступа к персональным данным</li>
                    <li>Регулярное обновление систем безопасности</li>
                    <li>Обучение сотрудников правилам обработки персональных данных</li>
                    <li>Контроль за соблюдением требований законодательства</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-6">6. Передача персональных данных третьим лицам</h2>
                  <p className="mb-4">
                    Компания не продает, не обменивает и не передает персональные данные пользователей 
                    третьим лицам, за исключением случаев:
                  </p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Получения явного согласия пользователя</li>
                    <li>Требования законодательства РФ</li>
                    <li>Передачи службам доставки для выполнения заказа</li>
                    <li>Передачи платежным системам для обработки платежей</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-6">7. Права пользователя</h2>
                  <p className="mb-4">
                    Пользователь имеет право:
                  </p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Получать информацию о обработке своих персональных данных</li>
                    <li>Требовать уточнения, блокирования или уничтожения персональных данных</li>
                    <li>Отзывать согласие на обработку персональных данных</li>
                    <li>Обращаться в уполномоченный орган по защите прав субъектов персональных данных</li>
                    <li>Обжаловать действия или бездействие в суде</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-6">8. Cookies и веб-аналитика</h2>
                  <p className="mb-4">
                    Сайт использует файлы cookies для улучшения работы и анализа посещаемости. 
                    Cookies не содержат персональную информацию и не могут быть использованы 
                    для идентификации отдельного пользователя.
                  </p>
                  <p className="mb-6">
                    Пользователь может отключить cookies в настройках браузера, однако это может 
                    повлиять на функциональность сайта.
                  </p>

                  <h2 className="text-2xl font-bold mb-6">9. Изменения в Политике конфиденциальности</h2>
                  <p className="mb-4">
                    Компания оставляет за собой право вносить изменения в настоящую Политику. 
                    При внесении изменений в актуальной редакции указывается дата последнего обновления.
                  </p>
                  <p className="mb-6">
                    Новая редакция Политики вступает в силу с момента ее размещения на сайте, 
                    если иное не предусмотрено новой редакцией Политики.
                  </p>

                  <h2 className="text-2xl font-bold mb-6">10. Контактная информация</h2>
                  <p className="mb-4">
                    По всем вопросам, связанным с обработкой персональных данных, 
                    вы можете обращаться к нам:
                  </p>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Email: privacy@sweetshop.ru</li>
                    <li>Телефон: +7 (495) 123-45-67</li>
                    <li>Адрес: г. Москва, ул. Сладкая, д. 123</li>
                  </ul>

                  <div className="bg-gray-100 p-4 rounded-lg mt-8">
                    <p className="text-sm text-gray-600">
                      <strong>Дата последнего обновления:</strong> 15 января 2024 года
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Контакты для вопросов */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Вопросы по защите данных?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Если у вас есть вопросы о том, как мы обрабатываем ваши персональные данные, 
            свяжитесь с нашим специалистом по защите данных
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              <span>+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center justify-center">
              <FileText className="w-5 h-5 mr-2" />
              <span>privacy@sweetshop.ru</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;