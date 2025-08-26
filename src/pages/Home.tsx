import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Clock, Gift, Users, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-100 to-purple-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-800 mb-6">
                Изысканные десерты для особых моментов
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Создаем сладкие воспоминания с 2014 года. Торты, конфеты и пирожные 
                ручной работы из натуральных ингредиентов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/catalog">
                    Посмотреть каталог
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/custom-orders">Индивидуальный заказ</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg"
                alt="Торт"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.9/5</span>
                  <span className="text-gray-600">1000+ отзывов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-pink-600" />
                </div>
                <CardTitle>Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Доставляем свежие десерты в день заказа по всей Москве
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Только натуральные ингредиенты и проверенные рецепты
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Свежесть</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Готовим каждый день, чтобы вы получили максимально свежий продукт
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Индивидуальный подход</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Создаем уникальные десерты по вашим пожеланиям
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Популярные товары</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Наши самые любимые клиентами десерты, которые покорят ваше сердце
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/catalog">
                Посмотреть все товары
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-pink-100">Лет опыта</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-pink-100">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-pink-100">Видов десертов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-pink-100">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">О нашей кондитерской</h2>
              <p className="text-gray-600 mb-6">
                SweetShop — это семейная кондитерская, которая уже более 10 лет радует 
                москвичей изысканными десертами. Мы верим, что каждый десерт должен быть 
                не только вкусным, но и красивым, создавая незабываемые моменты в жизни 
                наших клиентов.
              </p>
              <p className="text-gray-600 mb-8">
                Наша команда состоит из опытных кондитеров, которые постоянно 
                совершенствуют свое мастерство и создают новые рецепты, следуя 
                современным трендам в кондитерском искусстве.
              </p>
              <Button asChild>
                <Link to="/about">Узнать больше</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg"
                alt="Макаруны"
                className="rounded-lg"
              />
              <img
                src="https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg"
                alt="Трюфели"
                className="rounded-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Users className="w-12 h-12 text-pink-600 mb-4" />
                <CardTitle>Корпоративные заказы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Организуем сладкий стол для ваших корпоративных мероприятий
                </p>
                <Button variant="outline" asChild>
                  <Link to="/corporate">Подробнее</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="w-12 h-12 text-pink-600 mb-4" />
                <CardTitle>Мастер-классы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Обучаем искусству кондитерского мастерства детей и взрослых
                </p>
                <Button variant="outline" asChild>
                  <Link to="/masterclasses">Записаться</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Gift className="w-12 h-12 text-pink-600 mb-4" />
                <CardTitle>Праздничное оформление</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Создаем тематические десерты для любых праздников
                </p>
                <Button variant="outline" asChild>
                  <Link to="/events">Заказать</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Заказывали торт на свадьбу - это было произведение искусства! 
                  Гости до сих пор вспоминают этот невероятный вкус."
                </p>
                <div className="font-semibold">Анна Петрова</div>
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
                  "Регулярно заказываю макаруны для офиса. Коллеги в восторге! 
                  Качество всегда на высоте."
                </p>
                <div className="font-semibold">Михаил Иванов</div>
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
                  "Детский торт на день рождения превзошел все ожидания! 
                  Ребенок был в полном восторге."
                </p>
                <div className="font-semibold">Елена Смирнова</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Будьте в курсе новинок</h2>
          <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
            Подпишитесь на нашу рассылку и получайте информацию о новых десертах, 
            акциях и специальных предложениях
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-800"
            />
            <Button variant="secondary">
              Подписаться
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;