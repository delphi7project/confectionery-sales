import React from 'react';
import { Award, Users, Heart, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-100 to-purple-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">О нашей кондитерской</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SweetShop — это место, где рождаются сладкие мечты и создаются незабываемые моменты. 
              Уже более 10 лет мы радуем наших клиентов изысканными десертами ручной работы.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Наша история</h2>
              <p className="text-gray-600 mb-6">
                Все началось в 2014 году, когда основательница нашей кондитерской Анна Петрова 
                решила превратить свою страсть к выпечке в семейный бизнес. Начав с небольшой 
                домашней кухни, она создавала торты для друзей и знакомых.
              </p>
              <p className="text-gray-600 mb-6">
                Сегодня SweetShop — это команда из 15 профессиональных кондитеров, которые 
                каждый день создают более 100 различных видов десертов. Мы гордимся тем, что 
                сохранили семейный подход к каждому заказу, несмотря на рост компании.
              </p>
              <p className="text-gray-600">
                Наша миссия — делать каждый день немного слаще, создавая десерты, которые 
                приносят радость и объединяют людей за общим столом.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg"
                alt="Наша кондитерская"
                className="rounded-lg"
              />
              <img
                src="https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg"
                alt="Процесс приготовления"
                className="rounded-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-pink-600" />
                </div>
                <CardTitle>Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Используем только лучшие ингредиенты и проверенные временем рецепты
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Команда</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Наша команда — это семья профессионалов, объединенных любовью к кондитерскому искусству
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle>Любовь</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  В каждый десерт мы вкладываем частичку души и безграничную любовь к своему делу
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Традиции</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Сочетаем классические рецепты с современными технологиями и трендами
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наша команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                  alt="Анна Петрова"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Анна Петрова</h3>
                <p className="text-pink-600 mb-3">Основатель и главный кондитер</p>
                <p className="text-gray-600 text-sm">
                  15 лет опыта в кондитерском деле. Автор уникальных рецептов и вдохновитель команды.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
                  alt="Михаил Иванов"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Михаил Иванов</h3>
                <p className="text-pink-600 mb-3">Шеф-кондитер</p>
                <p className="text-gray-600 text-sm">
                  Специалист по тортам и сложным десертам. Выпускник Французской кулинарной академии.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <img
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
                  alt="Елена Смирнова"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">Елена Смирнова</h3>
                <p className="text-pink-600 mb-3">Декоратор</p>
                <p className="text-gray-600 text-sm">
                  Художник по образованию, создает невероятные украшения для наших десертов.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-pink-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши достижения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-pink-100">Лет на рынке</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-pink-100">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-pink-100">Наград и призов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-pink-100">Видов десертов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Сертификаты и награды</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Лучшая кондитерская Москвы</h3>
                <p className="text-gray-600">Премия "Вкус года" 2023</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Award className="w-16 h-16 text-silver mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Сертификат качества ISO</h3>
                <p className="text-gray-600">Международный стандарт качества</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Award className="w-16 h-16 text-bronze mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Эко-сертификат</h3>
                <p className="text-gray-600">За использование натуральных ингредиентов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;