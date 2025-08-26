import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Шоколадный торт "Прага"',
    description: 'Классический шоколадный торт с нежным кремом и абрикосовой прослойкой',
    price: 1200,
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
    category: 'torty',
    weight: '1 кг',
    ingredients: ['мука', 'какао', 'сахар', 'яйца', 'масло', 'абрикосовое варенье'],
    allergens: ['глютен', 'яйца', 'молоко'],
    inStock: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    name: 'Наполеон классический',
    description: 'Традиционный торт Наполеон с заварным кремом',
    price: 950,
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg',
    category: 'torty',
    weight: '1 кг',
    ingredients: ['мука', 'масло', 'яйца', 'молоко', 'сахар', 'ванилин'],
    allergens: ['глютен', 'яйца', 'молоко'],
    inStock: true,
    rating: 4.7,
    reviews: 89
  },
  {
    id: '3',
    name: 'Макаруны ассорти',
    description: 'Набор французских макарунов разных вкусов',
    price: 800,
    image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg',
    category: 'makaruny',
    weight: '200 г',
    ingredients: ['миндальная мука', 'сахарная пудра', 'белки', 'пищевые красители'],
    allergens: ['орехи', 'яйца'],
    inStock: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: '4',
    name: 'Эклеры с заварным кремом',
    description: 'Воздушные эклеры с нежным заварным кремом',
    price: 450,
    image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg',
    category: 'eklery',
    weight: '6 шт',
    ingredients: ['мука', 'масло', 'яйца', 'молоко', 'сахар'],
    allergens: ['глютен', 'яйца', 'молоко'],
    inStock: true,
    rating: 4.6,
    reviews: 73
  },
  {
    id: '5',
    name: 'Трюфели шоколадные',
    description: 'Изысканные шоколадные трюфели ручной работы',
    price: 1500,
    image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg',
    category: 'konfety',
    weight: '300 г',
    ingredients: ['темный шоколад', 'сливки', 'масло', 'коньяк'],
    allergens: ['молоко'],
    inStock: true,
    rating: 4.9,
    reviews: 201
  },
  {
    id: '6',
    name: 'Чизкейк Нью-Йорк',
    description: 'Классический американский чизкейк с ягодным соусом',
    price: 1100,
    image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg',
    category: 'torty',
    weight: '1 кг',
    ingredients: ['творожный сыр', 'печенье', 'яйца', 'сахар', 'ягоды'],
    allergens: ['глютен', 'яйца', 'молоко'],
    inStock: true,
    rating: 4.8,
    reviews: 95
  }
];

export const categories = [
  { id: 'torty', name: 'Торты', icon: '🎂' },
  { id: 'konfety', name: 'Конфеты', icon: '🍬' },
  { id: 'makaruny', name: 'Макаруны', icon: '🧁' },
  { id: 'eklery', name: 'Эклеры', icon: '🥐' },
  { id: 'pirozhnye', name: 'Пирожные', icon: '🍰' },
  { id: 'pechenye', name: 'Печенье', icon: '🍪' }
];