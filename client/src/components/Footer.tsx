import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaInstagram, FaVk, FaTelegram, FaWhatsapp } from "react-icons/fa";
import ganeshaLogo from "../assets/ganesha.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#8CA58C] text-[#F7F3E9] py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#F7F3E9] mr-3">
                <img src={ganeshaLogo} alt="Ганеша логотип" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl">Йога Ганеша</h3>
            </div>
            <p className="mb-4 text-[#F7F3E9] text-opacity-90">Место гармонии и спокойствия, где каждый может найти свой путь к физическому и духовному благополучию.</p>
            <div className="flex space-x-3">
              <a 
                href="https://www.instagram.com/yogavaleriyaivanova73/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#F7F3E9] hover:text-white transition duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://l.instagram.com/?u=https%3A%2F%2Ft.me%2F%2Bdf-HxKbSdOAwY2Y6%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAabZlZc9pfGxT3dsMQcUNkNOEwPrl6LCObDGK6z-J_bpFm4esB5b38jX3Jw_aem_pBsxktdUosra4AlokTpGeA&e=AT3tLf4uM3Yy7Hv5tj6SQ9yeFvjgGSuaxLTQYZ9sPoB4j_EBJd__Hgn7BfW11OUNI7zU78CjRh50XuIBjg04aPv8gcdy92vNpC_6nwQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#F7F3E9] hover:text-white transition duration-300"
              >
                <FaTelegram size={20} />
              </a>
              <a 
                href="https://wa.me/79089828222" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#F7F3E9] hover:text-white transition duration-300"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-['Playfair_Display'] text-xl mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li><a href="#main" className="text-[#F7F3E9] text-opacity-90 hover:text-white transition duration-300">Главная</a></li>
              <li><a href="#about" className="text-[#F7F3E9] text-opacity-90 hover:text-white transition duration-300">О нас</a></li>
              <li><a href="#classes" className="text-[#F7F3E9] text-opacity-90 hover:text-white transition duration-300">Занятия</a></li>
              <li><a href="#schedule" className="text-[#F7F3E9] text-opacity-90 hover:text-white transition duration-300">Расписание</a></li>
              <li><a href="#gallery" className="text-[#F7F3E9] text-opacity-90 hover:text-white transition duration-300">Галерея</a></li>
              <li><a href="#contact" className="text-[#F7F3E9] text-opacity-90 hover:text-white transition duration-300">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-['Playfair_Display'] text-xl mb-4">Занятия</h3>
            <ul className="space-y-2">
              <li><a href="#classes" className="text-[#F7F3E9] text-opacity-90 hover:text-white transition duration-300">Хатха йога</a></li>
              <li><a href="#classes" className="text-[#F7F3E9] text-opacity-90 hover:text-white transition duration-300">Виньяса флоу</a></li>
              <li><a href="#classes" className="text-[#F7F3E9] text-opacity-90 hover:text-white transition duration-300">Аштанга йога</a></li>
              <li><a href="#classes" className="text-[#F7F3E9] text-opacity-90 hover:text-white transition duration-300">Йога-нидра</a></li>
              <li><a href="#classes" className="text-[#F7F3E9] text-opacity-90 hover:text-white transition duration-300">Йога для беременных</a></li>
              <li><a href="#classes" className="text-[#F7F3E9] text-opacity-90 hover:text-white transition duration-300">Восстановительная йога</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-['Playfair_Display'] text-xl mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-3" />
                <span className="text-[#F7F3E9] text-opacity-90">Русская 65Б строение 2, город Владивосток, 690105</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mt-1 mr-3" />
                <span className="text-[#F7F3E9] text-opacity-90">+7 908 982-82-22</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mt-1 mr-3" />
                <span className="text-[#F7F3E9] text-opacity-90">valeriya-ivanova-73@mail.ru</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mt-1 mr-3" />
                <span className="text-[#F7F3E9] text-opacity-90">Пн: 11:00 - 20:00<br />Вт-Чт: 7:00 - 21:00<br />Пт: 11:00 - 20:00<br />Сб: 8:45 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#F7F3E9] border-opacity-20 mt-12 pt-8 text-center">
          <p className="text-[#F7F3E9] text-opacity-90">&copy; {new Date().getFullYear()} Йога Ганеша. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
