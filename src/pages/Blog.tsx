import React, { useState } from 'react';
import { Calendar, User, Tag, ArrowRight, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: number;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Тренды в кондитерском искусстве 2024',
    excerpt: 'Какие направления будут популярны в этом году: от минимализма до ярких цветов',
    content: 'Полный текст статьи...',
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg',
    author: 'Анна Петрова',
    date: '2024-01-15',
    category: 'Тренды',
    tags: ['дизайн', 'тренды', 'кондитерское искусство'],
    readTime: 5
  },
  {
    id: '2',
    title: 'Секреты идеального бисквита',
    excerpt: 'Пошаговое руководство по приготовлению воздушного и нежного бисквита',
    content: 'Полный текст статьи...',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
    author: 'Михаил Иванов',
    date: '2024-01-10',
    category: 'Рецепты',
    tags: ['бисквит', 'основы', 'техника'],
    readTime: 8
  },
  {
    id: '3',
    title: 'Как выбрать торт для свадьбы',
    excerpt: 'Полное руководство по выбору свадебного торта: от размера до дизайна',
    content: 'Полный текст статьи...',
    image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg',
    author: 'Елена Смирнова',
    date: '2024-01-05',
    category: 'Свадьбы',
    tags: ['свадьба', 'выбор торта', 'советы'],
    readTime: 6
  },
  {
    id: '4',
    title: 'История макарунов: от Франции до России',
    excerpt: 'Увлекательная история французского десерта и его путь в российскую кулинарию',
    content: 'Полный текст статьи...',
    image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg',
    author: 'Анна Петрова',
    date: '2024-01-01',
    category: 'История',
    tags: ['макаруны', 'история', 'франция'],
    readTime: 7
  },
  {
    id: '5',
    title: 'Детские торты: безопасность и красота',
    excerpt: 'Как создать красивый и безопасный торт для детского праздника',
    content: 'Полный текст статьи...',
    image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg',
    author: 'Михаил Иванов',
    date: '2023-12-28',
    category: 'Детские торты',
    tags: ['дети', 'безопасность', 'праздник'],
    readTime: 4
  },
  {
    id: '6',
    title: 'Шоколад в кондитерском деле',
    excerpt: 'Виды шоколада, их особенности и применение в различных десертах',
    content: 'Полный текст статьи...',
    image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg',
    author: 'Елена Смирнова',
    date: '2023-12-25',
    category: 'Ингредиенты',
    tags: ['шоколад', 'ингредиенты', 'качество'],
    readTime: 9
  }
];

const categories = ['Все', 'Тренды', 'Рецепты', 'Свадьбы', 'История', 'Детские торты', 'Ингредиенты'];

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'Все' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Блог SweetShop</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Секреты кондитерского мастерства, интересные истории, полезные советы 
              и вдохновение для создания сладких шедевров.
            </p>
          </div>
        </div>
      </section>

      {/* Поиск и фильтры */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Поиск статей..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Главная статья */}
      {filteredPosts.length > 0 && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <img
                  src={filteredPosts[0].image}
                  alt={filteredPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="p-8">
                  <Badge className="mb-4">{filteredPosts[0].category}</Badge>
                  <h2 className="text-3xl font-bold mb-4">{filteredPosts[0].title}</h2>
                  <p className="text-gray-600 mb-6">{filteredPosts[0].excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{filteredPosts[0].author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{formatDate(filteredPosts[0].date)}</span>
                    <span>{filteredPosts[0].readTime} мин чтения</span>
                  </div>
                  <Button>
                    Читать далее
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Список статей */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-gray-500">{post.readTime} мин</span>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    Читать статью
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Статьи не найдены</h3>
              <p className="text-gray-600">
                Попробуйте изменить параметры поиска или выбрать другую категорию
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Подписка на блог */}
      <section className="py-16 bg-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Подпишитесь на наш блог</h2>
          <p className="text-pink-100 mb-8 max-w-2xl mx-auto">
            Получайте новые статьи, рецепты и советы от наших кондитеров прямо на почту
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Ваш email"
              className="flex-1 text-gray-800"
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

export default Blog;