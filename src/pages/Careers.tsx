import React from 'react';
import { MapPin, Clock, Users, Heart, Award, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';

interface JobVacancy {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

const vacancies: JobVacancy[] = [
  {
    id: '1',
    title: 'Кондитер',
    department: 'Производство',
    location: 'Москва',
    type: 'Полная занятость',
    experience: '2-5 лет',
    salary: '80 000 - 120 000 ₽',
    description: 'Ищем талантливого кондитера для создания изысканных десертов и тортов',
    requirements: [
      'Опыт работы кондитером от 2 лет',
      'Знание классических техник кондитерского дела',
      'Умение работать с шоколадом и мастикой',
      'Креативность и внимание к деталям',
      'Медицинская книжка'
    ],
    benefits: [
      'Официальное трудоустройство',
      'Обучение новым техникам',
      'Премии за качество работы',
      'Корпоративные скидки'
    ]
  },
  {
    id: '2',
    title: 'Декоратор тортов',
    department: 'Дизайн',
    location: 'Москва',
    type: 'Полная занятость',
    experience: '1-3 года',
    salary: '60 000 - 90 000 ₽',
    description: 'Требуется декоратор для создания уникального дизайна тортов и десертов',
    requirements: [
      'Художественное образование приветствуется',
      'Опыт работы с мастикой и кремом',
      'Знание техник декорирования',
      'Портфолио работ',
      'Аккуратность и терпение'
    ],
    benefits: [
      'Творческая работа',
      'Гибкий график',
      'Материалы для творчества',
      'Участие в мастер-классах'
    ]
  },
  {
    id: '3',
    title: 'Менеджер по продажам',
    department: 'Продажи',
    location: 'Москва',
    type: 'Полная занятость',
    experience: '1-2 года',
    salary: '50 000 - 80 000 ₽',
    description: 'Ищем активного менеджера для работы с клиентами и развития продаж',
    requirements: [
      'Опыт работы в продажах',
      'Коммуникабельность',
      'Знание CRM систем',
      'Ориентация на результат',
      'Грамотная речь'
    ],
    benefits: [
      'Процент с продаж',
      'Обучение продажам',
      'Карьерный рост',
      'Дружный коллектив'
    ]
  }
];

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Карьера в SweetShop</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Присоединяйтесь к нашей команде профессионалов! Мы создаем не только 
              вкусные десерты, но и отличную рабочую атмосферу для развития и роста.
            </p>
          </div>
        </div>
      </section>

      {/* Почему мы */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему стоит работать с нами</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <CardTitle>Дружная команда</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Работаем как одна большая семья, поддерживаем друг друга
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Профессиональный рост</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Обучение новым техникам, участие в конкурсах и выставках
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Гибкий график</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Возможность работать в удобное время, баланс работы и жизни
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Социальный пакет</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Полный соцпакет, корпоративные мероприятия, скидки
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Вакансии */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Открытые вакансии</h2>
          <div className="space-y-6">
            {vacancies.map((vacancy) => (
              <Card key={vacancy.id}>
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">{vacancy.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">{vacancy.department}</Badge>
                        <Badge variant="outline">
                          <MapPin className="w-3 h-3 mr-1" />
                          {vacancy.location}
                        </Badge>
                        <Badge variant="outline">
                          <Clock className="w-3 h-3 mr-1" />
                          {vacancy.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-pink-600 mb-1">
                        {vacancy.salary}
                      </div>
                      <div className="text-sm text-gray-600">
                        Опыт: {vacancy.experience}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{vacancy.description}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Требования:</h4>
                      <ul className="space-y-2">
                        {vacancy.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-600">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Мы предлагаем:</h4>
                      <ul className="space-y-2">
                        {vacancy.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t">
                    <Button>
                      Откликнуться на вакансию
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Форма отклика */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Отправить резюме</h2>
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
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input type="email" placeholder="your@email.com" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон *</label>
                      <Input placeholder="+7 (___) ___-__-__" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Желаемая позиция *</label>
                    <Input placeholder="Например: Кондитер" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Опыт работы</label>
                    <Textarea 
                      placeholder="Расскажите о своем опыте работы..."
                      rows={4}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Дополнительная информация</label>
                    <Textarea 
                      placeholder="Расскажите о себе, своих навыках и мотивации..."
                      rows={4}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Резюме</label>
                    <Input type="file" accept=".pdf,.doc,.docx" />
                    <p className="text-sm text-gray-500 mt-1">
                      Поддерживаемые форматы: PDF, DOC, DOCX (до 5 МБ)
                    </p>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Отправить резюме
                  </Button>
                  
                  <p className="text-sm text-gray-600 text-center">
                    * Обязательные поля. Мы свяжемся с вами в течение 3 рабочих дней.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Корпоративная культура */}
      <section className="py-16 bg-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Наша корпоративная культура</h2>
          <p className="text-pink-100 mb-8 max-w-3xl mx-auto">
            В SweetShop мы ценим креативность, профессионализм и командную работу. 
            Каждый сотрудник — важная часть нашего успеха, и мы создаем условия 
            для раскрытия потенциала каждого.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-pink-100">Сотрудников в команде</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10</div>
              <div className="text-pink-100">Лет работы</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-pink-100">Довольных сотрудников</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;