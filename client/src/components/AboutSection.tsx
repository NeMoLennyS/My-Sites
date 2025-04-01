import { Award, Book, Heart, Medal } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import valeriyaIvanovaImage from "../assets/valeriya-ivanova.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img 
              src={valeriyaIvanovaImage}
              alt="Валерия Иванова - инструктор йоги" 
              className="rounded-lg shadow-md max-w-full h-auto object-cover"
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="font-['Playfair_Display'] text-[#8CA58C] text-3xl md:text-4xl mb-6">О Валерии Ивановой</h2>
            <p className="text-[#6D6875] mb-4">Меня зовут Валерия, и я сертифицированный инструктор йоги с более чем 10-летним опытом. Моя практика началась как способ справиться с повседневным стрессом, но быстро превратилась в глубокую страсть и образ жизни.</p>
            <p className="text-[#6D6875] mb-4">Я обучалась у мастеров в России и Индии, где углубила свои знания различных стилей йоги, включая Хатха, Виньяса и Аштанга. Моя философия обучения сочетает традиционные техники с современными подходами к здоровью и благополучию.</p>
            <p className="text-[#6D6875] mb-8">В студии "Йога Ганеша" мы создали пространство, где каждый может найти свой путь к внутренней гармонии независимо от возраста, гибкости или опыта.</p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="text-[#D17B49] mr-4 mt-1">
                  <Medal size={20} />
                </div>
                <div>
                  <h3 className="text-[#8CA58C] font-medium">RYT 500+</h3>
                  <p className="text-sm text-[#6D6875]">Международная сертификация</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#D17B49] mr-4 mt-1">
                  <Book size={20} />
                </div>
                <div>
                  <h3 className="text-[#8CA58C] font-medium">Постоянное обучение</h3>
                  <p className="text-sm text-[#6D6875]">Ежегодные семинары</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#D17B49] mr-4 mt-1">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="text-[#8CA58C] font-medium">Терапевтическая йога</h3>
                  <p className="text-sm text-[#6D6875]">Специализация</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#D17B49] mr-4 mt-1">
                  <Heart size={20} />
                </div>
                <div>
                  <h3 className="text-[#8CA58C] font-medium">Индивидуальный подход</h3>
                  <p className="text-sm text-[#6D6875]">К каждому ученику</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://www.instagram.com/yogavaleriyaivanova73/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#614C67] hover:text-[#483A4D] transition duration-300"
            >
              <FaInstagram className="mr-2" size={20} /> Подписывайтесь на меня в Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
