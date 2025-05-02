import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from '../assets/images/logo-footer.svg';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white-color py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <div className="flex items-center mb-6">
              <img
                src={logo}
                alt="Logo"
                className="h-[42] w-[104] mr-2"
              />
            </div>
            <p className="text-light-gray-color mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white-color hover:text-light-gray-2-color transition" aria-label="Facebook">
                <FacebookRoundedIcon />
              </a>
              <a href="#" className="text-white-color hover:text-light-gray-2-color transition" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="text-white-color hover:text-light-gray-2-color transition" aria-label="Twitter">
                <TwitterIcon />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-white-color text-lg font-medium mb-6">Informação</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-light-gray-color hover:text-white-color transition">Sobre Drip Store</a>
              </li>
              <li>
                <a href="#" className="text-light-gray-color hover:text-white-color transition">Segurança</a>
              </li>
              <li>
                <a href="#" className="text-light-gray-color hover:text-white-color transition">Wishlist</a>
              </li>
              <li>
                <a href="#" className="text-light-gray-color hover:text-white-color transition">Blog</a>
              </li>
              <li>
                <a href="#" className="text-light-gray-color hover:text-white-color transition">Trabalhe conosco</a>
              </li>
              <li>
                <a href="#" className="text-light-gray-color hover:text-white-color transition">Meus Pedidos</a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white-color text-lg font-medium mb-6">Categorias</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-light-gray-color hover:text-white-color transition">Camisetas</a>
              </li>
              <li>
                <a href="#" className="text-light-gray-color hover:text-white-color transition">Calças</a>
              </li>
              <li>
                <a href="#" className="text-light-gray-color hover:text-white-color transition">Bonés</a>
              </li>
              <li>
                <a href="#" className="text-light-gray-color hover:text-white-color transition">Headphones</a>
              </li>
              <li>
                <a href="#" className="text-light-gray-color hover:text-white-color transition">Tênis</a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white-color text-lg font-medium mb-6">Contato</h4>
            <address className="not-italic text-light-gray-color space-y-4">
              <p>
                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
              </p>
              <p>(85) 3051-3411</p>
            </address>
          </div>
        </div>

        <div className="border-t border-dark-gray-color mt-12 pt-8">
          <p className="text-light-gray-color text-center">
            © 2022 Digital College
          </p>
        </div>
      </div>
    </footer>
  );
}