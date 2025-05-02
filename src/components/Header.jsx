import { useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
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
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-light-gray-2-color">
              <SearchOutlinedIcon />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-primary-color transition text-sm underline">
              Cadastre-se
            </a>
            <button className="bg-primary-color hover:bg-secondary-color text-white px-4 py-2 rounded text-sm">
              Entrar
            </button>
            <div className="relative">
              <button className="text-gray-700 hover:text-primary-color transition">
                <ShoppingCartOutlinedIcon />
                <span className="absolute -top-2 -right-2 bg-primary-color text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <nav className="flex">
            <a href="#" className="mr-6 text-sm border-b-2 border-primary-color font-medium text-primary-color pb-2">
              Home
            </a>
            <a href="#" className="mr-6 text-sm text-gray-700 hover:text-primary-color transition pb-2">
              Produtos
            </a>
            <a href="#" className="mr-6 text-sm text-gray-700 hover:text-primary-color transition pb-2">
              Categorias
            </a>
            <a href="#" className="mr-6 text-sm text-gray-700 hover:text-primary-color transition pb-2">
              Meus Pedidos
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}