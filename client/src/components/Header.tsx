import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import ganeshaLogo from "../assets/ganesha.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`bg-[#F7F3E9] sticky top-0 z-50 ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="#" className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
            <img src={ganeshaLogo} alt="Ганеша логотип" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-[#8CA58C] font-['Playfair_Display'] text-2xl font-semibold">Йога Ганеша</h1>
            <p className="text-[#6D6875] text-xs">Студия йоги Валерии Ивановой</p>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#main" className="text-[#6D6875] hover:text-[#8CA58C] transition duration-300">Главная</a></li>
            <li><a href="#about" className="text-[#6D6875] hover:text-[#8CA58C] transition duration-300">О нас</a></li>
            <li><a href="#classes" className="text-[#6D6875] hover:text-[#8CA58C] transition duration-300">Занятия</a></li>
            <li><a href="#schedule" className="text-[#6D6875] hover:text-[#8CA58C] transition duration-300">Расписание</a></li>
            <li><a href="#course" className="text-[#D17B49] hover:text-[#B05A2A] font-medium transition duration-300">Наш курс</a></li>
            <li><a href="#subscriptions" className="text-[#6D6875] hover:text-[#8CA58C] transition duration-300">Абонементы</a></li>
            <li><a href="#gallery" className="text-[#6D6875] hover:text-[#8CA58C] transition duration-300">Галерея</a></li>
            <li><a href="#contact" className="text-[#6D6875] hover:text-[#8CA58C] transition duration-300">Контакты</a></li>
          </ul>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-[#8CA58C] text-2xl"
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-[#F7F3E9] ${isMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="container mx-auto px-4 py-4">
          <ul className="space-y-4">
            <li><a href="#main" onClick={closeMenu} className="block text-[#6D6875] hover:text-[#8CA58C] py-2 transition duration-300">Главная</a></li>
            <li><a href="#about" onClick={closeMenu} className="block text-[#6D6875] hover:text-[#8CA58C] py-2 transition duration-300">О нас</a></li>
            <li><a href="#classes" onClick={closeMenu} className="block text-[#6D6875] hover:text-[#8CA58C] py-2 transition duration-300">Занятия</a></li>
            <li><a href="#schedule" onClick={closeMenu} className="block text-[#6D6875] hover:text-[#8CA58C] py-2 transition duration-300">Расписание</a></li>
            <li><a href="#course" onClick={closeMenu} className="block text-[#D17B49] hover:text-[#B05A2A] font-medium py-2 transition duration-300">Наш курс</a></li>
            <li><a href="#subscriptions" onClick={closeMenu} className="block text-[#6D6875] hover:text-[#8CA58C] py-2 transition duration-300">Абонементы</a></li>
            <li><a href="#gallery" onClick={closeMenu} className="block text-[#6D6875] hover:text-[#8CA58C] py-2 transition duration-300">Галерея</a></li>
            <li><a href="#contact" onClick={closeMenu} className="block text-[#6D6875] hover:text-[#8CA58C] py-2 transition duration-300">Контакты</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
