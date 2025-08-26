import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🍰</span>
              </div>
              <h3 className="text-xl font-bold">SweetShop</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Кондитерская мастерская с более чем 10-летним опытом создания 
              изысканных десертов и сладостей для особых моментов.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li><Link to="/catalog" className="text-gray-300 hover:text-pink-400 transition-colors">Каталог</Link></li>
              <li><Link to="/custom-orders" className="text-gray-300 hover:text-pink-400 transition-colors">Индивидуальные заказы</Link></li>
              <li><Link to="/recipes" className="text-gray-300 hover:text-pink-400 transition-colors">Рецепты</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-pink-400 transition-colors">Блог</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-pink-400 transition-colors">Карьера</Link></li>
              <li><Link to="/wholesale" className="text-gray-300 hover:text-pink-400 transition-colors">Оптовые продажи</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Обслуживание</h4>
            <ul className="space-y-2">
              <li><Link to="/delivery" className="text-gray-300 hover:text-pink-400 transition-colors">Доставка</Link></li>
              <li><Link to="/payment" className="text-gray-300 hover:text-pink-400 transition-colors">Оплата</Link></li>
              <li><Link to="/returns" className="text-gray-300 hover:text-pink-400 transition-colors">Возврат</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-pink-400 transition-colors">FAQ</Link></li>
              <li><Link to="/support" className="text-gray-300 hover:text-pink-400 transition-colors">Поддержка</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-pink-400 transition-colors">Конфиденциальность</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-pink-400" />
                <span className="text-gray-300">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-pink-400" />
                <span className="text-gray-300">info@sweetshop.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-pink-400" />
                <span className="text-gray-300">Москва, ул. Сладкая, 123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-pink-400" />
                <span className="text-gray-300">Пн-Вс: 9:00 - 21:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 SweetShop. Все права защищены. | 
            <Link to="/terms" className="hover:text-pink-400 transition-colors ml-1">Условия использования</Link> | 
            <Link to="/privacy" className="hover:text-pink-400 transition-colors ml-1">Политика конфиденциальности</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;