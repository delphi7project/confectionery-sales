import React, { useState } from 'react';
import { Calendar, Clock, Users, Award, ChefHat, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';

interface Masterclass {
  id: string;
  title: string;
  description: string;
  image: string;
  instructor: string;
  duration: number;
  maxParticipants: number;
  price: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  includes: string[];
  schedule: string[];
}

const masterclasses: Masterclass[] = [
  {
    id: '1',
    title: 'Основы кондитерского дела',
    description: 'Изучите базовые техники приготовления бисквитов, кремов и украшения тортов',
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg',
    instructor: 'Анна Петрова',
    duration: 240,
    maxParticipants: 8,
    price: 4500,
    difficulty: 'beginner',
    category: 'Торты',
    includes: ['Все ингредиенты', 'Инструменты', 'Рецепты', 'Готовый торт домой'],
    schedule: ['15 января 14:00', '22 января 14:00', '29 января 14:00']
  },
  {
    id: '2',
    title: 'Французские макаруны',
    description: 'Освойте технику приготовления идеальных макарунов с различными начинками',
    image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg',
    instructor: 'Михаил Иванов',
    duration: 180,
    maxParticipants: 6,
    price: 3800,
    difficulty: 'intermediate',
    category: 'Печенье',
    includes: ['Миндальная мука', 'Красители', 'Начинки', '20 макарунов домой'],
    schedule: ['18 января 16:00', '25 января 16:00', '1 февраля 16:00']
  },
  {
    id: '3',
    title: 'Шоколадные конфеты ручной работы',
    description: 'Создайте эксклюзивные шоколадные конфеты с уникальными начинками',
    image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg',
    instructor: 'Елена Смирнова',
    duration: 150,
    maxParticipants: 10,
    price: 3200,
    difficulty: 'beginner',
    category: 'Конфеты',
    includes: ['Шоколад премиум', 'Формы', 'Начинки', 'Упаковка'],
    schedule: ['20 января 11:00', '27 января 11:00', '3 февраля 11:00']
  },
  {
    id: '4',
    title: 'Декорирование тортов мастикой',
    description: 'Научитесь создавать сложные украшения из мастики и работать с красителями',
    image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg',
    instructor: 'Анна Петрова',
    duration: 300,
    maxParticipants: 6,
    price: 5500,
    difficulty: 'advanced',
    category: 'Декорирование',
    includes: ['Мастика', 'Красители', 'Инструменты', 'Декорированный торт'],
    schedule: ['21 января 10:00', '28 января 10:00', '4 февраля 10:00']
  }
];

const Masterclasses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const categories = ['Торты', 'Печенье', 'Конфеты', 'Декорирование'];
  const difficulties = [
    { value: 'beginner', label: 'Начинающий' },
    { value: 'intermediate', label: 'Средний' },
    { value: 'advanced', label: 'Продвинутый' }
  ];

  const filteredMasterclasses = masterclasses.filter(mc => {
    const matchesCategory = selectedCategory === 'all' || mc.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || mc.difficulty === selectedDifficulty;
    return matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'Начинающий';
      case 'intermediate': return 'Средний';
      case 'advanced': return 'Продвинутый';
      default: return difficulty;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-100 to-red-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Мастер-классы</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Изучите секреты кондитерского мастерства от профессиональных шеф-кондитеров. 
              Практические занятия в небольших группах с индивидуальным подходом.
            </p>
          </div>
        </div>
      </section>

      {/* Фильтры */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все категории</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Уровень сложности" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Любой уровень</SelectItem>
                {difficulties.map(difficulty => (
                  <SelectItem key={difficulty.value} value={difficulty.value}>
                    {difficulty.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Мастер-классы */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredMasterclasses.map((masterclass) => (
              <Card key={masterclass.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={masterclass.image}
                    alt={masterclass.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className={`absolute top-2 right-2 ${getDifficultyColor(masterclass.difficulty)}`}>
                    {getDifficultyText(masterclass.difficulty)}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{masterclass.category}</Badge>
                    <div className="text-2xl font-bold text-orange-600">
                      {masterclass.price} ₽
                    </div>
                  </div>
                  <CardTitle className="text-xl">{masterclass.title}</CardTitle>
                  <p className="text-gray-600">{masterclass.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <ChefHat className="w-4 h-4 mr-2" />
                      {masterclass.instructor}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {masterclass.duration} мин
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      До {masterclass.maxParticipants} чел
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      Сертификат
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">В стоимость включено:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {masterclass.includes.map((item, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Ближайшие даты:</h4>
                    <div className="space-y-1">
                      {masterclass.schedule.slice(0, 2).map((date, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          {date}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full">
                    Записаться на мастер-класс
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают наши мастер-классы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle>Профессиональные шефы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Обучение от опытных кондитеров с многолетним стажем
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Малые группы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Максимум 10 человек для индивидуального подхода
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Сертификат</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Получите сертификат о прохождении мастер-класса
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Все включено</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ингредиенты, инструменты и готовые изделия домой
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Форма записи */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Записаться на мастер-класс</h2>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя *</label>
                      <Input placeholder="Ваше имя" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Фамилия *</label>
                      <Input placeholder="Ваша фамилия" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон *</label>
                      <Input placeholder="+7 (___) ___-__-__" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input type="email" placeholder="your@email.com" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Мастер-класс *</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите мастер-класс" />
                      </SelectTrigger>
                      <SelectContent>
                        {masterclasses.map(mc => (
                          <SelectItem key={mc.id} value={mc.id}>
                            {mc.title} - {mc.price} ₽
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Предпочитаемая дата</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите дату" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15-jan">15 января 14:00</SelectItem>
                        <SelectItem value="18-jan">18 января 16:00</SelectItem>
                        <SelectItem value="20-jan">20 января 11:00</SelectItem>
                        <SelectItem value="21-jan">21 января 10:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Опыт в кондитерском деле</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите уровень" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Никогда не занимался</SelectItem>
                        <SelectItem value="beginner">Начинающий</SelectItem>
                        <SelectItem value="amateur">Любитель</SelectItem>
                        <SelectItem value="experienced">Опытный</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Дополнительные пожелания</label>
                    <Textarea 
                      placeholder="Расскажите о ваших целях, особых требованиях или вопросах..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Записаться на мастер-класс
                  </Button>
                  
                  <p className="text-sm text-gray-600 text-center">
                    * Обязательные поля. После отправки заявки мы свяжемся с вами для подтверждения записи.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Отзывы участников</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Потрясающий мастер-класс! Анна очень доступно объясняет все техники. 
                  Теперь могу делать торты дома не хуже магазинных!"
                </p>
                <div className="font-semibold">Мария Иванова</div>
                <div className="text-sm text-gray-500">Мастер-класс "Основы кондитерского дела"</div>
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
                  "Макаруны всегда казались чем-то недостижимым, но Михаил показал, 
                  что это вполне реально! Отличная атмосфера и результат."
                </p>
                <div className="font-semibold">Алексей Петров</div>
                <div className="text-sm text-gray-500">Мастер-класс "Французские макаруны"</div>
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
                  "Елена - настоящий мастер своего дела! Конфеты получились изумительные, 
                  а главное - я поняла принципы и могу повторить дома."
                </p>
                <div className="font-semibold">Ольга Смирнова</div>
                <div className="text-sm text-gray-500">Мастер-класс "Шоколадные конфеты"</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Вопросы по мастер-классам?</h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами, и мы поможем выбрать подходящий мастер-класс 
            и ответим на все ваши вопросы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Calendar className="w-5 h-5 mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-orange-600">
              masterclass@sweetshop.ru
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Masterclasses;