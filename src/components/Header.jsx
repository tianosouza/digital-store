import { useState } from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import logo from '../assets/images/logo-header.svg';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-[44] w-[253] mr-2"
            />
          </div>
          
          <div className="relative flex-1 max-w-lg mx-6">
            <input
              type="text"
              placeholder="Pesquisar produto..."
              className="w-full bg-gray-100 rounded-lg pl-4 pr-10 py-2 text-sm text-gray-700 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search size={18} />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-pink-600 transition text-sm underline">
              Cadastre-se
            </a>
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded text-sm">
              Entrar
            </button>
            <div className="relative">
              <button className="text-gray-700 hover:text-pink-600 transition">
                <ShoppingCart size={22} />
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <nav className="flex">
            <a href="#" className="mr-6 text-sm border-b-2 border-pink-600 font-medium text-pink-600 pb-2">
              Home
            </a>
            <a href="#" className="mr-6 text-sm text-gray-700 hover:text-pink-600 transition pb-2">
              Produtos
            </a>
            <a href="#" className="mr-6 text-sm text-gray-700 hover:text-pink-600 transition pb-2">
              Categorias
            </a>
            <a href="#" className="mr-6 text-sm text-gray-700 hover:text-pink-600 transition pb-2">
              Meus Pedidos
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}