import React, { useState } from 'react';
import { Clock, Users, ChefHat, Star, Search, Filter } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';

interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  prepTime: number;
  difficulty: 'easy' | 'medium' | 'hard';
  servings: number;
  rating: number;
  category: string;
  ingredients: string[];
  instructions: string[];
}

const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Классический шоколадный торт',
    description: 'Нежный шоколадный бисквит с кремом из темного шоколада',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
    prepTime: 120,
    difficulty: 'medium',
    servings: 8,
    rating: 4.8,
    category: 'Торты',
    ingredients: [
      '200г темного шоколада',
      '150г сливочного масла',
      '4 яйца',
      '150г сахара',
      '100г муки',
      '300мл сливок 33%'
    ],
    instructions: [
      'Растопите шоколад с маслом на водяной бане',
      'Взбейте яйца с сахаром до пышной массы',
      'Добавьте шоколадную смесь и муку',
      'Выпекайте при 180°C 25-30 минут',
      'Приготовьте крем из сливок и шоколада',
      'Соберите торт, промазав коржи кремом'
    ]
  },
  {
    id: '2',
    title: 'Французские макаруны',
    description: 'Воздушные миндальные печенья с различными начинками',
    image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg',
    prepTime: 180,
    difficulty: 'hard',
    servings: 20,
    rating: 4.9,
    category: 'Печенье',
    ingredients: [
      '100г миндальной муки',
      '200г сахарной пудры',
      '75г белков',
      '25г сахара',
      'Пищевые красители',
      'Начинка по вкусу'
    ],
    instructions: [
      'Просейте миндальную муку с сахарной пудрой',
      'Взбейте белки с сахаром до устойчивых пиков',
      'Аккуратно вмешайте сухие ингредиенты',
      'Отсадите на коврик и дайте подсохнуть',
      'Выпекайте при 150°C 12-15 минут',
      'Склейте половинки начинкой'
    ]
  },
  {
    id: '3',
    title: 'Тирамису',
    description: 'Классический итальянский десерт с кофе и маскарпоне',
    image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg',
    prepTime: 60,
    difficulty: 'easy',
    servings: 6,
    rating: 4.7,
    category: 'Десерты',
    ingredients: [
      '500г маскарпоне',
      '6 яичных желтков',
      '150г сахара',
      '400мл крепкого кофе',
      '200г печенья савоярди',
      'Какао для посыпки'
    ],
    instructions: [
      'Взбейте желтки с сахаром до бела',
      'Добавьте маскарпоне и перемешайте',
      'Быстро обмакните печенье в кофе',
      'Выложите слоями в форму',
      'Охладите в холодильнике 4 часа',
      'Посыпьте какао перед подачей'
    ]
  }
];

const Recipes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const categories = ['Торты', 'Печенье', 'Десерты', 'Конфеты', 'Пирожные'];
  const difficulties = [
    { value: 'easy', label: 'Легко' },
    { value: 'medium', label: 'Средне' },
    { value: 'hard', label: 'Сложно' }
  ];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || recipe.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'Легко';
      case 'medium': return 'Средне';
      case 'hard': return 'Сложно';
      default: return difficulty;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-100 to-pink-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Рецепты</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Делимся секретами приготовления наших лучших десертов. 
              Готовьте дома с профессиональными рецептами от наших кондитеров.
            </p>
          </div>
        </div>
      </section>

      {/* Фильтры */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Поиск рецептов..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
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
                <SelectValue placeholder="Сложность" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Любая сложность</SelectItem>
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

      {/* Рецепты */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe) => (
              <Card key={recipe.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className={`absolute top-2 right-2 ${getDifficultyColor(recipe.difficulty)}`}>
                    {getDifficultyText(recipe.difficulty)}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{recipe.category}</Badge>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm">{recipe.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{recipe.title}</CardTitle>
                  <p className="text-gray-600">{recipe.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {recipe.prepTime} мин
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {recipe.servings} порций
                    </div>
                    <div className="flex items-center">
                      <ChefHat className="w-4 h-4 mr-1" />
                      {getDifficultyText(recipe.difficulty)}
                    </div>
                  </div>
                  <Button className="w-full">
                    Посмотреть рецепт
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredRecipes.length === 0 && (
            <div className="text-center py-12">
              <ChefHat className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Рецепты не найдены</h3>
              <p className="text-gray-600">
                Попробуйте изменить параметры поиска
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Советы от шеф-кондитера */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Советы от шеф-кондитера</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Температура ингредиентов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Все ингредиенты должны быть комнатной температуры, если не указано иное. 
                  Это обеспечит лучшее смешивание и текстуру готового изделия.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Точность измерений</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  В кондитерском деле важна точность. Используйте кухонные весы 
                  для измерения ингредиентов - это гарантирует стабильный результат.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Качество продуктов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Используйте только свежие и качественные ингредиенты. 
                  Особенно это касается яиц, сливочного масла и шоколада.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recipes;