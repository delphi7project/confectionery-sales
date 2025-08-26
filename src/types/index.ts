export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  weight?: string;
  ingredients?: string[];
  allergens?: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerInfo: CustomerInfo;
  deliveryInfo: DeliveryInfo;
  status: 'pending' | 'confirmed' | 'preparing' | 'delivering' | 'delivered';
  createdAt: Date;
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
}

export interface DeliveryInfo {
  address: string;
  city: string;
  postalCode: string;
  deliveryTime: string;
  notes?: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  prepTime: number;
  difficulty: 'easy' | 'medium' | 'hard';
  servings: number;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  image: string;
  date: Date;
  category: string;
}